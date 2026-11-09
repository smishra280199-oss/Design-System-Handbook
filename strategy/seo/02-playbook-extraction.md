# Phase 2 — Playbook extraction

Every chapter of *The Design Systems Playbook* (edition 1.1, 38 chapters, six parts) was reviewed
for standalone article potential. Below are **82 article opportunities**, each mapped to the target
query family, the content format and the cluster it would sit in (clusters are defined in
[03-content-architecture.md](03-content-architecture.md)).

Legend: **Format**: G = complete guide / pillar · H = how-to / tutorial · C = comparison ·
D = decision framework · T = template / toolkit · E = explainer · S = scenario / problem-solving ·
A = advanced practitioner piece. **★** = in the first 15 (see [04-article-roadmap.md](04-article-roadmap.md)).

## Part 01 — Understanding design systems (Ch. 01–05)

| # | Article opportunity | Target query family | Format | Cluster | Source |
|---|---|---|---|---|---|
| 1 | ★ What is a design system? A complete guide | what is a design system; design system meaning | G | Fundamentals | Ch. 01 |
| 2 | ★ Design system vs style guide vs component library vs UI kit | design system vs component library / style guide / ui kit | C | Fundamentals | Ch. 01.3 |
| 3 | What's inside a design system: the anatomy, layer by layer | design system components / elements / structure | E | Fundamentals | Ch. 01.4 |
| 4 | Why design systems matter more as you scale | benefits of a design system | E | Fundamentals | Ch. 01.6 |
| 5 | ★ Do you need a design system? A decision guide for startups and scale-ups | do I need a design system; when to build a design system; design system for startups | D | Fundamentals | Ch. 02 |
| 6 | The design system maturity model: five stages | design system maturity model | E/D | Fundamentals | Ch. 02.2 |
| 7 | 10 signs you've outgrown your UI kit | outgrown UI kit; signs you need a design system | S | Fundamentals | Ch. 02.4 |
| 8 | Design system benefits: what's actually been measured | design system benefits; design system statistics | E | Business case | Ch. 03 |
| 9 | Design system KPIs you can baseline this quarter | design system KPIs | T | Measurement | Ch. 03.4 |
| 10 | ★ Design system ROI: an honest model (with break-even by team size) | design system ROI; design system business case | H/T | Business case | Ch. 04.8 |
| 11 | How much does a design system cost? Three realistic budgets | design system cost; design system budget | D | Business case | Ch. 04.5 |
| 12 | Dedicated design system team vs product team ownership | dedicated design system team | C | Operating model | Ch. 04.6 |
| 13 | Why design systems fail after launch (and how to fund the run) | design system maintenance cost | S | Operating model | Ch. 04.7 |
| 14 | Design system team models: centralised, federated and hybrid | centralized vs federated design system | C | Governance | Ch. 05.2 |

## Part 02 — Foundations (Ch. 06–11)

