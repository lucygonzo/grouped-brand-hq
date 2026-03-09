// ============================================================
// GROUPED BRAND HQ — DATA
// Source: grouped_master_reference.md + Brand Direction Sprint
// Last sync: March 2026
// ============================================================

export const CLIENT = {
  name: 'grouped.',
  fullName: 'Grouped, Inc.',
  tagline: 'The growth engine for lifelong music careers.',
  website: 'grouped.com',
  stage: 'Pre-Series A',
  phase: 'Phase 1 — Integrative SaaS',
  brandStatus: 'existing',
  productType: 'saas',
  hasSubBrands: false,
  updatedAt: 'February 2026',
};

export const METRICS = [
  { label: 'Artists', value: '4,500+', note: 'on platform' },
  { label: 'Fans Captured', value: '1.2M', note: 'total' },
  { label: 'Releases Powered', value: '8,000+', note: 'all time' },
  { label: 'CPA', value: '$8.40', note: 'Meta/Instagram' },
  { label: 'Swap Opt-In', value: '92%', note: 'avg. rate' },
  { label: 'Upgrade Rate', value: '16.53%', note: 'activated artists' },
];

export const OPEN_PRIORITIES = [
  { text: 'Lock Series A narrative and slide structure', urgency: 'Critical', owner: 'Seth + Lucy' },
  { text: 'Customer case study pipeline (need 8 more)', urgency: 'Critical', owner: 'Lucy' },
  { text: 'Design system documentation (Figma GDS26R)', urgency: 'High', owner: 'Lucy' },
  { text: 'Investor data room build', urgency: 'High', owner: 'Seth' },
  { text: 'Distribution partnership pitch + outreach', urgency: 'High', owner: 'Seth' },
  { text: 'Website hero headline A/B test', urgency: 'Medium', owner: 'Lucy' },
];

export const COMPANY = {
  mission: 'To shift power back to artists by giving them ownership of their fan relationships and data, while creating unprecedented value for fans who want to be more than passive listeners.',
  vision: 'A world where every independent artist has a direct, lasting relationship with every fan they earn — without a platform mediating, monetizing, or threatening it.',
  thesis: 'Music-first engagement through early access swaps will become the wedge that owns the artist-to-fan relationship lifecycle — from discovery to deep community — creating a flywheel that captures value at every stage.',
  oneLiners: {
    investors: '"Grouped is the growth engine for direct-to-fan relationships in music, replacing algorithmic dependence with owned audience infrastructure."',
    artists: '"The growth engine for lifelong music careers."',
    press: '"The missing layer between music distribution and fan engagement."',
  },
  merger: {
    summary: 'Tribly and Grouped merged in early 2026. Tribly owned top-of-funnel (4,500+ artists, proven swaps mechanism). Grouped owned bottom-of-funnel (community infrastructure for sustained engagement). Combined: full-funnel ownership under one roof.',
    tribly: 'Top-of-funnel tool. 4,500+ artists. Proven swaps for fan identification and data capture. The acquisition engine.',
    grouped: 'Bottom-of-funnel community platform. Infrastructure for sustained engagement and monetization. The retention and revenue engine.',
  },
  team: [
    {
      name: 'Seth',
      role: 'Co-Founder, CEO',
      story: 'Musician since age 8. Spent his 20s trying to make it as a full-time artist — touring, releasing, making mistakes. When algorithms shifted, he realized he\'d been building on rented land. Instead of quitting, he built the infrastructure he wished he\'d had. Tribly was born from that insight. The Grouped merger accelerated the roadmap by 2-3 years.',
    },
    {
      name: 'Tim',
      role: 'Co-Founder (Grouped side)',
      story: '15 years in the music industry. Not a musician — extremely passionate about helping artists. All of his best friends are artists. Built successful music tech companies. Deeply mission-driven: not motivated by money, building something impactful.',
    },
    {
      name: 'Lucy Gonzalez',
      role: 'Brand & Product Strategy',
      contact: 'lucy@start-suite.com',
      story: 'Leading brand architecture, visual and verbal identity, design system (GDS26R), and go-to-market positioning for the merged entity.',
    },
  ],
};

