/**
 * GROUPED DESIGN SYSTEM — v1.0 · February 2026
 * Source: github.com/lucygonzo/grouped_brand
 * Dark Mode Primary · Light Mode Secondary
 *
 * Color system extracted from grouped_02.20 site + GDS26R Figma file.
 * Full Figma export pending — tokens marked [CONFIRM] should be
 * verified against GDS26R once export is available.
 */

export const tokens = {
  // ---- BACKGROUNDS ----
  bg:          '#07070A',       // App background (confirmed from site)
  surface1:    '#0E0E13',       // Sidebar / nav
  surface2:    '#15151C',       // Cards
  surface3:    '#1C1C26',       // Nested panels / sub-cards
  overlay:     'rgba(7,7,10,0.85)',

  // ---- BORDERS ----
  border:      '#272733',
  borderSoft:  '#1E1E28',
  borderBright:'#33333F',

  // ---- TEXT ----
  textPrimary: '#EDEDF5',       // Headings + body
  textSecond:  '#9494AA',       // Subtitles / descriptions
  textMuted:   '#555566',       // Labels / metadata
  textDim:     '#3A3A4A',       // Placeholders

  // ---- BRAND ACCENTS ----
  acid:        '#BFFF00',       // [CONFIRM GDS26R] Primary brand accent — electric lime
  acidDim:     'rgba(191,255,0,0.10)',
  acidGlow:    'rgba(191,255,0,0.05)',
  acidBorder:  'rgba(191,255,0,0.20)',

  // ---- SEMANTIC ----
  teal:        '#00E59B',       // Success / confirmed / live
  tealDim:     'rgba(0,229,155,0.12)',
  amber:       '#FFB020',       // Warning / unconfirmed / in-progress
  amberDim:    'rgba(255,176,32,0.12)',
  blue:        '#4DA8FF',       // Info / links
  blueDim:     'rgba(77,168,255,0.12)',
  red:         '#FF4D4D',       // Error / critical / high threat
  redDim:      'rgba(255,77,77,0.12)',

  // ---- TYPOGRAPHY ----
  fontDisplay: "'Syne', sans-serif",    // Wordmark + section headers
  fontMono:    "'DM Mono', monospace",  // Labels, badges, metadata, hex codes
  fontBody:    "'Inter', sans-serif",   // Body text + UI copy
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
