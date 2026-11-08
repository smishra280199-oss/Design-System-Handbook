// Renders dist/index.html to a print-ready A4 PDF with Chromium.
//
//   node scripts/export-pdf.mjs
//
// Page size, margins, running heads and folios all come from styles/print.css
// (CSS Paged Media), so what you see in the browser's print preview is what
// you get here.
import { createRequire } from 'node:module';
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require('/opt/node-tools/node_modules/playwright')); }

const root = new URL('..', import.meta.url).pathname;
const book = JSON.parse((await import('node:fs')).readFileSync(root + 'book.json', 'utf8'));
const out = root + 'exports/' + book.pdf;
mkdirSync(root + 'exports', { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(root + 'dist/index.html').href, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });
await page.evaluate(() => document.fonts.ready);
const pdfOptions = { path: out, preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false, tagged: true, outline: true };

// Pass 1: render, then find the page each contents entry lands on.
// (Chromium does not support target-counter(), so we resolve page numbers ourselves.)
await page.pdf(pdfOptions);
const pages = execFileSync('pdftotext', ['-layout', out, '-'], { encoding: 'utf8', maxBuffer: 64e6 }).split('\f');
const targets = await page.$$eval('.tpg[data-href]', (els) => els.map((e) => e.dataset.href.slice(1)));
const find = (re, from = 0) => { for (let i = from; i < pages.length; i++) if (re.test(pages[i])) return i; return -1; };
const map = {};
let last = 3;
for (const id of targets) {
  let idx = -1;
  const ch = id.match(/^ch(\d+)$/);
  if (ch) idx = find(new RegExp(`^CHAPTER\\s+${ch[1]}\\s*$`, 'm'), last);
  else if (id === 'references') idx = find(/back matter[\s\S]*references/i, last);
  else if (id === 'about') idx = find(/about layer one\s+and the author/i, last);
  if (idx >= 0) { map[id] = String(idx + 1).padStart(2, '0'); last = idx; }
}
await page.evaluate((m) => document.querySelectorAll('.tpg[data-href]').forEach((e) => { e.textContent = m[e.dataset.href.slice(1)] || ''; }), map);
// Pass 2: final PDF with page numbers in the contents.
await page.pdf(pdfOptions);
console.log('Contents pages:', JSON.stringify(map));
await browser.close();
copyFileSync(out, root + 'dist/' + book.pdf);
console.log(`Exported ${out} (${(statSync(out).size / 1024 / 1024).toFixed(1)} MB)`);
