# Phase 3 — Content strategy and architecture

How the Layer One knowledge hub is organised: hubs (categories), pillar pages, topic clusters,
series, URLs, internal linking, on-page standards and the trust signals that let a small site
compete with vendor blogs.

---

## 1. Positioning

**One line:** *Layer One writes the practical, honest guide to building and running design systems:
the people and process side as much as the pixels.*

| Principle | What it means in practice |
|---|---|
| **Teach first, sell never** | Every article must be fully useful without contacting Layer One. CTAs are offered, never required. |
| **Show the working** | Use computed data (contrast ratios, the ROI model, scoring formulas) and real templates rather than claims. Label evidence the way the playbook does: standard, documented, practitioner view, illustration. |
| **Own the operating model** | Competitors are strongest on definitions and tools. Layer One is strongest on governance, team structure, economics and day-to-day operations. Weight the roadmap toward that. |
| **Write for a smart beginner** | The playbook's voice: a senior designer across the table. Define every term the first time it appears. |
| **Experience on the page** | Each article references a real Layer One engagement (CARS24, IBM, JPMC) where relevant, and is bylined by Aniket Pandey. |

---

## 2. Hubs (categories)

Eight hubs. Each article has **one primary hub** (it sets the breadcrumb and URL of the hub page) and
up to two secondary tags. Following the DESK model, hub pages show a description, an article count, an
archive table and "start here" links.

| # | Hub | Slug | Covers | Pillar page | Playbook parts |
|---|---|---|---|---|---|
| 1 | **Fundamentals** | `fundamentals` | Definitions, comparisons, maturity, whether you need one | *What is a design system?* | 01 |
| 2 | **Business case** | `business-case` | ROI, cost, budgets, benefits, funding | *Design system ROI* (cluster lead) | 01 |
| 3 | **Foundations & tokens** | `foundations-and-tokens` | Tokens, colour, typography, spacing, layout, theming | *Design tokens: the complete guide* | 02 |
| 4 | **Components & architecture** | `components` | Auditing, building, props, architecture, patterns | *How to build a design system* | 03–05 |
| 5 | **Documentation & tooling** | `documentation` | Docs, portals, Figma libraries, tools, AI | *Design system documentation* (cluster lead) | 03, 05, 06 |
| 6 | **Governance** | `governance` | Decision rights, contribution, versioning, lifecycle | *Design system governance* | 06 |
| 7 | **Operating model & teams** | `operations` | Team structure, operating model by size, rituals, roadmap | *Design system operating model* | 06 |
| 8 | **Adoption & measurement** | `adoption` | Metrics, enablement, research, community, champions | *How to measure design system success* (cluster lead) | 06 |

**Accessibility** is a cross-cutting tag, not a hub. It appears in colour, components, patterns and
documentation articles, with its own tag page once it has five or more articles.

> **Why not 17 categories like DESK?** A new site needs topical depth before breadth. Eight hubs, each
> with three to six articles in year one, sends a clearer topical signal than many thin categories.

---

## 3. Pillars and topic clusters

A **pillar** is a long (3,000–5,000 words), evergreen guide that answers the broad query and links down
to every cluster article. **Cluster articles** (1,500–2,500 words) each answer one specific query and
link back up to the pillar and across to one or two siblings.

```
                              ┌───────────────────────────────┐
                              │  /writing/  (knowledge hub)   │
                              └──────────────┬────────────────┘
        ┌──────────────────────┬─────────────┼───────────────────────┬────────────────────────┐
        ▼                      ▼             ▼                       ▼                        ▼
 PILLAR 1               PILLAR 2        PILLAR 3                PILLAR 4                 PILLAR 5
 What is a              How to build    Design tokens           Design system            Design system
 design system          a design system complete guide          governance               operating model
 ├ vs style guide/UI kit├ audit /       ├ semantic tokens &     ├ contribution model     ├ team structure
 ├ do you need one        inventory     │  dark mode            ├ versioning (backlog)   ├ office hours (bl.)
 ├ maturity model (bl.) ├ first comps   ├ OKLCH palettes        ├ lifecycle (backlog)    ├ measuring success*
 └ ROI & cost* ────────►├ documentation*├ token naming (bl.)    └ decision log (bl.)     └ roadmap (backlog)
                        └ props (bl.)   └ type / spacing (bl.)
```
`*` = cluster lead that heads its own hub but belongs to a pillar's cluster. `(bl.)` = backlog article.

