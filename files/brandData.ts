// ============================================================
// GROUPED BRAND HQ — DATA
// Source of truth: https://lucygonzo.github.io/grouped_brand/
// GDS26R v1.0 — February 2026
// Last sync: March 2026
//
// TWO VISUAL SYSTEMS — DO NOT CONFLATE:
//   BRAND/MARKETING (this file): Anacrusis + Satoshi, bronze/navy,
//     used on marketing site, pitch decks, social, press.
//   PRODUCT/APP UI: separate spec, documented in P/ section of
//     the design system site and in Figma GDS26R product pages.
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
    tribly: 'Top-of-funnel tool. 4,500+ artists. Proven swaps for fan identification and data capture.',
    grouped: 'Bottom-of-funnel community platform. Infrastructure for sustained engagement and monetization.',
  },
  team: [
    { name: 'Seth', role: 'Co-Founder, CEO', story: 'Musician since age 8. Spent his 20s trying to make it as a full-time artist. When algorithms shifted, he built the infrastructure he wished he had. Tribly was born from that insight. The Grouped merger accelerated the roadmap by 2-3 years.' },
    { name: 'Tim', role: 'Co-Founder (Grouped side)', story: '15 years in the music industry. Not a musician — deeply passionate about helping artists. Built successful music tech companies. Driven by mission, not money.' },
    { name: 'Lucy Gonzalez', role: 'Brand & Product Strategy', contact: 'lucy@start-suite.com', story: 'Leading brand architecture, visual and verbal identity, design system (GDS26R), and go-to-market positioning for the merged entity.' },
  ],
};

export const BRAND_IDENTITY = {
  archetype: 'The Outlaw / The Creator',
  archetypeNote: 'Artist-first, algorithm-opposed, anti-intermediary. Building infrastructure for genuine independence from Big Tech.',
  brandAnchor: 'FIRST',
  brandAnchorNote: 'First to hear. First to see. First to react. First to prove it. Every feature maps to this. Swaps = first access. Feed = first to know. Groups = first in. Gamification = first on leaderboard.',
  coreNarrative: 'The best artists have always known that the fan relationship is everything. Before algorithms, there were mailing lists, fan clubs, and backstage passes. Grouped is that layer — rebuilt for the modern era. Not rented. Not algorithmic. Yours.',
  values: [
    { name: 'Artist Ownership', desc: 'Artists always own their data and fan relationships. Non-negotiable.' },
    { name: 'Radical Directness', desc: 'No algorithm in the middle. Direct line between artist and fan, every time.' },
    { name: 'Compounding Value', desc: 'Every release builds on the last. Fundamentally opposed to starting from zero.' },
    { name: 'Access for All', desc: 'Not a superfan platform. For all fans, at every level. No paywall at the door.' },
    { name: 'Artist-Built', desc: 'Built from the artist side. Seth was an artist for 20+ years.' },
    { name: 'Non-Extractive', desc: 'White hat mechanics only. Everything lifts users up. Nothing manipulates or milks.' },
  ],
  personalityTraits: [
    { trait: 'Passionate', note: 'Authentically passionate about the problem — a musician solving his own pain.' },
    { trait: 'Mission-driven', note: 'Driven by purpose beyond profit. "This isn\'t just another music industry tool."' },
    { trait: 'Authentic', note: 'We are exactly who we say we are: musicians trying to solve our own problem.' },
    { trait: 'Ambitious', note: 'Thinking big and executing boldly.' },
    { trait: 'Warm and inviting', note: 'Takes time to talk with artists and their teams.' },
    { trait: 'Empowering', note: 'For artists: independence, ownership, autonomy. For fans: become the biggest version of yourself as a fan.' },
  ],
  inspiration: [
    { brand: 'Tesla', reason: 'Slick, modern, futuristic, precision, clean minimalism, quality-first.' },
    { brand: 'Discord', reason: 'The VIBE. Gamified feel. Status systems, levels, achievements. (NOT the UX — too technical. Discord energy with accessible UX.)' },
    { brand: 'Duolingo', reason: 'Made a mascot come to life as an extension of company personality. Gamification of inherently non-game behavior.' },
    { brand: 'Spotify', reason: 'Visual brand only — solid and modern. Not the culture or extractive platform dynamics.' },
  ],
  antiPatterns: [
    'Corporate, cold, faceless SaaS feel (Laylo is the anti-model)',
    'Overemphasizing "community" — sounds heavy and high-commitment',
    'Purple gradients, generic B2B SaaS aesthetics',
    'Extractive, purely transactional, or manipulative mechanics',
    'Algorithmic language ("leverage," "optimize," "growth hacking")',
  ],
  nameConsiderations: 'Seth\'s concern: "grouped." has ~80% confusion rate on first listen. "First.FM" explored as alternative — better alignment with the FIRST brand anchor. Keeping grouped. for now while documented for future consideration.',
};

