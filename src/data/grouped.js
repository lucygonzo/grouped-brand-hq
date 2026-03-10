/**
 * GROUPED BRAND HQ DATA
 * Source: grouped_master_reference.md + grouped_brand README v1.0 + grouped_02.20 site
 * Last updated: February 2026
 *
 * Data annotation key:
 * [CONFIRMED]   = verified from multiple sources
 * [UNCONFIRMED] = single source, needs client sign-off
 * [TBD]         = placeholder, needs research
 */

// ─── COMPANY ────────────────────────────────────────────

export const company = {
  name: 'Grouped',        // [CONFIRMED] — title case, no period
  slug: 'grouped',
  tagline: 'Where Artists and Fans Connect.',  // [CONFIRMED — site hero]
  phase: 'Pre-Series A',
  stage: 'Phase 1 SaaS — Live',
  founded: '2026',         // post-merger date
  website: 'https://grouped.com',
  socialHandles: {
    instagram: '@grouped',
    twitter: '@grouped',
    tiktok: '@grouped',
    youtube: '@grouped',
  },
  contact: 'info@grouped.com',

  oneLiners: {
    investors: 'Grouped is the growth engine for direct-to-fan relationships in music, replacing algorithmic dependence with owned audience infrastructure.',
    artists: 'The growth engine for lifelong music careers.',
    press: 'The missing layer between music distribution and fan engagement.',
  },

  mission: 'To shift power back to artists by giving them ownership of their fan relationships and data, while creating unprecedented value for fans who want to be more than passive listeners.',

  vision: 'A world where every independent artist has a direct, lasting relationship with every fan they earn — without a platform mediating, monetizing, or threatening it.',

  coreThesis: 'Music-first engagement through early access swaps will become the wedge that owns the artist-to-fan relationship lifecycle — from discovery to deep community — creating a flywheel that captures value at every stage.',

  merger: {
    tribly: {
      role: 'Top-of-funnel: fan identification and data capture',
      artists: '4,500+',
      keyMechanic: 'Proven swaps mechanism',
    },
    grouped: {
      role: 'Bottom-of-funnel: community infrastructure for sustained engagement and monetization',
      keyMechanic: 'Groups, paid tiers, direct fan communication',
    },
    combined: 'Full-funnel ownership from fan discovery through deep community, under one roof.',
  },
}

// ─── KEY METRICS ─────────────────────────────────────────

export const metrics = [
  { label: 'Artists on platform',   value: '4,500+',   note: 'post-merge' },          // [CONFIRMED]
  { label: 'Fans captured',         value: '1.2M',     note: 'total all time' },       // [CONFIRMED]
  { label: 'Releases powered',      value: '8,000+',   note: 'all time' },             // [CONFIRMED]
  { label: 'Avg. CPA',              value: '$8.40',    note: 'Meta/Instagram' },       // [CONFIRMED]
  { label: 'Smart Swap opt-in rate',value: '92%',      note: 'platform average' },     // [CONFIRMED]
  { label: 'Upgrade rate',          value: '16.53%',   note: 'activated artists, product-led' }, // [CONFIRMED]
]

// ─── BRAND IDENTITY ──────────────────────────────────────

