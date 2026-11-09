# Editorial direction

**The Design Systems Playbook** · Layer One · Author: Aniket Pandey

## 1. What this book is

A field guide that a founder, a design leader and an engineering leader can each
read and act on. It is a reference you return to, not a brochure you skim. Every
chapter must leave the reader able to make a decision they could not make before.

The standard: *useful even to someone who never becomes a Layer One client.*

## 2. The reader

We write for a smart reader who is new to design systems, and we never talk down to the
expert reading over their shoulder. In practice:

| Reader | What they need from us | What they skip |
|---|---|---|
| Founder / CEO | "Do we need this, what does it cost, when?" | Token naming |
| Product leader | Velocity, quality, how teams change | Colour maths |
| Design leader | Operating model, governance, a plan | Definitions |
| Senior designer | Architecture of foundations, the *why* | Budgeting |
| Engineering leader | Tokens → code, versioning, ownership | Brand theory |

The book signposts these routes on the "How to read this playbook" page, and every
chapter opens with a one-line **"Read this if…"**.

## 3. Voice (edition 0.2 onwards)

**A senior designer explaining things across a table to someone smart who has never
worked with a design system.** Conversational, experienced, never intimidating.

Writing principles:
- **Assume zero prior knowledge.** Never use a term before explaining it. The first
  time a term appears, add a "New word" margin note (`<div class="term">`).
- **Why before how.** Open each section with the situation or problem, then explain.
- **Story first.** Use relatable workplace scenarios (`<div class="scenario">`): the
  situation, what goes wrong, what a design system changes. Composite, never a client.
- **Everyday words.** "Named values" before "tokens"; "job names" before "semantic
  tokens"; "settings" before "props". Introduce the industry term once the idea is clear.
- **Prose over bullets.** Use lists for checklists and steps, not for explanations.
- **Opinionated, and labelled as such.** Opinions are allowed; mark them [[prac]].
- **Honest about evidence.** Every statistic cited, every weakness stated.
- **No filler.** No "in today's fast-paced landscape". No exclamation marks.
- **Operational lens.** Wherever possible, show how things work inside a company over
  years: who owns it, who decides, how requests and changes flow.
- **British/Indian English spelling for prose** (colour, organisation), `color` in code.
- Practitioner references (Curtis, Frost, Callahan, Mall, Kholmatova, GOV.UK, zeroheight)
  are interpreted in our own words and cited, never reproduced.

## 4. The evidence system

Four labels, used consistently in the margin of any claim that matters:

| Label | Meaning | Example |
|---|---|---|
| **Standard** | Normative specification. Non-negotiable if you claim conformance. | WCAG 2.2 contrast minimums |
| **Documented** | Published research, case study or official system documentation, cited. | Sparkbox's 47% build-time finding |
| **Practice** | Layer One's recommendation from practice. Reasoned, not universal. | "Start with 11-step ramps" |
| **Illustrative** | A worked example with stated assumptions. Not a measured result. | Budget scenarios |

Rules:
1. No statistic without a citation number linking to the References page.
2. Every vendor-published or small-sample study carries its caveat inline.
3. Costs are expressed first in **FTE-months** (portable across markets), then
   converted with an explicitly stated, adjustable rate.
4. No invented case studies, testimonials, logos or outcomes. Worked examples use a
   clearly fictional product, **Ledgerly** (a B2B finance SaaS).

## 5. Visual language

Derived from the live Layer One site (layerone.co.in) and its token set:

- **Ink** `#0b0d12` and **Paper** `#f6f6f3` as the two grounds. Dark for covers, part
  openers and "big idea" spreads; paper for reading pages.
- **Signal** `#ff6b3d` as the single accent. Used for emphasis, never decoration;
  at most one signal element per spread competes for attention.
- **Schibsted Grotesk** (variable, 400–900) for everything typographic;
  **JetBrains Mono** for tokens, values, labels and code. The mono face is the "voice
  of the system": anything a machine would read is set in mono.
- **The quarter-cut circle** (the Layer One mark) is the recurring geometric motif:
  layers, quadrants, the relationship between foundation and surface.
- Hairline rules, generous negative space, a 12-column page grid, and mono eyebrows
  (`02.3 — Colour architecture`) on every section.

**Figures are arguments, not decoration.** Every figure must show a mechanism
(a hierarchy, a ramp, a scale, a before/after), and its caption must say what to
notice. If a figure could be deleted without losing information, delete it.

## 6. Page system (print, the source of truth from edition 0.2)

The PDF is the primary deliverable. It is still generated from the HTML sources,
because that keeps every figure data-driven and every edit reviewable in git.

Page grammar, so readers always know where a topic begins and ends:
- **Part** → full-bleed ink opener page.
- **Chapter** → its own opener page: big number, title, promise, "Read this if",
  "What you'll leave with", and an auto-generated "In this chapter" list.
- **Section** → starts at the top of a new page under a heavy rule and section number.
  If a section would leave an almost-empty page, `export-pdf.mjs` first tightens it
  slightly (fit-1, fit-2) and, if that isn't enough, lets the next section in the same
  chapter start on that page (`follow`). Chapters always start on a new page.
- **Chapter end** → "The short version" summary box plus an auto-generated "Up next".
- **Grid (1.0)** → one 12-column grid on a 168 mm text block with 5 mm gutters. All text,
  headings, ledes and captions span the full grid width; two-part layouts split 4 + 8;
  card rows use 6+6, 4+4+4 or 3+3+3+3. "New word" notes are full-width bands (4 + 8).
- A4 portrait; margins 22/20/22/22 mm; running heads (part · chapter) and folio in mono.
- Figures, callouts, scenarios and checklists never split; long tables may, with headers repeated.

## 7. What "done" means for a chapter

- [ ] Opens with "Read this if…" and a 3-point summary of takeaways
- [ ] Every important concept has a figure that shows the mechanism
- [ ] At least one practical artefact: checklist, framework, decision tree or template
- [ ] Common mistakes called out explicitly
- [ ] Evidence labels on claims; citations resolve to References
- [ ] Prints without orphaned headings or split figures
