# Phase 1 — Research and analysis

Layer One · Design systems knowledge hub · SEO strategy (draft for review)
Research date: 9 November 2026

> **About the data in this document.** No keyword tool (Google Keyword Planner, Ahrefs, Semrush)
> was available while preparing it, so **no search volumes, keyword difficulty scores or ranking
> positions are quoted as facts.** Demand and competition are given as qualitative tiers, derived from
> what currently ranks on Google for each query (observed via live searches on the research date) and
> from how often the topic appears across practitioner sources. Every target keyword is listed in
> [`keyword-verification.csv`](keyword-verification.csv) so the numbers can be filled in from a real
> tool before publishing. Treat every tier as an estimate until then.

---

## 1. Reference website: vanschneider.com (DESK Magazine)

Analysed: `/blog/`, `/blog/category/design/`, `/blog/series/`, `/blog/category/young-designers/`
and a representative article (`/blog/young-designers/boring-design/`). The focus here is information
architecture and on-page SEO, not visual design.

### 1.1 How the content is organised

| Layer | What the site does | Example |
|---|---|---|
| **Hub** | One publication home, "The DESK Magazine", at `/blog/`. Positions the archive as a body of work ("667 essays… over 13+ years"). | `/blog/` |
| **Categories** | ~17 topical categories, each with a public **article count** (Design 414, Career Advice 166, Portfolio Project 91…). Category pages have their own title, meta description and `Series` schema. | `/blog/category/design/` |
| **Series** | A separate "Series" index presents a curated, **numbered** subset of categories as learning tracks: "01 Portfolio Tips → 02 Design in… → 07 Young Designers". Tagline: "One chapter at a time". | `/blog/series/` |
| **Articles** | Each article carries several tags (e.g. *Design*, *Dear Young Designer*, *Career Advice*), so one piece appears in several categories. | `article:tag` × 3 |
| **Archive views** | A dense archive table: No. · Title · Date · Length (reading time), plus a "Most popular essays" block and pagination (`/page/2/`). | Category pages |
| **Related content** | Article footers link to two other articles in the same series. | `/young-designers/dreamed-youre-now/` |

### 1.2 URL and technical patterns

- **Platform:** Ghost. Clean, lowercase, hyphenated slugs with trailing slashes.
- **Mixed URL scheme:** series articles are nested under the series slug (`/blog/young-designers/boring-design/`),
  other articles are flat (`/blog/how-to-prioritize-and-organize-your-work/`).
- **Structured data:** `Article` schema with `author` as a `Person` (with `sameAs` social profiles),
  `datePublished` and `dateModified`; category pages use `Series`.
- **Social and meta:** `og:image` at 1200×748 for every article; `article:published_time`,
  `article:modified_time`, and `article:tag` meta tags; canonical tags everywhere; RSS feed.
- **On-page:** a single H1 that matches the title tag. Essays tend to have few or no H2s.

### 1.3 What to adopt, and what to do differently

| Adopt | Do differently for Layer One |
|---|---|
| A named publication hub that presents the archive as a body of work | Titles built around search terms. DESK's essay titles ("Give me the boring design jobs") work for a loyal readership but rarely match what people type into Google |
| Categories with descriptions and visible article counts | One consistent URL scheme (flat article slugs), so articles can move between series without changing URL |
| Numbered **series** as guided learning paths | Deep H2/H3 structure in every article, since our content is instructional, not essays |
| Multiple categories per article (tags) | **Pillar pages** at the top of each category, which DESK doesn't have |
| Reading time, dates and an archive table | Visible "last updated" dates. Design systems advice dates quickly, and freshness is a ranking and trust signal |
| `Article` schema with a `Person` author; `og:image` everywhere | Add `BreadcrumbList` and link the author to real case studies (E-E-A-T) |
| In-series related links | Contextual links inside the body text plus a "next in series" link, not only a footer block |

---

## 2. Layer One today (baseline)

Crawled: `/writing`, `/sitemap.xml`, `/robots.txt`, `/blog-librarian-vs-leader`.