export const brandIdentity = {
  archetype: {
    primary: 'The Outlaw',
    secondary: 'The Creator',
    summary: 'Grouped positions artists against the algorithm establishment. It empowers creators to own their lane — anti-platform, pro-artist, anti-intermediary.',
  },

  coreNarrative: 'The best artists have always known that the fan relationship is everything. Before algorithms, there were mailing lists, fan clubs, and backstage passes. Grouped is that layer — rebuilt for the modern era. Not rented. Not algorithmic. Yours.',

  values: [
    {
      name: 'Artist Ownership',
      desc: 'Artists always own their data and fan relationships. We never hold it hostage.',
    },
    {
      name: 'Radical Directness',
      desc: 'No algorithm in the middle. Direct line between artist and fan, every time.',
    },
    {
      name: 'Compounding Value',
      desc: 'Every release builds on the last. We are fundamentally opposed to starting from zero.',
    },
    {
      name: 'Access for All',
      desc: 'This is not a superfan platform. This is for all of your fans, at every level.',
    },
    {
      name: 'Artist-Built',
      desc: 'Built from the artist side. We understand the problem because we lived it.',
    },
  ],

  problem: {
    core: 'Artists are entirely dependent on algorithmic platforms they do not control. Every release is a reset. Every audience is rented.',
    dimensions: [
      {
        title: 'The Release Timeline Gap',
        desc: 'Dead zone between music upload and release day. Zero momentum building. Artists upload, wait, hope for the algorithm, start over.',
      },
      {
        title: 'Rented Audiences',
        desc: 'Artists build followings on platforms they never own. Organic reach has collapsed below 5% on most platforms.',
      },
      {
        title: 'No Direct Relationship Layer',
        desc: 'Distribution exists. Discovery exists. The direct relationship layer that converts discovery into owned engagement does not.',
      },
      {
        title: 'Prohibitive Tool Costs',
        desc: 'SMS to 1M fans costs $30K-50K per send. Most artists cannot afford this. Platforms have no incentive to fix it.',
      },
    ],
    artistExperience: 'Release a song. Post about it on socials. Hope the algorithm picks it up. If it does not, start over. No compounding. No ownership. No relationship. Every release feels like starting from zero.',
  },
}

// ─── VISUAL IDENTITY ─────────────────────────────────────
// Source: Grouped Design System v1.0 · GDS26R
// Dark Mode Primary · Light Mode Secondary

export const visualIdentity = {
  wordmark: {
    text: 'Grouped',
    rules: [
      'Always title case — "Grouped" with capital G, no period',
      'Never all-lowercase ("grouped") or all-caps ("GROUPED")',
      'Set in Grouped Font (custom display OTF)',
      'On dark backgrounds: use #EDEDF5 (white-ish) or #C48A3A (bronze)',
      'On light backgrounds: use #111620 (navy)',
      'Never stretch, rotate, or apply effects',
    ],
  },

  palette: [
    { name: 'Acid Lime',    hex: '#BFFF00', role: 'Primary accent',      token: 'acid',     confirmed: true },
    { name: 'Off-Black',    hex: '#07070A', role: 'App background',      token: 'bg',       confirmed: true },
    { name: 'Surface 1',    hex: '#0E0E13', role: 'Sidebar / nav',       token: 'surface1', confirmed: true },
    { name: 'Surface 2',    hex: '#15151C', role: 'Cards',               token: 'surface2', confirmed: true },
    { name: 'Surface 3',    hex: '#1C1C26', role: 'Nested panels',       token: 'surface3', confirmed: false },
    { name: 'Border',       hex: '#272733', role: 'Dividers',            token: 'border',   confirmed: true },
    { name: 'Primary Text', hex: '#EDEDF5', role: 'Headings + body',     token: 'textPrimary', confirmed: true },
    { name: 'Sub Text',     hex: '#9494AA', role: 'Subtitles',           token: 'textSecond',  confirmed: true },
    { name: 'Muted',        hex: '#555566', role: 'Labels / metadata',   token: 'textMuted',   confirmed: true },
    { name: 'Teal',         hex: '#00E59B', role: 'Success / live',      token: 'teal',     confirmed: false },
    { name: 'Amber',        hex: '#FFB020', role: 'Warning / unconfirmed', token: 'amber',  confirmed: false },
    { name: 'Blue',         hex: '#4DA8FF', role: 'Info',                token: 'blue',     confirmed: false },
    { name: 'Red',          hex: '#FF4D4D', role: 'Error / high threat', token: 'red',      confirmed: false },
  ],

  typography: [
    { role: 'Display / Wordmark', family: 'Syne',    weights: '400, 600, 700, 800', usage: 'Section headers, hero text, wordmark', confirmed: true },
    { role: 'Monospace / Data',   family: 'DM Mono', weights: '300, 400, 500',      usage: 'Labels, badges, metadata, hex codes', confirmed: false },
    { role: 'Body / Interface',   family: 'Inter',   weights: '300, 400, 500, 600', usage: 'Body text, descriptions, UI copy',   confirmed: true },
  ],

  greenspaceCompetitors: [
    { name: 'Laylo',     colors: ['#7C3AED', '#A855F7'], style: 'Purple / gradient tech' },
    { name: 'Community', colors: ['#1A1A1A', '#444444'], style: 'Black / minimal' },
    { name: 'Patreon',   colors: ['#FF424D', '#F96854'], style: 'Coral / warm' },
    { name: 'Discord',   colors: ['#5865F2', '#7289DA'], style: 'Indigo / gaming' },
    { name: 'Mailchimp', colors: ['#FFE01B', '#241C15'], style: 'Yellow / playful' },
    { name: 'OpenStage', colors: ['#6366F1', '#818CF8'], style: 'Violet / polished' },
    { name: 'Grouped',  colors: ['#C48A3A', '#111620'], style: 'Bronze / deep navy' },
  ],

  greenspaceOpportunity: 'The music tech space defaults to purple/indigo (Laylo, OpenStage, Discord), coral (Patreon), or generic black (Community). Grouped\'s bronze (#C48A3A) on deep navy occupies genuine visual white space — warm, premium, and distinct from the tech-coded competition.',
}