| Pillar (P) | Primary query | Cluster articles in the first 15 | Backlog cluster articles |
|---|---|---|---|
| **P1 What is a design system** | what is a design system | #2 vs style guide / UI kit, #3 do you need one, #15 ROI and cost | maturity model, anatomy, signs you've outgrown a UI kit |
| **P2 How to build a design system** | how to build a design system | #4 audit, #13 documentation | first components matrix, build vs buy, props, component checklist |
| **P3 Design tokens guide** | design tokens | #7 semantic tokens and dark mode, #8 OKLCH palettes | token naming, DTCG format, type scale, 4px vs 8px, multi-brand theming |
| **P4 Governance** | design system governance | #12 contribution model | versioning, lifecycle, decision log, migration |
| **P5 Operating model** | design system operating model | #10 team structure, #14 measuring success | office hours, champions, onboarding, release notes, 12-month roadmap |

---

## 4. Series (guided reading paths)

Borrowed from DESK's numbered series: they turn the archive into a curriculum and increase pages per
visit. Series are an **overlay**, so they don't change URLs.

| No. | Series | For | Articles (in reading order) |
|---|---|---|---|
| 01 | **Design Systems 101** | Newcomers, PMs, founders | What is a design system → vs style guide → do you need one → how to build one |
| 02 | **Tokens in Practice** | Designers and front-end engineers | Design tokens guide → OKLCH palettes → semantic tokens and dark mode → (backlog: naming, type scale, spacing) |
| 03 | **The Operating Model** | DS leads, DesignOps, managers | Operating model → team structure → governance → contribution model → measuring success |
| 04 | **The Business Case** | Leaders and budget holders | Do you need one → ROI and cost → audit → (backlog: three budgets) |
| 05 | **The Casebook** (2027) | Practitioners | Short scenario articles from playbook Ch. 22 |

Each series page lists articles as numbered chapters ("01 · What is a design system · 12 min"), and
each article shows "Part 2 of 4 in Design Systems 101" with previous and next links.

---

## 5. URL structure

| Page type | Pattern | Example |
|---|---|---|
| Knowledge hub | `/writing/` | `/writing/` |
| Hub (category) | `/writing/topics/{hub}/` | `/writing/topics/governance/` |
| Series | `/writing/series/{series}/` | `/writing/series/design-systems-101/` |
| Article (incl. pillars) | `/writing/{slug}/` | `/writing/design-system-governance/` |
| Author | `/about/aniket-pandey/` (or existing about page) | |