| # | Article opportunity | Target query family | Format | Cluster | Source |
|---|---|---|---|---|---|
| 15 | Design foundations explained: colour, type, spacing, layout | design foundations; design system foundations | E | Foundations | Ch. 06 |
| 16 | ★ Design tokens: the complete guide (primitive, semantic, component) | design tokens; what are design tokens; semantic tokens | G | Tokens | Ch. 06.3, 07.5, 20 |
| 17 | The DTCG 2025.10 design tokens format, explained | design tokens format; DTCG; W3C design tokens | E | Tokens | Ch. 06.3 |
| 18 | HSL vs OKLCH: why perceptual colour matters | hsl vs oklch; oklch explained | C | Colour | Ch. 07.2 |
| 19 | ★ How to build an accessible colour palette in OKLCH | oklch color palette; accessible color scale | H | Colour | Ch. 07.3–07.4 |
| 20 | Colour contrast for design systems: WCAG ratios and pairing rules | color contrast design system; wcag contrast ratio | H | Accessibility | Ch. 07.4 |
| 21 | Semantic colour tokens: naming colours by their job | semantic color tokens; color token naming | H | Tokens | Ch. 07.5 |
| 22 | ★ Dark mode with design tokens: a step-by-step guide | dark mode design tokens; theming design system | H | Tokens | Ch. 07.7 |
| 23 | Multi-brand and white-label theming with tokens | multi-brand design system; white label theming | A | Scaling | Ch. 07.7, 25.2 |
| 24 | How many colours should a design system have? | how many colors design system | E | Colour | Ch. 07.8 |
| 25 | How to choose a font for a product UI | ui font; best font for app | H | Typography | Ch. 08.1 |
| 26 | Type scale for design systems: how to build one | type scale; typography scale design system | H | Typography | Ch. 08.2–08.3 |
| 27 | Fluid typography with clamp() that respects zoom | fluid typography clamp | H | Typography | Ch. 08.4 |
| 28 | Typography for dashboards, enterprise and mobile apps | typography for dashboards | E | Typography | Ch. 08.6 |
| 29 | Spacing systems: 4px vs 8px grid | 8px grid; spacing system design | C/H | Spacing & layout | Ch. 09 |
| 30 | Compact and comfortable density modes | density design system | H | Spacing & layout | Ch. 09.5 |
| 31 | Breakpoints and grids for product UI | design system breakpoints; 12 column grid | H | Spacing & layout | Ch. 10.1–10.3 |
| 32 | How to lay out a SaaS dashboard | dashboard layout | H | Spacing & layout | Ch. 10.4 |
| 33 | From design decision to code: how foundations become tokens | design tokens to code | E | Tokens | Ch. 11 |

## Part 03 — Components (Ch. 12–16)

| # | Article opportunity | Target query family | Format | Cluster | Source |
|---|---|---|---|---|---|
| 34 | What is a UI component? Anatomy, variants and states | component anatomy; ui component states | E | Components | Ch. 12 |
| 35 | ★ How to run a design system audit (interface inventory) | design system audit; interface inventory; ui audit | H/T | Build & audit | Ch. 13.1–13.3 |
| 36 | Which components to build first: a prioritisation matrix | design system first components | D | Components | Ch. 13.3 |
| 37 | Build vs buy: headless component libraries vs custom | headless ui library; build vs buy design system | C | Components | Ch. 13.4 |
| 38 | A component design checklist: states, edge cases, accessibility | component design checklist | T | Components | Ch. 14 |
| 39 | Writing for components: button labels, errors, empty states | button label best practices; error message examples | T | Content | Ch. 14.4, 24 |
| 40 | Keeping Figma and code in sync | figma code sync design system | H | Tooling | Ch. 15.2 |
| 41 | Configuration vs composition in component libraries | composition vs configuration components | C/A | Architecture | Ch. 15.3 |
| 42 | How to organise a Figma component library | figma library organization | H | Documentation | Ch. 16.2 |
| 43 | ★ Design system documentation: what to include (template) | design system documentation; component documentation template | T | Documentation | Ch. 16.3, 32 |
| 44 | Component lifecycle: beta, stable, deprecated | component lifecycle design system | E | Governance | Ch. 16.4 |

## Part 04 — Component architecture (Ch. 17–22)

| # | Article opportunity | Target query family | Format | Cluster | Source |
|---|---|---|---|---|---|
| 45 | Component complexity: a scoring model for planning | estimating design system work | T/A | Architecture | Ch. 17 |
| 46 | Choosing the simplest component (select vs radio vs combobox) | select vs radio buttons; combobox vs select | C | Components | Ch. 17.5 |
| 47 | Component library architecture: layers and dependencies | component library architecture | A | Architecture | Ch. 18 |
| 48 | Compound components, slots and controlled vs uncontrolled | compound components; controlled vs uncontrolled | A | Architecture | Ch. 18.4 |
| 49 | Component props best practices | component props best practices; component API design | H | Architecture | Ch. 19 |
| 50 | Figma component properties vs code props | figma component properties | C | Tooling | Ch. 19.5 |
| 51 | Component tokens: when you need them | component tokens | D | Tokens | Ch. 20 |
| 52 | Design token naming conventions | design token naming convention | H | Tokens | Ch. 20.3 |
| 53 | Building accessible components in React | accessible react components | H | Accessibility | Ch. 21 |
| 54 | Styling strategies for design systems | css modules vs css-in-js vs tailwind design system | C | Architecture | Ch. 21.2 |
| 55 | Design system casebook: 12 real situations | design system challenges | S | Operations | Ch. 22 |
| 56 | How to migrate legacy components | component migration strategy | H | Governance | Ch. 22.2 |

