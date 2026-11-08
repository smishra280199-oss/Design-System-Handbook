// Assembles the handbook into dist/index.html.
//
//   node scripts/build.mjs
//
// Authoring conventions (see README):
//   <!-- @include components/x.html -->   inline a partial
//   <!-- @fig name [arg] -->              data-driven figure (scripts/figures.mjs)
//   [[c:key]] / [[c:a,b]]                 citation → numbered, linked to References
//   [[std]] [[doc]] [[prac]] [[ill]]      evidence labels
//   <!-- @toc --> / <!-- @references -->  generated pages
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync, existsSync } from 'node:fs';
import { renderFigure } from './figures.mjs';

const root = new URL('..', import.meta.url).pathname;
const read = (p) => readFileSync(root + p, 'utf8');
const book = JSON.parse(read('book.json'));
const refs = JSON.parse(read('data/references.json'));

// 1. Concatenate sources in manifest order, resolving includes.
const include = (html, depth = 0) => html.replace(/<!--\s*@include\s+(\S+)\s*-->/g, (_, p) => {
  if (depth > 4) throw new Error('include depth');
  return include(read(p), depth + 1);
});
let body = book.order.map((p) => {
  if (p.startsWith('@')) return `<!-- ${p} -->`;
  if (!existsSync(root + p)) { console.warn('Missing (skipped):', p); return ''; }
  return include(read(p));
}).join('\n');

// 2. Figures.
body = body.replace(/<!--\s*@fig\s+([\w-]+)(?:\s+([\w.-]+))?\s*-->/g, (_, n, a) => renderFigure(n, a));

// 3. Evidence labels.
const EV = { std: 'Standard', doc: 'Documented', prac: 'Practice', ill: 'Illustrative' };
body = body.replace(/\[\[(std|doc|prac|ill)\]\]/g, (_, k) => `<span class="ev ev-${k}">${EV[k]}</span>`);

// 4. Citations, numbered by first appearance.
const order = [];
body = body.replace(/\[\[c:([\w,-]+)\]\]/g, (_, keys) => keys.split(',').map((k) => {
  if (!refs[k]) throw new Error(`Unknown reference: ${k}`);
  let n = order.indexOf(k) + 1;
  if (!n) { order.push(k); n = order.length; }
  return `<sup class="cite"><a href="#ref-${k}" title="${refs[k].title.replace(/"/g, '&quot;')}">${n}</a></sup>`;
}).join(''));

// 5. Figure numbering per chapter, and collect chapter/section structure.
const chapters = [];
body = body.replace(/<section class="(chapter[^"]*)"([^>]*)>([\s\S]*?)<!-- \/chapter -->/g, (m, cls, attrs, inner) => {
  const get = (k) => (attrs.match(new RegExp(`data-${k}="([^"]*)"`)) || [])[1];
  const id = (attrs.match(/id="([^"]+)"/) || [])[1];
  const ch = { id, num: get('num'), part: get('part'), title: get('title'), short: get('short') || get('title'), sections: [] };
  let f = 0;
  inner = inner.replace(/<figcaption>/g, () => `<figcaption><span class="fig-num">Fig ${Number(ch.num)}.${++f}</span>`);
  inner.replace(/<section class="sec[^"]*" id="([^"]+)">\s*<h2>(?:<span class="sec-num">[^<]*<\/span>)?\s*([\s\S]*?)<\/h2>/g, (_, sid, t) => {
    ch.sections.push({ id: sid, title: t.replace(/<[^>]+>/g, '').trim() });
  });
  chapters.push(ch);
  return `<section class="${cls}"${attrs}>${inner}<!-- /chapter -->`;
});
const parts = book.parts;

// 5b. Book furniture for numbered chapters: big opener number, "In this
//     chapter" list on the opener page, and an "Up next" line at the end.
const numbered = chapters.filter((c) => /^\d+$/.test(c.num));
body = body.replace(/(<section class="chapter[^"]*" id="(ch\d+)"[^>]*>)([\s\S]*?)<!-- \/chapter -->/g, (m, open, id, inner) => {
  const i = numbered.findIndex((c) => c.id === id);
  if (i < 0) return m;
  const ch = numbered[i], next = numbered[i + 1];
  inner = inner.replace(/(<p class="ch-num">[^<]*<\/p>)/, `$1<span class="ch-big" aria-hidden="true">${ch.num}</span>`);
  const list = `<div class="in-chapter-wrap"><p class="in-chapter-h">In this chapter</p><ol class="in-chapter">${ch.sections.map((s) => `<li><span>${s.id.replace(/^ch(\d+)-(\d+)$/, (_, a, b) => `${a}.${b}`)}</span>${s.title}</li>`).join('')}</ol></div>`;
  inner = inner.replace(/<\/header>/, `${list}</header>`);
  const nextLine = next
    ? (next.part !== ch.part
      ? `<p class="up-next">Up next →<b>Part ${next.part}: ${parts.find((p) => p.num === next.part)?.short || ''}</b></p>`
      : `<p class="up-next">Up next →<b>Chapter ${next.num}: ${next.title}</b></p>`)
    : '';
  inner = inner.replace(/<\/div>\s*$/, `${nextLine}</div>`);
  return `${open}${inner}<!-- /chapter -->`;
});