Rules:
- **Flat article URLs.** Moving an article between hubs or series never changes its URL (the main weakness in DESK's mixed scheme).
- **Short, query-matched slugs**, 3–6 words, no dates, no stop words unless needed for meaning.
- **No year in slugs**, even when the title carries "(2026)", so the URL stays evergreen when the title is refreshed.
- **Redirect** `/blog-librarian-vs-leader` → `/writing/design-system-librarian-vs-leader/` (301).
- **Trailing slash** used consistently, with a canonical tag on every page.

---

## 6. Internal linking model

| Link type | Rule | Anchor text |
|---|---|---|
| **Up** (cluster → pillar) | Every cluster article links to its pillar within the first 30% of the text | Pillar's primary keyword, in natural phrasing |
| **Down** (pillar → cluster) | A pillar links to every cluster article, in the relevant section, not just a list at the end | Each cluster article's primary keyword |
| **Across** (sibling) | 1–2 contextual links to sibling articles where the reader would naturally need them | Descriptive, varied |
| **Cross-pillar** | Where topics meet (tokens ↔ governance, ROI ↔ operating model) | Descriptive |
| **To proof** | Link to the most relevant `/work/` case study at least once | "how we did this at CARS24" (natural phrasing) |
| **Series nav** | Previous / next links in series footer | Article titles |
| **Hub archive** | Hub pages link to all articles in that hub | Article titles |

Targets per article: 3–8 contextual internal links, at least one to a pillar and one to a case study.
Never use the same anchor text for two different URLs.

**Case study map**

| Topic | Link to |
|---|---|
| Tokens, colour, theming | `/work/cars24-tokens` |
| Governance, contribution | `/work/cars24-governance`, `/work/jpmc-system-checks` |
| Components, pattern library | `/work/cars24-lego`, `/work/cars24-pattern-library`, `/work/jpmc-patterns` |
| Enterprise and multi-product scale | `/work/ibm-design-systems`, `/work/ibm-riyadh-air`, `/work/ibm-cardinal-health` |
| Operations and internal tools | `/work/ibm-riyadh-air-ops`, `/work/cars24-internal-tools` |

---

## 7. On-page standards (every article)

| Element | Standard |
|---|---|
| **Title tag** | ≤ 60 characters; primary keyword at the start; a qualifier (guide, examples, template, a number). Format: `{Primary keyword}: {benefit} | Layer One` only if length allows. |
| **Meta description** | 140–155 characters; answers the query, names a specific thing the reader gets (template, model, examples). Not a sales line. |
| **H1** | One per page; may be longer and more human than the title tag. |
| **Intro** | Plain-language answer or definition within the first 100 words (snippet-ready), then what the article covers. |
| **H2s** | Phrased as the reader's questions where natural; each section answerable on its own. |
| **H3s** | For steps, sub-types and examples. Never skip levels. |
| **Table of contents** | Jump links for articles over 1,500 words. |
| **Visuals** | At least one original diagram or table from the playbook, with descriptive alt text. `og:image` 1200×630. |
| **FAQ** | 4–6 questions from "People also ask" and the playbook, answered in 40–60 words each. |
| **External links** | 3–6 to primary sources (W3C, WCAG, DTCG, NN/g, named design systems, practitioner originals). Open in the same tab. |
| **The short version** | A closing summary box, in the style of the playbook's chapter endings. |
| **Dates** | Visible "Published" and "Updated" dates. Review every article at least once a year. |
| **Reading time** | Shown under the title, as on DESK. |
| **Byline** | Aniket Pandey, with a one-line bio and link to the author page. |

### Structured data

| Schema | Where | Notes |
|---|---|---|
| `Article` (or `BlogPosting`) | Every article | `headline`, `author` (`Person` with `url` and `sameAs` LinkedIn), `publisher` (Layer One), `datePublished`, `dateModified`, `image` |
| `BreadcrumbList` | Every article and hub page | Writing → Hub → Article |
| `Person` | Author page | `jobTitle`, `worksFor`, `sameAs`, `knowsAbout` |
| `CollectionPage` / `ItemList` | Hub and series pages | |
| `FAQPage` | **Optional** | Since August 2023 Google shows FAQ rich results only for well-known government and health sites, so don't expect a rich result. Keep the FAQ section for readers and "People also ask". |
| `HowTo` | **Don't use** | Google removed HowTo rich results in 2023. Use clear numbered H3 steps instead. |

---

## 8. Authority and trust (E-E-A-T) without selling

1. **Author page** with experience: years in design systems, named clients and links to case studies.
2. **Evidence labels** borrowed from the playbook ("Standard", "Documented", "Practitioner view", "Illustration") on claims, so readers can tell fact from opinion.
3. **Cite originals**: link Brad Frost, Nathan Curtis, Dan Mall, NN/g, W3C rather than paraphrasing anonymously. This is what experts do, and it attracts links back.
4. **Original assets** people will link to: the ROI calculator, contrast matrix, request-scoring sheet, decision-rights template. Offer them as free downloads (no email wall for the article's own template).
5. **Update log** at the bottom of pillar pages ("Updated March 2027: DTCG section revised").

### CTAs (soft, contextual, one primary per article)

| Article intent | Primary CTA | Placement |
|---|---|---|
| Learn (definitions) | Read the next article in the series; download the playbook | End of article |
| Decide (need, ROI, cost) | "Not sure where you stand? A two-week audit gives you a baseline" → `/pricing` | After the decision framework, and at the end |
| Build (how-to) | Free template download | Inside the relevant section |
| Run (operations) | Template download; "talk it through" → `cal.com/layerone` | End of article |

No pop-ups or interstitials. At most one inline and one end-of-article CTA.

---

## 9. Medium and existing content

| Current asset | Action |
|---|---|
| "Foundations of modern design systems" (Medium) | Republish on-site as a cluster article under Fundamentals. Set Medium's canonical to the Layer One URL. |
| "Design systems as operational backbones" (Medium) | Republish under Operating model; link from the operating model pillar. |
| "Most design systems are just expensive UI libraries" (Medium) | Republish under Fundamentals as an opinion piece; strong internal link to #2 (vs UI kit). |
| `/blog-librarian-vs-leader` | Move to `/writing/design-system-librarian-vs-leader/` with a 301; tag it Operating model. |

Going forward: **publish on layerone.co.in first**, then syndicate to Medium and LinkedIn after
about a week, with a canonical link back.

---

## 10. Measurement

| Metric | Source | Year-one target (directional, not a forecast) |
|---|---|---|
| Pages indexed and ranking for the primary keyword (any position) | Google Search Console | All 15 articles |
| Impressions and clicks per hub | Search Console | Steady month-on-month growth |
| Long-tail queries in the top 10 | Search Console | Track the trend; no fixed number until a baseline exists |
| Pages per session from organic visitors | Analytics | Above 1.5 (internal linking is working) |
| Template downloads, audit enquiries, cal.com bookings from `/writing/` | Analytics with UTM | Track from launch |
| Referring domains to pillars | Search Console links report | Growth from original assets |

Review monthly; refresh any article that loses impressions for two consecutive months.