// ============================================================
// VISUAL IDENTITY — GDS26R v1.0 (Feb 2026)
// Source: https://lucygonzo.github.io/grouped_brand/
// Scope: BRAND + MARKETING only.
// Product UI is a separate spec (P/ section of design system).
// ============================================================
export const VISUAL_IDENTITY = {
  systemVersion: 'GDS26R v1.0 — February 2026',
  scope: 'Brand + Marketing (marketing site, pitch decks, social, press, partner materials)',
  productNote: 'Product UI runs a separate design system intentionally. This page covers brand/marketing only. For product specs see the P/ section of the design system.',
  designSystemUrl: 'https://lucygonzo.github.io/grouped_brand/',

  foundationPrinciple: 'Make the screen disappear. Every decision in this system serves one goal: make the digital experience feel physical. Tactile. Like an extension of your hands and ears. Music is not flat. It moves in cycles, in loops, in waves. The design should move the same way.',

  extensionMetaphor: 'This should feel like an extension of the artist, not a tool they log into. When an artist opens Grouped, the screen should dissolve. No chrome, no clutter, no "app" feeling. Just them, their music, and a warm room full of fans.',

  designPrinciples: [
    { name: 'Cyclical', symbol: '◌', desc: 'Music lives in loops. Write, record, release, connect, repeat. Every animation should feel like it\'s returning to something, building on the last cycle. Rounded corners, circular motifs, spring easings that overshoot and settle. Nothing stops. Everything flows into the next beat.' },
    { name: 'Tactile', symbol: '◗', desc: 'Glass has weight. Cards tilt when you reach for them. Stickers resist then follow your hand. Grain gives every surface a texture you can feel through the screen. The experience should remind you of handling vinyl, flipping through a crate, holding something real.' },
    { name: 'Vibing', symbol: '◉', desc: 'Timing is feel. Fast UI feels anxious. Slow UI feels confident. Our transitions run 500ms or longer because we\'re not in a hurry. We\'re vibing. The cursor glow drifts. Cards lift and settle with weight. Everything breathes at a pace that matches sitting in a listening room, not clicking through a dashboard.' },
  ],

  colorSystem: {
    mode: 'Dark mode primary. Light mode secondary (documentation, print, partner-facing).',
    navyRule: 'Our dark is navy, not black. Every dark surface carries a cool blue undertone that lets warm bronze breathe. Temperature contrast between cool navy backgrounds and warm gold accents creates depth. Same reason jewelers display gold on dark blue velvet, not black fabric.',
    neverUse: 'Never use neutral greys (#1A1A1A, #222) in the dark theme — they break the temperature relationship.',
    oledNote: 'Exception: OLED mode uses true black (#000000) with neutral white strokes for battery-sensitive mobile contexts. Functional variant only, not the brand default.',

    backgrounds: [
      { token: '--bg-base',    hex: '#111620', usage: 'Page background, app shell. The room.' },
      { token: '--bg-raised',  hex: '#181E2A', usage: 'Cards, modals, elevated surfaces.' },
      { token: '--bg-overlay', hex: '#1F2735', usage: 'Dropdowns, popovers, floating panels.' },
      { token: '--bg-subtle',  hex: '#262F3F', usage: 'Hover states, selected rows, active areas.' },
      { token: '--bg-muted',   hex: '#2E3849', usage: 'Input fields, code blocks, inset surfaces.' },
    ],

    text: [
      { token: '--text-primary',   hex: '#F0EBE3', note: 'Warm cream — NOT pure white. Body text, headings, UI labels.' },
      { token: '--text-secondary', hex: '#67686B', note: 'Descriptions, secondary labels, metadata.' },
      { token: '--text-tertiary',  hex: '#494B50', note: 'Placeholders, disabled text, captions.' },
      { token: '--deco-strong',    hex: 'rgba(240,235,227,0.18)', note: 'Watermarks, decorative numbers, ghost text.' },
    ],
    figmaTextNote: 'Figma currently has #f8f8f8 (cool white) for text-primary — must be updated to #F0EBE3 (warm cream). This is confirmed.',

    bronze: [
      { scale: '50',  hex: '#FEF7EC', usage: 'Light mode tint, subtle highlights' },
      { scale: '100', hex: '#FDE9C8', usage: 'Light badges, soft glow' },
      { scale: '200', hex: '#FAD08E', usage: 'Hover accents, warm highlights' },
      { scale: '300', hex: '#F6B44E', usage: 'Body-size text (AA contrast compliant)' },
      { scale: '400', hex: '#C48A3A', usage: 'PRIMARY BRAND ACCENT — headlines, logo, CTAs, section labels, arc motif. The brand voice. Never on interactive feedback elements.' },
      { scale: '500', hex: '#B87A2E', usage: 'Hover state for primary accent' },
      { scale: '600', hex: '#916024', usage: 'Pressed state, deep accents' },
      { scale: '700', hex: '#6B471B', usage: 'Subtle bronze on dark surfaces' },
    ],

    focusBlue: {
      hex: '#7CBBDF',
      token: '--focus',
      rule: 'The interactive accent. Cool counterbalance to bronze. Pops against navy without competing. ONLY for: input focus rings, accent stickers, badges, active/selected indicators, data viz. NEVER for: headlines, brand elements, CTAs, section labels.',
      splitTest: 'If the element would appear on a poster → bronze. If you interact with it or it tells you a current state → focus blue.',
      cardHoverNote: 'Card hover outlines use bronze (#C48A3A), NOT focus blue. Focus blue is strictly for form input rings and keyboard focus states.',
    },

    borders: [
      { token: '--border-default', value: 'rgba(235,225,210,0.07)', usage: 'Card edges, section dividers' },
      { token: '--border-hover',   value: 'rgba(235,225,210,0.11)', usage: 'Hovered card edges' },
      { token: '--border-active',  value: 'rgba(235,225,210,0.16)', usage: 'Focused inputs, selected elements' },
      { token: '--border-strong',  value: 'rgba(235,225,210,0.22)', usage: 'High-contrast dividers' },
    ],
    borderNote: 'All opacity values in decimal format (0.07), not percentage (7%). Figma does not support percentage-based opacity in variables.',

    semantic: [
      { name: 'Success', hex: '#4ADE80', token: '--success', usage: 'Confirmations, positive metrics, live status' },
      { name: 'Warning', hex: '#F0C543', token: '--warning', usage: 'Caution, approaching limits. Note: 12° separated from bronze to avoid confusion.' },
      { name: 'Error',   hex: '#F07068', token: '--error',   usage: 'Errors, destructive actions, failed states' },
      { name: 'Info',    hex: '#63B3ED', token: '--info',    usage: 'Informational, tips, neutral highlights' },
    ],

    featureColors: [
      { feature: 'Community', hex: '#38C3FF', usage: 'Groups and community product feature. Same value in light + dark.' },
      { feature: 'Swaps',     hex: '#5B61D9', usage: 'Smart Swaps product feature. Same value in light + dark.' },
      { feature: 'Broadcasts', hex: '#AD6AD9', usage: 'Email Broadcasts product feature. Same value in light + dark.' },
    ],
    featureNote: 'Feature colors are for feature-specific icons, badges, and section accents. Do not use outside their feature context.',

    dataViz: {
      note: 'Dedicated data viz palette from Figma. Medium blue first (primary data), bronze second (comparison). Single-metric charts always use dataviz blue.',
      rule: 'Bronze is always the second series (comparison), never the primary data color in charts.',
    },

    greenspace: [
      { name: 'Laylo',     colors: ['#7C3AED', '#A855F7'], note: 'Purple — dominant in music CRM' },
      { name: 'Community', colors: ['#1A1A1A', '#444444'], note: 'Flat black — generic' },
      { name: 'Patreon',   colors: ['#FF424D', '#F96854'], note: 'Coral/red' },
      { name: 'Discord',   colors: ['#5865F2', '#7289DA'], note: 'Indigo' },
      { name: 'Mailchimp', colors: ['#FFE01B', '#241C15'], note: 'Yellow + dark' },
      { name: 'OpenStage', colors: ['#6366F1', '#818CF8'], note: 'Indigo variant' },
      { name: 'grouped.',  colors: ['#C48A3A', '#111620'], note: 'Bronze + deep navy — entirely unoccupied' },
    ],
  },

  typography: {
    systemNote: 'Two typefaces, one system. Anacrusis is the custom display face for marketing headlines and brand moments. Satoshi handles everything else. Type should feel confident and unhurried.',
    figmaNote: 'Figma body font is still a placeholder — must be swapped to Satoshi. Body default is 14px in product (not 16px — product override for data-dense layouts).',

    fonts: [
      {
        name: 'Anacrusis',
        role: 'Display / Brand',
        type: 'Custom OTF — single weight (Regular), 160 glyphs, full ASCII coverage',
        source: 'https://lucygonzo.github.io/Anacrusis.otf',
        driveFolder: 'https://drive.google.com/drive/folders/1m-E-OrAZURtpMzw7F7QNpZnMXhDPYsd9?usp=drive_link',
        fontshare: null,
        minSizeMarketing: '32px',
        minSizeProduct: '40px (D0 + D1 only)',
        maxPerScreen: 2,
        stack: "'Anacrusis', 'Satoshi', sans-serif",
        useFor: ['Hero headlines (48px+)', 'Marketing section titles (32px+)', 'Brand moments in pitch decks', 'The "grouped." wordmark/logotype', 'Social media graphics (large text)', 'Print headers and posters'],
        dontUseFor: ['Body copy at any size', 'Product UI (all of it)', 'Navigation and buttons', 'Form labels and inputs', 'Any text under 32px', 'Anywhere bold/medium/light weights are needed'],
        rule: 'Legibility always wins. Anacrusis has natural kerning baked in — let it breathe at display sizes. Max 2 instances per screen. No inline mixing with Satoshi on the same line.',
      },
      {
        name: 'Satoshi',
        role: 'System Workhorse',
        type: 'Swiss-style modernist sans serif. Variable font.',
        source: 'https://www.fontshare.com/fonts/satoshi',
        weights: [
          { name: 'Light',   value: 300 },
          { name: 'Regular', value: 400 },
          { name: 'Medium',  value: 500 },
          { name: 'Bold',    value: 700 },
          { name: 'Black',   value: 900 },
        ],
        semiboldNote: 'Satoshi has NO semibold (600) weight. Component tokens C1-C4 specify font-weight: 600 for intent, but Satoshi renders as Bold (700). Expected and acceptable.',
        stack: "'Satoshi', sans-serif",
        useFor: ['Body copy', 'Product UI (everything)', 'Subheadings H1-H5', 'Navigation', 'Buttons', 'Captions', 'All text under 32px (marketing) / under 40px (product)'],
      },
      {
        name: 'JetBrains Mono',
        role: 'Monospace / Data',
        stack: "'JetBrains Mono', 'SF Mono', monospace",
        useFor: ['Metrics displays', 'Code snippets', 'Token names', 'IDs', 'Data-heavy contexts', 'URL display'],
      },
    ],

    // Marketing type scale (Satoshi, Anacrusis for display-xl/lg when brand moment)
    scaleMarketing: [
      { token: 'display-xl', size: '80px', weight: 'Black 900', lh: '0.95', ls: '-0.03em', usage: 'Hero headlines, section openers' },
      { token: 'display-lg', size: '64px', weight: 'Black 900', lh: '0.98', ls: '-0.025em', usage: 'Secondary heroes, feature headlines' },
      { token: 'display-md', size: '48px', weight: 'Bold 700',  lh: '1.05', ls: '-0.02em',  usage: 'Section titles' },
      { token: 'display-sm', size: '36px', weight: 'Bold 700',  lh: '1.1',  ls: '-0.015em', usage: 'Card headlines, subsection titles' },
      { token: 'heading-lg', size: '28px', weight: 'Bold 700',  lh: '1.2',  ls: '-0.01em',  usage: 'Feature names, list headers' },
      { token: 'heading-md', size: '24px', weight: 'Medium 500', lh: '1.25', ls: '-0.005em', usage: 'Subheadings, dialog titles' },
      { token: 'body-lg',    size: '18px', weight: 'Regular 400', lh: '1.6', ls: '0',        usage: 'Lead paragraphs, hero subtext' },
      { token: 'body-md',    size: '16px', weight: 'Regular 400', lh: '1.6', ls: '0',        usage: 'Default body copy (marketing)' },
      { token: 'body-sm',    size: '14px', weight: 'Regular 400', lh: '1.5', ls: '0.005em',  usage: 'Secondary body, descriptions' },
      { token: 'caption',    size: '12px', weight: 'Medium 500',  lh: '1.4', ls: '0.02em',   usage: 'Labels, badges, metadata' },
      { token: 'overline',   size: '11px', weight: 'Bold 700',    lh: '1.3', ls: '0.1em',    usage: 'Section labels, all-caps markers ("01 / Capture")' },
    ],

    // Product type scale (from Figma GDS26R product pages)
    scaleProduct: [
      { token: 'D0', size: '96px', font: 'Anacrusis', weight: 'normal (single weight)', lh: '116px', ls: '-1%', usage: 'Display Hero — largest display, onboarding, pricing, celebration', override: true },
      { token: 'D1', size: '40px', font: 'Anacrusis', weight: 'normal (single weight)', lh: '48px',  ls: '-1%', usage: 'Display XXL — large display, campaign builder hero', override: false },
      { token: 'D2', size: '36px', font: 'Satoshi',   weight: 'Regular 400', lh: '48px',  ls: '-1%', usage: 'Display XL — data viz, high-profile display' },
      { token: 'D3', size: '28px', font: 'Satoshi',   weight: 'Regular 400', lh: '36px',  ls: '-1%', usage: 'Display L — medium/large, light weight' },
      { token: 'D4', size: '24px', font: 'Satoshi',   weight: 'Regular 400', lh: '32px',  ls: '0',   usage: 'Display M — medium display, card titles' },
      { token: 'D5', size: '18px', font: 'Satoshi',   weight: 'Medium 500',  lh: '24px',  ls: '-0.5%', usage: 'Display S — card text, subtitles' },
      { token: 'D6', size: '14px', font: 'Satoshi',   weight: 'Medium 500',  lh: '20px',  ls: '0.5%', usage: 'Display XS — small card text with emphasis' },
      { token: 'H1', size: '36px', font: 'Satoshi',   weight: 'Bold 700',    lh: '44px',  ls: '-2%', usage: 'Heading XL — page titles, data viz values' },
      { token: 'H2', size: '28px', font: 'Satoshi',   weight: 'Bold 700',    lh: '36px',  ls: '-1%', usage: 'Heading L — section titles, subtitles' },
      { token: 'H3', size: '24px', font: 'Satoshi',   weight: 'Bold 700',    lh: '32px',  ls: '0',   usage: 'Heading M — medium titles' },
      { token: 'H4', size: '18px', font: 'Satoshi',   weight: 'Bold 700',    lh: '28px',  ls: '0',   usage: 'Heading S — small titles, subtitles' },
      { token: 'H5', size: '16px', font: 'Satoshi',   weight: 'Bold 700',    lh: '24px',  ls: '0',   usage: 'Heading XS — smallest titles' },
      { token: 'Body', size: '14px', font: 'Satoshi', weight: 'Regular 400', lh: '20px',  ls: '0',   usage: 'Body Default — 14px (product override, tighter for data-dense dashboards)', override: true },
      { token: 'Caption', size: '12px', font: 'Satoshi', weight: 'Medium 500', lh: '20px', ls: '1%', usage: 'Fine Print — legal, informational text' },
      { token: 'C1', size: '20px', font: 'Satoshi', weight: 'Semibold 600 → Bold', lh: '24px', ls: '0',    usage: 'Component XL — large buttons' },
      { token: 'C2', size: '18px', font: 'Satoshi', weight: 'Semibold 600 → Bold', lh: '24px', ls: '0',    usage: 'Component L — standard large buttons' },
      { token: 'C3', size: '16px', font: 'Satoshi', weight: 'Semibold 600 → Bold', lh: '20px', ls: '0',    usage: 'Component M — default product buttons' },
      { token: 'C4', size: '14px', font: 'Satoshi', weight: 'Semibold 600 → Bold', lh: '16px', ls: '0.5%', usage: 'Component S — navigation, active tabs' },
      { token: 'C5', size: '14px', font: 'Satoshi', weight: 'Medium 500',          lh: '16px', ls: '0.5%', usage: 'Component S Light — nav inactive state' },
      { token: 'C6', size: '11px', font: 'Satoshi', weight: 'Medium 500',          lh: '16px', ls: '0.5%', usage: 'Component XS — badges, small elements (Live / Draft / Scheduled)' },
      { token: 'C7', size: '9px',  font: 'Satoshi', weight: 'Medium 500',          lh: '12px', ls: '1%',   usage: 'Component XXS — smallest badges, "POWERED BY GROUPED"' },
    ],

    rules: [
      'Uppercase reserved for: overline labels, button text (under 3 words), badge text, tab labels',
      'Sentence case for all headlines. Title Case only for proper nouns.',
      'Italics reserved for: emphasis within body copy, song/album titles, placeholder text in editorial contexts',
      'Never combine uppercase + italic',
      'Use tabular figures (font-variant-numeric: tabular-nums) in data tables, metrics, pricing',
      'D0 caps at 48px on mobile (from 96px). D1 caps at 28px. Body stays 14px everywhere.',
    ],
  },

  radiusSystem: {
    note: 'Four-token scale. All interactive elements (buttons, badges, pills, toggles) use --radius-full (39px). All containers use sm/md/lg based on size.',
    figmaNote: 'Figma defaults to 10px in several places — remap to --radius-sm (8px) or --radius-md (16px). No 10px token exists in this system.',
    tokens: [
      { token: '--radius-sm',   value: '8px',   usage: 'Most cards, containers, inputs, thumbnails' },
      { token: '--radius-md',   value: '16px',  usage: 'Larger cards, modals, panels' },
      { token: '--radius-lg',   value: '24px',  usage: 'Hero containers, large panels' },
      { token: '--radius-full', value: '39px',  usage: 'Buttons, badges, pills, toggles — all interactive. Figma full-round = 39px (stable, exports cleanly)' },
    ],
  },

  spacing: {
    base: '4px',
    exception: '6px — only non-multiple-of-4 value. Use for micro-spacing between an icon and its adjacent text label, or any context where 4px is too tight and 8px is too loose.',
    avoid: '10px — Figma defaults to 10px in auto-layout contexts. Avoid; it falls outside the system.',
    scale: [
      { token: '--space-1',  value: '4px',   when: 'Inline icon gaps, tight label pairs, chip padding' },
      { token: '--space-2',  value: '8px',   when: 'Related items within a group — badge + label, icon + text' },
      { token: '--space-3',  value: '12px',  when: 'Compact list items, small card internal padding' },
      { token: '--space-4',  value: '16px',  when: 'Standard card padding, form field gaps — the workhorse value' },
      { token: '--space-6',  value: '24px',  when: 'Section content gaps, card-to-card spacing in grids' },
      { token: '--space-8',  value: '32px',  when: 'Section breaks within a page, hero inner padding' },
      { token: '--space-10', value: '40px',  when: 'Larger section breaks' },
      { token: '--space-12', value: '48px',  when: 'Major inner section dividers' },
      { token: '--space-16', value: '64px',  when: 'Major section dividers, page-level vertical rhythm' },
      { token: '--space-32', value: '128px', when: 'Largest section dividers, vertical breathing room' },
    ],
  },

  surfaces: {
    concept: 'Grouped is the room. Artists are the music playing in it. Every surface elevates what sits on top of it. Artist content should always be the brightest, warmest, most vivid thing on screen.',
    types: [
      { name: 'Solid',      description: 'The walls and floor. Structural, opaque. Cards, containers, nav backgrounds. The foundation everything else sits on.' },
      { name: 'Glass',      description: 'Frosted vinyl sleeve. Transparent, blurred, soft. Like looking through smoked glass. Each glass card has a subtle noise layer — no two feel identical, same way no two panes of frosted glass catch light the same way. Callouts, overlays, floating elements.' },
      { name: 'Glass Warm', description: 'Bronze-tinted glass. Signals premium importance. Featured metrics, important notices.' },
      { name: 'Vinyl',      description: 'The premium surface. Warm sheen, subtle gradient. Use sparingly — only for hero moments, featured content, the things worth spotlighting.' },
      { name: 'Sticker',    description: 'Lightweight transparent labels. Like stickers on a record sleeve. Hover: slight magnetic pull resistance. Badges, tags, metadata.' },
    ],
    stackingRule: 'Layer surfaces Base → Raised → Overlay for natural depth. Never stack Glass on Glass — one blur layer maximum. Never skip surface levels. Vinyl is a brand accent, not a standard container.',
    grain: 'Fixed SVG noise overlay at ~2.8% opacity (mix-blend-mode: overlay) on the entire viewport. The grain is the difference between "digital dark mode" and "a room with texture."',
    ambientGlow: 'Warm radial gradients simulate lamplight behind glass surfaces. Keep subtle, off-center, never directly behind text.',
  },

  // LOGO SYSTEM — full Vinyl G mark + lockup library
  logoSystem: {
    mark: 'Vinyl G mark — concentric spiral inspired by vinyl grooves. The core identifier. Works alone, with wordmark, or in specialty lockups.',
    wordmark: 'grouped. — lowercase with period. Rendered in Anacrusis. The period communicates confidence and finality: "This is the end of the sentence. No further explanation required."',
    primaryLockup: 'Horizontal Lockup is the primary logo. Default to Warm Bronze on dark backgrounds.',
    assetsUrl: 'https://lucygonzo.github.io/Logo%20Assets/SVG/',
    driveUrl: 'https://drive.google.com/drive/folders/1m-E-OrAZURtpMzw7F7QNpZnMXhDPYsd9?usp=drive_link',
    figmaUrl: 'https://www.figma.com/design/wValDdxygSxILi49qBBgAW/GDS26R?node-id=18-2',

    coreVariants: [
      { name: 'Vinyl G Icon',        use: 'Favicons, app icons, avatars, tight spaces. Minimum: 24px.' },
      { name: 'Lockup Horizontal',   use: 'PRIMARY. Nav bars, headers, footers, presentations. Minimum: 100px wide.' },
      { name: 'Lockup Vertical',     use: 'Social profiles, splash screens, square formats. Minimum: 64px tall.' },
    ],
    colorVariants: [
      { name: 'Warm Bronze', hex: '#C48A3A', use: 'Default on dark backgrounds' },
      { name: 'Cream',       hex: '#F0EBE3', use: 'Alternative on dark backgrounds' },
      { name: 'Black',       hex: '#000000', use: 'On light backgrounds' },
      { name: 'Navy',        hex: '#111620', use: 'On bronze backgrounds' },
      { name: 'White',       hex: '#FFFFFF', use: 'On dark backgrounds (pure white variant)' },
    ],
    extendedLibrary: [
      { name: 'Typemark',       use: 'Wordmark only — when icon isn\'t needed' },
      { name: 'Stacked Askew',  use: 'Playful angle — merch, social, creative contexts' },
      { name: 'Stacked Sticker', use: 'Sticker badge — physical goods, packaging' },
      { name: 'Stacked Window', use: 'Arch window frame — posters, signage' },
      { name: 'Pill Tag',       use: 'Badge format — tags, labels, UI embellishments' },
      { name: 'Retro Stamp',    use: 'Vintage treatment — limited use, special editions' },
    ],
    clearSpace: '1× the height of the Vinyl G mark. No elements, text, or edges in this zone.',
    dos: [
      'Always use approved logo files from the asset library',
      'Maintain clear space of at least 1× the mark height',
      'Use Vinyl G icon alone when space is tight (favicons, app icons)',
      'Use Warm Bronze as the default color on dark backgrounds',
      'Keep the wordmark in Anacrusis — never substitute Satoshi',
    ],
    donts: [
      'Don\'t recreate or redraw the Vinyl G — always use vector source',
      'Don\'t rotate, skew, or apply perspective transforms',
      'Don\'t place on busy or low-contrast backgrounds',
      'Don\'t change the proportions of the concentric arcs',
      'Don\'t use gradients, shadows, or effects on the mark',
      'Don\'t separate elements within any lockup',
    ],
  },

  // ICONOGRAPHY — custom icons (Figma update in progress)
  iconography: {
    status: 'Custom icon set — update pending from Figma GDS26R (in progress).',
    note: 'Full custom icon specifications will be documented here once the Figma icon library is finalized. Check back after the Figma update.',
    sizes: [
      { size: '16px', use: 'Inline — alongside body text, table cells, captions' },
      { size: '20px', use: 'Default — navigation items, list icons, input prefixes' },
      { size: '24px', use: 'Buttons — button icons, toolbar actions, card headers' },
      { size: '32px', use: 'Feature — empty states, onboarding, feature highlights' },
    ],
    colorRules: [
      'Default: inherit text color. Icons take on the text color of their context (primary, secondary, tertiary). No separate icon color tokens.',
      'Bronze (#C48A3A): use for featured, premium, or highlighted icons. Sparingly.',
      'Semantic colors: status icons use their semantic color token. Only icons that break from text inheritance.',
    ],
  },

  // SIGNATURE MOTIF — concentric arcs
  signatureMotif: {
    name: 'Concentric Arcs',
    meaning: 'Sound waves radiating from a source. Vinyl grooves. Ripples. The single most recognizable Grouped graphic element.',
    markDNA: 'The Vinyl G mark is built from the same concentric arc system — the motif IS the logo at large scale.',
    rules: [
      'Heavy strokes with tight gaps. Stroke width is always larger than the gap (roughly 2.5:1 ratio)',
      'Every ring in a set uses the same weight and color. No variation between rings.',
      'No gradients. No feathering. No per-ring opacity variation. Solid lines doing structural work.',
      '3 to 6 arcs per group',
      'When used as background, reduce the GROUP opacity — not individual rings',
    ],
    usage: [
      { mode: 'Subtle',      opacity: '5-10% group', use: 'Background texture. Heavy strokes still read at low opacity.' },
      { mode: 'Bold (field)', opacity: '100%',        use: 'Bronze background with darker-tone arcs. Poster hero, social assets.' },
    ],
    configurations: [
      { name: 'Full Rings',    use: 'Background, section divider' },
      { name: 'Corner Arcs',  use: 'Poster / hero layout (arcs bleeding off edge)' },
      { name: 'G Monogram',   use: 'Logo / watermark' },
    ],
  },

  // BRAND ELEMENTS — physical controls + badges
  brandElements: {
    physicalControls: {
      concept: 'Controls borrowed from studio hardware, stripped to their structural essence. No gradients, no metallic effects, no embossing. Shapes communicate function. Circles rotate. Rectangles slide. The only warmth comes from bronze marking the active state.',
      rule: 'Flat and structural. Swiss International Style applied to mixing boards. Bronze is the active/indicator color. No decoration.',
      types: [
        { name: 'Volume Dial',   desc: 'Flat fill. Indicator line from center. Active arc shows value.' },
        { name: 'Mixing Fader',  desc: 'Thin track. Flat handle. Minimal grip lines.' },
        { name: 'Power Toggle',  desc: 'Flat thumb. Solid bronze when on. No shadows.' },
      ],
    },
    badgePatch: {
      concept: 'Concentric rounded borders in the brand palette create a retro badge feel. 70s patch aesthetic. Use for special moments: launch announcements, year-in-review, limited drops, artist features.',
      feel: 'The stickers you\'d iron onto a denim jacket.',
    },
    interactionLanguage: {
      light: 'Waveforms, flowing lines, frequency curves. Thin, luminous, alive. Progress bars that ripple. Loading states that pulse. Hover trails that follow the cursor. Light on dark.',
      solid: 'Dials, tick marks, faders, level meters. Muted, structural, grounded. Flat fills, no shadows, no gradients. Studio equipment vocabulary.',
      interplay: 'Light elements play against solid ones. Precise but alive. Studio hardware with music running through it.',
    },
  },

  // PHOTOGRAPHY
  photography: {
    spirit: 'Real artists. Real energy. Intimate, high-contrast, warm. Artists in their element: performing, creating, connecting with fans.',
    dos: [
      'High contrast, warm tones — deep blacks, warm highlights, complement the bronze accent',
      'Tight crops, real energy — close-up and medium shots, hands on instruments, studio sessions',
      'Dark vignetting, low-key lighting — images blend naturally into dark backgrounds',
      'Natural and ambient light — stage lighting, studio lamps, golden hour',
      'Diverse genres and settings — hip-hop producers, indie singer-songwriters, DJs, R&B vocalists, bands',
      'Fan perspective shots — crowd shots from artist POV, phones at shows, merch tables',
    ],
    donts: [
      'No stock photography — no generic studio portraits with flat lighting',
      'No white/light device frames — product mockups always use dark frames on dark backgrounds',
      'No oversaturated or heavily filtered images — warmth from lighting, not filters',
    ],
    postSpecs: {
      temperature: 'Warm bias. Push toward 5500-6500K. Shadows lean amber/brown, highlights lean neutral.',
      saturation: 'Pull back 10-20% from natural. Let the bronze accent be the warmest thing in any composition.',
      contrast: 'High. Lift blacks slightly (5-10%) so shadows have detail but stay rich.',
      grain: 'Optional. Subtle film grain (ISO 400-800 equivalent) for editorial contexts. Skip for product screenshots.',
    },
  },

  // MOTION
  motion: {
    priority: 'PHASE 2 — Motion deprioritized for initial launch. Ship correct colors, typography, and layout first. Do not introduce motion variables or transitions until static component states are confirmed working.',
    principles: [
      'Scroll drives narrative. Every scroll increment advances the story.',
      'Motion has mass. Ease-out for entering, ease-in for exiting. Never linear.',
      'Stagger creates rhythm. Groups enter with 60-100ms stagger.',
      'Bronze glows gradually. Bronze reveals minimum 400ms transition.',
      'Subtlety at rest, confidence in motion.',
      'All interactions respect prefers-reduced-motion.',
    ],
    easing: [
      { token: '--ease-out',    value: 'cubic-bezier(0.16, 1, 0.3, 1)',     usage: 'Default for entering elements' },
      { token: '--ease-in-out', value: 'cubic-bezier(0.65, 0, 0.35, 1)',    usage: 'Morphing, layout shifts' },
      { token: '--ease-spring', value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', usage: 'Bouncy micro-interactions (badges, toasts)' },
      { token: '--ease-smooth', value: 'cubic-bezier(0.25, 0.1, 0.25, 1)',  usage: 'Slow, cinematic movements' },
      { token: '--ease-snap',   value: 'cubic-bezier(0.5, 0, 0, 1)',        usage: 'Quick snaps (tabs, toggles)' },
    ],
    durations: [
      { name: 'instant',   ms: 100 },
      { name: 'fast',      ms: 200 },
      { name: 'default',   ms: 300 },
      { name: 'moderate',  ms: 500 },
      { name: 'slow',      ms: 800 },
      { name: 'cinematic', ms: 1200 },
    ],
    avoidList: [
      'Neon/electric gradients',
      'Blue as a primary color',
      'Sharp 0px radius',
      'Thin/hairline fonts',
      'Heavy drop shadows',
      'Decorative illustrations',
      'Auto-playing video',
      'Electric lime (#BFFF00) — superseded by GDS26R bronze system',
    ],
  },
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
    lines: ['First to hear.', 'First to see.', 'First to react.', 'First to prove it.'],
    note: 'Every feature maps to this. Swaps = first access. Feed = first to know. Groups = first in. Gamification = first to complete, first on leaderboard.',
  },
  antiCommunityNote: 'Do NOT lead with "community." It sounds heavy — big commitment for both artists and fans. Community is the implicit outcome, not the pitch. Lead with premiere window, early access, VIP first access.',
  voiceSpectrum: [
    { dim: 'Artist-to-Artist',   pct: 90, note: 'We speak like artists, not SaaS companies.' },
    { dim: 'Direct vs. Diplomatic', pct: 85, note: 'Say the thing. Artists respect honesty.' },
    { dim: 'Bold vs. Safe',      pct: 80, note: 'Challenge the status quo, always.' },
    { dim: 'Warm vs. Cold',      pct: 65, note: 'Warm but not sentimental. Confident but not arrogant.' },
    { dim: 'Simple vs. Complex', pct: 75, note: 'Complex product. Simple language. Non-negotiable.' },
    { dim: 'Playful vs. Serious', pct: 55, note: 'Growing toward playful as gamification launches. Currently weighted serious.' },
  ],
  voiceTraits: [
    { trait: 'Anti-jargon',         ex: 'NOT: "leverage algorithmic distribution channels." YES: "Stop renting your audience."' },
    { trait: 'Reframes the win',    ex: 'NOT: "1,000 followers." YES: "1,000 fans who drive hours to see you play."' },
    { trait: 'Artist-validated',    ex: 'Built from the artist side means we talk the talk because we walked the walk.' },
    { trait: 'Confident, not arrogant', ex: 'The product speaks for itself. We let the numbers do the bragging.' },
    { trait: 'Game-like framing',   ex: 'Coming in Phase 3: fan status, leaderboards, quests. Feels like playing a game of being a top fan.' },
  ],
  proofReframe: [
    { proxy: 'Follower count',         real: 'Fans who drive hours to see you play' },
    { proxy: 'Stream numbers',         real: 'Merch that actually sells' },
    { proxy: 'Social media views',     real: 'Tour dates booked and tickets sold' },
    { proxy: 'Playlist placements',    real: 'Direct messages from fans who feel connected' },
    { proxy: 'Going viral',            real: 'Revenue that\'s predictable and growing' },
  ],
  segments: [
    {
      name: 'Developing Artist', range: '< 100K monthly listeners',
      hook: "You're already earning fans. Capture them before they disappear.",
      pain: 'Every release feels like starting from zero.',
      proof: '92% opt-in rate. Real fans, not just streams.',
      avoid: ['algorithm', 'viral', 'influencer', 'growth hacking'],
      use: ['real fans', 'your list', 'own it', 'momentum', 'early access', 'FIRST'],
      cta: 'Start free. Build your first release.',
    },
    {
      name: 'Mid-Tier Artist', range: '100K - 3M listeners',
      hook: "You have fans. You're just not keeping them.",
      pain: 'Organic reach collapsed. Every release resets.',
      proof: 'PardyAlone turned M&G tickets into $35K ARR.',
      avoid: ['follower count', 'impressions', 'vanity metrics'],
      use: ['direct channel', 'own the relationship', 'recurring revenue'],
      cta: 'See how PardyAlone did it.',
    },
    {
      name: 'Established Artist', range: '3M+ listeners',
      hook: 'Your audience is massive. Your direct channel is not.',
      pain: 'SMS costs $30K per send. Platforms change their algorithm tomorrow.',
      proof: 'Fan Passes reach 1M fans for $20-50/month.',
      avoid: ["we're just getting started", 'small team', 'beta'],
      use: ['infrastructure', 'scale', 'platform independence', 'owned audience'],
      cta: 'Book a strategy session.',
    },
  ],
};