| Finding | Why it matters | Recommendation |
|---|---|---|
| Four articles in total; **three are hosted on Medium**, one on-site | Links and authority earned by the Medium posts accrue to medium.com, not layerone.co.in | Re-publish all three on layerone.co.in. If they stay on Medium, set Medium's canonical URL to the Layer One version (Medium's import tool does this) |
| The one on-site article sits at a flat root URL (`/blog-librarian-vs-leader`) | No folder groups the content, so neither search engines nor readers see a knowledge hub | Move all articles under `/writing/`, with a 301 redirect from the old URL |
| No `Article` structured data or published date on the article | Weaker eligibility for article features; no freshness signal | Add `Article` + `BreadcrumbList` JSON-LD, plus visible published and updated dates |
| `og:image` present; good title and meta description; clean H1→H2 structure | A solid on-page base | Keep, and template it |
| Strong `/work/` case studies (CARS24 tokens and governance, IBM, JPMC checks) are in the sitemap | They're first-hand evidence of experience, which is exactly what Google's helpful-content guidance rewards | Link each article to the most relevant case study, and each case study back to its articles |
| `robots.txt` allows everything; sitemap present | Fine | Make sure `/writing/*` pages are added to the sitemap automatically |

---

## 3. The search landscape for design systems

Live searches on 9 November 2026 across 18 core queries. The pattern is consistent.

### 3.1 Who ranks

| Query family | Who currently ranks (observed) | What that tells us |
|---|---|---|
| Definitions ("what is a design system") | Figma's blog, agency blogs (Ramotion, Lollypop), glossaries, Creative Bloq, Contentful | Broad, top-of-funnel, very competitive. Most answers are shallow and similar |
| Comparisons ("design system vs style guide / component library") | UXPin (title includes "(2026)"), NN/g, Netguru, Eleken, Medium posts | Comparison intent with a clear format: a table plus a hierarchy. NN/g is the authority to out-do on depth, not on name |
| How-to ("how to build a design system") | Frontify, UXPin, Medium (Glassdoor), Design Systems Collective, agency posts with "2026" in the title | Step-by-step listicles. Few cover the people and process side or staged investment |
| Tokens ("design tokens primitive semantic") | Design system docs (UAL, Backbase, Hub24), vendor blogs (Contentful, Verpex), Medium / uxdesign.cc | Strong demand from practitioners. Few articles reflect the stable DTCG 2025.10 format |
| Governance and contribution | Figr, UXPin, Medium (Société Générale), Rangle, Kyan, Brad Frost | Medium competition, mostly generic. Few give decision-rights tables or escalation paths |
| Team structure | GOV.UK, zeroheight, Medium (Sprout Social), EightShapes, LogRocket | Generic advice. **No widely ranking resource gives team structures by company size with org charts** |
| Documentation | UXPin, ones.com, Storybook, Magic Patterns, uxdesign.cc | Listicles ("7 best practices"). Few give a page template plus a portal structure |
| Metrics and adoption | Supernova, Dan Mall, Knapsack, Lucid, Netguru, zeroheight help | Credible practitioner voices exist. The gap is metrics *by maturity stage* and dashboards |
| ROI and cost | Smashing Magazine (formula article), Figr, Supernova, Substack posts | Commercial intent. Many claims are unsourced. **An honest model with a break-even is rare** |
| Colour (OKLCH palettes) | LogRocket, Evil Martians, uxdesign.cc, Atmos, tool sites | A growing technical topic. Few combine OKLCH, tokens and computed contrast data |
| Dark mode tokens | Primer docs, Chakra, uxdesign.cc, GitLab handbook, vendor blogs | Tutorial intent. Opportunity in a worked, end-to-end example |
| Audit and inventory | Brad Frost, Mainmatter, 18F, Ramotion, Lazarev, devsquad | Medium competition. A natural bridge to Layer One's audit service |
| Startups ("do I need a design system") | Medium, Design Systems Collective, agency blogs | Founder intent. Opinions conflict. A decision framework stands out |
| Versioning and deprecation | EightShapes (Curtis), Volvo, Agriculture.gov.au, community posts | Low competition, high practitioner value |

### 3.2 How the ranking articles are built (titles, structure, links)

Patterns that recur among the pages ranking for these queries:

1. **Titles lead with the query, then add a qualifier**: "Design System vs. Pattern Library vs. Style Guide vs. Component Library: What's the Difference? (2026)", "How to Build a Design System: A Step-by-Step Guide", "Design Tokens 2.0: The Ultimate Guide". Common qualifiers are *complete guide*, *step-by-step*, *explained*, *examples*, *best practices*, a year, and a number.
2. **The definition comes in the first 100 words.** Pages that rank for "what is…" answer in one or two plain sentences before expanding. This is the snippet Google tends to lift.
3. **A table for anything comparative**, since comparison queries reward scannable tables.
4. **H2s phrased like the questions people ask** ("Why do you need a design system?", "What are design tokens?"), which also matches Google's "People also ask" boxes.
5. **Examples from named systems** (Material, Carbon, Polaris, Atlassian, GOV.UK) as credibility anchors.
6. **Medium and uxdesign.cc posts rank for long-tail queries** because of domain strength, not depth. A focused article on layerone.co.in can compete with them on long-tail terms once the domain has topical depth.
7. **Vendor blogs (UXPin, Supernova, Frontify, zeroheight) win on volume of content and internal linking**, not on depth. Their articles funnel to their own product.

### 3.3 Search intent across the funnel

| Stage | Typical queries | Searcher | What they need | Layer One's role |
|---|---|---|---|---|
| Learn | what is a design system; design tokens; atomic design | Junior designers, PMs, founders | Clear definitions and examples | Be the best explanation, building trust |
| Decide | do I need a design system; design system ROI; design system cost | Founders, product and design leaders | Decision frameworks, numbers, honesty | **Highest commercial value**, the natural place for an audit CTA |
| Build | how to build a design system; design system audit; tokens naming; dark mode tokens | Design system designers and engineers | Step-by-step methods, templates | Show expertise through depth |
| Run | design system governance; team structure; contribution model; versioning; metrics | DS leads, DesignOps, engineering managers | Operating models, processes, templates | **Layer One's core differentiator**; few competitors cover this well |
| Scale | multi-brand design system; enterprise design system; migration | Enterprise leaders | Architecture and governance at scale | Enterprise consulting leads |

---

## 4. Content gaps and opportunities

Where the current search results are weak, and where the playbook gives Layer One a clear advantage:

1. **Operating model by company size.** Most results give a generic "centralised vs federated" summary. The playbook has five company archetypes, org charts, role tables and transition signals (Ch. 27–28). *Opportunity: own "design system team structure" and "design system operating model".*
2. **Honest economics.** Most ROI content quotes unverified percentages. The playbook has a transparent model with break-even by team size and a sensitivity table (Ch. 04). *Opportunity: "design system ROI" and "design system cost", with commercial intent.*
3. **Computed, verifiable examples.** Colour content rarely shows real contrast data. The playbook's palette, contrast matrix and semantic pairings are computed (Ch. 07). *Opportunity: "OKLCH color palette", "accessible color tokens", "dark mode design tokens".*
4. **Process artefacts people can copy.** Decision-rights matrices, request forms, scoring models, communication templates and a decision log (Ch. 33, 35, 36) are rare in ranking content. *Opportunity: governance, contribution and versioning long-tail.*
5. **The stable DTCG 2025.10 token format.** Many token articles predate it. *Opportunity: a current, authoritative design tokens guide.*
6. **Real situations.** The playbook's casebook (Ch. 22) and scenarios give concrete problem-solving content that generic listicles lack.
7. **First-hand experience (E-E-A-T).** Layer One can link articles to real case studies (CARS24 tokens and governance, IBM, JPMC checks). Most ranking agency blogs can't show that depth.

## 5. Sources consulted

Reference and baseline: vanschneider.com/blog (category, series and article pages); layerone.co.in
(`/writing`, sitemap, robots, article). SERP observations came from live web searches on the research
date for the queries in §3.1. Ranking pages observed include Figma, NN/g, UXPin, Frontify, Supernova,
zeroheight, Smashing Magazine, Brad Frost, EightShapes/Nathan Curtis, Dan Mall, GOV.UK Design System,
Primer, LogRocket, Evil Martians, Medium/uxdesign.cc and Design Systems Collective. The playbook's own
reference list (73 sources) supports the article content itself.