// ─── VERBAL IDENTITY ─────────────────────────────────────

export const verbalIdentity = {
  taglines: [
    'Where Artists and Fans Connect.',                   // [CONFIRMED — primary, site hero]
    'Grow Your Audience, On Your Terms.',                // [CONFIRMED — site headline]
    'Reach Fans Directly. Build Real Relationships.',    // [CONFIRMED — site]
    'Turn Fan Support Into Sustainable Income.',          // [CONFIRMED — site]
    'The growth engine for lifelong music careers.',      // [CONFIRMED — investor / artist one-liner]
  ],

  positioningStatement: {
    whatWeDo: 'We give independent artists the tools to capture who is listening, reach them directly, and build a fanbase that compounds with every release.',
    problemStatement: 'Artists build audiences on platforms they do not own, release music into algorithms they cannot control, and start from zero every time.',
    howWeSolveIt: 'Smart Swaps capture fan contact info at the peak moment of excitement. Groups keep fans engaged year-round. Fan Passes push messages at 1/1000th the SMS cost. Every tool compounds the last.',
  },

  voiceSpectrum: [
    { dim: 'Artist-to-Artist',   pct: 90, desc: 'We speak like artists, not corporations' },
    { dim: 'Direct vs Diplomatic', pct: 85, desc: 'Say the thing. Artists respect honesty.' },
    { dim: 'Bold vs Safe',        pct: 80, desc: 'Challenge the status quo, always' },
    { dim: 'Warm vs Cold',        pct: 65, desc: 'Warm, but not sentimental. Confident, not cold.' },
    { dim: 'Simple vs Complex',   pct: 75, desc: 'Complex product. Simple language. Non-negotiable.' },
  ],

  voiceTraits: [
    {
      trait: 'Anti-jargon',
      example: 'NOT: "leverage algorithmic distribution channels." YES: "Stop renting your audience."',
    },
    {
      trait: 'Reframes the win',
      example: 'NOT: "1,000 followers." YES: "1,000 fans who drive hours to see you play."',
    },
    {
      trait: 'Confident, not arrogant',
      example: 'The product speaks for itself. We let the numbers do the bragging.',
    },
    {
      trait: 'Artist-validated',
      example: 'Built from the artist side means we talk the talk because we walked the walk.',
    },
  ],

  wordsWeOwn: ['swap', 'group', 'fan pass', 'compound', 'your fans', 'direct channel', 'momentum', 'starting from zero', 'own it', 'capture', 'premiere window'],
  wordsWeNever: ['algorithm', 'viral', 'leverage', 'synergy', 'growth hacking', 'superfan only', 'paywall', 'influencer'],

  messagingBySegment: [
    {
      name: 'Developing Artist',
      range: '< 100K listeners',
      hook: '"You\'re already earning fans. Capture them before they disappear."',
      pain: 'Every release feels like starting from zero. No compounding, no momentum.',
      proof: '92% opt-in rate. Real fans, not just streams.',
      useWords: ['real fans', 'your list', 'own it', 'momentum', 'early access'],
      avoidWords: ['algorithm', 'viral', 'influencer', 'growth hacking'],
      cta: 'Start free. Build your first release.',
    },
    {
      name: 'Mid-Tier Artist',
      range: '100K - 3M listeners',
      hook: '"You have fans. You\'re just not keeping them."',
      pain: 'Organic reach collapsed. You post into a void. Every release resets.',
      proof: 'PardyAlone turned M&G tickets into $35K ARR. No label required.',
      useWords: ['direct channel', 'own the relationship', 'recurring revenue', 'retain'],
      avoidWords: ['follower count', 'impressions', 'vanity metrics'],
      cta: 'See how PardyAlone did it.',
    },
    {
      name: 'Established Artist',
      range: '3M+ listeners',
      hook: '"Your audience is massive. Your direct channel is not."',
      pain: 'SMS costs $30K per send. Platforms change their algorithm tomorrow.',
      proof: 'Fan Passes reach 1M fans for $20-50/month. Same open rates.',
      useWords: ['infrastructure', 'scale', 'platform independence', 'owned audience'],
      avoidWords: ["we're just getting started", 'small team', 'beta'],
      cta: 'Book a strategy session.',
    },
  ],

  channelVoice: [
    {
      platform: 'TikTok / Instagram Reels',
      role: 'Acquisition — reach developing artists where they live',
      vibe: 'Punchy, relatable, proof-first',
      doSay: ['Show the moment a swap lands', 'Before/after: posting into the void vs. knowing your fans', '"This is what 92% opt-in looks like"'],
      dontSay: ['Feature lists', 'Corporate tone', 'Anything that sounds like an ad'],
    },
    {
      platform: 'LinkedIn',
      role: 'Investor and industry credibility',
      vibe: 'Confident, data-first, thought leadership',
      doSay: ['Market stats with a point of view', 'The distribution partnership thesis', 'Artist success metrics'],
      dontSay: ['Artist slang', 'Emoji-heavy copy', 'Soft claims without numbers'],
    },
    {
      platform: 'Email (to artists)',
      role: 'Activation and retention',
      vibe: 'Direct, action-oriented, personal',
      doSay: ['One thing to do right now', 'Results from similar artists', '"Your first swap takes 5 minutes"'],
      dontSay: ['Multiple CTAs', 'Long paragraphs', 'Jargon-heavy feature explanations'],
    },
  ],
}