export const COMPETITIVE = [
  { name: 'Laylo', category: 'Direct', threat: 'High', colors: ['#7C3AED', '#A855F7'], position: 'SMS/email CRM for music. Drop campaigns and blast messaging.', strengths: ['Established SMS infrastructure', 'Drop-focused UX', 'Trusted by major labels'], weaknesses: ['$30K-50K per SMS send at scale', 'Single-feature tool', 'No community layer'], moat: 'Fan Passes reach 1M fans for $50/month vs. $30K-50K SMS. Laylo cannot drop pricing without cannibalizing core revenue.', note: 'Anti-model for brand and feel. Transactional, cold, corporate.' },
  { name: 'Community', category: 'Direct', threat: 'High', colors: ['#1A1A1A', '#444444'], position: 'Text message community for celebrities. SMS-native.', strengths: ['Celebrity credibility', 'SMS-native engagement'], weaknesses: ['SMS costs prohibitive at scale', 'No early access mechanics', 'No fan capture'], moat: 'No swaps mechanism. Pure outbound, no inbound capture.', note: '' },
  { name: 'OpenStage', category: 'Direct', threat: 'Medium', colors: ['#6366F1', '#818CF8'], position: 'Artist-to-fan platform with wallet passes. Major artists only.', strengths: ['Wallet pass expertise', 'Major artist relationships'], weaknesses: ['Only accessible to top 0.1% of artists', 'Complex onboarding'], moat: 'OpenStage serves the 0.1%. Grouped owns the 99.9% and builds up.', note: '' },
  { name: 'Discord', category: 'Adjacent', threat: 'Medium', colors: ['#5865F2', '#7289DA'], position: 'General community platform. Artists use by default, not by design.', strengths: ['Massive user base', 'Free tier', 'Strong gaming culture'], weaknesses: ['Noisy UX', 'Not music-specific', 'No creator monetization'], moat: '"Discord is noisy. Instagram is rented. Your Group is yours — clean, focused, owned."', note: 'Visual/brand inspiration (vibe, gamification) but NOT a product inspiration.' },
  { name: 'Patreon', category: 'Adjacent', threat: 'Watch', colors: ['#FF424D', '#F96854'], position: 'Creator subscription membership. Paywall-first.', strengths: ['Strong brand trust', 'Payment infrastructure'], weaknesses: ['Paywall excludes casual fans', 'No early access swaps'], moat: 'Grouped does not paywall the community. Value for ALL fans.', note: '' },
  { name: 'Mailchimp', category: 'Adjacent', threat: 'Watch', colors: ['#FFE01B', '#241C15'], position: 'General email marketing.', strengths: ['Massive brand recognition', 'Robust automations'], weaknesses: ['Per-subscriber pricing at scale', 'Not music-specific'], moat: 'Grouped custom email charges per send, not per subscriber.', note: '' },
];

