// Renders dist/index.html to a print-ready A4 PDF with Chromium.
//
//   node scripts/export-pdf.mjs
//
// Page size, margins, running heads and folios come from styles/print.css
// (CSS Paged Media). Because every section starts on a new page, a section
// that overflows by a few lines would leave an almost-empty page. This script
// renders, finds those "spill pages", tightens just the affected sections
// (fit-1, then fit-2), and renders again. A final pass fills in the page
// numbers on the contents page (Chromium has no target-counter()).
import { createRequire } from 'node:module';
import { copyFileSync, mkdirSync, statSync, readFileSync, readdirSync, rmSync, mkdtempSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require('/opt/node-tools/node_modules/playwright')); }

const root = new URL('..', import.meta.url).pathname;
const book = JSON.parse(readFileSync(root + 'book.json', 'utf8'));
const out = root + 'exports/' + book.pdf;
mkdirSync(root + 'exports', { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(root + 'dist/index.html').href, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });
await page.evaluate(() => document.fonts.ready);
const pdfOptions = { path: out, preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false, tagged: true, outline: true };

const pageTexts = () => execFileSync('pdftotext', ['-layout', out, '-'], { encoding: 'utf8', maxBuffer: 64e6 }).split('\f');

// Lowest inked row on each page (0–1), ignoring running head and folio.
function contentBottoms() {
  const dir = mkdtempSync(join(tmpdir(), 'l1pdf-'));
  execFileSync('pdftoppm', ['-gray', '-r', '18', out, join(dir, 'p')]);
  const files = readdirSync(dir).filter((f) => f.endsWith('.pgm')).sort();
  const res = files.map((f) => {
    const buf = readFileSync(join(dir, f));
    // P5 header: "P5\n<w> <h>\n255\n"
    let i = 0, fields = [];
    while (fields.length < 4) { let s = ''; while (/\s/.test(String.fromCharCode(buf[i]))) i++; while (!/\s/.test(String.fromCharCode(buf[i]))) s += String.fromCharCode(buf[i++]); fields.push(s); }
    i++;
    const w = +fields[1], h = +fields[2];
    let bottom = 0;
    for (let y = Math.floor(h * 0.07); y < Math.floor(h * 0.9); y++) {
      for (let x = Math.floor(w * 0.08); x < Math.floor(w * 0.92); x++) if (buf[i + y * w + x] < 200) { bottom = y; break; }
    }
    return bottom / h;
  });
  rmSync(dir, { recursive: true });
  return res;
}

// Map each section id to the page it starts on, and collect every "forced
// page start" (sections, chapter openers, part openers, back matter).
function structure(texts) {
  const secStart = {}, starts = new Set();
  texts.forEach((t, i) => {
    const head = t.split('\n').slice(0, 9).join('\n');
    const m = head.match(/^\s*(\d{2})\.(\d{1,2})\s*$/m);
    if (m) { const id = `ch${m[1]}-${Number(m[2])}`; if (!(id in secStart)) { secStart[id] = i; starts.add(i); } }
    if (/^\s*CHAPTER\s+\d{2}\s*$/m.test(head) || /PART\s+0\d\s+OF\s+0\d/i.test(head) || /^\s*BACK MATTER\s*$/m.test(head)) starts.add(i);
  });
  return { secStart, starts: [...starts].sort((a, b) => a - b) };
}

const fitLevel = {};
const follow = new Set();
// Which section comes next in the same chapter (null for the last one).
const nextInChapter = await page.evaluate(() => Object.fromEntries([...document.querySelectorAll('section.sec')].map((s) => {
  let n = s.nextElementSibling; while (n && !(n.matches && n.matches('section.sec'))) n = n.nextElementSibling;
  return [s.id, n ? n.id : null];
})));
for (let pass = 0; pass < 7; pass++) {
  await page.evaluate(([lv, fl]) => {
    document.querySelectorAll('section.sec').forEach((s) => { s.classList.remove('fit-1', 'fit-2', 'follow'); const l = lv[s.id]; if (l) s.classList.add('fit-' + l); if (fl.includes(s.id)) s.classList.add('follow'); });
  }, [fitLevel, [...follow]]);
  await page.pdf(pdfOptions);
  const texts = pageTexts(), bottoms = contentBottoms();
  const { secStart, starts } = structure(texts);
  const spills = [];
  for (const [id, s] of Object.entries(secStart)) {
    const next = starts.find((p) => p > s) ?? texts.length;
    const last = next - 1;
    if (last > s && bottoms[last] < 0.42) spills.push({ id, page: last + 1, fill: bottoms[last].toFixed(2) });
  }
  console.log(`Pass ${pass + 1}: ${texts.length} pages, ${spills.length} spill pages${spills.length ? ' → ' + spills.map((s) => `${s.id}@${s.page}(${s.fill})`).join(' ') : ''}`);
  let changed = false;
  for (const sp of spills) {
    const lv = fitLevel[sp.id] || 0;
    if (lv < 2) { fitLevel[sp.id] = lv + 1; changed = true; }
    else if (nextInChapter[sp.id] && !follow.has(nextInChapter[sp.id])) { follow.add(nextInChapter[sp.id]); changed = true; }
  }
  if (!changed) break;
}

// Contents page numbers.
const texts = pageTexts();
const targets = await page.$$eval('.tpg[data-href]', (els) => els.map((e) => e.dataset.href.slice(1)));
const find = (re, from = 0) => { for (let i = from; i < texts.length; i++) if (re.test(texts[i])) return i; return -1; };
const map = {};
let last = 3;
for (const id of targets) {
  let idx = -1;
  const ch = id.match(/^ch(\d+)$/);
  if (ch) idx = find(new RegExp(`^\\s*CHAPTER\\s+${ch[1]}\\s*$`, 'm'), last);
  else if (id === 'references') idx = find(/back matter[\s\S]*references/i, last);
  else if (id === 'about') idx = find(/about layer one\s+and the author/i, last);
  if (idx >= 0) { map[id] = String(idx + 1); last = idx; }
}
await page.evaluate((m) => document.querySelectorAll('.tpg[data-href]').forEach((e) => { e.textContent = m[e.dataset.href.slice(1)] || ''; }), map);
await page.pdf(pdfOptions);
await browser.close();
copyFileSync(out, root + 'dist/' + book.pdf);
console.log('Fit levels:', JSON.stringify(fitLevel));
console.log('Sections following on:', [...follow].join(' '));
console.log('Contents pages:', JSON.stringify(map));
console.log(`Exported ${out} (${(statSync(out).size / 1024 / 1024).toFixed(1)} MB)`);
