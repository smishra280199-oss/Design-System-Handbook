# Content architecture — edition 1.0 (complete, Parts 01–05)

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
| 05 | **Running a design system day to day** (rewritten in 0.2 with an operational focus) | Centralised/federated/hybrid; ownership; design–eng collaboration; contribution; governance; versioning; docs & adoption; health; debt | Model comparison; RACI; contribution flow; semver table; health scorecard |

## PART 02 — Building the foundations

| # | Chapter | Answers | Key figures & artefacts |
|---|---|---|---|
| 06 | **Foundations architecture** | What foundations are; why they matter; foundation → token → code | The decision → token → code pipeline; blast-radius diagram |
| 07 | **Colour** | Colour models (RGB/HEX/HSL/HSV/OKLCH); perceptual vs not; L/C/H; palette building; ramps; neutrals; chroma; accessibility & contrast; primitive/semantic/component/brand tokens; states; surfaces; themes (light/dark, brand, multi-brand, white label); how many colours; gradients/overlays/transparency | HSL vs OKLCH lightness proof; full 6-ramp palette with OKLCH + hex + contrast; lightness curve chart; contrast pairing matrix; 3-tier token hierarchy; semantic token table (light/dark, computed contrast); theme switch diagram; state layers |
| 08 | **Typography** | Typeface selection; families & weights; scale architecture; modular scales; size & line-height; tracking; hierarchy; responsive/fluid type; roles; tokens; variable fonts; accessibility; product-category differences | Modular scale comparison; full product type scale specimen; line-height rule; fluid type clamp; category matrix (SaaS/enterprise/mobile/desktop/web/dashboards) |
| 09 | **Spacing** | Why; base unit; scales; density; compact vs comfortable; vertical/horizontal; component vs section spacing; responsive; tokens; mistakes | Inconsistent vs systematic before/after; spacing scale ruler; proximity diagram; density modes; token table |
| 10 | **Grid & layout** | Columns, gutters, margins, containers; responsive grids; breakpoints; fluid vs fixed; desktop/mobile; dashboard composition; content width; alignment; enterprise grids | Grid anatomy; breakpoint table; responsive reflow; dashboard composition; app-shell regions |
| 11 | **How foundations work together** | Decisions → tokens → components → patterns → production | One button traced end-to-end through all five layers; foundations checklist |

## PART 03 — Components (new in 0.2)

| # | Chapter | Answers | Key figures & artefacts |
|---|---|---|---|
| 12 | **Components, explained** | What a component is (design + code twins); anatomy; variants/props; states; slots and composition; how many you need | Text-field anatomy; 3×3 button variants; 8-state grid; card with slots; starter set of 32 |
| 13 | **Deciding what to build first** | Interface inventory; counting frequency and pain; ranking; build vs headless vs styled library; saying "not yet"; first-year roadmap | Inventory bar chart; 2×2 priority matrix; build/borrow/buy table; quarterly roadmap |
| 14 | **Designing a component that lasts** | Start from real use; every state and edge; accessibility from the start; words as part of the component; "ready to build"; piloting | Edge-case checklist; accessibility table; content before/after table; ready-to-build checklist |
| 15 | **Building components in code** | Props and APIs in plain words; keeping design and code twins in step; configuration vs composition; no hard-coded values; testing; packaging and releases | Name-matching table; configuration vs composition code; testing table |
| 16 | **A library people can actually use** | Findability; organising the Figma library; documentation template; component life cycle; usage and detach data; handling divergence | Library tree; docs template; five-stage life cycle; divergence options table |

## PART 04 — Component architecture in depth (new in 1.0)

| # | Chapter | Answers |
|---|---|---|
| 17 | **Component complexity** | Four levels (elements, controls, composites, systems); an 8-question scoring rubric; process by level; choosing the simplest component; controlling complexity creep |
| 18 | **Component architecture** | Six layers with downward-only dependencies; primitives; behaviour vs appearance; compound components, slots, render-as, controlled/uncontrolled; file and package structure; dependency maps and ownership |
| 19 | **Props, in depth** | Eight kinds of props and their Figma equivalents; design rules; one-way data flow; documenting props; changing props safely; anti-patterns |
| 20 | **Components and tokens** | Semantic vs component tokens; anatomy-to-token maps; naming grammar; when component tokens are worth it; Figma variables and CSS variables; token audits |
| 21 | **Components as code** | An annotated component; styling approaches; accessibility in code; technology choices; definition of done and review checklist; quality beneath the surface |
| 22 | **A casebook of real situations** | Twelve worked cases: diverging needs, migrations, breaking changes, production bugs, scale limits, saying no |

## PART 05 — Patterns, content and scale (new in 1.0)

| # | Chapter | Answers |
|---|---|---|
| 23 | **Patterns** | Forms, lists and tables, navigation, feedback states; documenting and owning patterns |
| 24 | **Content and language** | Voice and tone, vocabulary, message formulas, inclusive writing, localisation |
| 25 | **Scaling across products, brands and platforms** | Multi-brand, multi-platform, families of systems, governance and funding, legacy |
| 26 | **Tools, automation and AI** | The toolchain, tools by stage, automation priorities, AI uses and cautions |
| 27 | **Your first twelve months** | A four-workstream plan, operating rhythms, master checklist, ten failure modes |

## Back matter
- References (numbered, linked)
- About the author & Layer One; the ten rules
- Where to go from here
