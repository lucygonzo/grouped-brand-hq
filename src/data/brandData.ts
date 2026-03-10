// ============================================================
// GROUPED BRAND HQ — DATA
// Source: grouped_master_reference.md + GDS26R (grouped_brand README, Feb 2026)
// Last sync: March 2026
//
// NOTE ON VISUAL SPECS:
// Grouped runs two distinct visual systems:
//   1. BRAND / MARKETING (GDS26R) — Deep blue + bronze + warm white + Grouped Font / Satoshi
//      Used on: marketing site, pitch decks, social, press, partner-facing materials
//   2. PRODUCT / APP UI — Documented separately in the product design system
//      The Brand HQ internal tool uses its own internal palette (lime + near-black)
//      and is NOT representative of the Grouped brand visual direction.
// All visual identity specs below refer to the BRAND system (GDS26R).
// ============================================================

export const CLIENT = {
  name: 'Grouped',
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

// ============================================================
// VISUAL IDENTITY — GDS26R (Grouped Design System v1.0, Feb 2026)
// This documents the BRAND / MARKETING visual system.
// Product/app UI is a separate spec.
// ============================================================
export const VISUAL_IDENTITY = {
  systemVersion: 'GDS26R v1.0 — February 2026',
  scope: 'Brand + Marketing (marketing site, pitch decks, social, press, partner materials)',
  productNote: 'Product UI runs a separate design system. The two systems intentionally differ. This page documents the brand/marketing system only.',

  // Foundation principle
  foundationPrinciple: 'Make the screen disappear. Grouped is Swiss-minimal with soul. The visual language draws from 70s modernist typography and geometric precision, then layers in warmth through bronze accents, tactile surfaces, and generous spacing. Every surface should feel considered, every animation intentional, every interaction like reaching into the screen and touching something real.',

  extensionMetaphor: 'Grouped should feel like an extension of the artist, not a tool they log into. When an artist opens Grouped, the screen should dissolve. No chrome, no clutter, no "app" feeling. Just them, their music, and a warm room full of fans.',

  designPrinciples: [
    {
      name: 'Cyclical',
      desc: 'Music lives in loops. Write, record, release, connect, repeat. Every animation should feel like it\'s returning to something, building on the last cycle. Rounded corners, circular motifs, spring easings that overshoot and settle. Nothing stops. Everything flows into the next beat.',
    },
    {
      name: 'Tactile',
      desc: 'Glass has weight. Cards tilt when you reach for them. Stickers resist then follow your hand. Grain gives every surface a texture you can feel through the screen. The experience should remind you of handling vinyl, flipping through a crate, holding something real.',
    },
    {
      name: 'Vibing',
      desc: 'Timing is feel. Fast UI feels anxious. Slow UI feels confident. Our transitions run 500ms or longer because we\'re not in a hurry. We\'re vibing. The cursor glow drifts. Cards lift and settle with weight. Everything breathes at a pace that matches sitting in a listening room, not clicking through a dashboard.',
    },
  ],

  // COLORS — Dark mode primary
  colorSystem: {
    mode: 'Dark mode primary. Light mode secondary (documentation, print, partner-facing).',
    modeNote: 'Three temperature layers: cool navy surfaces, warm bronze brand elements, cool blue interactive accents.',
    backgrounds: [
      { token: '--bg-base',    hex: '#111620', rgb: '17, 22, 32',  usage: 'Page background, app shell' },
      { token: '--bg-raised',  hex: '#181E2A', rgb: '24, 30, 42',  usage: 'Cards, modals, elevated surfaces' },
      { token: '--bg-overlay', hex: '#1F2735', rgb: '31, 39, 53',  usage: 'Dropdowns, popovers, floating panels' },
      { token: '--bg-subtle',  hex: '#262F3F', rgb: '38, 47, 63',  usage: 'Hover states, selected rows, active areas' },
      { token: '--bg-muted',   hex: '#2E3849', rgb: '46, 56, 73',  usage: 'Input fields, code blocks, inset surfaces' },
    ],
    borders: [
      { token: '--border-default', hex: '#EBE1D2', opacity: '7%',  usage: 'Card edges, section dividers' },
      { token: '--border-hover',   hex: '#EBE1D2', opacity: '11%', usage: 'Hovered card edges, interactive borders' },
      { token: '--border-active',  hex: '#EBE1D2', opacity: '16%', usage: 'Focused inputs, selected elements' },
      { token: '--border-strong',  hex: '#EBE1D2', opacity: '22%', usage: 'High-contrast dividers' },
      { token: '--border-accent',  hex: '#C48A3A', opacity: '40%', usage: 'Bronze-tinted borders for premium surfaces' },
    ],
    text: [
      { token: '--text-primary',   hex: '#F0EBE3', opacity: '100%', usage: 'Headlines, body text, primary content' },
      { token: '--text-secondary', hex: '#F0EBE3', opacity: '60%',  usage: 'Descriptions, secondary labels, metadata' },
      { token: '--text-tertiary',  hex: '#F0EBE3', opacity: '38%',  usage: 'Placeholders, disabled text, captions' },
      { token: '--text-muted',     hex: '#F0EBE3', opacity: '18%',  usage: 'Watermarks, decorative numbers, ghost text' },
      { token: '--text-inverse',   hex: '#111620', opacity: '100%', usage: 'Text on light/accent backgrounds' },
    ],
    bronze: [
      { token: '--bronze-50',  hex: '#FEF7EC', usage: 'Light mode tint, subtle highlights' },
      { token: '--bronze-100', hex: '#FDE9C8', usage: 'Light badges, soft glow' },
      { token: '--bronze-200', hex: '#FAD08E', usage: 'Hover accents, warm highlights' },
      { token: '--bronze-300', hex: '#F6B44E', usage: 'Secondary buttons, tags. Use for body-size text (AA compliant)' },
      { token: '--bronze-400', hex: '#C48A3A', usage: 'PRIMARY BRAND ACCENT. Headlines, logos, labels, CTAs. Bronze is brand voice.' },
      { token: '--bronze-500', hex: '#B87A2E', usage: 'Hover state for primary accent' },
      { token: '--bronze-600', hex: '#916024', usage: 'Pressed state, deep accents' },
      { token: '--bronze-700', hex: '#6B471B', usage: 'Dark mode subtle bronze on dark surfaces' },
      { token: '--bronze-800', hex: '#4A3114', usage: 'Ghost bronze, decorative only' },
    ],
    focusBlue: {
      token: '--focus',
      hex: '#7CBBDF',
      rule: 'Focus blue handles interactive states ONLY: focus rings, accent stickers, badges, active/selected indicators, data viz accents. Never use for brand voice elements. If an element is on a poster, it\'s bronze. If you interact with it, it\'s focus blue.',
    },
    semantic: [
      { token: '--success',        hex: '#8BAF9C', usage: 'Confirmations, positive metrics, connected states' },
      { token: '--success-muted',  hex: '#8BAF9C', opacity: '15%', usage: 'Success background tint' },
      { token: '--warning',        hex: '#D4A24B', usage: 'Caution states, approaching limits' },
      { token: '--warning-muted',  hex: '#D4A24B', opacity: '15%', usage: 'Warning background tint' },
      { token: '--error',          hex: '#C27A6B', usage: 'Errors, destructive actions, disconnected states' },
      { token: '--error-muted',    hex: '#C27A6B', opacity: '15%', usage: 'Error background tint' },
      { token: '--info',           hex: '#8BA4BE', usage: 'Informational, tips, neutral highlights' },
    ],
    ringSystem: [
      { token: '--ring-outer-rest',   hex: '#2A3036', opacity: '18%', state: 'Default outer ring' },
      { token: '--ring-outer-active', hex: '#C48A3A', opacity: '22%', state: 'Activated outer ring (bronze glow)' },
      { token: '--ring-middle',       hex: '#2A3036', opacity: '28%', state: 'Middle ring, static' },
      { token: '--ring-inner',        hex: '#2A3036', opacity: '42%', state: 'Inner ring, static' },
      { token: '--ring-g-logo',       hex: '#FFFFFF',  opacity: '6%',  state: 'G lettermark inside rings' },
    ],
  },

  // TYPOGRAPHY
  typography: {
    systemNote: 'Two typefaces, one system. Grouped Font is brand-forward. Satoshi handles everything else.',
    fonts: [
      {
        name: 'Grouped Font',
        role: 'Display / Brand',
        type: 'Custom OTF — single weight (Regular), 160 glyphs, full ASCII coverage',
        minSize: '28px',
        source: 'Proprietary — in Google Drive assets',
        useFor: ['Hero headlines (48px+)', 'Marketing section titles (32px+)', 'Brand moments in pitch decks', 'The "Grouped" wordmark/logotype', 'Social media graphics (large text)', 'Print headers'],
        dontUseFor: ['Body copy at any size', 'Product UI (all of it)', 'Navigation and buttons', 'Form labels and inputs', 'Any text under 28px', 'Anywhere bold/medium/light weights are needed'],
        rule: 'Legibility always wins. If a context calls for varying weight, small sizes, or extended reading, Satoshi is correct.',
      },
      {
        name: 'Satoshi',
        role: 'System Workhorse',
        type: 'Swiss-style modernist sans serif. Variable font available.',
        source: 'Fontshare (free, open commercial)',
        weights: 'Light 300, Regular 400, Medium 500, Bold 700, Black 900 + italics',
        useFor: ['Body copy', 'Product UI', 'Subheadings', 'Navigation', 'Buttons', 'Captions', 'All text under 28px'],
        rule: 'Double-storey "a" and "g" give editorial credibility. Single-storey alternates via OpenType for geometric/70s display contexts.',
      },
      {
        name: 'JetBrains Mono',
        role: 'Monospace / Data',
        type: 'Monospace fallback stack: JetBrains Mono, SF Mono, Fira Code, Cascadia Code',
        useFor: ['Metrics displays', 'Code snippets', 'Data values', 'IDs', 'Data-heavy contexts'],
      },
    ],
    scaleMarketing: [
      { token: '--display-xl', size: '80px', weight: 'Black 900', lh: '0.95', ls: '-0.03em', usage: 'Hero headlines, section openers' },
      { token: '--display-lg', size: '64px', weight: 'Black 900', lh: '0.98', ls: '-0.025em', usage: 'Secondary heroes, feature headlines' },
      { token: '--display-md', size: '48px', weight: 'Bold 700', lh: '1.05', ls: '-0.02em', usage: 'Section titles' },
      { token: '--display-sm', size: '36px', weight: 'Bold 700', lh: '1.1', ls: '-0.015em', usage: 'Card headlines, subsection titles' },
      { token: '--heading-lg', size: '28px', weight: 'Bold 700', lh: '1.2', ls: '-0.01em', usage: 'Feature names, list headers' },
      { token: '--heading-md', size: '24px', weight: 'Medium 500', lh: '1.25', ls: '-0.005em', usage: 'Subheadings, dialog titles' },
      { token: '--body-lg',    size: '18px', weight: 'Regular 400', lh: '1.6', ls: '0', usage: 'Lead paragraphs, hero subtext' },
      { token: '--body-md',    size: '16px', weight: 'Regular 400', lh: '1.6', ls: '0', usage: 'Default body copy' },
      { token: '--body-sm',    size: '14px', weight: 'Regular 400', lh: '1.5', ls: '0.005em', usage: 'Secondary body, descriptions' },
      { token: '--caption',    size: '12px', weight: 'Medium 500', lh: '1.4', ls: '0.02em', usage: 'Labels, badges, metadata' },
      { token: '--overline',   size: '11px', weight: 'Bold 700', lh: '1.3', ls: '0.1em', usage: 'Section labels, all-caps markers ("01 / Capture")' },
    ],
    rules: [
      'Uppercase reserved for: overline labels, button text (under 3 words), badge text, tab labels',
      'Sentence case for all headlines. Title Case only for proper nouns and the Grouped brand name.',
      'Italics reserved for: emphasis within body copy, song titles/album names, placeholder text in editorial contexts',
      'Never combine uppercase + italic',
      'Use tabular figures (font-variant-numeric: tabular-nums) in data tables, metrics, pricing',
    ],
  },

  // SURFACE SYSTEM
  surfaces: {
    concept: 'The Listening Room. Every surface is designed to elevate whatever sits on top of it. Artist content should always be the brightest, warmest, most vivid thing on screen. Grouped never competes with the artist\'s visual identity.',
    types: [
      {
        name: 'Solid',
        description: 'The walls and floor. Structural, grounding, opaque. Use for page backgrounds, primary card containers, navigation.',
        cssNote: 'bg: --bg-raised, border: 1px solid border-default, radius: --radius-sleeve (4px)',
      },
      {
        name: 'Glass',
        description: 'Real frosted glass built from four layers: SVG noise texture (3% opacity), top-edge light gradient (refraction), blurred tinted base, layered inner shadows. The noise texture is critical — without it, glass looks like a CSS backdrop-filter demo.',
        cssNote: 'backdrop-filter: blur(28px) saturate(1.25) brightness(1.02)',
        usage: 'Callout cards, floating elements, overlays, secondary containers',
      },
      {
        name: 'Glass Warm',
        description: 'Gold-tinted glass variant. Bronze tint signals importance. Use for featured metrics, important notices, premium callouts.',
        cssNote: 'background: rgba(196,138,58,0.06), border: 1px solid rgba(196,138,58,0.1)',
        usage: 'Featured metrics, important notices, premium callouts',
      },
      {
        name: 'Vinyl',
        description: 'The premium surface. Warm gradient with reflective sheen. Use sparingly — only for the most important thing in the room.',
        cssNote: 'gradient: 135deg deep blue to bronze 4% tint, backdrop-filter: blur(32px) saturate(1.3)',
        usage: 'Hero moments, featured content, design principle callouts',
      },
      {
        name: 'Sticker',
        description: 'Lightweight transparent labels. Like stickers on a record sleeve. Use for badges, tags, metadata, small interactive elements.',
        cssNote: 'background: rgba(24,30,42,0.35), backdrop-filter: blur(8px), radius: --radius-label (9999px)',
        usage: 'Badges, tags, metadata, interactive elements',
      },
    ],
    grain: 'Fixed SVG noise overlay at 2.8% opacity (mix-blend-mode: overlay) covers the entire viewport. Adds organic warmth to every surface without interfering with readability. The grain is the difference between "digital dark mode" and "a room with texture."',
    ambientGlow: 'Warm radial gradients simulate lamplight. Applied behind glass surfaces to create depth and warmth. Keep subtle, off-center, never directly behind text.',
  },

  // BORDER RADIUS
  radiusSystem: {
    concept: 'Two families, two physical metaphors: Sleeves (cards, panels — barely-worn edges of vinyl pulled from a crate) and Labels (buttons, stickers, badges — round stickers stuck to the sleeve). The contrast between sharp containers and soft interactive elements is the system.',
    tokens: [
      { token: '--radius-sleeve', value: '4px',    family: 'Sleeve', usage: 'Cards, panels, containers, modals' },
      { token: '--radius-label',  value: '9999px', family: 'Label',  usage: 'Buttons, stickers, badges, pills, toggles' },
      { token: '--radius-sm',     value: '6px',    family: 'Sleeve', usage: 'Small containers, thumbnails' },
      { token: '--radius-md',     value: '10px',   family: 'Hybrid', usage: 'Inputs, dropdowns' },
      { token: '--radius-full',   value: '9999px', family: 'Label',  usage: 'Pills, toggles' },
    ],
    rule: 'If it holds content, it\'s a sleeve. If you tap it, it\'s a label.',
  },

  // SIGNATURE MOTIF
  signatureMotif: {
    name: 'Concentric Arcs',
    meaning: 'Sound waves. Vinyl grooves. Ripples expanding outward. The core product idea: something starts at the center (the artist, the release) and radiates outward to reach more people.',
    rules: [
      'Heavy strokes with tight gaps. Stroke width always larger than gap (2.5:1 ratio)',
      'All rings in a set use the same stroke weight and color. No variation.',
      'No gradients. No feathering. No per-ring opacity changes. Solid lines.',
      '3 to 6 arcs per group',
      'Stroke math: Period = stroke-width + gap. Target ratio: stroke 2.5x the gap. Example: stroke-width 34, gap 14, period 48',
    ],
    usage: [
      { mode: 'Subtle', opacity: '5-10%', use: 'Background texture. Heavy strokes still read at low opacity.' },
      { mode: 'Bold',   opacity: '100%',  use: 'Bronze background with slightly darker bronze arcs. Poster hero, social assets.' },
    ],
    ringProportions: {
      outer: '100% of container',
      middle: '~68% of outer',
      inner: '~42% of outer',
      gMark: '~20% of outer, centered',
      fill: 'Always low opacity fills (6-42%). Rings are atmospheric, not solid.',
    },
  },

  // WORDMARK
  wordmark: {
    treatment: 'Grouped — title case, no period.',
    font: 'Grouped Font (custom display OTF)',
    rationale: 'Title case reflects confidence and brand maturity. The wordmark is clean, precise, and stands on its own without punctuation gimmicks.',
    logoNote: 'Assets in Google Drive. Full SVG/PNG export pending from Figma GDS26R (node 7-89).',
    driveFolder: 'https://drive.google.com/drive/folders/1_UmgLjW2jfctJywpoTFVcI4eReV8uaQx',
    figmaFile: 'https://www.figma.com/design/wValDdxygSxILi49qBBgAW/GDS26R?node-id=7-89',
  },

  // GREENSPACE
  greenspace: [
    { name: 'Laylo',      colors: ['#7C3AED', '#A855F7'], note: 'Purple — dominant in music CRM' },
    { name: 'Community',  colors: ['#1A1A1A', '#444444'], note: 'Flat black — generic' },
    { name: 'Patreon',    colors: ['#FF424D', '#F96854'], note: 'Coral/red' },
    { name: 'Discord',    colors: ['#5865F2', '#7289DA'], note: 'Indigo' },
    { name: 'Mailchimp',  colors: ['#FFE01B', '#241C15'], note: 'Yellow + dark' },
    { name: 'OpenStage',  colors: ['#6366F1', '#818CF8'], note: 'Indigo variant' },
    { name: 'Grouped',   colors: ['#C48A3A', '#111620'], note: 'Bronze + deep navy — entirely unoccupied' },
  ],

  // WHAT TO AVOID
  avoidList: [
    'Neon/electric gradients (too SaaS-generic)',
    'Blue as a primary color (too corporate/tech)',
    'Sharp 0px radius (too harsh for the warmth needed)',
    'Thin/hairline fonts (too fragile for the bold message)',
    'Heavy drop shadows (too dated)',
    'Decorative illustrations (too playful for the premium positioning)',
    'Auto-playing video (too aggressive)',
    'Electric lime (#BFFF00) — this was a prior direction, superseded by GDS26R bronze system',
  ],

  // MOTION (key rules)
  motionPrinciples: [
    'Scroll drives narrative. Every scroll increment advances the story.',
    'Motion has mass. Use ease-out for entering, ease-in for exiting. Never linear.',
    'Stagger creates rhythm. Groups enter with 60-100ms stagger.',
    'Gold glows, never flashes. Bronze reveals minimum 400ms transition.',
    'Subtlety at rest, confidence in motion.',
    'All interactions respect prefers-reduced-motion.',
  ],

  easing: [
    { token: '--ease-out',     value: 'cubic-bezier(0.16, 1, 0.3, 1)',    usage: 'Default for entering elements' },
    { token: '--ease-in-out',  value: 'cubic-bezier(0.65, 0, 0.35, 1)',   usage: 'Morphing, layout shifts' },
    { token: '--ease-spring',  value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', usage: 'Bouncy micro-interactions (badges, toasts)' },
    { token: '--ease-smooth',  value: 'cubic-bezier(0.25, 0.1, 0.25, 1)', usage: 'Slow, cinematic movements' },
    { token: '--ease-snap',    value: 'cubic-bezier(0.5, 0, 0, 1)',       usage: 'Quick snaps (tabs, toggles)' },
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
    current: 'GDS26R v1.0 defined (Feb 2026). Bronze/deep blue system documented. Figma component library build in progress. Grouped Font custom OTF and Satoshi confirmed as typeface system.',
    future: 'Full documented design system exported from GDS26R: component library, animation prototypes, campaign extension guide, Figma variables with light/dark mode.',
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
  { date: 'Feb 2026', decision: 'GDS26R: Bronze (#C48A3A) as primary brand accent — supersedes electric lime', rationale: 'Deep blue + bronze + warm white system established in GDS26R v1.0. Bronze is the brand voice (headlines, logos, CTAs). Focus blue (#7CBBDF) handles interactive states. Prior lime direction retired.', owner: 'Lucy', status: 'Active' },
  { date: 'Feb 2026', decision: 'GDS26R: Grouped Font + Satoshi as the two-typeface system', rationale: 'Grouped Font (custom OTF) for display/brand. Satoshi (Fontshare) for all product/body copy. JetBrains Mono for data. Replaces Syne/DM Mono/Inter prior direction.', owner: 'Lucy', status: 'Active' },
  { date: 'Jan 2026', decision: 'Free tier at $0 — no freemium ceiling', rationale: 'Drive top-of-funnel volume. Convert via product experience, not trial expiry pressure.', owner: 'Seth', status: 'Active' },
  { date: 'Jan 2026', decision: 'Pricing at $0/$7/$19/$39 + email credits as revenue layer 2', rationale: 'Competitive vs. Laylo/Community at lower price. Email credits add variable revenue on top of fixed MRR.', owner: 'Seth + Lucy', status: 'Active' },
  { date: 'Dec 2025', decision: 'Position as collaborative partner to distributors, not competitor', rationale: 'Integration reduces friction and unlocks massive acquisition channel via distributor catalog.', owner: 'Seth', status: 'Active' },
  { date: 'Nov 2025', decision: 'Dark mode as brand primary, light mode secondary', rationale: 'Aligns with music culture aesthetic. Differentiates from daytime SaaS tools. Tesla-inspired precision and modernity.', owner: 'Lucy', status: 'Active' },
  { date: 'Nov 2025', decision: 'Do NOT emphasize "community" in messaging', rationale: 'Community sounds heavy — high commitment for both artists and fans. Lead with premiere window and early access. Community is the implicit byproduct.', owner: 'Seth + Lucy', status: 'Active' },
];

export const REPORT_CARD = [
  { cat: 'Visual Identity', score: 7, trend: 'up', note: 'GDS26R v1.0 documented (Feb 2026). Bronze/deep blue system established. Figma component library build in progress. Grouped Font + Satoshi typeface system confirmed.' },
  { cat: 'Verbal Identity', score: 7, trend: 'up', note: 'Hero messaging sharp. FIRST anchor defined but not yet deployed. Segment-specific playbook in progress.' },
  { cat: 'Digital Presence', score: 6, trend: 'stable', note: 'Website strong. Social presence active. SEO baseline not yet measured.' },
  { cat: 'Market Position', score: 7, trend: 'up', note: 'Clear differentiation vs. Laylo/Community. Distribution partnership is the key unlock.' },
  { cat: 'Investor Readiness', score: 5, trend: 'up', note: 'Series A narrative forming. Deck and data room need completion.' },
  { cat: 'Product-Market Fit', score: 8, trend: 'stable', note: '16.53% upgrade rate, 92% opt-in rate, proven case studies. PMF signal is strong.' },
];

export const ACTIONS = [
  { status: 'Now', text: 'Lock Series A narrative and slide structure', owner: 'Seth + Lucy', priority: 'Critical' },
  { status: 'Now', text: 'Finalize customer case study pipeline (need 8 more)', owner: 'Lucy', priority: 'Critical' },
  { status: 'Now', text: 'Export + document design system (Figma GDS26R component library)', owner: 'Lucy', priority: 'High' },
  { status: 'Now', text: 'Build investor data room', owner: 'Seth', priority: 'High' },
  { status: 'Next', text: 'Distribution partnership outreach and pitch (2 largest distributors)', owner: 'Seth', priority: 'High' },
  { status: 'Next', text: 'Growth tier + email credit system build', owner: 'Product', priority: 'High' },
  { status: 'Next', text: 'Website hero headline A/B test (FIRST anchor)', owner: 'Lucy', priority: 'Medium' },
  { status: 'Later', text: 'Phase 2: Listening party infrastructure', owner: 'Product', priority: 'Medium' },
  { status: 'Later', text: 'Fan Pass wallet integration (iOS/Android)', owner: 'Product', priority: 'Medium' },
  { status: 'Later', text: 'Artist advisory board formation', owner: 'Seth', priority: 'Low' },
];

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