export const BRAND_IDENTITY = {
  archetype: 'The Outlaw / The Creator',
  archetypeNote: 'Artist-first, algorithm-opposed, anti-intermediary. Building infrastructure for genuine independence from Big Tech.',
  
  brandAnchor: 'FIRST',
  brandAnchorNote: 'The single idea the whole brand stands on. First to hear. First to see. First to react. First to prove it. Perfectly aligns with current product (early access swaps) and future roadmap (gamification, leaderboards, top fan status).',

  coreNarrative: 'The best artists have always known that the fan relationship is everything. Before algorithms, there were mailing lists, fan clubs, and backstage passes. Grouped is that layer — rebuilt for the modern era. Not rented. Not algorithmic. Yours.',

  values: [
    { name: 'Artist Ownership', desc: 'Artists always own their data and fan relationships. Non-negotiable. We never hold it hostage.' },
    { name: 'Radical Directness', desc: 'No algorithm in the middle. Direct line between artist and fan, every time.' },
    { name: 'Compounding Value', desc: 'Every release builds on the last. We are fundamentally opposed to starting from zero.' },
    { name: 'Access for All', desc: 'This is not a superfan platform. This is for all of your fans, at every level. No paywall at the door.' },
    { name: 'Artist-Built', desc: 'Built from the artist side. Seth was an artist for 20+ years. We understand the problem because we lived it.' },
    { name: 'Non-Extractive', desc: 'White hat mechanics only. Everything lifts users up. Nothing feels like being manipulated or milked.' },
  ],

  personalityTraits: [
    { trait: 'Passionate', note: 'Authentically passionate about the problem — not a corporate team solving a market gap, a musician solving his own pain.' },
    { trait: 'Mission-driven', note: 'Driven by purpose beyond profit. "This isn\'t just another music industry tool."' },
    { trait: 'Authentic', note: 'We are exactly who we say we are: musicians trying to solve our own problem.' },
    { trait: 'Ambitious', note: 'Thinking big and executing boldly. Failure is not an option.' },
    { trait: 'Warm and inviting', note: 'Takes time to talk with artists and their teams. Longer relationship-building is a feature, not a bug.' },
    { trait: 'Empowering', note: 'For artists: independence, ownership, autonomy. For fans: become the biggest version of yourself as a fan.' },
  ],

  inspiration: [
    { brand: 'Tesla', reason: 'Slick, modern, futuristic, precision, clean minimalism, quality-first. People use something when it\'s incredibly well-designed and valuable.' },
    { brand: 'Discord', reason: 'The VIBE. Gamified feel. Status systems, levels, achievements. Playful, gaming-oriented energy. (NOT the UX — too technical. Discord energy with accessible UX.)' },
    { brand: 'Duolingo', reason: 'Made a mascot come to life as an extension of company personality. Gamification of inherently non-game behavior.' },
    { brand: 'Spotify', reason: 'Visual brand only — solid and modern. Not the culture or extractive platform dynamics.' },
  ],

  antiPatterns: [
    'Corporate, cold, faceless SaaS feel (Laylo is the anti-model)',
    'Overemphasizing "community" — sounds heavy, high-commitment for both artists and fans',
    'Purple gradients (Laylo), generic B2B SaaS aesthetics',
    'Extractive, purely transactional, or manipulative mechanics',
    'Algorithmic language ("leverage," "optimize," "growth hacking")',
  ],

  nameConsiderations: 'Seth\'s concern: "grouped." has 80% confusion rate on first listen, people mishear it. Also: community/grouping connotation emphasizes the hardest thing to sell. "First.FM" explored as alternative — better alignment with the FIRST brand anchor. Decision: keeping grouped. for now while this is documented for future consideration.',
};

export const VISUAL_IDENTITY = {
  confirmed: false, // Pending full Figma GDS26R export
  direction: 'Tesla-inspired minimalism meets music culture. Sleek, future-facing, precision. Dark mode primary (aligns with music culture, differentiates from daytime SaaS). Electric lime accent for energy, modernity, greenspace in competitive set.',
  
  palette: [
    { name: 'Acid Lime', hex: '#BFFF00', role: 'Primary Accent', note: 'Confirmed from site. Occupies genuine competitive greenspace.' },
    { name: 'Off-Black', hex: '#07070A', role: 'Background', note: 'Primary canvas. Dark mode primary by design decision.' },
    { name: 'Surface 1', hex: '#0E0E13', role: 'Sidebar / Header', note: 'Slightly lighter than BG for panel differentiation.' },
    { name: 'Surface 2', hex: '#15151C', role: 'Cards / Panels', note: 'Primary card background.' },
    { name: 'Surface 3', hex: '#1C1C26', role: 'Nested elements', note: 'Hover states and nested cards.' },
    { name: 'Border', hex: '#272733', role: 'Primary dividers', note: '' },
    { name: 'Border Soft', hex: '#33333F', role: 'Subtle dividers', note: '' },
    { name: 'Text Primary', hex: '#EDEDF5', role: 'Headings + body', note: 'Near-white with slight blue cast.' },
    { name: 'Text Secondary', hex: '#9494AA', role: 'Subtitles + supporting', note: '' },
    { name: 'Muted', hex: '#555566', role: 'Labels / metadata', note: '' },
    { name: 'Amber', hex: '#FFB020', role: 'Unconfirmed / Warning', note: 'Marks AI-generated data needing confirmation.' },
    { name: 'Teal', hex: '#00E59B', role: 'Success / Confirmed', note: '' },
    { name: 'Electric Blue', hex: '#4DA8FF', role: 'Informational', note: '' },
    { name: 'Red', hex: '#FF4D4D', role: 'Critical / Error', note: '' },
  ],

  typography: [
    { role: 'Display / Wordmark', family: 'Syne', weights: '700, 800', usage: 'Section headers, hero text, brand wordmark, prominent figures.' },
    { role: 'Monospace / Data', family: 'DM Mono', weights: '300, 400, 500', usage: 'Labels, badges, hex codes, data tables, metadata.' },
    { role: 'Body / Interface', family: 'Inter', weights: '300, 400, 500, 600', usage: 'Body text, descriptions, UI copy.' },
  ],

  wordmark: {
    treatment: 'grouped. — lowercase with period.',
    rationale: 'The period is intentional. Confidence, finality, precision. "This is the end of the sentence. No further explanation required." An anti-corporate, artist-first punctuation choice.',
    logoNote: 'Assets available in Google Drive. Full SVG/PNG/DM export pending from Figma GDS26R (node 7-89).',
    driveFolder: 'https://drive.google.com/drive/folders/1_UmgLjW2jfctJywpoTFVcI4eReV8uaQx',
    figmaFile: 'https://www.figma.com/design/wValDdxygSxILi49qBBgAW/GDS26R?node-id=7-89',
  },

  greenspace: [
    { name: 'Laylo', colors: ['#7C3AED', '#A855F7'], note: 'Purple — dominant in music CRM space' },
    { name: 'Community', colors: ['#1A1A1A', '#444444'], note: 'Flat black — generic' },
    { name: 'Patreon', colors: ['#FF424D', '#F96854'], note: 'Coral/red' },
    { name: 'Discord', colors: ['#5865F2', '#7289DA'], note: 'Indigo' },
    { name: 'Mailchimp', colors: ['#FFE01B', '#241C15'], note: 'Yellow + dark' },
    { name: 'OpenStage', colors: ['#6366F1', '#818CF8'], note: 'More indigo' },
    { name: 'grouped.', colors: ['#BFFF00', '#07070A'], note: 'Acid lime + near-black — unoccupied' },
  ],
};