// ─── COMPETITIVE LANDSCAPE ────────────────────────────────

export const competitors = [
  {
    name: 'Laylo',
    category: 'Direct',
    threat: 'High',
    status: 'Active',
    colors: ['#7C3AED', '#A855F7'],
    positioning: 'SMS/email CRM for artists. Drop campaigns and blast messaging.',
    businessModel: 'SaaS + per-send SMS fees',
    targetCustomer: 'Mid-tier to established artists',
    strengths: ['Established SMS infrastructure', 'Strong artist relationships', 'Drop-focused UX'],
    weaknesses: ['$30K-50K per SMS send at scale', 'Single-feature tool', 'No community layer'],
    moat: 'Cannot drop SMS pricing without cannibalizing core revenue. Grouped disrupts with Fan Passes at 1/1000th the cost. No legacy to protect.',
  },
  {
    name: 'Community.com',
    category: 'Direct',
    threat: 'High',
    status: 'Active',
    colors: ['#1A1A1A', '#444444'],
    positioning: 'Text message community platform for celebrities and creators.',
    businessModel: 'SaaS + per-message SMS fees',
    targetCustomer: 'Celebrities and major creators',
    strengths: ['Celebrity credibility', 'SMS-native engagement', 'Large creator base'],
    weaknesses: ['SMS costs prohibitive at scale', 'No early access mechanics', 'No fan data capture'],
    moat: 'No swaps mechanism. Pure outbound, no inbound capture. Grouped wins on economics and full-funnel.',
  },
  {
    name: 'OpenStage',
    category: 'Direct',
    threat: 'Medium',
    status: 'Active',
    colors: ['#6366F1', '#818CF8'],
    positioning: 'Artist-to-fan platform with wallet passes. Focused on major artists.',
    businessModel: 'SaaS + enterprise contracts',
    targetCustomer: 'Top 0.1% of artists — major label level',
    strengths: ['Wallet pass expertise', 'Major artist relationships', 'Funded'],
    weaknesses: ['Not accessible for developing/mid-tier artists', 'Complex onboarding', 'Enterprise pricing'],
    moat: 'OpenStage serves the 0.1%. Grouped owns the other 99.9% and builds up to challenge at scale.',
  },
  {
    name: 'Discord',
    category: 'Adjacent',
    threat: 'Medium',
    status: 'Active',
    colors: ['#5865F2', '#7289DA'],
    positioning: 'General community platform. Music artists use it by default, not by design.',
    businessModel: 'Freemium + Nitro subscriptions',
    targetCustomer: 'Gamers, then everyone',
    strengths: ['Massive user base', 'Free tier', 'Familiar to younger audiences'],
    weaknesses: ['Noisy, high-friction UX', 'Not music-specific', 'No creator monetization', 'Not artist-owned'],
    moat: '"Discord is noisy. Instagram is rented. Your Group is yours — clean, focused, owned."',
  },
  {
    name: 'Mailchimp',
    category: 'Adjacent',
    threat: 'Watch',
    status: 'Active',
    colors: ['#FFE01B', '#241C15'],
    positioning: 'General email marketing. Artists use it by default for newsletters.',
    businessModel: 'Per-subscriber SaaS tiers',
    targetCustomer: 'Small businesses broadly',
    strengths: ['Brand recognition', 'Robust automations', 'Wide integrations'],
    weaknesses: ['Per-subscriber pricing becomes expensive at scale', 'Not music-specific', 'No fan capture tools'],
    moat: 'Grouped Custom Email charges per send, not per subscriber. Purpose-built for release cycles, not business newsletters.',
  },
  {
    name: 'Patreon',
    category: 'Adjacent',
    threat: 'Watch',
    status: 'Active',
    colors: ['#FF424D', '#F96854'],
    positioning: 'Creator subscription membership. Paywall-first model.',
    businessModel: '8-12% platform take on creator revenue',
    targetCustomer: 'Creators with engaged superfan base',
    strengths: ['Strong brand trust', 'Payment infrastructure', 'Creator base'],
    weaknesses: ['Paywall excludes casual fans', 'No early access swaps', 'No fan capture', 'Music is secondary to writing/art'],
    moat: 'Grouped does not paywall the community. Value for ALL fans, not just paid superfans. Capture first, monetize when ready.',
  },
]