export const AUDIENCE = [
  { id: 'developing', name: 'Developing Artist', priority: 'Primary (Phase 1)', range: '< 100K monthly listeners', count: '9.5M artists', arpu: '$84/yr', phase: 'Now', story: '"I dropped my EP last month. 400 streams. I posted every day on TikTok for a week. Nothing stuck. I just want to know who my actual fans are."', jtbd: 'Build the feeling of momentum. Make me feel like I\'m making progress even before I go viral.', churn: 'High if no momentum in first 30 days. Key success moment: first fan captured in session one.', psycho: ['Identity tied to their art', 'Skeptical of tools promising virality', 'Time-limited — balancing music with income', 'Will upgrade to sub-$10 tiers if they see results'], },
  { id: 'midtier', name: 'Mid-Tier Artist', priority: 'Primary (Phase 2)', range: '100K - 3M listeners', count: '1.8M artists', arpu: '$228/yr', phase: 'Q2 2026', story: '"I have 500K streams a month and I\'m barely paying rent. My Instagram reach is 3%. I can\'t reach my fans directly without paying $50 per email."', jtbd: 'Convert my existing audience into a revenue stream I actually own.', churn: 'Medium. Sticks around if revenue impact is tangible.', psycho: ['Professional artist — music is career', 'Frustrated by declining organic reach', 'Open to tools that show clear ROI', 'Values data ownership'], },
  { id: 'high', name: 'High-Tier Artist', priority: 'Secondary (Phase 3)', range: '3M+ listeners', count: '240K artists', arpu: '$468/yr', phase: 'Q4 2026+', story: '"We spend $40K per SMS campaign. The open rates are great but the economics are broken."', jtbd: 'Replace SMS economics with something that scales infinitely at a flat monthly cost.', churn: 'Low once onboarded. Requires white-glove service.', psycho: ['Established career with a team', 'Primary concern is fan depth, not breadth', 'SMS economics are a known pain point'], },
];

