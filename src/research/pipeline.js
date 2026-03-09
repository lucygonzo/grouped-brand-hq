/**
 * RESEARCH PIPELINE
 * Sequential, step-by-step research process for each Brand HQ section.
 * Each item defines: the section, the research prompt to paste into Claude,
 * what to do with the output, and which Drive file to populate.
 */

export const RESEARCH_STEPS = [
  {
    id: 'company',
    section: 'Company Profile',
    step: 1,
    priority: 'critical',
    driveFile: '01_Company_Research.md',
    estimatedTime: '20 min',
    inputsNeeded: ['Website URL', 'Any existing about page / pitch deck / bio'],
    prompt: `You are a brand strategist building a comprehensive company profile for grouped.

Using the context below, create a structured Markdown document for: 01_Company_Research.md

---
COMPANY: grouped.
WEBSITE: https://grouped.com
CONTEXT: [PASTE ANY RELEVANT BIOS, ABOUT PAGES, PITCH DECK TEXT HERE]
---

Generate the following sections with clear H2 headings:

## Founding Story
- Who founded it, when, and why
- The merger story (Tribly + Grouped)
- Origin insight or personal experience that led to the product

## Mission & Vision
- Mission statement (1-2 sentences)
- Vision statement (where we're going)

## Company Positioning
- One-line description for: investors / artists / press
- Core thesis (the fundamental belief the business is built on)

## Team
- Key personnel, roles, and relevant background
- What makes this team uniquely qualified

## Milestones
- Key dates and achievements to date
- Current phase / stage

## Open Questions
- [List any gaps or unverified information as N/A]

Format rules: Use H2 for sections, bullet points within, keep every bullet under 2 lines. Mark anything unverified with [UNCONFIRMED].`,
    status: 'pending',
  },
  {
    id: 'competitive',
    section: 'Competitive Analysis',
    step: 2,
    priority: 'critical',
    driveFile: '05_Competitive_Analysis.md',
    estimatedTime: '45 min',
    inputsNeeded: ['Competitor names (from client)', 'Any existing competitive intel'],
    prompt: `You are a brand strategist building a competitive analysis for grouped. — a direct-to-fan growth platform for independent musicians.

Using web research and the context below, create: 05_Competitive_Analysis.md

Context about grouped.:
- Smart Swaps: fan data capture via early access trades (email/phone for early listen)
- Groups: owned fan community spaces
- Fan Passes: wallet-based push notifications at 1/1000th SMS cost
- Pricing: Free / $7 / $19 / $39 per month
- Key claim: No legacy revenue to protect — can undercut SMS CRMs with impunity

---
Known competitors to research: Laylo, Community.com, OpenStage, Discord, Mailchimp, Patreon, Bandcamp, Substack
[ADD ANY ADDITIONAL COMPETITORS THE CLIENT MENTIONS]
---

For EACH competitor, generate:

## [Competitor Name]
**Category:** Direct | Adjacent | Same Industry | Same Audience | Inspirational
**Threat Level:** High | Medium | Watch
**Status:** Active | Emerging | Declining
**Primary Colors:** [hex codes or describe]
**Positioning:** [1 sentence — what they say they do]
**Business Model:** [how they make money]
**Target Customer:** [who they're going after]

**Strengths:**
- [bullet]

**Weaknesses / Gaps:**
- [bullet]

**Grouped's Moat vs This Competitor:**
> [1-2 sentences: what makes grouped. win here]

---
After all competitors, add:

## Market Position Summary
[2-3 paragraphs synthesizing the competitive landscape, where the gaps are, and why grouped.'s position is defensible]

## Greenspace Opportunity
[Describe the visual and verbal white space in the market — what no one else is saying or looking like]`,
    status: 'pending',
  },
  {
    id: 'audience',
    section: 'Audience Research',
    step: 3,
    priority: 'critical',
    driveFile: '04_Target_Audience.md',
    estimatedTime: '40 min',
    inputsNeeded: ['Any existing customer interviews', 'Platform analytics if available', 'Artist names currently on platform'],
    prompt: `You are a brand strategist creating deep audience personas for grouped. — a direct-to-fan platform for independent musicians.

Using web research on independent music artist behavior, streaming economics, and the context below, create: 04_Target_Audience.md

Context:
- grouped. serves independent artists at 3 tiers: Developing (<100K listeners), Mid-Tier (100K-3M), High-Tier (3M+)
- Core use case: artist uses early access swap to capture fan contact info, builds direct channel
- Key emotional hook: "stop starting from zero every release"
- Current platform users include: Forrest Frank, PardyAlone, MIKE., Surfaces, Ali Gatie, Devvon Terrell

[ADD: Any existing customer interview notes, survey data, or testimonials here]

---

For EACH of the 3 artist tiers, generate:

## [Tier Name] Artist — [listener range]

### Demographics
- Age range, geography, career stage
- Day job / income situation
- How long they've been making music

### Psychographics
- Core motivations and drives
- Relationship to music and career
- How they think about success (streams? fans? revenue?)
- Fears and anxieties
- What they brag about vs. what they worry about

### Behaviors
- How they release music
- Which platforms they use most
- How often they engage fans
- Current tools in their stack

### Jobs to Be Done
- Functional: what task are they hiring grouped. to complete
- Emotional: how do they want to feel after using it
- Social: how does it change how others see them

### Churn Risk Profile
- What causes them to abandon a tool
- What keeps them around
- Key retention triggers

### First-Person User Story
> [Write a 3-5 sentence story in their voice about their frustration and what they need]

### Messaging That Works
- Language to use: [list 5-8 phrases]
- Language to avoid: [list 3-5 phrases]
- The hook for this segment: [1 sentence]

---

After all segments, add:

## Cross-Segment Insights
[2-3 paragraphs: what's universally true across all artist tiers, what the wedge insight is]

## Priority Matrix
[Table: Segment vs. Acquisition Cost / Revenue Potential / Churn Risk / Strategic Value]`,
    status: 'pending',
  },
  {
    id: 'verbal',
    section: 'Verbal Identity',
    step: 4,
    priority: 'high',
    driveFile: '03_Verbal_Identity_Research.md',
    estimatedTime: '35 min',
    inputsNeeded: ['Approved taglines', 'Any existing copy deck or brand guide', 'Website copy'],
    prompt: `You are a brand voice strategist building the complete verbal identity for grouped.

Create: 03_Verbal_Identity_Research.md

Company context:
- Product: direct-to-fan growth platform for independent musicians
- Brand archetype: The Outlaw / The Creator — anti-algorithm, pro-artist
- Tone: artist-to-artist, direct, bold, warm but not sentimental
- Core belief: "Artists should own their fan relationships. Full stop."
- Known taglines: "The growth engine for lifelong music careers." / "direct-to-fan, finally done right."
- Style guide note: NO em dashes. Use colons or periods instead.
- The wordmark is "grouped." — always lowercase, always with the period.

[ADD: Any existing brand voice notes, rejected copy, or approved phrases here]

---

## Brand Voice Overview
- Voice in 5 adjectives
- The spectrum: where grouped. sits on Formal-Casual, Bold-Safe, Warm-Cold axes
- What grouped. sounds like vs. what it never sounds like

## Voice Characteristics
For each of 4-5 core traits:
**[Trait Name]**
- Definition
- Because: [the strategic reason for this trait]
- Sounds like: [example of the trait in action — real grouped. copy or approximation]
- Never: [what violates this trait]

## Positioning Statement
**Core Bio (2 sentences):**
[What grouped. does and why it matters]

**Problem Statement:**
[The problem, in the artist's words]

**Solution Statement:**
[How grouped. solves it, no jargon]

**Tagline Options (5 variants):**
[From most approved to most exploratory]

## Naming Conventions
- How the product features are named and why
- Words used in the product (Swap, Group, Pass, Feed) and their rules
- Brand name usage rules (lowercase, period, no "The Grouped")

## Channel-Specific Voice

### TikTok / Instagram Reels
- Role: [acquisition, entertainment, proof]
- Vibe: [2-3 words]
- Do say: [3-4 examples]
- Don't say: [3-4 examples]

### LinkedIn
- Role: [industry credibility, investor visibility]
- Vibe: [2-3 words]
- Do say: [3-4 examples]
- Don't say: [3-4 examples]

### Email (to artists)
- Role: [retention, activation, upsell]
- Vibe: [2-3 words]
- Do say: [3-4 examples]
- Don't say: [3-4 examples]

### In-product copy
- Tone rules for UI copy
- Example: success state language
- Example: empty state language
- Example: upgrade prompt language

## Words We Own
[List 10-15 words/phrases that are distinctly grouped. — that feel wrong if a competitor used them]

## Words We Never Use
[List 10-15 words/phrases that are off-brand — and why each one is]`,
    status: 'pending',
  },
  {
    id: 'visual',
    section: 'Visual Identity Research',
    step: 5,
    priority: 'high',
    driveFile: '02_Visual_Identity_Research.md',
    estimatedTime: '25 min',
    inputsNeeded: ['Figma GDS26R export', 'Logo files from Drive', 'Any existing brand guide'],
    prompt: `You are a brand designer documenting the visual identity for grouped.

Create: 02_Visual_Identity_Research.md

Known visual context:
- Wordmark: "grouped." — Syne font family, weight 800, lowercase, with period
- Primary accent: #BFFF00 (electric lime / acid green)
- Background: near-black (#07070A)
- Dark mode primary, light mode secondary
- Design system codename: GDS26R
- Figma file: https://www.figma.com/design/wValDdxygSxILi49qBBgAW/GDS26R

[PASTE: Figma export token JSON or design system notes here]
[PASTE: Any logo usage notes]

---

## Color System

### Primary Palette
For each color:
**[Color Name]** · #[hex]
- Role: [what it's used for]
- Usage rules: [when to use / not use]

### Semantic Colors
- Success: [hex + usage]
- Warning: [hex + usage]
- Error: [hex + usage]
- Info: [hex + usage]

### Surface System
- Background levels 0-3: [hex values + descriptions]
- Border system: [active, default, subtle]

## Typography

### Font Stack
- Display: [family, weights, usage]
- Monospace: [family, weights, usage]
- Body: [family, weights, usage]

### Type Scale
- Wordmark: [size, weight, tracking]
- H1: [specs]
- H2: [specs]
- H3: [specs]
- Body: [specs]
- Caption / Label: [specs]

## Logo & Wordmark
- Primary lockup description
- Clear space rules
- Minimum sizes
- Approved color variations (on dark / on light / 1-color)
- What to never do

## Iconography
- Icon style: [stroke weight, corner radius, grid]
- Icon library used
- Custom icons if any

## Greenspace Analysis
[Table: Brand vs. each top competitor — colors, typography style, visual vibe — where grouped. stands out]

## Asset Index
- Where to find: [Drive folder URL]
- SVG wordmark: [filename]
- PNG logo: [filename]
- Brand kit zip: [filename or TBD]

## Open Design System Items
[List anything in GDS26R that is still in progress or not yet documented]`,
    status: 'pending',
  },
  {
    id: 'gtm',
    section: 'Go-to-Market Strategy',
    step: 6,
    priority: 'high',
    driveFile: '06_GTM_Strategy.md',
    estimatedTime: '30 min',
    inputsNeeded: ['Current ad spend and channels', 'Known partnership conversations', 'Any distribution partner names'],
    prompt: `You are a growth strategist building the go-to-market documentation for grouped.

Create: 06_GTM_Strategy.md

Context:
- grouped. targets independent artists across 3 tiers (developing, mid-tier, high-tier)
- Current acquisition: Meta/Instagram paid ads + organic social
- Strategic unlock: distribution partnership (integrating at music upload flow)
- SAM: $414.8M in artist tools
- Current CPA: $8.40, targeting <$10
- Distribution: top 2 distributors control 50%+ of independent market

[ADD: Known partnership conversations, current ad performance, specific channel data]

---

## GTM Overview
- Primary acquisition thesis
- The distribution partnership play (explain the mechanics)
- Phase 1 vs. Phase 2 GTM strategy

## Channel Strategy

For each active/planned channel:

### [Channel Name]
**Role in funnel:** Awareness / Acquisition / Activation / Retention / Referral
**Status:** Active | In Progress | Planned
**Target segment:** [which artist tier]
**KPIs:** [3-4 measurable goals]
**Current performance:** [metrics if known, N/A if not]
**Strategy:** [2-3 sentences on the approach]

## Partnership Strategy

### Distribution Partners
- Target partners and why
- Pitch: how it benefits the distributor
- Integration point: where in the upload flow
- Revenue share model (if applicable)

### Artist Community Partners
- Target communities / newsletters / creators to partner with
- Co-marketing opportunities

## Funnel Metrics & Benchmarks

| Stage | Metric | Current | Target |
|-------|--------|---------|--------|
| Awareness | CPA | $8.40 | <$10 |
| Activation | Rate | 26.2% | 35% |
| Upgrade | Rate | 16.53% | 20% |
| Retention | Monthly churn | ~11.75% (Pro) | <6.5% |
| LTV:CAC | Ratio | 0.41x | 3.0x+ |

## Launch Playbook (for new releases / product launches)
- Step-by-step launch sequence
- Who does what
- Success criteria

## Open GTM Items
[N/A for anything not yet decided]`,
    status: 'pending',
  },
  {
    id: 'product',
    section: 'Product Strategy',
    step: 7,
    priority: 'medium',
    driveFile: '07_Product_Strategy.md',
    estimatedTime: '25 min',
    inputsNeeded: ['Product roadmap if exists', 'Feature prioritization notes', 'Any customer feature requests'],
    prompt: `You are a product strategist documenting grouped.'s product vision and roadmap.

Create: 07_Product_Strategy.md

Context:
- Phase 1 (live): Smart Swaps, Smart Feed, Groups, Fan Profiling, CRM Integrations
- Phase 1.5 (Q3 2026): Custom Email credits, Direct Music Sales, Growth tier
- Phase 2 (Q1 2027): Listening Parties, Microtransactions
- Phase 3 (Q3 2027): Fan Passes (wallet), Quest System, Leaderboards
- Platform (TBD): Network effects, discovery engine, marketplace

[ADD: Any product notes, user feedback, or engineering constraints]

---

## Product Vision
[2-3 sentences: where grouped. is going as a platform, not just a tool]

## Current Product (Phase 1)

For each live feature:
### [Feature Name]
- What it does (1-2 sentences)
- Key metric / proof point
- How it connects to the next feature

## Roadmap

### Phase 1.5 — Q3 2026
[Feature list with brief descriptions]

### Phase 2 — Q1 2027
[Feature list with brief descriptions]

### Phase 3 — Q3 2027
[Feature list with brief descriptions]

### Platform Vision
[The end state — what grouped. becomes at scale]

## Feature Prioritization Framework
[How does grouped. decide what to build next: user requests, revenue impact, retention impact, strategic moat?]

## Competitive Differentiation by Feature
[Table: Feature vs. closest competitor alternative — where grouped. wins]

## Open Product Items
[N/A for anything undecided or unresearched]`,
    status: 'pending',
  },
]

export const RESEARCH_STATUS_OPTIONS = ['pending', 'in_progress', 'complete', 'needs_review']

export const getPriorityColor = (priority) => {
  const map = { critical: '#FF4D4D', high: '#FFB020', medium: '#4DA8FF', low: '#555566' }
  return map[priority] || map.low
}

export const getStatusColor = (status) => {
  const map = { pending: '#555566', in_progress: '#FFB020', complete: '#00E59B', needs_review: '#4DA8FF' }
  return map[status] || map.pending
}