// ─── AUDIENCE SEGMENTS ───────────────────────────────────

export const audienceSegments = [
  {
    id: 'developing',
    name: 'Developing Artist',
    priority: 'Primary',
    range: '< 100K listeners',
    marketCount: '9.5M artists',
    arpu: '$84/yr',
    psychographics: [
      'Identity deeply tied to their art',
      'Motivated by validation and early momentum',
      'Skeptical of tools that promise virality',
      'Time-limited — balancing music with income',
      'Hungry for community and the "making it" feeling',
    ],
    jtbd: 'Build the feeling of momentum. Make me feel like I\'m making progress even before I go viral.',
    churn: 'High if they do not see momentum in first 30 days. The key retention trigger is the first fan captured in session one.',
    userStory: '"I dropped my EP last month. 400 streams. I posted every day on TikTok for a week. Nothing stuck. I feel like I\'m shouting into a void. I just want to know who my actual fans are — not just a number on a screen."',
  },
  {
    id: 'midtier',
    name: 'Mid-Tier Artist',
    priority: 'Primary',
    range: '100K - 3M listeners',
    marketCount: '1.8M artists',
    arpu: '$228/yr',
    psychographics: [
      'Professional artist — music is their career',
      'Has an audience but struggles to monetize it',
      'Frustrated by declining organic reach',
      'Open to tools that show clear ROI',
      'Values data ownership and fan relationships',
    ],
    jtbd: 'Convert my existing audience into a revenue stream I actually own.',
    churn: 'Medium. Sticks around if revenue impact is tangible within first 60 days.',
    userStory: '"I have 500K streams a month and I\'m barely paying rent. My Instagram reach is 3%. I know I have real fans — I see them at shows — but I have no way to reach them directly without paying $50 per email."',
  },
  {
    id: 'hightier',
    name: 'High-Tier Artist',
    priority: 'Secondary',
    range: '3M+ listeners',
    marketCount: '240K artists',
    arpu: '$468/yr',
    psychographics: [
      'Established career with a team around them',
      'Primary concern is fan depth, not breadth',
      'SMS economics are a known and painful point',
      'Wants infrastructure, not another tool to manage',
      'Cares about fan experience as much as reach',
    ],
    jtbd: 'Replace SMS economics with something that scales infinitely at a flat monthly cost.',
    churn: 'Low once onboarded. High implementation barrier. Requires white-glove onboarding.',
    userStory: '"We spend $40K per SMS campaign. The open rates are great but the economics are broken. My team is researching alternatives. We need something that can reach 2M fans without a six-figure line item every time."',
  },
]