export const GAP_ANALYSIS = [
  { dim: 'Brand Narrative', priority: 'Critical', pct: 35, current: 'Two separate brand stories (Tribly swaps + Grouped community) not yet fully unified. "First" brand anchor not yet deployed in customer-facing copy.', future: 'Single narrative: "The full-funnel direct-to-fan growth engine." FIRST brand anchor activated across all touchpoints.' },
  { dim: 'Visual Identity', priority: 'High', pct: 65, current: 'GDS26R v1.0 defined (Feb 2026). Bronze/deep blue system documented. Anacrusis confirmed as display face. Full design system site live at lucygonzo.github.io/grouped_brand/. Logo assets and Figma library built.', future: 'Full Figma token audit complete. Component library exported. Animation prototypes. Campaign extension guide.' },
  { dim: 'Verbal System', priority: 'High', pct: 60, current: 'Strong hero messaging. Competitive positioning sharp. Segment-specific messaging drafted.', future: 'Complete verbal playbook: positioning per segment, channel voice matrix, messaging cheat sheet per use case.' },
  { dim: 'Investor Readiness', priority: 'Critical', pct: 45, current: 'Series A materials in progress. Unit economics narrative forming.', future: 'Locked Series A deck + data room. Every question anticipated, every metric contextualized.' },
  { dim: 'Customer Proof', priority: 'Medium', pct: 40, current: 'Forrest Frank, PardyAlone, MIKE., Surfaces case studies live. Need more at developing artist tier.', future: '12+ case studies across all 3 artist tiers. Video testimonials. Artist advisory board.' },
  { dim: 'Channel Strategy', priority: 'Medium', pct: 25, current: 'Meta ads + organic social active. Content not systematized.', future: 'Full channel strategy: LinkedIn (investor/industry), TikTok (artist acquisition), Instagram (social proof), email (retention).' },
];

