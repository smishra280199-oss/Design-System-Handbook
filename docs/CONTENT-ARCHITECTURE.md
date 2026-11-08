# Content architecture — iteration 1 (Parts 01 & 02)

Numbering: `PP.C` = part.chapter; sections are `C.n`. Figures are numbered per chapter.

## Front matter
- Cover
- Colophon (author, edition, licence, evidence labels)
- How to read this playbook (reader routes by role)
- Contents

## PART 01 — Understanding design systems: does your company actually need one?

| # | Chapter | Answers | Key figures & artefacts |
|---|---|---|---|
| 01 | **What a design system actually is** | Definition; UI kit vs component library vs style guide vs design system; anatomy; how it connects design/eng/product/business; why it matters more as you scale | The four artefacts compared (table + nested diagram); anatomy stack; "N teams × M screens" duplication curve |
| 02 | **Who needs one — and when** | Does every company need one; enterprise-only?; PMF; 5–6 designers; UI kit vs full system; outgrowing signals; when it's premature | Maturity model (5 stages); decision tree; signals checklist; four scenarios |
| 03 | **What it's worth** | Velocity, engineering efficiency, reuse, quality, accessibility, maintenance, collaboration, time-to-market, trust | Evidence ledger (documented vs illustrative); KPI table with formulas; outcome map |
| 04 | **The economics** | Cost drivers, timelines, roles, dedicated team vs product team, maintenance, ROI, start small | Cost-driver matrix; 3 budget scenarios in FTE-months; ROI formula + worked example; phased investment ladder |
| 05 | **Operating models** | Centralised/federated/hybrid; ownership; design–eng collaboration; contribution; governance; versioning; docs & adoption; health; debt | Model comparison; RACI; contribution flow; semver table; health scorecard |

## PART 02 — Building the foundations

| # | Chapter | Answers | Key figures & artefacts |
|---|---|---|---|
| 06 | **Foundations architecture** | What foundations are; why they matter; foundation → token → code | The decision → token → code pipeline; blast-radius diagram |
| 07 | **Colour** | Colour models (RGB/HEX/HSL/HSV/OKLCH); perceptual vs not; L/C/H; palette building; ramps; neutrals; chroma; accessibility & contrast; primitive/semantic/component/brand tokens; states; surfaces; themes (light/dark, brand, multi-brand, white label); how many colours; gradients/overlays/transparency | HSL vs OKLCH lightness proof; full 6-ramp palette with OKLCH + hex + contrast; lightness curve chart; contrast pairing matrix; 3-tier token hierarchy; semantic token table (light/dark, computed contrast); theme switch diagram; state layers |
| 08 | **Typography** | Typeface selection; families & weights; scale architecture; modular scales; size & line-height; tracking; hierarchy; responsive/fluid type; roles; tokens; variable fonts; accessibility; product-category differences | Modular scale comparison; full product type scale specimen; line-height rule; fluid type clamp; category matrix (SaaS/enterprise/mobile/desktop/web/dashboards) |
| 09 | **Spacing** | Why; base unit; scales; density; compact vs comfortable; vertical/horizontal; component vs section spacing; responsive; tokens; mistakes | Inconsistent vs systematic before/after; spacing scale ruler; proximity diagram; density modes; token table |
| 10 | **Grid & layout** | Columns, gutters, margins, containers; responsive grids; breakpoints; fluid vs fixed; desktop/mobile; dashboard composition; content width; alignment; enterprise grids | Grid anatomy; breakpoint table; responsive reflow; dashboard composition; app-shell regions |
| 11 | **How foundations work together** | Decisions → tokens → components → patterns → production | One button traced end-to-end through all five layers; foundations checklist |

## Back matter
- References (numbered, linked)
- About the author & Layer One; the ten rules
- What's next (Parts 03+ roadmap)
