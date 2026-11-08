# The Design Systems Playbook — Layer One

A free, research-backed handbook on design systems by **Aniket Pandey**, published by
**[Layer One](https://www.layerone.co.in/)**. Edition 0.1 covers:

- **Part 01 — Understanding design systems:** what a design system is, who needs one, what it's worth,
  the economics, and operating models.
- **Part 02 — Building the foundations:** foundations architecture, colour (OKLCH), typography,
  spacing, grid and layout, and how they work together.

The publication is authored in HTML/CSS and ships in two forms:

| Output | Path |
|---|---|
| Browser edition (responsive, light/dark, chapter navigation) | `dist/index.html` |
| Print-ready A4 PDF (running heads, folios, contents page numbers) | `exports/layer-one-design-systems-playbook.pdf` |

## Build

Requires Node 18+ and Chromium via Playwright (for the PDF), plus `pdftotext` (poppler-utils)
for the contents-page numbering pass.

```bash
npm install
npm run all      # data → build → pdf
npm run serve    # preview dist/ in a browser
```

Individual steps:

| Command | What it does |
|---|---|
| `npm run data` | Computes every colour value, contrast ratio, type scale and economics figure into `/data` |
| `npm run build` | Assembles chapters, components and figures into `dist/index.html` |
| `npm run pdf` | Renders `dist/` to an A4 PDF with Chromium, two passes (the second fills in contents page numbers) |

## Structure

```
book.json            Manifest: chapter order, parts, edition, PDF name
chapters/            Chapter content (one HTML partial per chapter, plus part openers)
components/          Shell, cover, colophon, how-to-read, about, cover artwork
styles/              tokens · base · components · figures · cover · screen · print
assets/              Logo mark and self-hosted fonts (Schibsted Grotesk, JetBrains Mono, OFL)
data/                Generated data (palette, contrast, type scales, economics) + references.json
scripts/             generate-data.mjs · figures.mjs · build.mjs · export-pdf.mjs
docs/                EDITORIAL.md (editorial direction) · CONTENT-ARCHITECTURE.md
dist/                Built browser edition (generated)
exports/             Generated PDF
```

## Authoring conventions

Chapters are plain HTML with a few directives the build resolves:

| Directive | Result |
|---|---|
| `<!-- @include components/x.html -->` | Inline a partial |
| `<!-- @fig name [arg] -->` | Insert a data-driven figure from `scripts/figures.mjs` |
| `[[c:key]]` or `[[c:a,b]]` | Numbered citation linked to the References page (keys in `data/references.json`) |
| `[[std]]` `[[doc]]` `[[prac]]` `[[ill]]` | Evidence labels: Standard, Documented, Practice, Illustrative |

A chapter is a `<section class="chapter" id="chNN" data-part data-num data-title data-short>`
ending in `<!-- /chapter --></section>`. Sections are `<section class="sec" id="chNN-n">` with an
`<h2>`. The build numbers figures, builds the sidebar and contents from these, and gives each chapter
its own named print page for running heads.

## Editorial rules

See [`docs/EDITORIAL.md`](docs/EDITORIAL.md). In short: no statistic without a citation, every
small-sample or vendor study carries its caveat, worked examples use the fictional product
**Ledgerly**, and costs are expressed in FTE-months with explicit, adjustable assumptions
(`scripts/generate-data.mjs`, section 7).