export const VERBAL_IDENTITY = {
  taglines: [
    'The growth engine for lifelong music careers.',
    'direct-to-fan, finally done right.',
    'Turn every release into a growth engine.',
    'Just you and your fans. Every. Single. Time.',
    "Don't just drop music. Create waves.",
  ],

  brandAnchorCopy: {
    principle: 'FIRST',
    lines: [
      'First to hear.',
      'First to see.',
      'First to react.',
      'First to prove it.',
    ],
    note: 'Every feature maps to this. Swaps = first access. Feed = first to know. Groups = first in. Gamification = first to complete, first on leaderboard.',
  },

  antiCommunityNote: 'Do NOT lead with "community." It sounds heavy — big commitment for both artists and fans. Community is the implicit outcome, not the pitch. Lead with premiere window, early access, VIP first access.',

  voiceSpectrum: [
    { dim: 'Artist-to-Artist', pct: 90, note: 'We speak like artists, not SaaS companies.' },
    { dim: 'Direct vs. Diplomatic', pct: 85, note: 'Say the thing. Artists respect honesty.' },
    { dim: 'Bold vs. Safe', pct: 80, note: 'Challenge the status quo, always.' },
    { dim: 'Warm vs. Cold', pct: 65, note: 'Warm but not sentimental. Confident but not arrogant.' },
    { dim: 'Simple vs. Complex', pct: 75, note: 'Complex product. Simple language. Non-negotiable.' },
    { dim: 'Playful vs. Serious', pct: 55, note: 'Growing toward playful as gamification launches. Currently weighted serious.' },
  ],

  voiceTraits: [
    { trait: 'Anti-jargon', ex: 'NOT: "leverage algorithmic distribution channels." YES: "Stop renting your audience."' },
    { trait: 'Reframes the win', ex: 'NOT: "1,000 followers." YES: "1,000 fans who drive hours to see you play."' },
    { trait: 'Artist-validated', ex: 'Built from the artist side means we talk the talk because we walked the walk.' },
    { trait: 'Confident, not arrogant', ex: 'The product speaks for itself. We let the numbers do the bragging.' },
    { trait: 'Game-like framing', ex: 'Coming in Phase 3: fan status, leaderboards, quests. The product should feel like playing a game of being a top fan — without black-hat mechanics.' },
  ],

  proofReframe: [
    { proxy: 'Follower count', real: 'Fans who drive hours to see you play' },
    { proxy: 'Stream numbers', real: 'Merch that actually sells' },
    { proxy: 'Social media views', real: 'Tour dates booked and tickets sold' },
    { proxy: 'Playlist placements', real: 'Direct messages from fans who feel connected' },
    { proxy: 'Going viral', real: 'Revenue that\'s predictable and growing' },
  ],

  segments: [
    {
      name: 'Developing Artist',
      range: '< 100K monthly listeners',
      hook: "You're already earning fans. Capture them before they disappear.",
      pain: 'Every release feels like starting from zero. No compounding, no momentum.',
      proof: '92% opt-in rate. Real fans, not just streams.',
      avoid: ['algorithm', 'viral', 'influencer', 'growth hacking'],
      use: ['real fans', 'your list', 'own it', 'momentum', 'early access', 'FIRST'],
      cta: 'Start free. Build your first release.',
      story: '"I dropped my EP last month. 400 streams. I posted every day for a week. Nothing stuck. I just want to know who my actual fans are."',
    },
    {
      name: 'Mid-Tier Artist',
      range: '100K - 3M listeners',
      hook: "You have fans. You're just not keeping them.",
      pain: 'Organic reach collapsed. You post into a void. Every release resets.',
      proof: 'PardyAlone turned M&G tickets into $35K ARR. No label required.',
      avoid: ['follower count', 'impressions', 'vanity metrics'],
      use: ['direct channel', 'own the relationship', 'recurring revenue', 'retain'],
      cta: 'See how PardyAlone did it.',
      story: '"I have 500K streams a month and I\'m barely paying rent. My Instagram reach is 3%. I know I have real fans — I see them at shows — but I can\'t reach them directly."',
    },
    {
      name: 'Established Artist',
      range: '3M+ listeners',
      hook: 'Your audience is massive. Your direct channel is not.',
      pain: 'SMS costs $30K per send. Platforms change their algorithm tomorrow.',
      proof: 'Fan Passes reach 1M fans for $20-50/month. Same open rates.',
      avoid: ["we're just getting started", 'small team', 'beta'],
      use: ['infrastructure', 'scale', 'platform independence', 'owned audience'],
      cta: 'Book a strategy session.',
      story: '"We spend $40K per SMS campaign. The open rates are great but the economics are broken."',
    },
  ],
};