export const REVENUE_TIERS = [
  { name: 'Free',    price: '$0',  per: 'mo', colorKey: 'muted',  features: ['Basic swaps', 'Limited data capture', 'Grouped branding', '100 fan cap'],                                          status: 'Live',     statusColor: 'teal' },
  { name: 'Starter', price: '$7',  per: 'mo', colorKey: 'blue',   features: ['Smart swaps', 'Basic customization', 'CSV exports', '1,000 fan cap'],                                              status: 'Live',     statusColor: 'teal' },
  { name: 'Growth',  price: '$19', per: 'mo', colorKey: 'teal',   features: ['Custom domains', 'Advanced customization', 'Multiple CRM integrations', '10,000 fan cap'],                        status: 'Q3 2026',  statusColor: 'amber' },
  { name: 'Pro',     price: '$39', per: 'mo', colorKey: 'accent', features: ['White-label', 'Embeddable experiences', 'Hide Grouped branding', 'Unlimited fans'],                               status: 'Jan 2027', statusColor: 'amber' },
];

export const UNIT_ECONOMICS = [
  { metric: 'CPA (free sign-up)',                  observed: '$8.00',     target: '$8.40',     note: 'Meta/Instagram campaigns' },
  { metric: 'Effective CAC (paid sub)',             observed: '$138.89',   target: '~$66 blended', note: 'Observed vs. modeled conversion rates' },
  { metric: 'Activation Rate',                     observed: '26.2%',     target: '35%',       note: '2025 actual' },
  { metric: 'Upgrade Rate (activated → paid)',      observed: '16.53%',    target: '20%',       note: 'Product-led, no sales team' },
  { metric: 'Avg. Subscriber Lifetime',            observed: '3.48 months', target: '5.6 months', note: 'Cohort data May-Dec 2025' },
  { metric: 'LTV:CAC Ratio',                       observed: '0.41x',     target: '3.0x+',     note: 'Path mapped via 3-lever improvement' },
  { metric: 'Best Cohort Churn (Jun 2025)',         observed: '6.2%/mo',   target: '< 8%/mo',  note: 'Proves retention ceiling is achievable' },
];

