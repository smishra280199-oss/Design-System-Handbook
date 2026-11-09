# Phase 4 — Article roadmap: the first 15 articles

Status: **proposal for review**. No articles have been written yet.

> **How to read the numbers.** No keyword tool was available, so **search volume and keyword
> difficulty are not quoted.** The **Demand** and **Competition** columns are *estimates*, given as
> tiers (High / Medium / Low) and based on (a) who ranks today, observed in live searches on
> 9 November 2026, and (b) how widely the topic appears in practitioner writing. They're marked
> **(est.)** everywhere. Before writing, fill in `keyword-verification.csv` from Google Keyword
> Planner, Ahrefs or Semrush, and re-rank if the real numbers disagree.

---

## 1. How articles were prioritised

Each candidate from the [playbook extraction](02-playbook-extraction.md) was scored 1–3 on four factors
(maximum 12):

| Factor | 3 | 2 | 1 |
|---|---|---|---|
| **Demand (est.)** | Broad head term, many ranking pages, rich "People also ask" | Established mid-tail query | Niche or long-tail |
| **Business fit** | Searcher could become a client (leaders, decide or run stage) | Practitioners who influence buying | Learners with no buying role |
| **Win-ability (est.)** | Weak or generic results and a clear playbook advantage | Mixed results, but a strong angle | Dominated by Figma, NN/g or official docs |
| **Hub / link value** | A pillar, or links to many other articles | Links to a pillar plus 2–3 siblings | Standalone |

Publishing order isn't simply highest score first. The pillar of each cluster goes first so that cluster
articles have something to link up to from day one, and the business-intent articles go in once the
foundations they reference exist.

## 2. Summary

| Order | Article | Hub | Type | Demand (est.) | Competition (est.) | Score /12 | Week |
|---|---|---|---|---|---|---|---|
| 1 | What is a design system? | Fundamentals | **Pillar** | High | High | 11 | 1 |
| 2 | Design system vs style guide vs component library vs UI kit | Fundamentals | Comparison | Medium–High | High | 9 | 2 |
| 3 | Do you need a design system? | Fundamentals | Decision | Medium | Medium | 11 | 3 |
| 4 | How to build a design system | Components | **Pillar** | High | High | 11 | 4 |
| 5 | How to run a design system audit | Components | How-to + template | Medium | Medium | 11 | 5 |
| 6 | Design tokens: the complete guide | Foundations & tokens | **Pillar** | High | Medium–High | 11 | 6 |
| 7 | Semantic tokens and dark mode | Foundations & tokens | Tutorial | Medium | Medium | 9 | 7 |
| 8 | OKLCH colour palettes for design systems | Foundations & tokens | Tutorial | Medium (growing) | Low–Medium | 9 | 8 |
| 9 | Design system governance | Governance | **Pillar** | Medium | Medium | 12 | 9 |
| 10 | Design system team structure | Operating model | Guide + org charts | Medium | Low–Medium | 12 | 10 |
| 11 | Design system operating model | Operating model | **Pillar** | Low–Medium | Low | 11 | 11 |
| 12 | Design system contribution model | Governance | Template | Medium | Medium | 10 | 12 |
| 13 | Design system documentation | Documentation | Template | Medium | Medium–High | 9 | 13 |
| 14 | How to measure design system success | Adoption | Guide + dashboard | Medium | Medium | 11 | 14 |
| 15 | Design system ROI and cost | Business case | Model + calculator | Medium | Medium | 12 | 15 |

**Cadence:** one article a week for 15 weeks, then the backlog at the same pace. Pillars take about
twice the effort of a cluster article, so if the pace slips, keep the order and stretch the dates.

---

## 3. Article briefs

Each brief gives everything a writer needs. Title tags are ≤ 60 characters and meta descriptions ≤ 155.

---

### 1 · What is a design system? (Pillar)