export const COMPETITIVE = [
  {
    name: 'Laylo', category: 'Direct', threat: 'High',
    colors: ['#7C3AED', '#A855F7'],
    position: 'SMS/email CRM for music. Drop campaigns and blast messaging. Monetizes messages sent.',
    strengths: ['Established SMS infrastructure', 'Strong artist relationships', 'Drop-focused UX', 'Trusted by major labels'],
    weaknesses: ['$30K-50K per SMS send at scale', 'Single-feature tool', 'No community layer', 'Cannot compete on price without destroying core model'],
    moat: 'Grouped monetizes value created, not messages sent. Fan Passes reach 1M fans for $50/month vs. $30K-50K SMS. Laylo cannot drop pricing without cannibalizing core revenue.',
    note: 'Seth explicitly: Laylo is the anti-model for brand and feel. Transactional, cold, corporate.',
  },
  {
    name: 'Community', category: 'Direct', threat: 'High',
    colors: ['#1A1A1A', '#444444'],
    position: 'Text message community for celebrities. SMS-native. Pure outbound.',
    strengths: ['Celebrity credibility', 'SMS-native engagement', 'Large creator base'],
    weaknesses: ['SMS costs prohibitive at scale', 'No early access mechanics', 'No fan data capture', 'Outbound only'],
    moat: 'No swaps mechanism. Pure outbound, no inbound capture. Grouped wins on data economics and fan-first mechanics.',
    note: '',
  },
  {
    name: 'OpenStage', category: 'Direct', threat: 'Medium',
    colors: ['#6366F1', '#818CF8'],
    position: 'Artist-to-fan platform with wallet passes. Building for major artists.',
    strengths: ['Wallet pass expertise', 'Major artist relationships', 'Funded'],
    weaknesses: ['Only accessible to top 0.1% of artists', 'Complex onboarding', 'Not built for developing tier'],
    moat: 'OpenStage serves the 0.1%. Grouped owns the other 99.9% and builds up. Grouped\'s Fan Passes will be the accessible version of OpenStage\'s offering.',
    note: 'OpenStage is already developing wallet passes for the biggest artists in the world — Grouped delivers the same capability for the 99.9%.',
  },
  {
    name: 'Discord', category: 'Adjacent', threat: 'Medium',
    colors: ['#5865F2', '#7289DA'],
    position: 'General community platform. Artists use it by default, not by design.',
    strengths: ['Massive user base', 'Free tier', 'Strong gaming/community culture'],
    weaknesses: ['Noisy, high-friction UX', 'Not music-specific', 'No creator monetization', 'Not artist-owned', 'Steep learning curve'],
    moat: '"Discord is noisy. Instagram is rented. Your Group is yours — clean, focused, owned." Grouped takes Discord\'s energy, gamification DNA, and community vibe — with actually intuitive UX.',
    note: 'Discord is a visual/brand inspiration (the vibe, gamification) but NOT a product inspiration (UX too technical).',
  },
  {
    name: 'Patreon', category: 'Adjacent', threat: 'Watch',
    colors: ['#FF424D', '#F96854'],
    position: 'Creator subscription membership. Paywall-first model.',
    strengths: ['Strong brand trust', 'Payment infrastructure', 'Established creator base'],
    weaknesses: ['Paywall excludes casual fans', 'No early access swaps', 'No fan capture mechanics'],
    moat: 'Grouped does not paywall the community. Value for ALL fans, not just paid superfans. "We don\'t create high cost barriers designed to weed out everyone but your superfans."',
    note: '',
  },
  {
    name: 'Mailchimp', category: 'Adjacent', threat: 'Watch',
    colors: ['#FFE01B', '#241C15'],
    position: 'General email marketing. Artists use by default for newsletters.',
    strengths: ['Massive brand recognition', 'Robust automations', 'Wide integrations'],
    weaknesses: ['Per-subscriber pricing at scale', 'Not music-specific', 'No fan capture tools', 'Generic feel'],
    moat: 'Grouped custom email charges per send, not per subscriber. Purpose-built for release cycles.',
    note: '',
  },
  {
    name: 'Spotify (long-term)', category: 'Platform Threat', threat: 'Watch',
    colors: ['#1DB954', '#191414'],
    position: 'Streaming + discovery layer. Increasingly adding artist tools.',
    strengths: ['3.6B+ users', 'Native listening data', 'Playlist + algorithm discovery'],
    weaknesses: ['Extractive model ($5B paid out = $0.003/stream)', 'Platform owns artist-fan relationship', 'No direct communication tools'],
    moat: 'Spotify separates songs from artists (mood listening, playlists). Grouped reattaches song to artist relationship. Collaboration opportunity in short-term via data integrations.',
    note: '',
  },
];