export const PROJECTIONS = [
  { year: '2026', spend: '$309.5K', signups: '39,245', paid: '3,795',  rev: '$317K',   arr: '$737K',   roi: '2.3%',  roiPositive: false },
  { year: '2027', spend: '$400K',   signups: '50,021', paid: '6,348',  rev: '$1.59M',  arr: '$1.59M',  roi: '169%',  roiPositive: true },
  { year: '2028', spend: '$500K',   signups: '61,922', paid: '8,789',  rev: '$2.86M',  arr: '$2.36M',  roi: '294%',  roiPositive: true },
];

export const GTM_PHASES = [
  { label: 'Awareness',  status: 'Active',          strategy: 'Meta/Instagram paid acquisition targeting independent artists. The distribution partnership play is the key unlock: integrating into the upload flow of the top 2 distributors (50%+ market share) turns every music upload into a Grouped acquisition moment.', kpis: ['CPA < $10', 'ROAS > 3x', '200 partnership sign-ups/month'] },
  { label: 'Activation', status: 'Active',          strategy: 'In-product onboarding: first swap in under 10 minutes. The critical moment is the first fan captured in session one.', kpis: ['Activation rate > 35%', 'First swap < 24 hours', 'First fan captured in session 1'] },
  { label: 'Growth',     status: 'Optimizing',      strategy: 'Product-led upgrade via swap limit hit. Email credit introduction at Growth tier. CRM integrations embed Grouped deeper into existing artist workflows.', kpis: ['Upgrade rate > 20%', 'Email credit attach rate > 30%', 'MRR growth > 15% MoM'] },
  { label: 'Retention',  status: 'Building',        strategy: 'Year-round engagement via Smart Feed. Grouped becomes the default fan hub for every release cycle, not just launch day.', kpis: ['Monthly churn < 6.5%', 'NPS > 50', 'Release-cycle return rate > 80%'] },
  { label: 'Referral',   status: 'Planned Q3 2026', strategy: 'Artist-to-artist referral program. Fan-facing sharing mechanics. K-factor > 0.3 is the target.', kpis: ['K-factor > 0.3', 'Referral sign-ups > 20%', 'Partner sign-ups > 200/month'] },
];

export const PRODUCT_ROADMAP = [
  { phase: 'Phase 1',   label: 'SaaS Foundation',        status: 'Live',    items: ['Smart Swaps', 'Smart Feed', 'Groups (community)', 'Fan Profiling', 'CRM Integrations'], rev: 'SaaS subscriptions' },
  { phase: 'Phase 1.5', label: 'Email + Revenue',        status: 'Q3 2026', items: ['Custom Email (credit model)', 'Direct Music Sales (20% take)', 'Growth tier launch'], rev: 'SaaS + email credits' },
  { phase: 'Phase 2',   label: 'Real-Time Experiences',  status: 'Q1 2027', items: ['Early Access Listening Parties', 'Microtransactions ($0.10-0.15/stream)', 'Real-time social proof'], rev: 'SaaS + transactional' },
  { phase: 'Phase 3',   label: 'Gamification',           status: 'Q3 2027', items: ['Fan Passes (iOS/Android wallet)', 'Quest System (stream, share, TikTok)', 'Leaderboards', 'Fan Avatars', 'Status + earned rewards'], rev: 'SaaS + transactional + virtual goods' },
  { phase: 'Platform',  label: 'Network Effects',        status: 'TBD',     items: ['Fan-driven artist discovery', 'Marketplace dynamics', 'Artist website builder (Epic Games model)'], rev: 'Marketplace + full stack' },
];