// ─── GAP ANALYSIS ────────────────────────────────────────

export const gapDimensions = [
  {
    dim: 'Brand Narrative',
    priority: 'Critical',
    pct: 35,
    current: 'Two separate brand stories (Tribly swaps + Grouped community) not yet fully unified under the Grouped name post-merger.',
    future: 'Single clear narrative: "The full-funnel direct-to-fan growth engine." One story from first listen to superfan.',
  },
  {
    dim: 'Visual Identity',
    priority: 'High',
    pct: 55,
    current: 'Dark editorial aesthetic established. Wordmark strong. Color system and typography not yet fully documented in GDS26R.',
    future: 'Fully documented design system: primary/secondary palette, typography hierarchy, component library, logo asset set.',
  },
  {
    dim: 'Verbal System',
    priority: 'High',
    pct: 60,
    current: 'Strong hero messaging. Competitive positioning is sharp. Tone established. Segment-specific messaging in progress.',
    future: 'Complete verbal playbook: positioning per segment, channel voice matrix, messaging cheat sheet per use case.',
  },
  {
    dim: 'Investor Readiness',
    priority: 'Critical',
    pct: 45,
    current: 'Series A materials in progress. Strong unit economics narrative forming. Team story needs refinement.',
    future: 'Locked Series A deck and data room. Every objection anticipated, every metric contextualized.',
  },
  {
    dim: 'Customer Proof',
    priority: 'Medium',
    pct: 40,
    current: '4 case studies live (Forrest Frank, PardyAlone, MIKE., Surfaces). Developing artist tier needs more proof.',
    future: '12+ case studies across all 3 artist tiers. Video testimonials. Artist advisory board established.',
  },
  {
    dim: 'Channel Strategy',
    priority: 'Medium',
    pct: 25,
    current: 'Meta ads + organic social active. Content not systematized. No documented channel-by-channel voice.',
    future: 'Full channel strategy: LinkedIn (investor/industry), TikTok (artist acquisition), email (retention).',
  },
]

// ─── REVENUE MODEL ────────────────────────────────────────