export const AUDIENCE = [
  {
    id: 'developing',
    name: 'Developing Artist',
    priority: 'Primary (Phase 1)',
    range: '< 100K monthly listeners',
    count: '9.5M artists',
    arpu: '$84/yr',
    phase: 'Now',
    psycho: [
      'Identity deeply tied to their art',
      'Motivated by validation and early momentum',
      'Skeptical of tools that promise virality',
      'Time-limited — balancing music with income',
      'Hungry for community and "making it" feeling',
      'Will upgrade to sub-$10 tiers if they feel results',
    ],
    churn: 'High if they do not see momentum in first 30 days. The key success moment: first fan captured in session one. Need that early win to stick.',
    story: '"I dropped my EP last month. 400 streams. I posted every day on TikTok for a week. Nothing stuck. I feel like I\'m shouting into a void. I just want to know who my actual fans are — not just a number on a screen."',
    jtbd: 'Build the feeling of momentum. Make me feel like I\'m making progress even before I go viral.',
    reach: 'Cold DMs, social ads (Meta, TikTok). Distribution integration. Self-serve essential — need to onboard 100K+ artists in Phase 1.',
  },
  {
    id: 'midtier',
    name: 'Mid-Tier Artist',
    priority: 'Primary (Phase 2)',
    range: '100K - 3M listeners',
    count: '1.8M artists',
    arpu: '$228/yr',
    phase: 'Q2 2026',
    psycho: [
      'Professional artist — music is their career',
      'Has an audience but struggles to monetize it',
      'Frustrated by declining organic reach',
      'Open to tools that show clear ROI',
      'Values data ownership and fan relationships',
      'Will pay for professional features (custom domains, CRM integrations)',
    ],
    churn: 'Medium. Sticks around if revenue impact is tangible. PardyAlone-style results create deep retention.',
    story: '"I have 500K streams a month and I\'m barely paying rent. My Instagram reach is 3%. I know I have real fans — I see them at shows — but I have no way to reach them directly without paying $50 per email."',
    jtbd: 'Convert my existing audience into a revenue stream I actually own.',
    reach: 'Word of mouth, direct relationships, pitching management companies. None of Phase 1 tactics work here.',
  },
  {
    id: 'high',
    name: 'High-Tier Artist',
    priority: 'Secondary (Phase 3)',
    range: '3M+ listeners',
    count: '240K artists',
    arpu: '$468/yr',
    phase: 'Q4 2026+',
    psycho: [
      'Established career with a team around them',
      'Primary concern is fan depth, not breadth',
      'SMS economics are a known and painful point',
      'Wants infrastructure, not another tool to manage',
      'Cares about fan experience as much as reach',
    ],
    churn: 'Low once onboarded. High implementation barrier. Requires white-glove service and team buy-in.',
    story: '"We spend $40K per SMS campaign. The open rates are great but the economics are broken. My team is researching alternatives. We need something that can reach 2M fans without a six-figure line item every time."',
    jtbd: 'Replace SMS economics with something that scales infinitely at a flat monthly cost.',
    reach: 'Direct sales, enterprise team, management company relationships. White-glove onboarding.',
  },
];

export const GAP_ANALYSIS = [
  {
    dim: 'Brand Narrative', priority: 'Critical', pct: 35,
    current: 'Two separate brand stories (Tribly swaps + Grouped community) not yet fully unified under one Grouped narrative. "First" brand anchor not yet deployed in customer-facing copy.',
    future: 'Single narrative: "The full-funnel direct-to-fan growth engine." FIRST brand anchor activated across all touchpoints. Every feature maps back to the premiere window.',
  },
  {
    dim: 'Visual Identity', priority: 'High', pct: 55,
    current: 'Dark editorial aesthetic established. Electric lime accent confirmed. Wordmark strong. Figma GDS26R in progress but not exported or documented.',
    future: 'Full documented design system: primary/secondary palette, typography hierarchy, component library, asset usage rules, exported from GDS26R.',
  },
  {
    dim: 'Verbal System', priority: 'High', pct: 60,
    current: 'Strong hero messaging. Competitive positioning sharp. Tone established. Segment-specific messaging drafted in master reference.',
    future: 'Complete verbal playbook: positioning per segment, channel voice matrix, messaging cheat sheet per use case, anti-patterns documented.',
  },
  {
    dim: 'Investor Readiness', priority: 'Critical', pct: 45,
    current: 'Series A materials in progress. Unit economics narrative forming. Team story needs final refinement around merger arc.',
    future: 'Locked Series A deck + data room. Every question anticipated, every metric contextualized, merger story compelling.',
  },
  {
    dim: 'Customer Proof', priority: 'Medium', pct: 40,
    current: 'Forrest Frank, PardyAlone, MIKE., Surfaces case studies live. Need more at developing artist tier.',
    future: '12+ case studies across all 3 artist tiers. Video testimonials. Artist advisory board. Real artist results anchoring every messaging claim.',
  },
  {
    dim: 'Channel Strategy', priority: 'Medium', pct: 25,
    current: 'Meta ads + organic social active. Content not systematized. No documented channel-by-channel voice.',
    future: 'Full channel strategy: LinkedIn (investor/industry), TikTok (artist acquisition), Instagram (social proof), email (retention).',
  },
];