| Field | |
|---|---|
| **H1** | What is a design system? A plain-English guide for teams |
| **Title tag** | What Is a Design System? A Complete Guide with Examples |
| **Meta description** | A design system is the shared decisions, parts and agreements behind a product's UI. What's inside one, how it differs from a UI kit, when you need one. |
| **Slug** | `/writing/what-is-a-design-system/` |
| **Primary keyword** | what is a design system |
| **Secondary keywords** | design system definition; design system meaning; design system examples; design system components; benefits of a design system |
| **Search intent** | Informational (learn) |
| **Audience** | Junior and mid designers, front-end engineers, PMs, founders new to the term |
| **Demand / competition** | High (est.) / High (est.): Figma, agency and vendor blogs rank |
| **Angle** | Most definitions stop at "a library of reusable components". This one defines a design system as **decisions, parts and agreements**, using the playbook's "five-button problem" to show why each layer matters, and is honest about when you don't need one. |
| **Playbook reference** | Ch. 01 (definition, anatomy, scale); Ch. 02.2 (maturity); Ch. 03 (value) |
| **H2 outline** | What is a design system? (40-word definition) · The five-button problem · What's inside a design system (foundations, tokens, components, patterns, docs, people and process) · Design system vs style guide vs UI kit (summary table → #2) · Examples of design systems (Material, Carbon, Polaris, GOV.UK) · What a design system is worth (→ #15) · Do you need one? (→ #3) · How design systems are built and run (→ #4, #11) · The short version |
| **FAQ** | Is a design system the same as a component library? · Who owns a design system? · How long does it take to build a design system? · Is Figma a design system? · What are the main parts of a design system? |
| **Internal links** | Down: #2, #3, #4, #6, #9, #11, #15 · Proof: `/work/ibm-design-systems` |
| **External links** | Material Design 3; IBM Carbon; Shopify Polaris; GOV.UK Design System; Brad Frost, *Atomic Design* |
| **CTA** | Start the *Design Systems 101* series (next: #2); download the playbook |
| **Score** | Demand 3 · Fit 2 · Win 2 · Hub 3 = **11** |
| **Why this priority** | It's the root of the whole hub and the most-searched concept. It probably won't reach the top three quickly against Figma and big vendor blogs, but every other article links up to it, and it can rank for the long-tail variants (meaning, examples, parts) sooner. |

---

### 2 · Design system vs style guide vs component library vs UI kit

| Field | |
|---|---|
| **H1** | Design system vs style guide vs component library vs UI kit: what's the difference? |
| **Title tag** | Design System vs Style Guide vs Component Library vs UI Kit |
| **Meta description** | Four terms people use interchangeably, and what each actually includes. A comparison table, a diagram of how they nest, and how to tell which one you have. |
| **Slug** | `/writing/design-system-vs-style-guide-vs-component-library/` |
| **Primary keyword** | design system vs component library |
| **Secondary keywords** | design system vs style guide; design system vs UI kit; pattern library vs design system; style guide vs component library |
| **Search intent** | Informational (comparison) |
| **Audience** | Designers, engineers and managers trying to name what their team has |
| **Demand / competition** | Medium–High (est.) / High (est.): UXPin, NN/g, Netguru, agency blogs |
| **Angle** | The nested-circles diagram from the playbook, plus a **"which one do you have?" self-check**: most teams that say they have a design system actually have a UI kit, and that's fine at their stage. |
| **Playbook reference** | Ch. 01.3 (the comparison); Ch. 02.2 (maturity stages) |
| **H2 outline** | The short answer (comparison table) · What is a style guide? · What is a UI kit? · What is a component library? · What is a pattern library? · What makes something a design system? · How they fit together (diagram) · Which one do you have? (self-check) · When to move from one to the next · The short version |
| **FAQ** | Is Material Design a design system or a component library? · Can a design system exist without code? · Is a brand guideline a style guide? · Do I need a component library before a design system? |
| **Internal links** | Up: #1 · Across: #3 · Also: the republished "expensive UI libraries" post |
| **External links** | NN/g on design systems vs style guides; Brad Frost; Storybook |
| **CTA** | Next in series (#3) |
| **Score** | Demand 3 · Fit 1 · Win 2 · Hub 3 = **9** |
| **Why this priority** | A high-volume comparison query with a fixed answer format, so a clear table plus original diagram can compete. It feeds readers into #3, where business intent starts. |

---

### 3 · Do you need a design system?

| Field | |
|---|---|
| **H1** | Do you need a design system? A decision guide for startups and growing teams |
| **Title tag** | Do You Need a Design System? A Decision Guide for Startups |
| **Meta description** | Seven questions, five maturity stages and the signs you've outgrown a UI kit. A practical way to decide whether your team needs a design system yet. |
| **Slug** | `/writing/do-you-need-a-design-system/` |
| **Primary keyword** | do you need a design system |
| **Secondary keywords** | when to build a design system; design system for startups; when do you need a design system; design system maturity model |
| **Search intent** | Commercial investigation (decide) |
| **Audience** | Founders, heads of product and design, engineering leads at 10–200-person companies |
| **Demand / competition** | Medium (est.) / Medium (est.): opinion pieces on Medium, little structure |
| **Angle** | Most articles say "yes, eventually". This one gives a **decision tree and readiness checklist**, and says plainly when the answer is "not yet". That honesty is what makes the CTA credible. |
| **Playbook reference** | Ch. 02 (seven questions, maturity map, decision tree, outgrowth signals, four scenarios, readiness checklist) |
| **H2 outline** | The short answer · Seven questions to ask first · The five stages of design system maturity · Signs you've outgrown your UI kit · Four company scenarios (seed, Series A, scale-up, enterprise) · When the answer is "not yet" · A readiness checklist · What to do next at each stage · The short version |
| **FAQ** | At what company size do you need a design system? · Should a startup build a design system? · Can we use Material or Shadcn instead? · Who should own it first? · How much does a small design system cost? |
| **Internal links** | Up: #1 · Across: #2, #4, #15 · Proof: `/work/cars24-lego` |
| **External links** | Dan Mall on design system readiness; Sparkbox Design Systems Survey |
| **CTA** | Primary: "A two-week audit gives you a baseline" → `/pricing` (after the checklist) |
| **Score** | Demand 2 · Fit 3 · Win 3 · Hub 3 = **11** |
| **Why this priority** | The searcher is often the budget holder. The current results are opinion-led, and the playbook has a ready-made framework, so this is the highest-intent article in the Fundamentals hub. |

---

### 4 · How to build a design system (Pillar)

| Field | |
|---|---|
| **H1** | How to build a design system: a step-by-step plan for the first 12 months |
| **Title tag** | How to Build a Design System: A Step-by-Step Guide |
| **Meta description** | Audit, foundations, tokens, first components, docs and governance, in order. A staged 12-month plan with gates, so you invest only as fast as it pays off. |
| **Slug** | `/writing/how-to-build-a-design-system/` |
| **Primary keyword** | how to build a design system |
| **Secondary keywords** | how to create a design system; design system step by step; building a design system from scratch; design system roadmap |
| **Search intent** | Informational / how-to (build) |
| **Audience** | Designers and engineers tasked with starting a system; design leads planning one |
| **Demand / competition** | High (est.) / High (est.): Frontify, UXPin, Medium |
| **Angle** | Competing guides cover the pixels: colours, then components. This guide puts **people, scope and gates** around each step, with a staged plan ("start small, prove value, then expand") taken from the playbook's 12-month roadmap. |
| **Playbook reference** | Ch. 04.9 (start small with gates); Ch. 13 (inventory, what to build first); Ch. 06–11 (foundations); Ch. 38 (12-month roadmap) |
| **H2 outline** | Before you start: get the sponsor and the scope right · Step 1: audit what you have (→ #5) · Step 2: set foundations and tokens (→ #6) · Step 3: choose your first components (2×2 matrix) · Step 4: build in design and code together · Step 5: document as you go (→ #13) · Step 6: agree how decisions get made (→ #9) · Step 7: launch, measure, iterate (→ #14) · A 12-month timeline · Common mistakes · The short version |
| **FAQ** | How long does it take to build a design system? · Should design or code come first? · How many people do you need? · Which components should you build first? · Should you start from an open-source system? |
| **Internal links** | Down: #5, #6, #9, #12, #13, #14 · Up/across: #1, #3 · Proof: `/work/cars24-lego`, `/work/cars24-pattern-library` |
| **External links** | Brad Frost (interface inventory); W3C DTCG spec; Radix UI / React Aria (headless) |
| **CTA** | Download the 12-month roadmap template |
| **Score** | Demand 3 · Fit 2 · Win 3 · Hub 3 = **11** |
| **Why this priority** | A pillar with high demand. The staged, people-first plan is a real gap in current results, and it links down to five of the first 15. |

---

### 5 · How to run a design system audit

| Field | |
|---|---|
| **H1** | How to run a design system audit (with an interface inventory template) |
| **Title tag** | Design System Audit: How to Run an Interface Inventory |
| **Meta description** | Screenshot, group, count and prioritise every button, field and colour in your product. A step-by-step UI audit with a free inventory template. |
| **Slug** | `/writing/design-system-audit/` |
| **Primary keyword** | design system audit |
| **Secondary keywords** | interface inventory; UI audit; UI inventory template; design audit checklist; component inventory |
| **Search intent** | How-to (build), some commercial |
| **Audience** | Designers starting a system; leads building a case for one |
| **Demand / competition** | Medium (est.) / Medium (est.): Brad Frost, 18F, agencies |
| **Angle** | Goes past "take screenshots" to **turning the inventory into a decision**: counting variants, estimating the cost of inconsistency and plotting components on the playbook's 2×2 (frequency × inconsistency) matrix. |
| **Playbook reference** | Ch. 13.1–13.3 (inventory, matrix); Ch. 17 (complexity rubric for estimates) |
| **H2 outline** | What is a design system audit? · What you'll need · Step 1: capture every screen · Step 2: group into categories · Step 3: count variants and inconsistencies · Step 4: audit foundations (colours, type, spacing) · Step 5: prioritise with a 2×2 matrix · Step 6: present the findings · Template · The short version |
| **FAQ** | How long does a UI audit take? · Who should be involved? · Can an audit be automated? · What's the difference between a UX audit and a UI audit? |
| **Internal links** | Up: #4 · Across: #3, #15 · Proof: `/work/cars24-tokens` |
| **External links** | Brad Frost, "Interface Inventory"; 18F audit guidance |
| **CTA** | Free inventory template; "Or have us run it: two-week audit" → `/pricing` |
| **Score** | Demand 2 · Fit 3 · Win 3 · Hub 3 = **11** |
| **Why this priority** | It maps directly to Layer One's two-week audit offer without needing a hard sell, and a downloadable template attracts links. |

---

### 6 · Design tokens: the complete guide (Pillar)

| Field | |
|---|---|
| **H1** | Design tokens: the complete guide to primitive, semantic and component tokens |
| **Title tag** | Design Tokens: The Complete Guide (Primitive to Semantic) |
| **Meta description** | What design tokens are, the three tiers, naming, the DTCG 2025.10 format and how tokens reach code. Examples and JSON you can adapt for your system. |
| **Slug** | `/writing/design-tokens/` |
| **Primary keyword** | design tokens |
| **Secondary keywords** | what are design tokens; semantic tokens; primitive tokens; design token naming; DTCG format; W3C design tokens |
| **Search intent** | Informational (learn and build) |
| **Audience** | Designers and front-end engineers; DS teams adopting tokens |
| **Demand / competition** | High (est.) / Medium–High (est.): vendor blogs, system docs, Medium |
| **Angle** | Up to date with the **stable DTCG 2025.10 format** (many ranking articles predate it), with a single running example from a primitive value to a component, using the playbook's computed OKLCH palette. |
| **Playbook reference** | Ch. 06.3 (tokens and DTCG); Ch. 07.5 (semantic colour); Ch. 11 (decision to code); Ch. 20 (component tokens, naming) |
| **H2 outline** | What are design tokens? · Why tokens matter (decide once, change once) · The three tiers: primitive, semantic, component · How to name tokens · The DTCG format (with JSON) · From tokens to code (Style Dictionary, CSS variables) · Tokens in Figma (variables) · Theming and modes (→ #7) · Governance for tokens (→ #9) · Common mistakes · The short version |
| **FAQ** | Are design tokens the same as CSS variables? · Do I need component tokens? · What is the W3C design tokens format? · How do Figma variables relate to tokens? · How many tokens should a system have? |
| **Internal links** | Down: #7, #8 · Up/across: #4, #9 · Proof: `/work/cars24-tokens` |
| **External links** | DTCG Format Module 2025.10; Style Dictionary; Figma variables docs; Salesforce (origin of the term) |
| **CTA** | Download the starter token set (DTCG JSON) |
| **Score** | Demand 3 · Fit 2 · Win 3 · Hub 3 = **11** |
| **Why this priority** | Steady practitioner demand, a recent standard that resets the field, and a direct link to Layer One's CARS24 tokens case study. |

---

### 7 · Semantic tokens and dark mode

| Field | |
|---|---|
| **H1** | Dark mode with design tokens: a step-by-step guide using semantic tokens |
| **Title tag** | Dark Mode Design Tokens: A Step-by-Step Guide |
| **Meta description** | Build dark mode by swapping semantic tokens, not redesigning screens. A worked example with checked contrast ratios, naming rules and the common traps. |
| **Slug** | `/writing/dark-mode-design-tokens/` |
| **Primary keyword** | dark mode design tokens |
| **Secondary keywords** | semantic color tokens; theming design system; light and dark mode tokens; color token naming |
| **Search intent** | How-to (build) |
| **Audience** | Product designers and front-end engineers implementing themes |
| **Demand / competition** | Medium (est.) / Medium (est.): Primer docs, uxdesign.cc, vendor blogs |
| **Angle** | A **worked end-to-end example** with real computed contrast pairs for both modes. Most articles show the concept but not verified numbers. |
| **Playbook reference** | Ch. 07.5 (semantic tokens); Ch. 07.7 (dark mode and white-label); Ch. 07.4 (contrast) |
| **H2 outline** | Why dark mode breaks without semantic tokens · Primitive vs semantic colour tokens · Step 1: name colours by their job · Step 2: map light mode · Step 3: map dark mode (elevation, not inversion) · Step 4: check every pair for contrast · Step 5: ship as modes (CSS, Figma) · Beyond dark mode: brands and white-label · The short version |
| **FAQ** | Should dark mode just invert colours? · How many semantic colour tokens do I need? · How do I handle elevation in dark mode? · Do images and charts need dark tokens? |
| **Internal links** | Up: #6 · Across: #8 |
| **External links** | WCAG 2.2 contrast (1.4.3, 1.4.11); GitHub Primer colour docs; Material 3 colour roles |
| **CTA** | Download the semantic colour token sheet |
| **Score** | Demand 2 · Fit 2 · Win 3 · Hub 2 = **9** |
| **Why this priority** | A tutorial with clear practical demand; the computed contrast data is a differentiator few competitors can match. |

---

### 8 · OKLCH colour palettes for design systems

| Field | |
|---|---|
| **H1** | How to build an accessible colour palette in OKLCH |
| **Title tag** | OKLCH Color Palette: Build Accessible Design System Colors |
| **Meta description** | Why OKLCH beats HSL for UI colour, and how to build even, accessible ramps step by step. With a computed palette and contrast matrix you can check. |
| **Slug** | `/writing/oklch-color-palette/` |
| **Primary keyword** | oklch color palette |
| **Secondary keywords** | oklch vs hsl; accessible color palette; color scale design system; perceptual color |
| **Search intent** | How-to (build) |
| **Audience** | Product designers, front-end engineers, DS teams rebuilding colour |
| **Demand / competition** | Medium, growing (est.) / Low–Medium (est.): LogRocket, Evil Martians, tools |
| **Angle** | A **reproducible method with real numbers**: the playbook's palette is computed in OKLCH with culori, so every step and contrast ratio can be shown and verified. |
| **Playbook reference** | Ch. 07.2 (why OKLCH); Ch. 07.3 (ramps); Ch. 07.4 (contrast matrix); Ch. 07.8 (how many colours) |
| **H2 outline** | Why HSL palettes look uneven · What OKLCH is, in plain terms · Step 1: pick the hue and chroma for each family · Step 2: set lightness steps · Step 3: check contrast for every pairing · Step 4: name and ship as tokens (→ #6) · Browser support and fallbacks · How many colours you need · The short version |
| **FAQ** | Is OKLCH supported in all browsers? · OKLCH vs OKLab vs HSL? · Does OKLCH guarantee WCAG contrast? · Can I use OKLCH in Figma? |
| **Internal links** | Up: #6 · Across: #7 · Proof: `/work/cars24-tokens` |
| **External links** | CSS Color Module Level 4 (W3C); Björn Ottosson on OKLab; MDN `oklch()`; WCAG contrast |
| **CTA** | Download the palette and contrast matrix |
| **Score** | Demand 2 · Fit 1 · Win 3 · Hub 3 = **9** |
| **Why this priority** | A rising topic with little depth in current results. Practitioners link to well-made technical references, which builds domain authority for the whole hub. |

---

### 9 · Design system governance (Pillar)

| Field | |
|---|---|
| **H1** | Design system governance: who decides what, and how |
| **Title tag** | Design System Governance: Models, Roles and Process |
| **Meta description** | Governance without bureaucracy: decision rights, a lightweight review process, escalation paths and a decision log. Templates for every stage of team size. |
| **Slug** | `/writing/design-system-governance/` |
| **Primary keyword** | design system governance |
| **Secondary keywords** | design system governance model; design system decision making; centralized vs federated design system; design system process |
| **Search intent** | Informational / how-to (run) |
| **Audience** | DS leads, DesignOps, design and engineering managers |
| **Demand / competition** | Medium (est.) / Medium (est.): Figr, UXPin, Medium, Brad Frost |
| **Angle** | Defines governance as **decision rights, not approval gates**, and gives a decision-rights matrix (who decides, who's consulted, who's informed) for real decisions like adding a colour or deprecating a component. |
| **Playbook reference** | Ch. 36 (governance); Ch. 05.2 (models); Ch. 16.4 (lifecycle); Ch. 33 (decision log template) |
| **H2 outline** | What is design system governance? · Why governance fails (too much, too little) · Centralised, federated and hybrid models · Decision rights: who decides what (matrix) · The review process, step by step · Escalation paths · Lifecycle: proposed, beta, stable, deprecated · The decision log · Governance by company size (→ #11) · The short version |
| **FAQ** | What's the difference between centralised and federated? · Who has final say on a design system? · How do you stop governance slowing teams down? · How do you handle teams that detach components? |
| **Internal links** | Down: #12 · Across: #10, #11, #6 · Proof: `/work/cars24-governance`, `/work/jpmc-system-checks` |
| **External links** | Nathan Curtis (EightShapes) on team models; Brad Frost on governance |
| **CTA** | Download the decision-rights matrix |
| **Score** | Demand 2 · Fit 3 · Win 3 · Hub 3 = **12** |
| **Why this priority** | The core of Layer One's differentiation and a direct case study match (CARS24 governance). Searchers are the people who hire help. |

---

### 10 · Design system team structure

| Field | |
|---|---|
| **H1** | Design system team structure: roles, org charts and how teams grow |
| **Title tag** | Design System Team Structure: Roles and Org Charts |
| **Meta description** | Who you need on a design system team, at what company size, and where they report. Five org charts, a role table and signs it's time to grow the team. |
| **Slug** | `/writing/design-system-team-structure/` |
| **Primary keyword** | design system team structure |
| **Secondary keywords** | design system team roles; design system team size; design system lead; design system engineer; dedicated design system team |
| **Search intent** | Informational (run, plan) |
| **Audience** | Heads of design and engineering, DS leads making a hiring case |
| **Demand / competition** | Medium (est.) / Low–Medium (est.): GOV.UK, zeroheight, Medium |
| **Angle** | Concrete **org charts by company size** (startup to enterprise) with role responsibilities and reporting lines, which current results don't provide. |
| **Playbook reference** | Ch. 28 (team structure, roles, hierarchy); Ch. 27 (by company size); Ch. 04.3 and 04.6 (roles, dedicated vs embedded) |
| **H2 outline** | The roles a design system needs · How many people, at what size? · Org chart: startup (part-time owner) · Org chart: scale-up (small core team) · Org chart: enterprise (core plus federated contributors) · Where the team should report · Dedicated vs embedded · Signs it's time to grow · Hiring the first DS person · The short version |
| **FAQ** | How big should a design system team be? · Should the team sit in design or engineering? · What does a design system designer do? · Do you need a dedicated design system engineer? |
| **Internal links** | Up: #11 · Across: #9, #15 · Proof: `/work/ibm-design-systems` |
| **External links** | Nathan Curtis, "Team Models for Scaling a Design System"; GOV.UK team page |
| **CTA** | Download the role descriptions |
| **Score** | Demand 2 · Fit 3 · Win 3 · Hub 2 = **10**, raised to **12** for being the clearest content gap (see note) |
| **Why this priority** | The clearest gap found in research, and buyer-adjacent: people asking it are about to spend headcount. *(Note: the score is adjusted up by judgement; flag in review if you prefer the raw 10.)* |

---

### 11 · Design system operating model (Pillar)

| Field | |
|---|---|
| **H1** | The design system operating model: how to run one at every company size |
| **Title tag** | Design System Operating Model: How to Run One at Any Size |
| **Meta description** | Launch is the easy part. How design systems actually run day to day, from intake and office hours to releases and roadmaps, by company size. |
| **Slug** | `/writing/design-system-operating-model/` |
| **Primary keyword** | design system operating model |
| **Secondary keywords** | design system operations; DesignOps design system; running a design system; design system maintenance; design system rituals |
| **Search intent** | Informational (run) |
| **Audience** | DS leads, DesignOps, heads of design and engineering |
| **Demand / competition** | Low–Medium (est.) / Low (est.) |
| **Angle** | A complete model (team, rituals, intake, releases, communication, community, measurement) that no single ranking article covers. Positions Layer One as **the operating model people**. |
| **Playbook reference** | Part 06 overall (Ch. 27–38), especially Ch. 27 (by size), Ch. 29 (daily operations), Ch. 38 (roadmap) |
| **H2 outline** | What is an operating model (and why launch isn't the finish line) · The six parts of an operating model · Operating model by company size (five archetypes) · A week in the life (rituals and office hours) · Intake and requests (→ #12) · Releases and communication · Enablement and community · Measuring how it's going (→ #14) · A 12-month operating roadmap · The short version |
| **FAQ** | What does a design system team do day to day? · How often should a design system release? · What are design system office hours? · How do you keep a design system alive after launch? |
| **Internal links** | Down: #10, #12, #14 · Across: #9, #15 · Proof: `/work/ibm-riyadh-air-ops`; republished "operational backbones" post |
| **External links** | Ben Callahan on design system operations; zeroheight Design Systems Report |
| **CTA** | "Talk through your operating model" → `cal.com/layerone` |
| **Score** | Demand 1 · Fit 3 · Win 3 · Hub 3 = **10**, raised to **11** as the strategic positioning pillar |
| **Why this priority** | Lower search demand, but this is the term Layer One should own: it ties the operations cluster together and is where the playbook's depth is unmatched. *(Score adjusted by judgement; flag in review if you prefer the raw 10.)* |

---

### 12 · Design system contribution model and request process

| Field | |
|---|---|
| **H1** | Design system contribution model: how to take requests without becoming a bottleneck |
| **Title tag** | Design System Contribution Model and Request Process |
| **Meta description** | A contribution model that scales: request forms, a scoring formula for priorities, contribution levels and the review flow. Templates included. |
| **Slug** | `/writing/design-system-contribution-model/` |
| **Primary keyword** | design system contribution model |
| **Secondary keywords** | design system contribution process; design system requests; how to contribute to a design system; design system intake |
| **Search intent** | How-to (run) |
| **Audience** | DS teams and product teams who contribute |
| **Demand / competition** | Medium (est.) / Medium (est.): Brad Frost, Medium, vendor blogs |
| **Angle** | A **transparent scoring formula** for requests ((Reach + Impact + Reuse + Value) ÷ Effort) and a request form, so priorities stop being political. |
| **Playbook reference** | Ch. 35 (requests, scoring); Ch. 36 (governance); Ch. 34 (community) |
| **H2 outline** | Why requests become a bottleneck · Types of contribution (fix, extend, new) · The request form (template) · How to score and prioritise requests · The review flow, step by step · Saying no (and what to offer instead) · Recognising contributors · The short version |
| **FAQ** | Who can contribute to a design system? · How do you prioritise design system requests? · What if a team needs a component now? · Should contributions go through pull requests? |
| **Internal links** | Up: #9 · Across: #11, #13 · Proof: `/work/cars24-governance` |
| **External links** | Brad Frost on contribution; Nathan Curtis on contribution levels; GitHub contribution docs examples (Carbon, Primer) |
| **CTA** | Download the request form and scoring sheet |
| **Score** | Demand 2 · Fit 2 · Win 3 · Hub 3 = **10** |
| **Why this priority** | A practical pain point with copyable templates, which tends to attract links. Completes the governance cluster. |

---

### 13 · Design system documentation

| Field | |
|---|---|
| **H1** | Design system documentation: what to include, with a component page template |
| **Title tag** | Design System Documentation: What to Include (Template) |
| **Meta description** | What people actually read in design system docs, the sections every component page needs and how to structure the portal. A free page template. |
| **Slug** | `/writing/design-system-documentation/` |
| **Primary keyword** | design system documentation |
| **Secondary keywords** | component documentation template; design system documentation examples; design system website; documentation site structure |
| **Search intent** | How-to (build, run) |
| **Audience** | DS designers, engineers and writers |
| **Demand / competition** | Medium (est.) / Medium–High (est.): UXPin, Storybook, tool vendors |
| **Angle** | A **component page template and portal structure** based on what users actually look for (code, do and don't, accessibility notes), not a list of best practices. Tool-neutral. |
| **Playbook reference** | Ch. 16.3 (docs); Ch. 32 (single source of truth / portal); Ch. 24 (writing) |
| **H2 outline** | What design system documentation is for · Who reads it, and what they look for · The component page template · Foundations, patterns and guidelines pages · Structuring the portal (single source of truth) · Tools: Storybook, zeroheight, Supernova, custom · Keeping docs current · The short version |
| **FAQ** | What tool should we use for documentation? · Should design and code docs live together? · How do you keep docs up to date? · What should a component page include? |
| **Internal links** | Up: #4 · Across: #12, #14 |
| **External links** | GOV.UK Design System component pages; Atlassian Design System; Storybook docs |
| **CTA** | Download the component page template |
| **Score** | Demand 2 · Fit 2 · Win 2 · Hub 3 = **9** |
| **Why this priority** | Steady demand from practitioners; the template earns links. Heads the Documentation hub. |

---

### 14 · How to measure design system success

| Field | |
|---|---|
| **H1** | How to measure design system success: adoption metrics and KPIs that matter |
| **Title tag** | Design System Metrics: How to Measure Adoption and Success |
| **Meta description** | Which design system metrics to track at each stage: adoption, coverage, detach rate, satisfaction, time saved. With a dashboard layout and survey questions. |
| **Slug** | `/writing/design-system-metrics/` |
| **Primary keyword** | design system metrics |
| **Secondary keywords** | design system adoption; measure design system success; design system KPIs; design system adoption metrics |
| **Search intent** | Informational / how-to (run, prove) |
| **Audience** | DS leads, design and engineering leaders reporting upward |
| **Demand / competition** | Medium (est.) / Medium (est.): Dan Mall, Supernova, Knapsack |
| **Angle** | **Metrics by maturity stage**: what to measure in month 3 vs year 2, so teams don't over-instrument early or under-report later. Includes a dashboard layout and survey template. |
| **Playbook reference** | Ch. 37 (measuring operations); Ch. 03.4 (KPIs); Ch. 31.4 (survey); Ch. 16.4 (detach data) |
| **H2 outline** | Why measure (and what goes wrong) · Outcome, adoption and health metrics · Metrics by maturity stage · How to measure adoption in code and in Figma · Satisfaction surveys (template) · Building a dashboard · Reporting to leadership · The short version |
| **FAQ** | What is a good design system adoption rate? · How do you measure adoption in code? · What is detach rate? · How often should you survey users? |
| **Internal links** | Up: #11 · Across: #15, #13 · Proof: `/work/jpmc-system-checks` |
| **External links** | Dan Mall on adoption metrics; Figma Library Analytics; Sparkbox survey |
| **CTA** | Download the metrics dashboard template |
| **Score** | Demand 2 · Fit 3 · Win 3 · Hub 3 = **11** |
| **Why this priority** | Leaders search for this when justifying budget; it sets up #15 and is a natural place for the audit offer. |

---

### 15 · Design system ROI and cost

| Field | |
|---|---|
| **H1** | Design system ROI: an honest model for cost, savings and break-even |
| **Title tag** | Design System ROI: Cost, Savings and an Honest Model |
| **Meta description** | What a design system really costs, where savings come from and when it pays back. A transparent model with break-even by team size, plus a calculator. |
| **Slug** | `/writing/design-system-roi/` |
| **Primary keyword** | design system ROI |
| **Secondary keywords** | design system cost; design system business case; design system budget; how much does a design system cost; design system value |
| **Search intent** | Commercial investigation (decide) |
| **Audience** | Heads of design, engineering and product; finance partners |
| **Demand / competition** | Medium (est.) / Medium (est.): Smashing, Supernova, Figr |
| **Angle** | **Honest, not inflated**: a transparent model (the playbook's worked example, about 22–23 engineers per system person to break even), the assumptions behind it, a sensitivity table and what it *doesn't* capture. Separates measured findings (e.g. Figma's 34% study) from vendor claims. |
| **Playbook reference** | Ch. 03 (value and evidence); Ch. 04 (cost drivers, three budgets, ROI model, break-even, start small with gates) |
| **H2 outline** | The short answer · What the research has actually measured · What a design system costs (three budgets) · Where the savings come from · A simple ROI model (worked example) · Break-even by team size · What the model doesn't capture · How to build your own business case · Start small: funding in stages · The short version |
| **FAQ** | How much does a design system cost? · How long until a design system pays for itself? · Is a design system worth it for a small team? · How do you present ROI to leadership? |
| **Internal links** | Up: #1 · Across: #3, #10, #14 · Proof: `/work/cars24-lego` |
| **External links** | Figma's design system efficiency study; Sparkbox survey; Smashing Magazine ROI formula; Nathan Curtis |
| **CTA** | Free ROI calculator; "A two-week audit gives you real numbers for your team" → `/pricing` |
| **Score** | Demand 2 · Fit 3 · Win 3 · Hub 3 = **11**, raised to **12** for commercial intent |
| **Why this priority** | The highest-intent query on the list. It's published last in the first batch because it links to nearly everything before it. Consider moving it earlier (week 5) if leads matter more than topical build-up. *(Score adjusted by judgement.)* |

---

## 4. Publishing sequence and dependencies

| Week | Publish | Why now | Update earlier articles |
|---|---|---|---|
| 0 | Hub setup: `/writing/` structure, author page, schema templates, redirects, republished Medium posts | Foundations for everything after | — |
| 1 | #1 What is a design system | Root pillar | — |
| 2 | #2 vs style guide | Feeds #3 | Link from #1 |
| 3 | #3 Do you need one | First business-intent article | Link from #1, #2 |
| 4 | #4 How to build | Second pillar | Link from #1, #3 |
| 5 | #5 Audit | First step of #4 | Link from #3, #4 |
| 6 | #6 Design tokens | Third pillar | Link from #1, #4 |
| 7 | #7 Dark mode tokens | Cluster under #6 | Link from #6 |
| 8 | #8 OKLCH palettes | Cluster under #6 | Link from #6, #7 |
| 9 | #9 Governance | Fourth pillar | Link from #1, #4, #6 |
| 10 | #10 Team structure | Biggest content gap | Link from #9 |
| 11 | #11 Operating model | Fifth pillar, ties #9–#10 together | Link from #1, #9, #10 |
| 12 | #12 Contribution model | Completes governance cluster | Link from #9, #11 |
| 13 | #13 Documentation | Completes build cluster | Link from #4, #12 |
| 14 | #14 Measuring success | Sets up ROI | Link from #4, #11 |
| 15 | #15 ROI and cost | Highest intent, links to all | Link from #1, #3, #5, #10, #14 |

After each publish, add the new article's links into the earlier articles listed: this step is what
makes the cluster model work, and it's easy to skip.

---

## 5. Backlog: articles 16–30

| # | Working title | Primary keyword (to verify) | Hub | Pillar | Playbook |
|---|---|---|---|---|---|
| 16 | Design system versioning and breaking changes | design system versioning | Governance | P4 | Ch. 05.6, 22.3, 33 |
| 17 | Design token naming conventions | design token naming convention | Foundations | P3 | Ch. 20.3 |
| 18 | Component props best practices | component props best practices | Components | P2 | Ch. 19 |
| 19 | 4px vs 8px spacing systems | 8px grid | Foundations | P3 | Ch. 09 |
| 20 | How to build a type scale | type scale | Foundations | P3 | Ch. 08.2–08.3 |
| 21 | How to run design system office hours | design system office hours | Operating model | P5 | Ch. 29.2 |
| 22 | Design system release notes (templates) | design system release notes | Operating model | P5 | Ch. 33 |
| 23 | The design system maturity model | design system maturity model | Fundamentals | P1 | Ch. 02.2 |
| 24 | Which components to build first | design system first components | Components | P2 | Ch. 13.3 |
| 25 | Build vs buy: headless libraries | headless ui library | Components | P2 | Ch. 13.4 |
| 26 | Colour contrast for design systems | color contrast design system | Foundations (Accessibility tag) | P3 | Ch. 07.4 |
| 27 | Multi-brand design systems | multi-brand design system | Foundations | P3 | Ch. 07.7, 25 |
| 28 | Design system champions programme | design system champions | Adoption | P5 | Ch. 34.4 |
| 29 | Component complexity: estimating DS work | design system estimation | Components | P2 | Ch. 17 |
| 30 | AI in design systems | ai design system | Documentation | — | Ch. 26.5–26.6 |

Re-prioritise the backlog after week 10 using Search Console data from the first articles.

---

## 6. Decisions needed from you

1. **Score adjustments**: three articles (#10, #11, #15) were scored up by judgement. Keep, or use the raw scores?
2. **ROI timing**: publish #15 in week 15 (topical build-up first) or move it to week 5 (leads sooner)?
3. **Hub URL**: `/writing/` (current) or rename to `/blog/` or `/journal/`? `/writing/` is recommended, as it already exists.
4. **Medium**: republish all three posts on-site with canonicals, as recommended?
5. **Templates**: free with no email capture (recommended for links), or gated?
6. **Keyword verification**: can someone run `keyword-verification.csv` through Keyword Planner or Ahrefs before writing begins?