// 6. Contents page.
const toc = `<section class="front toc-page" id="contents"><p class="eyebrow">Contents</p><h2 class="toc-title" style="font-size:44px;letter-spacing:-0.035em">What's inside</h2>
${parts.map((p) => `<div class="toc-part"><span class="tp-num">Part ${p.num}</span><span class="tp-title">${p.title}</span></div>
<ol class="toc-list">${chapters.filter((c) => c.part === p.num).map((c) => `<li><span class="tn">${c.num}</span><a href="#${c.id}">${c.title}</a><span class="tpg" data-href="#${c.id}"></span><span class="tsub">${c.sections.map((s) => s.title).join(' · ')}</span></li>`).join('')}</ol>`).join('')}
<div class="toc-part"><span class="tp-num">Back</span><span class="tp-title">Reference</span></div>
<ol class="toc-list"><li><span class="tn">—</span><a href="#references">References</a><span class="tpg" data-href="#references"></span></li><li><span class="tn">—</span><a href="#about">About Layer One &amp; the author</a><span class="tpg" data-href="#about"></span></li></ol></section>`;
body = body.replace('<!-- @toc -->', toc);

// 7. References page (only cited works, in citation order).
const refList = order.map((k, i) => {
  const r = refs[k];
  return `<li id="ref-${k}"><span class="rn">${i + 1}</span><span><span class="rt">${r.title}</span>. ${r.author ? r.author + '. ' : ''}${r.publisher ? r.publisher + ', ' : ''}${r.year || 'n.d.'}.${r.url ? `<a class="ru" href="${r.url}">${r.url.replace(/^https?:\/\//, '')}</a>` : ''}${r.note ? `<span class="rnote">${r.note}</span>` : ''}</span></li>`;
}).join('');
body = body.replace('<!-- @references -->', `<section class="chapter" id="references" data-num="R" data-part="back" data-title="References"><header class="chapter-opener"><p class="ch-num">Back matter</p><h1>References</h1><p class="dek">Every statistic and normative claim in this playbook links here. Accessed November 2026. Where a source is vendor-published or small-sample, the caveat is stated where it is cited.</p></header><ol class="refs">${refList}</ol><!-- /chapter --></section>`);

// 8. Sidebar navigation.
const nav = `${parts.map((p) => `<p class="nav-part">Part ${p.num} — ${p.short}</p><ul class="nav-list">${chapters.filter((c) => c.part === p.num).map((c) => `<li><a href="#${c.id}" data-nav="${c.id}"><span>${c.num}</span>${c.short}</a><ul class="nav-sub">${c.sections.map((s) => `<li><a href="#${s.id}" data-nav="${s.id}">${s.title}</a></li>`).join('')}</ul></li>`).join('')}</ul>`).join('')}
<p class="nav-part">Back matter</p><ul class="nav-list"><li><a href="#references" data-nav="references"><span>R</span>References</a></li><li><a href="#about" data-nav="about"><span>A</span>About</a></li></ul>`;

// 9. Running heads: one named page per chapter.
const partTitle = { ...Object.fromEntries(parts.map((p) => [p.num, `Part ${p.num} — ${p.short}`])), back: 'Back matter' };
const heads = [...chapters, { id: 'references', num: 'R', part: 'back', short: 'References' }].map((c) => `#${c.id}{page:${c.id}}@page ${c.id}{@top-left{content:"${partTitle[c.part] || 'Layer One'}";font:400 7pt "JetBrains Mono",monospace;color:#7a808a;vertical-align:bottom;padding-bottom:4mm}@top-right{content:"${/^\d/.test(c.num) ? c.num + '  ' + c.short : c.short}";font:500 7pt "JetBrains Mono",monospace;color:#0b0d12;vertical-align:bottom;padding-bottom:4mm}}`).join('\n');

// 10. Shell.
const shell = read('components/shell.html')
  .replace('{{nav}}', nav)
  .replace('{{body}}', body)
  .replace('{{running_heads}}', heads)
  .replace(/\{\{version\}\}/g, book.edition)
  .replace(/\{\{pdf\}\}/g, book.pdf);

if (existsSync(root + 'dist')) rmSync(root + 'dist', { recursive: true });
mkdirSync(root + 'dist', { recursive: true });
writeFileSync(root + 'dist/index.html', shell);
cpSync(root + 'styles', root + 'dist/styles', { recursive: true });
cpSync(root + 'assets', root + 'dist/assets', { recursive: true });
if (existsSync(root + 'exports/' + book.pdf)) cpSync(root + 'exports/' + book.pdf, root + 'dist/' + book.pdf);

const unresolved = shell.match(/\[\[[^\]]+\]\]|<!--\s*@\w+[^>]*-->/g);
if (unresolved) console.warn('Unresolved directives:', unresolved);
console.log(`Built dist/index.html — ${chapters.length} chapters, ${order.length} references, ${(shell.length / 1024).toFixed(0)} KB`);
