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

## 3. Voice

Layer One's own rules set the tone: *"Every decision comes with a reason."*

- **Direct.** Short declarative sentences. Recommend; don't survey.
- **Specific.** "Use 11 steps" beats "use an appropriate number of steps".
- **Honest about evidence.** We say how strong the evidence is every time.
- **Opinionated, and labelled as such.** Opinions are allowed. They must be marked.
- **No filler.** No "in today's fast-paced digital landscape". No exclamation marks.
- **British/Indian English spelling for prose** (colour, organisation), but
  `color` in code, because that is what CSS and the token spec use.

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

## 6. Page system (print)

- A4 portrait, 18 mm outer / 22 mm inner margins, 12-column grid, 5 mm gutters.
- Running header: part name (left) · chapter name (right), in mono, 7.5 pt.
- Folio: page number bottom outside, with the Layer One mark.
- Chapters start on a new page; part openers are full-bleed ink spreads.
- Figures, tables, callouts and checklists never split across pages.

## 7. What "done" means for a chapter

- [ ] Opens with "Read this if…" and a 3-point summary of takeaways
- [ ] Every important concept has a figure that shows the mechanism
- [ ] At least one practical artefact: checklist, framework, decision tree or template
- [ ] Common mistakes called out explicitly
- [ ] Evidence labels on claims; citations resolve to References
- [ ] Prints without orphaned headings or split figures