export const REVENUE_TIERS = [
  {
    name: 'Free', price: '$0', per: 'mo',
    colorKey: 'muted',
    features: ['Basic swaps', 'Limited data capture', 'Grouped branding', '100 fan cap'],
    status: 'Live', statusColor: 'teal',
  },
  {
    name: 'Starter', price: '$7', per: 'mo',
    colorKey: 'blue',
    features: ['Smart swaps', 'Basic customization', 'CSV exports', '1,000 fan cap'],
    status: 'Live', statusColor: 'teal',
  },
  {
    name: 'Growth', price: '$19', per: 'mo',
    colorKey: 'teal',
    features: ['Custom domains', 'Advanced customization', 'Multiple CRM integrations', '10,000 fan cap'],
    status: 'Q3 2026', statusColor: 'amber',
  },
  {
    name: 'Pro', price: '$39', per: 'mo',
    colorKey: 'accent',
    features: ['White-label', 'Embeddable experiences', 'Hide Grouped branding', 'Unlimited fans'],
    status: 'Jan 2027', statusColor: 'amber',
  },
];

export const UNIT_ECONOMICS = [
  { metric: 'CPA (free sign-up)', observed: '$8.00', target: '$8.40', note: 'Meta/Instagram campaigns' },
  { metric: 'Effective CAC (paid sub)', observed: '$138.89', target: '~$66 blended', note: 'Observed vs. modeled conversion rates' },
  { metric: 'Activation Rate', observed: '26.2%', target: '35%', note: '2025 actual' },
  { metric: 'Upgrade Rate (activated → paid)', observed: '16.53%', target: '20%', note: 'Product-led, no sales team' },
  { metric: 'Avg. Subscriber Lifetime', observed: '3.48 months', target: '5.6 months', note: 'Cohort data May-Dec 2025' },
  { metric: 'LTV:CAC Ratio', observed: '0.41x', target: '3.0x+', note: 'Path mapped via 3-lever improvement' },
  { metric: 'Best Cohort Churn (Jun 2025)', observed: '6.2%/mo', target: '< 8%/mo', note: 'Proves retention ceiling is achievable' },
];

export const PROJECTIONS = [
  { year: '2026', spend: '$309.5K', signups: '39,245', paid: '3,795', rev: '$317K', arr: '$737K', roi: '2.3%', roiPositive: false },
  { year: '2027', spend: '$400K', signups: '50,021', paid: '6,348', rev: '$1.59M', arr: '$1.59M', roi: '169%', roiPositive: true },
  { year: '2028', spend: '$500K', signups: '61,922', paid: '8,789', rev: '$2.86M', arr: '$2.36M', roi: '294%', roiPositive: true },
];

export const GTM_PHASES = [
  {
    label: 'Awareness', status: 'Active',
    strategy: 'Meta/Instagram paid acquisition targeting independent artists. Artist community content on TikTok. The distribution partnership play is the key unlock: integrating into the upload flow of the top 2 distributors (50%+ market share) turns every music upload into a Grouped acquisition moment.',
    kpis: ['CPA < $10', 'ROAS > 3x', '200 partnership sign-ups/month'],
  },
  {
    label: 'Activation', status: 'Active',
    strategy: 'In-product onboarding: first swap in under 10 minutes. Smart Feed setup. The critical moment is the first fan captured in session one — that\'s the "ka-ching" that creates retention.',
    kpis: ['Activation rate > 35%', 'First swap < 24 hours', 'First fan captured in session 1'],
  },
  {
    label: 'Growth', status: 'Optimizing',
    strategy: 'Product-led upgrade via swap limit hit. Email credit introduction at Growth tier. CRM integrations embed Grouped deeper into existing artist workflows. Never feel like a replacement — feel like the missing piece.',
    kpis: ['Upgrade rate > 20%', 'Email credit attach rate > 30%', 'MRR growth > 15% MoM'],
  },
  {
    label: 'Retention', status: 'Building',
    strategy: 'Year-round engagement via Smart Feed. Grouped becomes the default fan hub for every release cycle, not just launch day. Artists use it every week, not just on release week.',
    kpis: ['Monthly churn < 6.5%', 'NPS > 50', 'Release-cycle return rate > 80%'],
  },
  {
    label: 'Referral', status: 'Planned Q3 2026',
    strategy: 'Artist-to-artist referral program. Fan-facing sharing mechanics. Distribution partnerships drive warm leads at point of upload. K-factor > 0.3 is the target.',
    kpis: ['K-factor > 0.3', 'Referral sign-ups > 20%', 'Partner sign-ups > 200/month'],
  },
];