export const DECISIONS = [
  { date: 'Feb 2026', decision: 'GDS26R: Anacrusis as custom display typeface', rationale: 'Proprietary display font gives Grouped a unique visual signature. Single weight (Regular), 160 glyphs. Used for headlines 32px+ (marketing) and D0/D1 product moments only. Satoshi is the system workhorse for everything else.', owner: 'Lucy', status: 'Active' },
  { date: 'Feb 2026', decision: 'GDS26R: Bronze (#C48A3A) as primary brand accent — supersedes electric lime', rationale: 'Deep blue + bronze + warm white system. Bronze is the brand voice (headlines, logos, CTAs). Focus blue (#7CBBDF) handles interactive states only. Prior lime direction retired.', owner: 'Lucy', status: 'Active' },
  { date: 'Feb 2026', decision: 'GDS26R: Full logo system built — Vinyl G mark + lockup library', rationale: 'Vinyl G icon, horizontal/vertical lockups, six color variants, extended library (Typemark, Stacked Askew, Stacked Sticker, Stacked Window, Pill Tag, Retro Stamp). Assets live on GitHub Pages and Google Drive.', owner: 'Lucy', status: 'Active' },
  { date: 'Feb 2026', decision: 'GDS26R: Border radius standardized to 4-token scale (8/16/24/39px)', rationale: 'Clean four-token scale. 39px pill for all interactive elements (matches Figma full-round). 8px for most containers. 10px explicitly excluded.', owner: 'Lucy', status: 'Active' },
  { date: 'Feb 2026', decision: 'Merged Tribly and Grouped under the Grouped brand identity', rationale: 'Combined entity owns the full funnel. Accelerates roadmap by 2-3 years.', owner: 'Seth + Tim', status: 'Active' },
  { date: 'Feb 2026', decision: 'Keep "grouped." name (revisit if traction requires rebrand)', rationale: '"First.FM" documented as future option. Win the market position first.', owner: 'Seth', status: 'Active' },
  { date: 'Jan 2026', decision: 'Free tier at $0 — no freemium ceiling', rationale: 'Drive top-of-funnel volume. Convert via product experience, not trial expiry pressure.', owner: 'Seth', status: 'Active' },
  { date: 'Nov 2025', decision: 'Dark mode as brand primary, light mode secondary', rationale: 'Aligns with music culture aesthetic. Navy (not black) — temperature contrast is the system.', owner: 'Lucy', status: 'Active' },
  { date: 'Nov 2025', decision: 'Do NOT lead with "community" in messaging', rationale: 'Heavy connotation. High commitment for both artists and fans. Lead with premiere window and early access.', owner: 'Seth + Lucy', status: 'Active' },
];

export const REPORT_CARD = [
  { cat: 'Visual Identity',    score: 8, trend: 'up',     note: 'GDS26R v1.0 fully documented. Design system site live. Anacrusis confirmed. Full logo system built. Figma token audit in progress.' },
  { cat: 'Verbal Identity',    score: 7, trend: 'up',     note: 'Hero messaging sharp. FIRST anchor defined but not yet deployed. Segment playbook in progress.' },
  { cat: 'Digital Presence',   score: 6, trend: 'stable', note: 'Website strong. Social presence active. SEO baseline not yet measured.' },
  { cat: 'Market Position',    score: 7, trend: 'up',     note: 'Clear differentiation vs. Laylo/Community. Distribution partnership is the key unlock.' },
  { cat: 'Investor Readiness', score: 5, trend: 'up',     note: 'Series A narrative forming. Deck and data room need completion.' },
  { cat: 'Product-Market Fit', score: 8, trend: 'stable', note: '16.53% upgrade rate, 92% opt-in rate, proven case studies. PMF signal is strong.' },
];

export const ACTIONS = [
  { status: 'Now',  text: 'Lock Series A narrative and slide structure',                 owner: 'Seth + Lucy', priority: 'Critical' },
  { status: 'Now',  text: 'Finalize customer case study pipeline (need 8 more)',         owner: 'Lucy',        priority: 'Critical' },
  { status: 'Now',  text: 'Complete Figma GDS26R token audit (9 aligned, 5 overrides)',  owner: 'Lucy',        priority: 'High' },
  { status: 'Now',  text: 'Build investor data room',                                    owner: 'Seth',        priority: 'High' },
  { status: 'Next', text: 'Distribution partnership outreach (2 largest distributors)',  owner: 'Seth',        priority: 'High' },
  { status: 'Next', text: 'Growth tier + email credit system build',                     owner: 'Product',     priority: 'High' },
  { status: 'Next', text: 'Website hero headline A/B test (FIRST anchor)',               owner: 'Lucy',        priority: 'Medium' },
  { status: 'Later', text: 'Phase 2: Listening party infrastructure',                   owner: 'Product',     priority: 'Medium' },
  { status: 'Later', text: 'Fan Pass wallet integration (iOS/Android)',                  owner: 'Product',     priority: 'Medium' },
  { status: 'Later', text: 'Artist advisory board formation',                            owner: 'Seth',        priority: 'Low' },
];

export type ResearchStep = {
  id: string;
  label: string;
  prompt: string;
  sources: string[];
};

export const RESEARCH_WORKFLOWS: Record<string, ResearchStep[]> = {
  landscape: [
    { id: 'market-size',      label: 'Market size + growth trends',   prompt: 'Research the current market size and growth trends for the independent music artist tools market, direct-to-fan platforms, and artist tech ecosystem in 2025-2026. Include TAM/SAM data, growth rates, and key market signals.', sources: ['Spotify Loud & Clear', 'MIDiA Research', 'IFPI reports', 'Music Business Worldwide'] },
    { id: 'industry-shifts',  label: 'Industry shifts + macro trends', prompt: 'What are the most significant macro trends reshaping the music industry in 2025-2026? Focus on: streaming economics, algorithmic dependence, indie artist growth, direct-to-fan movement, web3/wallet tech, and AI in music.', sources: ['Billboard', 'Music Week', 'Variety', 'The Verge'] },
    { id: 'cultural-moments', label: 'Cultural moments + zeitgeist',   prompt: 'What cultural moments, viral artists, and industry narratives in 2025-2026 are most relevant to Grouped\'s positioning as a direct-to-fan platform? Think: algorithm backlash, creator economy, artists owning their data.', sources: ['Twitter/X music discourse', 'Reddit r/WeAreTheMusicMakers'] },
  ],
  competitive: [
    { id: 'laylo-deep',     label: 'Laylo deep dive',        prompt: 'Provide a current and detailed competitive analysis of Laylo as a music CRM platform. Cover: current pricing, feature set, recent funding, customer base, messaging, weaknesses, and what they\'ve done in 2025-2026.', sources: ['laylo.com', 'Crunchbase', 'Product Hunt'] },
    { id: 'openstage-deep', label: 'OpenStage deep dive',    prompt: 'Provide a current competitive analysis of OpenStage. Cover: product features (especially wallet passes), pricing, target market, recent activity in 2025-2026, and how they compare to Grouped\'s roadmap.', sources: ['openstage.live', 'tech press'] },
    { id: 'new-entrants',   label: 'New entrants scan',      prompt: 'What new music artist tools or direct-to-fan platforms have launched or raised funding in 2024-2026? Scan for: fan data capture tools, artist CRMs, wallet pass platforms, community platforms for musicians.', sources: ['Product Hunt', 'Crunchbase new launches', 'VC music tech portfolios'] },
  ],
  audience: [
    { id: 'artist-sentiment', label: 'Artist sentiment scan',       prompt: 'Scan music artist communities (Reddit, Twitter/X, Discord) for current sentiment around: direct-to-fan tools, email list building, algorithm frustration, fan relationship building. What are independent artists saying right now?', sources: ['r/WeAreTheMusicMakers', 'r/makinghiphop', 'Twitter/X music artist community'] },
    { id: 'fan-behavior',     label: 'Fan behavior + expectations',  prompt: 'What does current research say about music fan behavior in 2025-2026? Cover: willingness to share contact info, early access appeal, push notification engagement rates, fan community participation patterns.', sources: ['Nielsen Music 360', 'Spotify culture surveys'] },
  ],
  news: [
    { id: 'grouped-news',     label: 'Grouped mentions',             prompt: 'Search for any press coverage, mentions, social media posts, or news about Grouped Inc., grouped.com, or the merger of Tribly and Grouped in music tech news from 2025-2026.', sources: ['Google News', 'Music Ally', 'Hypebot', 'Music Business Worldwide'] },
    { id: 'music-tech-news',  label: 'Music tech news (this week)',  prompt: 'What is the most recent and relevant news in music tech, direct-to-fan platforms, artist tools, and independent music in the last 7 days? Cover funding rounds, product launches, platform changes, and industry shifts.', sources: ['Music Ally', 'Hypebot', 'MBW', 'TechCrunch music', 'Billboard pro'] },
  ],
};