export const revenueModel = {
  tiers: [
    {
      name: 'Free',
      price: '$0',
      per: 'mo',
      color: '#555566',
      features: ['Basic swaps', 'Limited data capture', 'Grouped branding', 'Up to 100 fans'],
      status: 'Live',
      statusColor: '#00E59B',
      launch: 'Jan 2026',
    },
    {
      name: 'Starter',
      price: '$7',
      per: 'mo',
      color: '#4DA8FF',
      features: ['Smart swaps', 'Basic customization', 'CSV exports', 'Up to 1,000 fans'],
      status: 'Live',
      statusColor: '#00E59B',
      launch: 'Jan 2026',
    },
    {
      name: 'Growth',
      price: '$19',
      per: 'mo',
      color: '#00E59B',
      features: ['Custom domains', 'Advanced customization', 'Multiple CRM integrations', 'Up to 10,000 fans'],
      status: 'Q3 2026',
      statusColor: '#FFB020',
      launch: 'Jul 2026',
    },
    {
      name: 'Pro',
      price: '$39',
      per: 'mo',
      color: '#BFFF00',
      features: ['White-label', 'Embeddable experiences', 'Hide Grouped branding', 'Unlimited fans'],
      status: 'Jan 2027',
      statusColor: '#555566',
      launch: 'Jan 2027',
    },
  ],

  transactional: [
    { stream: 'Paid Fan Tiers',    take: '10%', desc: 'Artists set paid subscription tiers for fans', launch: 'Active now' },
    { stream: 'Direct Music Sales', take: '20%', desc: 'Artists sell tracks/albums directly to fans', launch: 'Jul 2026' },
    { stream: 'Listening Parties', take: '20%', desc: 'Platform fee on microtransactions and pre-sales', launch: 'Jan 2027' },
  ],

  unitEconomics: [
    { metric: 'CPA (free sign-up)',             observed: '$8.00',       target: '$8.40',       note: 'Meta/Instagram campaigns' },
    { metric: 'Effective CAC (paid sub)',        observed: '$138.89',     target: '~$66 blended', note: 'Observed vs. modeled conversion' },
    { metric: 'Activation rate',                observed: '26.2%',       target: '35%',         note: '2025 actual' },
    { metric: 'Upgrade rate (activated → paid)',observed: '16.53%',      target: '20%',         note: 'Product-led, no sales team' },
    { metric: 'Avg. subscriber lifetime',       observed: '3.48 months', target: '5.6 months',  note: 'Cohort data May-Dec 2025' },
    { metric: 'LTV:CAC ratio',                  observed: '0.41x',       target: '3.0x+',       note: 'Path via 3-lever improvement' },
    { metric: 'Best cohort churn (Jun 2025)',   observed: '6.2%/mo',     target: '<6.5%/mo',    note: 'Proves retention is achievable' },
  ],

  projections: [
    { year: '2026', spend: '$309.5K', signups: '39,245', paid: '3,795', rev: '$317K',   arr: '$737K',   roi: '2.3%' },
    { year: '2027', spend: '$400K',   signups: '50,021', paid: '6,348', rev: '$1.59M',  arr: '$1.59M',  roi: '169%' },
    { year: '2028', spend: '$500K',   signups: '61,922', paid: '8,789', rev: '$2.86M',  arr: '$2.36M',  roi: '294%' },
  ],
}

// ─── GTM ─────────────────────────────────────────────────

export const gtm = {
  phases: [
    {
      label: 'Awareness',
      status: 'Active',
      strategy: 'Meta/Instagram paid acquisition targeting independent artists. Artist community content on TikTok. Distribution partnership integration as upload-time capture moment.',
      kpis: ['CPA < $10', 'ROAS > 3x', '200 partnership sign-ups/month'],
    },
    {
      label: 'Activation',
      status: 'Active',
      strategy: 'In-product onboarding: first swap in under 10 minutes. Smart Feed setup. Key success moment is the first fan captured in session one.',
      kpis: ['Activation rate > 35%', 'First swap < 24 hours', 'First fan captured in session 1'],
    },
    {
      label: 'Growth',
      status: 'Optimizing',
      strategy: 'Product-led upgrade via swap limit hit. Email credit introduction at Growth tier. CRM integrations embed Grouped deeper in artist workflow.',
      kpis: ['Upgrade rate > 20%', 'Email credit attach rate > 30%', 'MRR growth > 15% MoM'],
    },
    {
      label: 'Retention',
      status: 'Building',
      strategy: 'Year-round engagement via Smart Feed. Grouped becomes the default fan hub for every release cycle, not just launch day.',
      kpis: ['Monthly churn < 6.5%', 'NPS > 50', 'Release-cycle return rate > 80%'],
    },
    {
      label: 'Referral',
      status: 'Q3 2026',
      strategy: 'Artist-to-artist referral program. Fan-facing sharing mechanics. Distribution partnerships drive warm leads at point of upload.',
      kpis: ['K-factor > 0.3', 'Referral sign-ups > 20%', 'Partner sign-ups > 200/month'],
    },
  ],
}

// ─── ROADMAP ─────────────────────────────────────────────

export const roadmap = [
  {
    phase: 'Phase 1',
    label: 'SaaS Foundation',
    status: 'Live',
    items: ['Smart Swaps', 'Smart Feed', 'Groups', 'Fan Profiling', 'CRM Integrations'],
  },
  {
    phase: 'Phase 1.5',
    label: 'Email + Revenue',
    status: 'Q3 2026',
    items: ['Custom Email (credits)', 'Direct Music Sales', 'Growth tier launch'],
  },
  {
    phase: 'Phase 2',
    label: 'Real-Time Experiences',
    status: 'Q1 2027',
    items: ['Listening Parties', 'Microtransactions', 'Real-time social proof'],
  },
  {
    phase: 'Phase 3',
    label: 'Gamification',
    status: 'Q3 2027',
    items: ['Fan Passes (wallet)', 'Quest System', 'Leaderboards', 'Fan Avatars'],
  },
  {
    phase: 'Platform',
    label: 'Network Effects',
    status: 'TBD',
    items: ['Discovery engine', 'Fan-driven artist acquisition', 'Marketplace dynamics'],
  },
]