## Part 05 — Patterns, content and scale (Ch. 23–26)

| # | Article opportunity | Target query family | Format | Cluster | Source |
|---|---|---|---|---|---|
| 57 | Design patterns vs components | ui patterns vs components | C | Components | Ch. 23.1 |
| 58 | Form design patterns: validation and error messages | form validation ux; error summary | H | Accessibility / Patterns | Ch. 23.2 |
| 59 | Empty states, loading and error patterns | empty state design | H | Patterns | Ch. 23.5 |
| 60 | UX writing in design systems: voice, vocabulary, formulas | ux writing guidelines; content design system | T | Content | Ch. 24 |
| 61 | Localisation-ready components: RTL and translation | rtl design; localization ui | H | Scaling | Ch. 24.6 |
| 62 | Scaling a design system across brands and platforms | multi-platform design system | A | Scaling | Ch. 25 |
| 63 | Families of design systems (Spotify Encore, tiers) | design system tiers | A | Scaling | Ch. 25.4 |
| 64 | Design system tools stack by stage | design system tools | D | Tooling | Ch. 26 |
| 65 | AI in design systems: what helps and what doesn't | ai design system | E | AI & future | Ch. 26.5–26.6 |

## Part 06 — Operating model (Ch. 27–38)

| # | Article opportunity | Target query family | Format | Cluster | Source |
|---|---|---|---|---|---|
| 66 | ★ Design system operating model by company size | design system operating model | G | Operating model | Ch. 27 |
| 67 | ★ Design system team structure: roles and org charts | design system team structure; design system roles | G/T | Operating model | Ch. 28 |
| 68 | Design system roles and job descriptions | design system designer job description | T | Operating model | Ch. 28.1 |
| 69 | How to run design system office hours | design system office hours | H | Adoption | Ch. 29.2 |
| 70 | Design system operating calendar and rituals | design system process; rituals | T | Operations | Ch. 29.1 |
| 71 | Design system onboarding and training programmes | design system onboarding; training | H | Adoption | Ch. 30 |
| 72 | Design system champions programme | design system champions | H | Adoption | Ch. 34.4 |
| 73 | Design system research: interviewing your users | design system user research | H | Adoption | Ch. 31 |
| 74 | A design system survey template | design system survey | T | Measurement | Ch. 31.4 |
| 75 | How to structure a design system documentation site | design system website; documentation site | H | Documentation | Ch. 32 |
| 76 | Design system release notes and change communication (templates) | design system release notes; changelog | T | Operations | Ch. 33 |
| 77 | Design system versioning and breaking changes | design system versioning; semantic versioning | H | Governance | Ch. 05.6, 33, 22.3 |
| 78 | Building a design system community | design system community; guild | H | Adoption | Ch. 34 |
| 79 | ★ Design system contribution model and request process | design system contribution model; request process | T | Governance | Ch. 35 |
| 80 | ★ Design system governance: decision rights and process | design system governance | G | Governance | Ch. 36 |
| 81 | ★ How to measure design system adoption and success | design system metrics; adoption | G/T | Measurement | Ch. 37, 03.4 |
| 82 | ★ How to build a design system: a 12-month plan | how to build a design system; step by step | G | Build & audit | Ch. 04.9, 13, 38 |

## Coverage summary

- **82 opportunities** across the playbook, enough for the first 15 articles plus roughly 18 months of
  publishing at one article a week.
- **The richest seams for search** are Part 01 (decision and business intent), Part 02 (tokens and
  colour, practitioner demand) and Part 06 (operations, the least-served topic in current results).
- **Reuse is high, not copy-paste.** Each article must be rewritten for its own search intent (definition
  first, question-shaped H2s, an FAQ), but figures, tables, templates and computed data can come
  straight from the playbook. That's what makes the articles more useful than the average ranking result.