export const PRODUCT_ROADMAP = [
  {
    phase: 'Phase 1', label: 'SaaS Foundation', status: 'Live',
    items: ['Smart Swaps', 'Smart Feed', 'Groups (community)', 'Fan Profiling', 'CRM Integrations'],
    rev: 'SaaS subscriptions',
  },
  {
    phase: 'Phase 1.5', label: 'Email + Revenue', status: 'Q3 2026',
    items: ['Custom Email (credit model)', 'Direct Music Sales (20% take)', 'Growth tier launch'],
    rev: 'SaaS + email credits',
  },
  {
    phase: 'Phase 2', label: 'Real-Time Experiences', status: 'Q1 2027',
    items: ['Early Access Listening Parties', 'Microtransactions ($0.10-0.15/stream)', 'Real-time social proof ("Adam bought the song")'],
    rev: 'SaaS + transactional',
  },
  {
    phase: 'Phase 3', label: 'Gamification', status: 'Q3 2027',
    items: ['Fan Passes (iOS/Android wallet)', 'Quest System (stream, share, TikTok)', 'Leaderboards', 'Fan Avatars', 'Status + earned rewards'],
    rev: 'SaaS + transactional + virtual goods',
  },
  {
    phase: 'Platform', label: 'Network Effects', status: 'TBD',
    items: ['Fan-driven artist discovery', 'Grouped as top-of-funnel', 'Marketplace dynamics', 'Artist website builder (Epic Games model)'],
    rev: 'Marketplace + full stack',
  },
];

export const DECISIONS = [
  { date: 'Feb 2026', decision: 'Merged Tribly and Grouped under the Grouped brand identity', rationale: 'Combined entity owns the full funnel. Accelerates roadmap by 2-3 years. Grouped name tests stronger for community positioning.', owner: 'Seth + Tim', status: 'Active' },
  { date: 'Feb 2026', decision: 'Keep "grouped." name (revisit if traction requires rebrand)', rationale: 'Short-term wedge > long-term fit. Win the market position first, brand can evolve. "First.FM" documented as future option.', owner: 'Seth', status: 'Active' },
  { date: 'Jan 2026', decision: 'Free tier at $0 — no freemium ceiling', rationale: 'Drive top-of-funnel volume. Convert via product experience, not trial expiry pressure.', owner: 'Seth', status: 'Active' },
  { date: 'Jan 2026', decision: 'Pricing at $0/$7/$19/$39 + email credits as revenue layer 2', rationale: 'Competitive vs. Laylo/Community at lower price. Email credits add variable revenue on top of fixed MRR.', owner: 'Seth + Lucy', status: 'Active' },
  { date: 'Dec 2025', decision: 'Position as collaborative partner to distributors, not competitor', rationale: 'Integration reduces friction and unlocks massive acquisition channel via distributor catalog.', owner: 'Seth', status: 'Active' },
  { date: 'Nov 2025', decision: 'Dark mode as brand primary, light mode secondary', rationale: 'Aligns with music culture aesthetic. Differentiates from daytime SaaS tools. Tesla-inspired precision and modernity.', owner: 'Lucy', status: 'Active' },
  { date: 'Nov 2025', decision: 'Do NOT emphasize "community" in messaging', rationale: 'Community sounds heavy — high commitment for both artists and fans. Lead with premiere window and early access. Community is the implicit byproduct.', owner: 'Seth + Lucy', status: 'Active' },
  { date: 'Nov 2025', decision: 'Electric lime (#BFFF00) as primary accent', rationale: 'Occupies genuine competitive greenspace. Music-culture-coded. Energy, forward motion, distinctiveness vs. every purple/indigo/coral competitor.', owner: 'Lucy', status: 'Active' },
];

export const REPORT_CARD = [
  { cat: 'Visual Identity', score: 6, trend: 'up', note: 'Strong wordmark and aesthetic direction. Design system documentation (GDS26R) still incomplete.' },
  { cat: 'Verbal Identity', score: 7, trend: 'up', note: 'Hero messaging sharp. FIRST anchor defined but not yet deployed. Segment-specific playbook in progress.' },
  { cat: 'Digital Presence', score: 6, trend: 'stable', note: 'Website strong. Social presence active. SEO baseline not yet measured.' },
  { cat: 'Market Position', score: 7, trend: 'up', note: 'Clear differentiation vs. Laylo/Community. Distribution partnership is the key unlock.' },
  { cat: 'Investor Readiness', score: 5, trend: 'up', note: 'Series A narrative forming. Deck and data room need completion.' },
  { cat: 'Product-Market Fit', score: 8, trend: 'stable', note: '16.53% upgrade rate, 92% opt-in rate, proven case studies. PMF signal is strong.' },
];

