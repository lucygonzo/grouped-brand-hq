/**
 * GROUPED DESIGN SYSTEM — GDS26R v1.0 · February 2026
 * Source: github.com/lucygonzo/grouped_brand
 * Dark Mode Primary · Light Mode Secondary
 *
 * Color system: GDS26R — Navy + Bronze + Warm Cream + Focus Blue
 * Typography: Grouped Font (display) + Satoshi (system) + JetBrains Mono (data)
 */

export const tokens = {
  // ---- BACKGROUNDS (GDS26R Navy system) ----
  bg:          '#111620',       // Navy — page background
  surface1:    '#181E2A',       // Raised surfaces
  surface2:    '#1F2735',       // Overlays, cards
  surface3:    '#262F3F',       // Subtle / nested panels
  overlay:     'rgba(17,22,32,0.85)',

  // ---- BORDERS ----
  border:      '#2E3849',
  borderSoft:  '#252D3B',
  borderBright:'#3A4556',

  // ---- TEXT ----
  textPrimary: '#F0EBE3',       // Warm Cream — headings + body
  textSecond:  '#A8A29E',       // Sub text
  textMuted:   '#78716C',       // Labels / metadata
  textDim:     '#57534E',       // Placeholders / ghost

  // ---- BRAND ACCENTS ----
  accent:      '#C48A3A',       // Bronze — brand voice (headlines, logos, CTAs)
  accentDim:   'rgba(196,138,58,0.10)',
  accentGlow:  'rgba(196,138,58,0.05)',
  accentBorder:'rgba(196,138,58,0.20)',

  // ---- FOCUS BLUE (interactive states only) ----
  focus:       '#7CBBDF',       // Focus Blue — focus rings, links, data viz
  focusDim:    'rgba(124,187,223,0.12)',

  // ---- SEMANTIC ----
  success:     '#8BAF9C',       // Confirmations, positive metrics
  successDim:  'rgba(139,175,156,0.12)',
  warning:     '#D4A24B',       // Warning / unconfirmed
  warningDim:  'rgba(212,162,75,0.12)',
  info:        '#8BA4BE',       // Info / neutral
  infoDim:     'rgba(139,164,190,0.12)',
  error:       '#C27A6B',       // Error / destructive
  errorDim:    'rgba(194,122,107,0.12)',

  // ---- TYPOGRAPHY ----
  fontDisplay: "'Satoshi', sans-serif",       // System workhorse (body + UI)
  fontMono:    "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",  // Data / labels
  fontBody:    "'Satoshi', sans-serif",       // Body text
};

// Shorthand alias used throughout components
export const C = tokens;

// ---- TYPOGRAPHY SCALE ----
export const type = {
  wordmark:   { fontFamily: tokens.fontDisplay, fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em' },
  h1:         { fontFamily: tokens.fontDisplay, fontSize: '26px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15 },
  h2:         { fontFamily: tokens.fontDisplay, fontSize: '18px', fontWeight: 700, letterSpacing: '-0.015em' },
  h3:         { fontFamily: tokens.fontDisplay, fontSize: '15px', fontWeight: 700 },
  label:      { fontFamily: tokens.fontMono, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.16em' },
  mono:       { fontFamily: tokens.fontMono, fontSize: '11px' },
  body:       { fontFamily: tokens.fontBody, fontSize: '13px', lineHeight: 1.65 },
  bodySmall:  { fontFamily: tokens.fontBody, fontSize: '11px', lineHeight: 1.6 },
  caption:    { fontFamily: tokens.fontBody, fontSize: '10px' },
};