// ─── WORKSPACE ───────────────────────────────────────────

export const actions = [
  { status: 'Now',  text: 'Lock Series A narrative and slide structure',               owner: 'Seth + Lucy', priority: 'Critical' },
  { status: 'Now',  text: 'Finalize customer case study pipeline (need 8 more)',        owner: 'Lucy',        priority: 'Critical' },
  { status: 'Now',  text: 'Complete design system documentation (Figma GDS26R)',        owner: 'Lucy',        priority: 'High' },
  { status: 'Now',  text: 'Build investor data room',                                   owner: 'Seth',        priority: 'High' },
  { status: 'Next', text: 'Distribution partnership outreach and pitch',                owner: 'Seth',        priority: 'High' },
  { status: 'Next', text: 'Growth tier and email credit system launch',                 owner: 'Product',     priority: 'High' },
  { status: 'Next', text: 'Website hero headline A/B test',                             owner: 'Lucy',        priority: 'Medium' },
  { status: 'Later',text: 'Phase 2: Listening party infrastructure',                   owner: 'Product',     priority: 'Medium' },
  { status: 'Later',text: 'Fan Pass wallet integration (iOS/Android)',                  owner: 'Product',     priority: 'Medium' },
  { status: 'Later',text: 'Artist advisory board formation',                            owner: 'Seth',        priority: 'Low' },
]

export const decisions = [
  {
    date: 'Feb 2026',
    decision: 'Merged Tribly and Grouped under the Grouped brand identity',
    rationale: 'Combined entity owns the full funnel. Grouped name tests stronger for community positioning.',
    owner: 'Seth',
    status: 'Active',
  },
  {
    date: 'Jan 2026',
    decision: 'Launched Free tier at $0 with no freemium ceiling',
    rationale: 'Drive top-of-funnel volume. Convert via product experience, not trial expiry.',
    owner: 'Seth',
    status: 'Active',
  },
  {
    date: 'Jan 2026',
    decision: 'Pricing at $0/$7/$19/$39 + email credits as revenue layer 2',
    rationale: 'Competitive vs. Laylo/Community at lower price. Email credits add variable revenue on top of fixed MRR.',
    owner: 'Seth + Lucy',
    status: 'Active',
  },
  {
    date: 'Dec 2025',
    decision: 'Position as collaborative partner to distributors, not competitor',
    rationale: 'Integration reduces friction and unlocks massive acquisition channel via distributor catalog.',
    owner: 'Seth',
    status: 'Active',
  },
  {
    date: 'Nov 2025',
    decision: 'Dark mode as brand primary, light mode secondary',
    rationale: 'Aligns with music culture aesthetic. Differentiates from daytime SaaS tools. Artist-first feel.',
    owner: 'Lucy',
    status: 'Active',
  },
]

export const reportCard = [
  { cat: 'Visual Identity',    score: 6, trend: 'up',     note: 'Strong wordmark and aesthetic. Design system documentation incomplete.' },
  { cat: 'Verbal Identity',    score: 7, trend: 'up',     note: 'Hero messaging sharp. Segment-specific messaging still in progress.' },
  { cat: 'Digital Presence',   score: 6, trend: 'stable', note: 'Website strong. Social presence active. SEO baseline not yet measured.' },
  { cat: 'Market Position',    score: 7, trend: 'up',     note: 'Clear differentiation vs. Laylo/Community. Distribution partnership is the key unlock.' },
  { cat: 'Investor Readiness', score: 5, trend: 'up',     note: 'Series A narrative forming. Deck and data room need completion.' },
  { cat: 'Product-Market Fit', score: 8, trend: 'stable', note: '16.53% upgrade rate, 92% opt-in rate, proven case studies. PMF signal is strong.' },
]