export const ACTIONS = [
  { status: 'Now', text: 'Lock Series A narrative and slide structure', owner: 'Seth + Lucy', priority: 'Critical' },
  { status: 'Now', text: 'Finalize customer case study pipeline (need 8 more)', owner: 'Lucy', priority: 'Critical' },
  { status: 'Now', text: 'Export + document design system (Figma GDS26R)', owner: 'Lucy', priority: 'High' },
  { status: 'Now', text: 'Build investor data room', owner: 'Seth', priority: 'High' },
  { status: 'Next', text: 'Distribution partnership outreach and pitch (2 largest distributors)', owner: 'Seth', priority: 'High' },
  { status: 'Next', text: 'Growth tier + email credit system build', owner: 'Product', priority: 'High' },
  { status: 'Next', text: 'Website hero headline A/B test (FIRST anchor)', owner: 'Lucy', priority: 'Medium' },
  { status: 'Later', text: 'Phase 2: Listening party infrastructure', owner: 'Product', priority: 'Medium' },
  { status: 'Later', text: 'Fan Pass wallet integration (iOS/Android)', owner: 'Product', priority: 'Medium' },
  { status: 'Later', text: 'Artist advisory board formation', owner: 'Seth', priority: 'Low' },
];

// Research workflow steps for each section
export type ResearchStep = {
  id: string;
  label: string;
  prompt: string;
  sources: string[];
};

export const RESEARCH_WORKFLOWS: Record<string, ResearchStep[]> = {
  landscape: [
    {
      id: 'market-size',
      label: 'Market size + growth trends',
      prompt: 'Research the current market size and growth trends for the independent music artist tools market, direct-to-fan platforms, and artist tech ecosystem in 2025-2026. Include TAM/SAM data, growth rates, and key market signals.',
      sources: ['Spotify Loud & Clear', 'MIDiA Research', 'IFPI reports', 'Music Business Worldwide'],
    },
    {
      id: 'industry-shifts',
      label: 'Industry shifts + macro trends',
      prompt: 'What are the most significant macro trends reshaping the music industry in 2025-2026? Focus on: streaming economics, algorithmic dependence, indie artist growth, direct-to-fan movement, web3/wallet tech, and AI in music.',
      sources: ['Billboard', 'Music Week', 'Variety', 'The Verge', 'Ringer'],
    },
    {
      id: 'cultural-moments',
      label: 'Cultural moments + zeitgeist',
      prompt: 'What cultural moments, viral artists, and industry narratives in 2025-2026 are most relevant to Grouped\'s positioning as a direct-to-fan platform? Think: algorithm backlash, creator economy, artists owning their data.',
      sources: ['Twitter/X music discourse', 'Reddit r/WeAreTheMusicMakers', 'YouTube music commentary'],
    },
  ],
  competitive: [
    {
      id: 'laylo-deep',
      label: 'Laylo deep dive',
      prompt: 'Provide a current and detailed competitive analysis of Laylo as a music CRM platform. Cover: current pricing, feature set, recent funding, customer base, messaging, weaknesses, and what they\'ve done in 2025-2026.',
      sources: ['laylo.com', 'Crunchbase', 'Product Hunt', 'artist testimonials'],
    },
    {
      id: 'openstage-deep',
      label: 'OpenStage deep dive',
      prompt: 'Provide a current competitive analysis of OpenStage. Cover: product features (especially wallet passes), pricing, target market, recent activity in 2025-2026, and how they compare to Grouped\'s roadmap.',
      sources: ['openstage.live', 'tech press'],
    },
    {
      id: 'new-entrants',
      label: 'New entrants scan',
      prompt: 'What new music artist tools or direct-to-fan platforms have launched or raised funding in 2024-2026? Scan for: fan data capture tools, artist CRMs, wallet pass platforms, community platforms for musicians.',
      sources: ['Product Hunt', 'Crunchbase new launches', 'VC music tech portfolios'],
    },
  ],
  audience: [
    {
      id: 'artist-sentiment',
      label: 'Artist sentiment scan',
      prompt: 'Scan music artist communities (Reddit, Twitter/X, Discord) for current sentiment around: direct-to-fan tools, email list building, algorithm frustration, fan relationship building. What are independent artists saying right now?',
      sources: ['r/WeAreTheMusicMakers', 'r/makinghiphop', 'Twitter/X music artist community'],
    },
    {
      id: 'fan-behavior',
      label: 'Fan behavior + expectations',
      prompt: 'What does current research say about music fan behavior in 2025-2026? Cover: willingness to share contact info, early access appeal, push notification engagement rates, fan community participation patterns.',
      sources: ['Nielsen Music 360', 'Spotify culture surveys', 'academic research'],
    },
  ],
  news: [
    {
      id: 'grouped-news',
      label: 'Grouped mentions',
      prompt: 'Search for any press coverage, mentions, social media posts, or news about Grouped Inc., grouped.com, or the merger of Tribly and Grouped in music tech news from 2025-2026.',
      sources: ['Google News', 'Music Ally', 'Hypebot', 'Music Business Worldwide'],
    },
    {
      id: 'music-tech-news',
      label: 'Music tech news (this week)',
      prompt: 'What is the most recent and relevant news in music tech, direct-to-fan platforms, artist tools, and independent music in the last 7 days? Cover funding rounds, product launches, platform changes, and industry shifts.',
      sources: ['Music Ally', 'Hypebot', 'MBW', 'TechCrunch music', 'Billboard pro'],
    },
  ],
};
