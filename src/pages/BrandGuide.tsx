import { useState, useEffect, useRef } from 'react';
import { C } from '../components/ui';
import { CLIENT, VISUAL_IDENTITY, VERBAL_IDENTITY, BRAND_IDENTITY } from '../data/brandData';

// ── Tokens ──────────────────────────────────────────────
const F = {
  display: "'Satoshi', sans-serif",
  body: "'Satoshi', sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
};

// ── Sections ────────────────────────────────────────────
const SECTIONS = [
  { id: 'manifesto', label: 'Brand Manifesto' },
  { id: 'colors', label: 'Color System' },
  { id: 'logo', label: 'Logo Rules' },
  { id: 'typography', label: 'Typography' },
  { id: 'photography', label: 'Photography & Video' },
  { id: 'visual-voice', label: 'Visual Voice' },
  { id: 'dark-mode', label: 'Dark Mode' },
  { id: 'verbal', label: 'Verbal Identity' },
  { id: 'iconography', label: 'Iconography' },
  { id: 'approvals', label: 'Approvals & Contact' },
];

// ── Copy Hex — Large Color Card ─────────────────────────
const ColorCard = ({ hex, name, desc, usage }: { hex: string; name: string; desc: string; usage: string[] }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1200); };
  const isLight = hex === '#F0EBE3' || hex === '#F6B44E';
  return (
    <div onClick={copy} style={{ cursor: 'pointer', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', overflow: 'hidden', flex: '1 1 280px', transition: 'border-color 0.2s' }}>
      <div style={{ height: '120px', background: hex, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '14px 16px' }}>
        <span style={{ fontFamily: F.mono, fontSize: '14px', fontWeight: 600, color: isLight ? '#111620' : '#F0EBE3', letterSpacing: '0.02em' }}>{hex}</span>
        {copied && <span style={{ fontFamily: F.mono, fontSize: '10px', background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '2px 8px', borderRadius: '4px' }}>Copied!</span>}
      </div>
      <div style={{ padding: '16px' }}>
        <div style={{ fontFamily: F.display, fontSize: '18px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>{name}</div>
        <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.6, marginBottom: '10px' }}>{desc}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {usage.map((u, i) => (
            <span key={i} style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, background: C.s2, padding: '3px 8px', borderRadius: '4px' }}>{u}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Small Swatch ────────────────────────────────────────
const SmallSwatch = ({ hex, name, sub }: { hex: string; name: string; sub: string }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1200); };
  return (
    <div onClick={copy} style={{ cursor: 'pointer', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', overflow: 'hidden', flex: '1 1 140px', minWidth: '130px', transition: 'border-color 0.2s' }}>
      <div style={{ height: '40px', background: hex, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {copied && <span style={{ fontFamily: F.mono, fontSize: '10px', background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '2px 8px', borderRadius: '4px' }}>Copied!</span>}
      </div>
      <div style={{ padding: '8px 10px' }}>
        <div style={{ fontFamily: F.mono, fontSize: '11px', color: C.text, fontWeight: 500 }}>{hex}</div>
        <div style={{ fontFamily: F.body, fontSize: '10px', color: C.muted, marginTop: '1px' }}>{name} · {sub}</div>
      </div>
    </div>
  );
};

// ── WCAG Badge ──────────────────────────────────────────
const WcagBadge = ({ level, ratio, fg, bg, label }: { level: string; ratio: string; fg: string; bg: string; label: string }) => {
  const pass = level !== 'FAIL';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px' }}>
      <span style={{ fontFamily: F.mono, fontSize: '10px', fontWeight: 700, color: pass ? '#4ADE80' : C.error, background: pass ? 'rgba(74,222,128,0.12)' : C.errorDim, padding: '3px 8px', borderRadius: '4px', letterSpacing: '0.05em' }}>{level}</span>
      <span style={{ fontFamily: F.mono, fontSize: '11px', color: C.sub }}>{ratio}</span>
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        <div style={{ width: '14px', height: '14px', borderRadius: '3px', background: fg, border: `1px solid ${C.border}` }} />
        <span style={{ fontFamily: F.body, fontSize: '10px', color: C.muted }}>on</span>
        <div style={{ width: '14px', height: '14px', borderRadius: '3px', background: bg, border: `1px solid ${C.border}` }} />
      </div>
      <span style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, flex: 1 }}>{label}</span>
    </div>
  );
};

// ── Do / Don't Block ────────────────────────────────────
const DoDont = ({ type, children }: { type: 'do' | 'dont'; children: React.ReactNode }) => {
  const color = type === 'do' ? '#4ADE80' : C.error;
  return (
    <div style={{ borderLeft: `3px solid ${color}`, padding: '10px 14px', background: type === 'do' ? 'rgba(74,222,128,0.05)' : 'rgba(194,122,107,0.05)', borderRadius: '0 8px 8px 0', marginBottom: '8px' }}>
      <div style={{ fontFamily: F.mono, fontSize: '9px', fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '4px' }}>{type === 'do' ? 'DO' : "DON'T"}</div>
      <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.6 }}>{children}</div>
    </div>
  );
};

// ── Section Heading ─────────────────────────────────────
const SectionHeading = ({ num, title, sub }: { num: string; title: string; sub?: string }) => (
  <div style={{ marginBottom: '28px' }}>
    <div style={{ fontFamily: F.mono, fontSize: '11px', color: C.accent, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 500 }}>{num}</div>
    <h2 style={{ fontFamily: F.display, fontSize: '28px', fontWeight: 800, color: C.text, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.15 }}>{title}</h2>
    {sub && <p style={{ fontFamily: F.body, fontSize: '14px', color: C.sub, margin: '8px 0 0', lineHeight: 1.65, maxWidth: '680px' }}>{sub}</p>}
  </div>
);

// ── Sub-section Label ───────────────────────────────────
const SubLabel = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{ fontFamily: F.display, fontSize: '16px', fontWeight: 700, color: C.text, margin: '32px 0 12px', letterSpacing: '-0.01em' }}>{children}</h3>
);

// ── Callout ─────────────────────────────────────────────
const GuideCallout = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: C.accentGlow, borderLeft: `3px solid ${C.accent}`, borderRadius: '0 8px 8px 0', padding: '14px 18px', marginBottom: '24px', fontFamily: F.body, fontSize: '13px', color: C.text, lineHeight: 1.65, fontStyle: 'italic' }}>
    {children}
  </div>
);

// ── Card ────────────────────────────────────────────────
const GuideCard = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '18px', ...style }}>{children}</div>
);

// ── Rule item ───────────────────────────────────────────
const Rule = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '6px' }}>
    <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, marginTop: '3px', flexShrink: 0 }}>&#x2022;</span>
    <span style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.6 }}>{children}</span>
  </div>
);

// ── Logo Assets ─────────────────────────────────────────
const LOGO_BASE = 'https://raw.githubusercontent.com/lucygonzo/grouped_brand/main/Logo%20Assets';
const logoSvgUrl = (file: string) => `${LOGO_BASE}/SVG/${encodeURIComponent(file)}.svg`;
const logoPngUrl = (file: string) => `${LOGO_BASE}/PNG/${encodeURIComponent(file)}.png`;
const GDRIVE_ASSETS = 'https://drive.google.com/drive/folders/1E3xl-FC3HFVtCWRBLyN-u8RCVgk9VME6';

const LOGO_CATEGORIES_PRIMARY = [
  {
    type: 'Grouped Typemark', desc: 'Primary wordmark — "Grouped" in custom display type', hero: true,
    variants: [
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_Grouped Typemark_WarmBronze', bg: '#111620' },
      { color: 'Cream', file: 'Grouped_Rebrand_Visual Assets_Grouped Typemark_Cream', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_Grouped Typemark_Navy', bg: '#F0EBE3' },
      { color: 'White (B&W only)', file: 'Grouped_Rebrand_Visual Assets_Grouped Typemark_White', bg: '#111620' },
      { color: 'Black (B&W only)', file: 'Grouped_Rebrand_Visual Assets_Grouped Typemark_Black', bg: '#F0EBE3' },
    ],
  },
  {
    type: 'VinylG Icon', desc: 'Standalone G mark — app icon, favicon, social avatar, watermark', hero: true,
    variants: [
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_VinylG Icon_WarmBronze', bg: '#111620' },
      { color: 'Cream', file: 'Grouped_Rebrand_Visual Assets_VinylG Icon_Cream', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_VinylG Icon_Navy', bg: '#F0EBE3' },
      { color: 'White (B&W only)', file: 'Grouped_Rebrand_Visual Assets_VinylG Icon_White', bg: '#111620' },
      { color: 'Black (B&W only)', file: 'Grouped_Rebrand_Visual Assets_VinylG Icon_Black', bg: '#F0EBE3' },
    ],
  },
  {
    type: 'Lockup Horizontal', desc: 'VinylG + wordmark side by side — preferred lockup',
    variants: [
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_Lockup Horizontal_Warm Bronze', bg: '#111620' },
      { color: 'Cream', file: 'Grouped_Rebrand_Visual Assets_Lockup Horizontal_Cream', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_Lockup Horizontal_Navy', bg: '#F0EBE3' },
      { color: 'White (B&W only)', file: 'Grouped_Rebrand_Visual Assets_Lockup Horizontal_white', bg: '#111620' },
      { color: 'Black (B&W only)', file: 'Grouped_Rebrand_Visual Assets_Lockup Horizontal_Black', bg: '#F0EBE3' },
    ],
  },
  {
    type: 'Lockup Vertical', desc: 'VinylG + wordmark stacked — for square formats',
    variants: [
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_Lockup Vertical_Warm Bronze', bg: '#111620' },
      { color: 'Cream', file: 'Grouped_Rebrand_Visual Assets_Lockup Vertical_Cream', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_Lockup Vertical_Navy', bg: '#F0EBE3' },
      { color: 'Black (B&W only)', file: 'Grouped_Rebrand_Visual Assets_Lockup Vertical_Black', bg: '#F0EBE3' },
    ],
  },
];

const LOGO_CATEGORIES_CAMPAIGN = [
  {
    type: 'Pill Tag', desc: 'Pill-shaped logo badge',
    variants: [
      { color: 'Full Color', file: 'Grouped_Rebrand_Visual Assets_Pill Tag_Full Color', bg: '#111620' },
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_Pill Tag_Warm Bronze', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_Pill Tag_Navy', bg: '#F0EBE3' },
    ],
  },
  {
    type: 'Stacked Askew', desc: 'Angled stacked treatment',
    variants: [
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_Stacked Askew_Warm Bronze', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_Stacked Askew_Navy', bg: '#F0EBE3' },
    ],
  },
  {
    type: 'Stacked Sticker', desc: 'Sticker-style stacked treatment',
    variants: [
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_Stacked Sticker_WarmBronze', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_Stacked Sticker_Navy', bg: '#F0EBE3' },
    ],
  },
  {
    type: 'Stacked Window', desc: 'Window-framed stacked treatment',
    variants: [
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_Stacked Window_Warm Bronze', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_Stacked Window_Navy', bg: '#F0EBE3' },
    ],
  },
  {
    type: 'Retro Stamp', desc: 'Vintage stamp treatments',
    variants: [
      { color: 'Color', file: 'Grouped_Rebrand_Visual Assets_Retro stamp color', bg: '#111620' },
      { color: 'Black', file: 'Grouped_Rebrand_Visual Assets_retro Stamp Black', bg: '#F0EBE3' },
    ],
  },
];

// ── Logo Preview Card ───────────────────────────────────
const LogoVariantCard = ({ file, color, bg }: { file: string; color: string; bg: string }) => (
  <div style={{ flex: '1 1 140px', minWidth: '130px' }}>
    <div style={{ background: bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', height: '72px', border: `1px solid ${C.border}` }}>
      <img src={logoSvgUrl(file)} alt={`${color} variant`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px', padding: '0 2px' }}>
      <span style={{ fontFamily: F.body, fontSize: '10px', color: C.sub }}>{color}</span>
      <div style={{ display: 'flex', gap: '8px' }}>
        <a href={logoSvgUrl(file)} target="_blank" rel="noopener noreferrer" style={{ fontFamily: F.mono, fontSize: '9px', color: C.focus, textDecoration: 'none' }}>SVG</a>
        <a href={logoPngUrl(file)} target="_blank" rel="noopener noreferrer" style={{ fontFamily: F.mono, fontSize: '9px', color: C.focus, textDecoration: 'none' }}>PNG</a>
      </div>
    </div>
  </div>
);

// ── Surface Layer Card ──────────────────────────────────
const SurfaceCard = ({ hex, name, token, usage }: { hex: string; name: string; token: string; usage: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 14px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', marginBottom: '6px' }}>
    <div style={{ width: '48px', height: '32px', borderRadius: '6px', background: hex, border: `1px solid ${C.borderHov}`, flexShrink: 0 }} />
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <span style={{ fontFamily: F.display, fontSize: '13px', fontWeight: 600, color: C.text }}>{name}</span>
        <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted }}>{token}</span>
      </div>
      <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginTop: '2px' }}>{usage}</div>
    </div>
    <span style={{ fontFamily: F.mono, fontSize: '11px', color: C.ghost }}>{hex}</span>
  </div>
);

// ══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ══════════════════════════════════════════════════════════
export default function BrandGuide() {
  const [activeSection, setActiveSection] = useState('manifesto');
  const [showSemantic, setShowSemantic] = useState(false);
  const [showCampaignLogos, setShowCampaignLogos] = useState(false);
  const [expandedSpectrum, setExpandedSpectrum] = useState<string | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scroll-tracking
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const handleScroll = () => {
      const offsets = SECTIONS.map(s => {
        const el = sectionRefs.current[s.id];
        if (!el) return { id: s.id, top: Infinity };
        return { id: s.id, top: el.getBoundingClientRect().top };
      });
      const closest = offsets.reduce((a, b) => (Math.abs(a.top - 80) < Math.abs(b.top - 80) ? a : b));
      setActiveSection(closest.id);
    };
    main.addEventListener('scroll', handleScroll, { passive: true });
    return () => main.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const VI = VISUAL_IDENTITY;
  const VB = VERBAL_IDENTITY;

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: C.bg }}>
      {/* ── HEADER BAR ────────────────────────────── */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '52px', background: C.bg, borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontFamily: F.display, fontSize: '18px', fontWeight: 900, color: C.accent, letterSpacing: '-0.02em' }}>Grouped</span>
          <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.16em', background: C.s2, padding: '3px 10px', borderRadius: '4px' }}>Brand Guide</span>
          <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.ghost, letterSpacing: '0.08em' }}>GDS26R v1.0 · February 2026</span>
        </div>
        <button onClick={() => window.print()} style={{ fontFamily: F.mono, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '6px 14px', background: 'none', border: `1px solid ${C.border}`, color: C.sub, borderRadius: '39px', cursor: 'pointer', transition: 'all 0.2s' }}>
          Print to PDF
        </button>
      </div>

      {/* ── SIDEBAR ───────────────────────────────── */}
      <nav style={{ width: '200px', flexShrink: 0, paddingTop: '72px', padding: '72px 0 24px 20px', position: 'fixed', height: '100vh', overflowY: 'auto' }}>
        <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.ghost, textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '14px', paddingLeft: '12px' }}>Contents</div>
        {SECTIONS.map((s, i) => {
          const active = activeSection === s.id;
          return (
            <button key={s.id} onClick={() => scrollTo(s.id)} style={{
              display: 'block', width: '100%', textAlign: 'left', fontFamily: F.body, fontSize: '13px',
              color: active ? C.accent : C.sub, background: active ? C.accentGlow : 'transparent',
              border: 'none', borderLeft: active ? `2px solid ${C.accent}` : '2px solid transparent',
              padding: '8px 12px', cursor: 'pointer', transition: 'all 0.15s', borderRadius: '0 6px 6px 0', marginBottom: '2px',
            }}>
              <span style={{ fontFamily: F.mono, fontSize: '10px', color: active ? C.accent : C.ghost, marginRight: '8px' }}>{String(i + 1).padStart(2, '0')}</span>
              {s.label}
            </button>
          );
        })}
        <div style={{ borderTop: `1px solid ${C.border}`, marginTop: '20px', paddingTop: '14px', paddingLeft: '12px' }}>
          <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.ghost, letterSpacing: '0.08em' }}>{CLIENT.name}</div>
          <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.ghost, marginTop: '2px' }}>{CLIENT.stage} · {CLIENT.phase}</div>
        </div>
      </nav>

      {/* ── MAIN CONTENT ─────────────────────────── */}
      <main ref={mainRef} style={{ flex: 1, marginLeft: '200px', paddingTop: '52px', overflowY: 'auto', height: '100vh' }}>
        <div style={{ maxWidth: '820px', padding: '40px 40px 80px' }}>

          {/* Hero */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '8px' }}>GROUPED, INC.</div>
            <h1 style={{ fontFamily: F.display, fontSize: '36px', fontWeight: 900, color: C.text, margin: '0 0 12px', letterSpacing: '-0.025em', lineHeight: 1.1 }}>Brand Guide</h1>
            <p style={{ fontFamily: F.body, fontSize: '15px', color: C.sub, lineHeight: 1.65, maxWidth: '640px' }}>
              The working reference for visual and verbal identity decisions across all Grouped surfaces. Built from confirmed brand strategy and the GDS26R design system. Every rule here has a rationale.
            </p>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* 01 — BRAND MANIFESTO                      */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['manifesto'] = el; }} id="manifesto" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="01" title="Brand Manifesto" sub="Before the colors, the fonts, and the rules — why Grouped exists." />

            <GuideCard style={{ marginBottom: '24px', padding: '28px 24px' }}>
              <div style={{ fontFamily: F.display, fontSize: '22px', fontWeight: 800, color: C.text, lineHeight: 1.3, marginBottom: '16px', letterSpacing: '-0.01em' }}>
                The best artists have always known that the fan relationship is everything.
              </div>
              <div style={{ fontFamily: F.body, fontSize: '15px', color: C.sub, lineHeight: 1.75, marginBottom: '16px' }}>
                Before algorithms, there were mailing lists, fan clubs, and backstage passes. There was a direct line between the people who made the music and the people who loved it. That line got cut. Streaming platforms separated songs from artists. Social platforms rented audiences and charged to reach them. Every release became a reset — start from zero, hope the algorithm cooperates, repeat.
              </div>
              <div style={{ fontFamily: F.body, fontSize: '15px', color: C.sub, lineHeight: 1.75, marginBottom: '16px' }}>
                Grouped is that direct line — rebuilt for the modern era. Not rented. Not algorithmic. Yours. One place to capture who's listening, reach them directly, and build an audience that grows with every release.
              </div>
              <div style={{ fontFamily: F.body, fontSize: '15px', color: C.sub, lineHeight: 1.75, marginBottom: '16px' }}>
                We are not a super fan platform. We are not a label. We are the missing layer between music distribution and fan engagement — built by artists, for artists. No algorithm. No per-message fees. No platform tax. Just direct reach.
              </div>
              <div style={{ fontFamily: F.display, fontSize: '16px', fontWeight: 700, color: C.accent, fontStyle: 'italic', marginTop: '8px' }}>
                Fill the gap between first listen and forever fan.
              </div>
            </GuideCard>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              <GuideCard style={{ padding: '16px' }}>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Mission</div>
                <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.6 }}>Shift power back to artists by giving them ownership of their fan relationships and data.</div>
              </GuideCard>
              <GuideCard style={{ padding: '16px' }}>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Founded</div>
                <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.6 }}>2026 merger of Tribly (fan capture) and Grouped (fan community). Full-funnel, one roof.</div>
              </GuideCard>
              <GuideCard style={{ padding: '16px' }}>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Who We Serve</div>
                <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.6 }}>Independent artists at every stage — from first release to arena tours. All fans, not just superfans.</div>
              </GuideCard>
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 02 — COLOR SYSTEM                         */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['colors'] = el; }} id="colors" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="02" title="Color System" sub="Three temperature layers: cool navy surfaces, warm bronze brand elements, Focus Blue interactive accents." />

            <SubLabel>Primary Palette</SubLabel>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '14px' }}>
              <ColorCard hex="#111620" name="Navy" desc="The foundation. Deep, warm navy grounds every surface. Not pure black — the blue undertone creates depth without harshness." usage={['Page backgrounds', 'App shell', 'Cards and containers']} />
              <ColorCard hex="#C48A3A" name="Bronze" desc="The brand voice. Bronze is reserved for headlines, logos, CTAs, and brand moments. If it appears on a poster, it's bronze." usage={['Headlines', 'Logos', 'CTAs', 'Brand accents']} />
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <ColorCard hex="#F0EBE3" name="Warm Cream" desc="Primary text color. Not pure white — the warm cream prevents eye strain on dark backgrounds and feels more intentional." usage={['Body text', 'Headlines', 'Light surfaces']} />
            </div>

            {/* Focus Blue — secondary, smaller presentation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 16px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', marginBottom: '10px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '6px', background: '#7CBBDF', flexShrink: 0, border: `1px solid ${C.borderHov}` }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.text }}>Focus Blue</span>
                  <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted, background: C.s2, padding: '2px 6px', borderRadius: '3px' }}>Secondary</span>
                  <span style={{ fontFamily: F.mono, fontSize: '11px', color: C.ghost }}>{'#7CBBDF'}</span>
                </div>
                <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, marginTop: '2px' }}>Interactive states only — focus rings, active indicators, links, data visualization. Never for brand voice.</div>
              </div>
            </div>

            {/* Navy shades note */}
            <div style={{ padding: '10px 16px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', marginBottom: '28px' }}>
              <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>
                <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, marginRight: '8px' }}>NOTE</span>
                The navy palette includes additional shades for surface depth — <span style={{ fontFamily: F.mono, fontSize: '11px' }}>#181E2A</span> (raised), <span style={{ fontFamily: F.mono, fontSize: '11px' }}>#1F2735</span> (overlay), <span style={{ fontFamily: F.mono, fontSize: '11px' }}>#262F3F</span> (subtle), <span style={{ fontFamily: F.mono, fontSize: '11px' }}>#2E3849</span> (muted). Use these for visual variation and depth hierarchy in layouts.
              </div>
            </div>

            {/* Bronze vs Interactive Accent */}
            <SubLabel>Accent Color Usage</SubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <GuideCard style={{ padding: '16px', borderLeft: `3px solid #C48A3A` }}>
                <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: '#C48A3A', marginBottom: '8px' }}>Bronze — Brand Accent</div>
                <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6, marginBottom: '10px' }}>The voice of the brand. Used for CTAs, hover states, and brand moments. Bronze carries the warmth and identity.</div>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {['CTA buttons', 'Hover states', 'Pill badges', 'Outer hover ring', 'Brand headlines', 'Active tabs'].map(tag => (
                    <span key={tag} style={{ fontFamily: F.mono, fontSize: '9px', color: '#C48A3A', background: 'rgba(196,138,58,0.08)', padding: '3px 8px', borderRadius: '4px' }}>{tag}</span>
                  ))}
                </div>
              </GuideCard>
              <GuideCard style={{ padding: '16px', borderLeft: `3px solid #7CBBDF` }}>
                <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: '#7CBBDF', marginBottom: '8px' }}>Focus Blue — Interactive Accent</div>
                <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6, marginBottom: '10px' }}>Functional and system-level. Used for focus rings, shadows, glows, and accessibility indicators. Never for brand voice.</div>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {['Focus ring', 'Box shadow', 'Glow effects', 'Active indicator', 'Link underlines', 'Data viz'].map(tag => (
                    <span key={tag} style={{ fontFamily: F.mono, fontSize: '9px', color: '#7CBBDF', background: 'rgba(124,187,223,0.08)', padding: '3px 8px', borderRadius: '4px' }}>{tag}</span>
                  ))}
                </div>
              </GuideCard>
            </div>

            <DoDont type="do">Use bronze for anything that represents the brand voice — CTAs, hover states, pill badges, and the outer hover ring on interactive elements.</DoDont>
            <DoDont type="do">Use Focus Blue exclusively for system-level interactive states — focus rings, box shadows, glows, and accessibility indicators.</DoDont>
            <DoDont type="dont">Mix up bronze and blue. If it appears on a poster, it's bronze. If it highlights keyboard focus, it's blue.</DoDont>
            <DoDont type="dont">Use Focus Blue for CTA buttons or hover states — that's bronze territory.</DoDont>
            <DoDont type="dont">Use pure white (#FFFFFF) for text. Always use warm cream #F0EBE3.</DoDont>

            {/* Semantic Colors — collapsible */}
            <div style={{ marginBottom: '20px' }}>
              <button onClick={() => setShowSemantic(!showSemantic)} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 0', width: '100%' }}>
                <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.ghost, transition: 'transform 0.2s', transform: showSemantic ? 'rotate(90deg)' : 'rotate(0deg)' }}>&#9654;</span>
                <span style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.sub }}>UI Semantic Colors</span>
                <span style={{ fontFamily: F.mono, fontSize: '9px', color: C.ghost, background: C.s2, padding: '2px 8px', borderRadius: '4px' }}>Not core palette</span>
              </button>
              {showSemantic && (
                <div style={{ paddingLeft: '18px', paddingTop: '8px' }}>
                  <p style={{ fontFamily: F.body, fontSize: '12px', color: C.muted, lineHeight: 1.5, marginBottom: '10px' }}>Functional UI states only. Not part of the core brand palette and should never appear in marketing materials.</p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {[
                      { hex: '#8BAF9C', name: 'Success' },
                      { hex: '#D4A24B', name: 'Warning' },
                      { hex: '#C27A6B', name: 'Error' },
                      { hex: '#8BA4BE', name: 'Info' },
                    ].map(c => (
                      <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '6px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: c.hex }} />
                        <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted }}>{c.name}</span>
                        <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.ghost }}>{c.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <SubLabel>Accessibility</SubLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
              <WcagBadge level="AAA" ratio="13.5:1" fg="#F0EBE3" bg="#111620" label="Cream text on navy background" />
              <WcagBadge level="AAA" ratio="11.2:1" fg="#C48A3A" bg="#111620" label="Bronze accent on navy background" />
              <WcagBadge level="AA" ratio="7.8:1" fg="#7CBBDF" bg="#111620" label="Focus Blue on navy background" />
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 03 — LOGO RULES                           */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['logo'] = el; }} id="logo" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="03" title="Logo Rules" sub="The Grouped wordmark is the brand's primary identifier. The Vinyl G mark is the secondary mark. Both require governance, not redesign." />

            {/* Hero: Primary Typemark */}
            <SubLabel>Wordmark</SubLabel>
            <GuideCard style={{ marginBottom: '20px', textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ background: '#111620', borderRadius: '8px', padding: '24px 32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.border}` }}>
                <img src={logoSvgUrl('Grouped_Rebrand_Visual Assets_Grouped Typemark_WarmBronze')} alt="Grouped wordmark" style={{ height: '48px', objectFit: 'contain' }} />
              </div>
              <div style={{ fontFamily: F.mono, fontSize: '11px', color: C.muted, marginTop: '16px' }}>Grouped Font (Custom OTF) · Title case · No period.</div>
            </GuideCard>

            <GuideCallout>{VI.wordmark.rationale}</GuideCallout>

            <SubLabel>Treatment Rules</SubLabel>
            <DoDont type="do">Always render the wordmark as "Grouped" — capital G, no period.</DoDont>
            <DoDont type="do">Use Grouped Font (custom display OTF) for the wordmark at 28px+ minimum size.</DoDont>
            <DoDont type="do">Dark mode is the default. All logo usage assumes a dark background unless otherwise specified.</DoDont>
            <DoDont type="dont">Never render in all-lowercase ("grouped") or with a trailing period ("grouped." / "Grouped.").</DoDont>
            <DoDont type="dont">Never set in all-caps: "GROUPED".</DoDont>
            <DoDont type="dont">Never set the wordmark in Satoshi, Arial, or any substitute typeface.</DoDont>

            {/* Color variant rules */}
            <SubLabel>Color Variant Rules</SubLabel>
            <div style={{ padding: '14px 16px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', marginBottom: '16px' }}>
              <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65 }}>
                <strong style={{ color: C.text }}>Default variants:</strong> Warm Bronze (on dark), Navy (on light), and Cream (on dark) are the primary logo colors. Use these for all standard applications.
              </div>
              <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65, marginTop: '8px' }}>
                <strong style={{ color: C.text }}>Black & White:</strong> Only use the Black or White variants when the deliverable is explicitly monochrome — single-color print, fax, engraving, or a context where color reproduction is not possible.
              </div>
            </div>

            {/* Pairing rule */}
            <SubLabel>Typemark + Icon Pairing</SubLabel>
            <GuideCallout>When using the Grouped typemark on any material, the Vinyl G icon must also appear somewhere on the same surface — and vice versa. We are actively building attribution between the wordmark and the mark. They should always appear together in some form on any deliverable.</GuideCallout>

            <DoDont type="do">The icon and wordmark must always be the same color when used together. Never mix color variants (e.g. bronze icon with cream wordmark).</DoDont>
            <DoDont type="do">If the screen size or container width makes the wordmark too small to read comfortably, drop the wordmark and use the icon only.</DoDont>

            {/* Nav behavior */}
            <SubLabel>Navigation Logo Behavior</SubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              <GuideCard style={{ padding: '16px' }}>
                <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '6px' }}>Nav Open / Full Width</div>
                <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>Display both the Vinyl G icon and the Grouped wordmark side by side. This is the default state for expanded navigation and full-width headers.</div>
              </GuideCard>
              <GuideCard style={{ padding: '16px' }}>
                <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '6px' }}>Nav Collapsed / Small Screen</div>
                <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>Display only the Vinyl G icon. When the navigation collapses or the viewport shrinks below the wordmark's minimum legible size, the icon represents the brand alone.</div>
              </GuideCard>
            </div>

            {/* Hero: Vinyl G Mark */}
            <SubLabel>Vinyl G Mark</SubLabel>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65, marginBottom: '16px' }}>The secondary mark — a geometric "G" within concentric arcs evoking vinyl grooves and sound waves. Used as an app icon, favicon, social avatar, and watermark.</p>
            <GuideCard style={{ marginBottom: '20px', textAlign: 'center', padding: '32px 20px' }}>
              <div style={{ display: 'inline-flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ background: '#111620', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.border}`, width: '80px', height: '80px' }}>
                  <img src={logoSvgUrl('Grouped_Rebrand_Visual Assets_VinylG Icon_WarmBronze')} alt="VinylG mark — bronze" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                </div>
                <div style={{ background: '#F0EBE3', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.border}`, width: '80px', height: '80px' }}>
                  <img src={logoSvgUrl('Grouped_Rebrand_Visual Assets_VinylG Icon_Navy')} alt="VinylG mark — navy" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                </div>
              </div>
            </GuideCard>

            {/* Safe Space & Lockups */}
            <SubLabel>Safe Space & Lockups</SubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              <GuideCard style={{ padding: '16px' }}>
                <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '6px' }}>Clear Space</div>
                <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>Maintain a minimum clear space equal to the height of the "G" in Grouped around all sides of any logo variant. No other elements should encroach on this space.</div>
              </GuideCard>
              <GuideCard style={{ padding: '16px' }}>
                <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '6px' }}>Minimum Size</div>
                <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>Typemark: 28px height minimum for digital, 12mm for print. Vinyl G icon: 16px minimum for digital, 6mm for print. Below these sizes, legibility is compromised.</div>
              </GuideCard>
              <GuideCard style={{ padding: '16px' }}>
                <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '6px' }}>Partnership Lockups</div>
                <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>When co-branding with a partner, use the horizontal lockup separated by a vertical divider (1px, border-default opacity). Equal visual weight between logos. Grouped logo always appears on the left or top.</div>
              </GuideCard>
              <GuideCard style={{ padding: '16px' }}>
                <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '6px' }}>Co-Branding Rules</div>
                <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>Never modify the Grouped logo to match a partner's style. Both logos should retain their original proportions. Maintain equal clear space between the divider and each logo.</div>
              </GuideCard>
            </div>

            {/* Primary Logo Variants */}
            {LOGO_CATEGORIES_PRIMARY.map(cat => (
              <div key={cat.type} style={{ marginBottom: '28px' }}>
                <SubLabel>{cat.type}</SubLabel>
                <p style={{ fontFamily: F.body, fontSize: '12px', color: C.muted, marginBottom: '12px' }}>{cat.desc}</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {cat.variants.map(v => (
                    <LogoVariantCard key={`${cat.type}-${v.color}`} file={v.file} color={v.color} bg={v.bg} />
                  ))}
                </div>
              </div>
            ))}

            {/* Campaign / Internal Logos — collapsible */}
            <div style={{ marginBottom: '28px' }}>
              <button onClick={() => setShowCampaignLogos(!showCampaignLogos)} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 0', width: '100%' }}>
                <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.ghost, transition: 'transform 0.2s', transform: showCampaignLogos ? 'rotate(90deg)' : 'rotate(0deg)' }}>&#9654;</span>
                <span style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.sub }}>Campaign & Internal Variants</span>
                <span style={{ fontFamily: F.mono, fontSize: '9px', color: C.ghost, background: C.s2, padding: '2px 8px', borderRadius: '4px' }}>Internal use only</span>
              </button>
              {showCampaignLogos && (
                <div style={{ paddingLeft: '18px', paddingTop: '12px' }}>
                  <p style={{ fontFamily: F.body, fontSize: '12px', color: C.muted, marginBottom: '16px' }}>These variants are reserved for internal marketing campaigns, social media assets, and promotional materials. Do not use for external partner-facing or co-branded deliverables.</p>
                  {LOGO_CATEGORIES_CAMPAIGN.map(cat => (
                    <div key={cat.type} style={{ marginBottom: '20px' }}>
                      <h4 style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 600, color: C.text, marginBottom: '8px' }}>{cat.type}</h4>
                      <p style={{ fontFamily: F.body, fontSize: '11px', color: C.muted, marginBottom: '10px' }}>{cat.desc}</p>
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {cat.variants.map(v => (
                          <LogoVariantCard key={`${cat.type}-${v.color}`} file={v.file} color={v.color} bg={v.bg} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Asset Links */}
            <SubLabel>Download All Assets</SubLabel>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href={GDRIVE_ASSETS} target="_blank" rel="noopener noreferrer" style={{ fontFamily: F.mono, fontSize: '10px', color: C.focus, textDecoration: 'none', padding: '6px 14px', border: `1px solid ${C.focusDim}`, borderRadius: '39px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Google Drive — All Assets</a>
              <a href={VI.wordmark.figmaFile} target="_blank" rel="noopener noreferrer" style={{ fontFamily: F.mono, fontSize: '10px', color: C.focus, textDecoration: 'none', padding: '6px 14px', border: `1px solid ${C.focusDim}`, borderRadius: '39px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Figma GDS26R</a>
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 04 — TYPOGRAPHY                           */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['typography'] = el; }} id="typography" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="04" title="Typography" sub={VI.typography.systemNote} />

            {/* Typeface cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {VI.typography.fonts.map(f => (
                <GuideCard key={f.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <div>
                      <div style={{ fontFamily: f.name === 'JetBrains Mono' ? F.mono : F.display, fontSize: '22px', fontWeight: f.name === 'JetBrains Mono' ? 400 : 800, color: C.text, letterSpacing: '-0.01em' }}>{f.name}</div>
                      <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>{f.role}</div>
                    </div>
                    {'minSize' in f && <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted, background: C.s2, padding: '3px 8px', borderRadius: '4px' }}>Min {f.minSize}</span>}
                  </div>
                  <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6, marginBottom: '10px' }}>{f.type}</div>
                  {'weights' in f && <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted, marginBottom: '10px' }}>Weights: {f.weights}</div>}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {f.useFor.map((u, i) => (
                      <span key={i} style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub, background: C.s2, padding: '2px 8px', borderRadius: '4px' }}>{u}</span>
                    ))}
                  </div>
                </GuideCard>
              ))}
            </div>

            {/* Live specimens */}
            <SubLabel>Type Specimens</SubLabel>
            <GuideCard style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: F.display, fontSize: '48px', fontWeight: 900, color: C.text, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: '16px' }}>Where Artists and Fans Connect.</div>
              <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted }}>DISPLAY XL · Satoshi Black 900 · 48px · -0.03em</div>
            </GuideCard>
            <GuideCard style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: F.display, fontSize: '28px', fontWeight: 700, color: C.text, letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: '12px' }}>Grow Your Audience, On Your Terms.</div>
              <div style={{ fontFamily: F.body, fontSize: '16px', color: C.sub, lineHeight: 1.6, marginBottom: '8px' }}>Every release builds on the last. We are fundamentally opposed to starting from zero. Grouped is the missing layer between music distribution and fan engagement.</div>
              <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted }}>HEADING LG + BODY MD · Satoshi Bold 700 / Regular 400</div>
            </GuideCard>
            <GuideCard style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'baseline' }}>
                <span style={{ fontFamily: F.mono, fontSize: '28px', fontWeight: 500, color: C.accent, fontVariantNumeric: 'tabular-nums' } as React.CSSProperties}>4,500+</span>
                <span style={{ fontFamily: F.mono, fontSize: '28px', fontWeight: 500, color: C.accent, fontVariantNumeric: 'tabular-nums' } as React.CSSProperties}>92%</span>
                <span style={{ fontFamily: F.mono, fontSize: '28px', fontWeight: 500, color: C.accent, fontVariantNumeric: 'tabular-nums' } as React.CSSProperties}>$8.40</span>
              </div>
              <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, marginTop: '8px' }}>MONO / DATA · JetBrains Mono Medium · Tabular figures</div>
            </GuideCard>

            {/* Type scale table */}
            <SubLabel>Type Scale</SubLabel>
            <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: F.body, fontSize: '12px' }}>
                <thead>
                  <tr>
                    {['Token', 'Size', 'Weight', 'Line Height', 'Tracking', 'Usage'].map(h => (
                      <th key={h} style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '8px 10px', borderBottom: `1px solid ${C.border}`, textAlign: 'left' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {VI.typography.scaleMarketing.map(s => (
                    <tr key={s.token}>
                      <td style={{ fontFamily: F.mono, fontSize: '11px', color: C.accent, padding: '8px 10px', borderBottom: `1px solid ${C.borderSoft}` }}>{s.token}</td>
                      <td style={{ fontFamily: F.mono, fontSize: '11px', color: C.text, padding: '8px 10px', borderBottom: `1px solid ${C.borderSoft}` }}>{s.size}</td>
                      <td style={{ color: C.sub, padding: '8px 10px', borderBottom: `1px solid ${C.borderSoft}` }}>{s.weight}</td>
                      <td style={{ fontFamily: F.mono, fontSize: '11px', color: C.sub, padding: '8px 10px', borderBottom: `1px solid ${C.borderSoft}` }}>{s.lh}</td>
                      <td style={{ fontFamily: F.mono, fontSize: '11px', color: C.sub, padding: '8px 10px', borderBottom: `1px solid ${C.borderSoft}` }}>{s.ls}</td>
                      <td style={{ color: C.muted, padding: '8px 10px', borderBottom: `1px solid ${C.borderSoft}` }}>{s.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Type rules */}
            <SubLabel>Type Rules</SubLabel>
            {VI.typography.rules.map((r, i) => <Rule key={i}>{r}</Rule>)}

            <div style={{ marginTop: '16px' }}>
              <DoDont type="do">Use Satoshi for all body copy, product UI, and anything under 28px.</DoDont>
              <DoDont type="do">Use tabular figures (font-variant-numeric: tabular-nums) in data tables and metrics.</DoDont>
              <DoDont type="dont">Use Grouped Font for body copy, buttons, or any text under 28px.</DoDont>
              <DoDont type="dont">Mix condensed and standard variants in the same text block.</DoDont>
              <DoDont type="dont">Use pure white (#FFFFFF) for text — always use warm cream #F0EBE3.</DoDont>
            </div>

            {/* Satoshi weight notes */}
            <SubLabel>Satoshi Weight Notes</SubLabel>
            <div style={{ padding: '14px 16px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', marginBottom: '12px' }}>
              <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65 }}>
                <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, marginRight: '8px' }}>WEIGHT GUIDANCE</span>
                Favor <strong style={{ color: C.text }}>Black (900)</strong> for display and headline applications — it carries the most brand presence and pairs well with the boldness of Grouped Font. For body-adjacent UI where Semibold is needed, use <strong style={{ color: C.text }}>Bold (700)</strong> as a direct replacement — the optical difference is minimal at body sizes and maintains consistency across the weight stack.
              </div>
            </div>
            <div style={{ padding: '14px 16px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', marginBottom: '12px' }}>
              <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65 }}>
                <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, marginRight: '8px' }}>SPACING</span>
                Do not adjust letter-spacing on Satoshi at body sizes — the default tracking is optically correct. Only apply custom tracking at display scale (28px+) per the type scale table above.
              </div>
            </div>
            <div style={{ padding: '14px 16px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', marginBottom: '12px' }}>
              <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65 }}>
                <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, marginRight: '8px' }}>ALTERNATE TYPEFACES</span>
                If Satoshi presents legibility issues in a specific context, flag it for review before substituting. Any replacement typeface must be approved by the brand team — do not default to system fonts.
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 05 — PHOTOGRAPHY & VIDEO                  */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['photography'] = el; }} id="photography" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="05" title="Photography & Video" sub="Artist content is always the brightest, warmest, most vivid thing on screen. Grouped never competes with the artist's visual identity." />

            <GuideCallout>{VI.extensionMetaphor}</GuideCallout>

            <SubLabel>Photography Direction</SubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              <GuideCard>
                <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '8px' }}>Authentic over Polished</div>
                <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.6 }}>Real artists in real settings. Backstage, studio, stage, listening sessions. The grittiness is the point — this is about the craft, not the gloss.</div>
              </GuideCard>
              <GuideCard>
                <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '8px' }}>Warm Lighting</div>
                <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.6 }}>Warm amber and golden tones that echo the bronze palette. Low-light, intimate settings. Think vinyl listening room, not fluorescent office.</div>
              </GuideCard>
              <GuideCard>
                <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '8px' }}>Fan Moments</div>
                <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.6 }}>Capture the connection — fans singing back lyrics, meet-and-greet moments, crowd reactions. The fan relationship is the product.</div>
              </GuideCard>
              <GuideCard>
                <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '8px' }}>Dark Backgrounds</div>
                <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.6 }}>Photography should work on dark surfaces. Low-key lighting, deep shadows, subjects emerging from darkness — consistent with the dark-mode-first visual system.</div>
              </GuideCard>
            </div>

            {/* Pending image update */}
            <div style={{ padding: '12px 16px', background: 'rgba(196,138,58,0.06)', border: `1px dashed ${C.accent}`, borderRadius: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontFamily: F.mono, fontSize: '9px', fontWeight: 700, color: C.accent, background: 'rgba(196,138,58,0.12)', padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Pending</span>
                <span style={{ fontFamily: F.body, fontSize: '13px', color: C.sub }}>Updated hero brand image incoming from the team. Asset will replace current placeholder once provided.</span>
              </div>
            </div>

            <DoDont type="do">Feature real artists and real fans. Authenticity is non-negotiable.</DoDont>
            <DoDont type="do">Use warm, moody lighting that complements the bronze + navy palette.</DoDont>
            <DoDont type="do">Prioritize close-up and candid shots over posed group photos.</DoDont>
            <DoDont type="do">Always credit artists in every piece of content — photography, graphic design, social media. Go the extra mile for the personal artistic touch with taste.</DoDont>
            <DoDont type="dont">Use stock photography. Every image should feel real and earned.</DoDont>
            <DoDont type="dont">Use high-key, overlit studio photography — it clashes with the dark-mode aesthetic.</DoDont>
            <DoDont type="dont">Show generic "people on phones" imagery. Show the music, the connection, the craft.</DoDont>
            <DoDont type="dont">Publish any artist content or imagery without proper credit and attribution.</DoDont>

            <SubLabel>Video Guidelines</SubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <GuideCard style={{ padding: '14px' }}>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Tone</div>
                <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>Confident, cinematic, unhurried. Transitions run 500ms+ because we're vibing, not rushing.</div>
              </GuideCard>
              <GuideCard style={{ padding: '14px' }}>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Color Grading</div>
                <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>Warm shadows, slightly crushed blacks, bronze highlights. The grade should feel like the palette.</div>
              </GuideCard>
              <GuideCard style={{ padding: '14px' }}>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Lower Thirds</div>
                <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>Satoshi Bold for names, JetBrains Mono for metadata. Bronze on dark glass surface. Minimal, no clutter.</div>
              </GuideCard>
              <GuideCard style={{ padding: '14px' }}>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Avoid</div>
                <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>Auto-playing video, rapid cuts, screen recordings as hero content, drone footage without purpose.</div>
              </GuideCard>
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 06 — VISUAL VOICE                         */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['visual-voice'] = el; }} id="visual-voice" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="06" title="Visual Voice" sub={VI.foundationPrinciple} />

            <SubLabel>Design Principles</SubLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {VI.designPrinciples.map(p => (
                <GuideCard key={p.name}>
                  <div style={{ fontFamily: F.display, fontSize: '18px', fontWeight: 800, color: C.accent, marginBottom: '8px' }}>{p.name}</div>
                  <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65 }}>{p.desc}</div>
                </GuideCard>
              ))}
            </div>

            <SubLabel>Brand Personality</SubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
              {BRAND_IDENTITY.personalityTraits.map(p => (
                <GuideCard key={p.trait} style={{ padding: '14px' }}>
                  <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>{p.trait}</div>
                  <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.5 }}>{p.note}</div>
                </GuideCard>
              ))}
            </div>

            <SubLabel>Brand Inspiration</SubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
              {[
                { ref: 'Swiss Modernism', note: 'Clean geometric precision, structured grids, confident typography. The belief that great design is invisible — it just works. Our layouts and type system draw from this tradition.' },
                { ref: 'The Listening Room', note: 'A warm, dimly lit room where music is the focus. Every Grouped surface should feel like you have walked into a space designed to make music sound better — cozy, intentional, immersive.' },
                { ref: 'Cozy Nostalgia', note: 'Vinyl crates, handwritten liner notes, concert ticket stubs. The tactile warmth of physical music culture translated into digital surfaces through grain, bronze tones, and rounded forms.' },
                { ref: 'Gamified Energy', note: 'Status systems, leaderboards, achievement unlocks. The dopamine of progress — borrowed from gaming culture but applied to fandom. Playful without being childish.' },
              ].map(b => (
                <GuideCard key={b.ref} style={{ padding: '14px' }}>
                  <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '4px' }}>{b.ref}</div>
                  <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.5 }}>{b.note}</div>
                </GuideCard>
              ))}
            </div>

            <SubLabel>What We Avoid</SubLabel>
            {VI.avoidList.map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', padding: '5px 0', fontFamily: F.body, fontSize: '13px', color: C.sub }}>
                <span style={{ color: C.error, flexShrink: 0 }}>&#x2717;</span>{a}
              </div>
            ))}
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 07 — DARK MODE                            */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['dark-mode'] = el; }} id="dark-mode" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="07" title="Dark Mode" sub="Dark mode is the primary surface. Light mode is secondary, reserved for documentation, print materials, and partner-facing content." />

            <GuideCallout>Every surface is designed to elevate whatever sits on top of it. Artist content should always be the brightest, warmest, most vivid thing on screen. Grouped never competes with the artist's visual identity.</GuideCallout>

            <SubLabel>Surface Layers</SubLabel>
            <div style={{ marginBottom: '24px' }}>
              {VI.colorSystem.backgrounds.map(bg => (
                <SurfaceCard key={bg.token} hex={bg.hex} name={bg.token.replace('--bg-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} token={bg.token} usage={bg.usage} />
              ))}
            </div>

            <SubLabel>Grain Overlay</SubLabel>
            <GuideCard style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65 }}>
                {VI.surfaces.grain}
              </div>
              <div style={{ marginTop: '12px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted, background: C.s2, padding: '3px 8px', borderRadius: '4px' }}>opacity: 2.8%</span>
                <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted, background: C.s2, padding: '3px 8px', borderRadius: '4px' }}>mix-blend-mode: overlay</span>
                <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted, background: C.s2, padding: '3px 8px', borderRadius: '4px' }}>SVG feTurbulence</span>
                <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted, background: C.s2, padding: '3px 8px', borderRadius: '4px' }}>position: fixed</span>
              </div>
            </GuideCard>

            <SubLabel>Border System</SubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
              {VI.colorSystem.borders.slice(0, 4).map(b => (
                <GuideCard key={b.token} style={{ padding: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <div style={{ width: '100%', height: '2px', background: `rgba(235,225,210,${parseFloat(b.opacity) / 100})`, borderRadius: '1px' }} />
                  </div>
                  <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent }}>{b.token}</div>
                  <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginTop: '2px' }}>{b.usage} · {b.opacity} opacity</div>
                </GuideCard>
              ))}
            </div>

            <SubLabel>Radius System</SubLabel>
            <GuideCallout>{VI.radiusSystem.concept}</GuideCallout>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {VI.radiusSystem.tokens.map(t => (
                <GuideCard key={t.token} style={{ flex: '1 1 140px', padding: '14px', textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '40px', background: C.accent, borderRadius: t.value, margin: '0 auto 10px', opacity: 0.3 }} />
                  <div style={{ fontFamily: F.mono, fontSize: '11px', color: C.text, fontWeight: 500 }}>{t.value}</div>
                  <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, marginTop: '2px' }}>{t.token}</div>
                  <div style={{ fontFamily: F.body, fontSize: '10px', color: C.muted, marginTop: '4px' }}>{t.family} · {t.usage}</div>
                </GuideCard>
              ))}
            </div>

            <DoDont type="do">Use surface layers to create depth hierarchy — base for page, raised for cards, overlay for dropdowns.</DoDont>
            <DoDont type="do">Keep grain overlay at 2.8% — enough for texture, never interfering with readability.</DoDont>
            <DoDont type="dont">Use pure black (#000000) anywhere. The deep navy base always has a blue undertone.</DoDont>
            <DoDont type="dont">Skip the grain. Without it, surfaces feel flat and digital rather than warm and tactile.</DoDont>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 08 — VERBAL IDENTITY                      */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['verbal'] = el; }} id="verbal" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="08" title="Verbal Identity" sub="The Grouped voice is artist-to-artist, not SaaS-to-customer. Direct, bold, warm — never corporate." />

            <SubLabel>Boilerplate</SubLabel>
            <GuideCard style={{ marginBottom: '24px', padding: '20px 22px' }}>
              <div style={{ fontFamily: F.body, fontSize: '14px', color: C.sub, lineHeight: 1.7 }}>
                Grouped is the direct-to-fan platform for independent musicians. Born from the 2026 merger of Tribly and Grouped, it is the only full-funnel solution that captures fans at the moment of excitement, keeps them engaged year-round, and compounds audience value with every release. No algorithms. No per-message fees. Just a direct line between artists and the fans who love their music.
              </div>
              <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, marginTop: '10px' }}>USE AS-IS FOR PRESS, BIOS, PARTNER MATERIALS, AND ABOUT SECTIONS</div>
            </GuideCard>

            <SubLabel>Taglines</SubLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
              {[
                { tag: 'Where Artists and Fans Connect.', label: 'Primary' },
                { tag: 'Grow Your Audience, On Your Terms.' },
                { tag: 'Reach Fans Directly. Build Real Relationships.' },
                { tag: 'Turn Fan Support Into Sustainable Income.' },
                { tag: 'The growth engine for lifelong music careers.', label: 'Investor' },
              ].map((t, i) => (
                <div key={i} style={{ padding: '10px 14px', background: i === 0 ? C.accentGlow : C.s1, border: `1px solid ${i === 0 ? C.accent : C.border}`, borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {t.label && <span style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', flexShrink: 0 }}>{t.label}</span>}
                  <span style={{ fontFamily: F.display, fontSize: i === 0 ? '18px' : '15px', fontWeight: i === 0 ? 700 : 500, color: i === 0 ? C.text : C.sub, fontStyle: 'italic' }}>{t.tag}</span>
                </div>
              ))}
            </div>

            <SubLabel>Messaging Framework</SubLabel>
            <GuideCallout>The product story follows five stages. Every piece of copy should map to one of these — capture attention, connect fans, engage consistently, grow revenue, compound momentum.</GuideCallout>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              {[
                { stage: 'Capture', line: 'Listeners become fans.', desc: 'Every touchpoint becomes a capture moment. Pre-saves, links, QR codes — fans opt in, you get their data.' },
                { stage: 'Connect', line: 'Every fan. One place.', desc: 'Bring every fan from every platform into one space you own. Spotify, Instagram, TikTok — all in a single, direct channel.' },
                { stage: 'Engage', line: 'Always top of mind.', desc: 'Push notifications, exclusive content, and a living feed that keeps fans engaged between releases.' },
                { stage: 'Grow', line: 'Revenue you own.', desc: 'Paid tiers, merch drops, presale access — revenue that stays yours, built on a fanbase that already trusts you.' },
                { stage: 'Compound', line: 'Never start from zero.', desc: 'Every release builds on the last. Reactivate dormant fans, compound your reach, and watch momentum grow.' },
              ].map((s, i) => (
                <GuideCard key={s.stage} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', width: '80px', flexShrink: 0, paddingTop: '2px' }}>0{i + 1} {s.stage}</div>
                  <div>
                    <div style={{ fontFamily: F.display, fontSize: '15px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>{s.line}</div>
                    <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </GuideCard>
              ))}
            </div>

            <SubLabel>Key Copy Lines</SubLabel>
            <p style={{ fontFamily: F.body, fontSize: '12px', color: C.muted, lineHeight: 1.5, marginBottom: '10px' }}>Approved lines from the live website and overview deck. Use as-is or adapt for context.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px' }}>
              {[
                { line: 'One place to capture who\'s listening, reach them directly, and build an audience that grows with every release.', ctx: 'Hero sub' },
                { line: 'Fill the gap between first listen and forever fan.', ctx: 'Solution' },
                { line: 'This is not another super fan platform. This is for all of your fans.', ctx: 'Differentiator' },
                { line: 'No algorithm. No per-message fees. No platform tax. Just direct reach.', ctx: 'Value prop' },
                { line: 'Built different. On purpose.', ctx: 'Ethos' },
                { line: 'No labels. No middlemen. No agenda. Just artists building for artists.', ctx: 'Ethos' },
                { line: 'Release smarter, not harder.', ctx: 'How it works' },
                { line: 'Build a home, not a list.', ctx: 'Groups' },
                { line: 'Everything works together. Every feature compounds.', ctx: 'Features' },
                { line: 'The gatekeepers are gone. Good music, good content, and the right engine is all you need now.', ctx: 'Closer' },
              ].map((l, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', padding: '8px 14px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '6px' }}>
                  <span style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.08em', width: '80px', flexShrink: 0, paddingTop: '2px' }}>{l.ctx}</span>
                  <span style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.5 }}>{l.line}</span>
                </div>
              ))}
            </div>

            <SubLabel>Voice Spectrum</SubLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px' }}>
              {[
                { left: 'Corporate', right: 'Artist-to-Artist', pct: 90, example: 'We say "Stop renting your audience" not "Leverage algorithmic distribution channels for optimal audience growth."' },
                { left: 'Diplomatic', right: 'Direct', pct: 85, example: 'We say "Your Instagram reach is 3%. We fix that." not "We can potentially help improve your engagement metrics."' },
                { left: 'Safe', right: 'Bold', pct: 80, example: 'We say "The gatekeepers are gone." not "We provide tools that may assist in reducing intermediary dependencies."' },
                { left: 'Cold', right: 'Warm', pct: 65, example: 'We say "Where Artists and Fans Connect." not "Our platform facilitates direct creator-audience relationships."' },
                { left: 'Complex', right: 'Simple', pct: 75, example: 'We say "Turn every listen into a fan." not "Convert passive consumption events into engaged relationship touchpoints."' },
                { left: 'Serious', right: 'Playful', pct: 55, example: 'We lean serious now. Growing toward playful as gamification features (leaderboards, quests, fan passes) launch in later phases.' },
              ].map(v => {
                const isExpanded = expandedSpectrum === v.left;
                return (
                  <div key={v.left}>
                    <button onClick={() => setExpandedSpectrum(isExpanded ? null : v.left)} style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 0' }}>
                      <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted, width: '80px', textAlign: 'right', flexShrink: 0 }}>{v.left}</span>
                      <div style={{ flex: 1, height: '6px', background: C.s2, borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${v.pct}%`, height: '100%', background: C.accent, borderRadius: '3px', transition: 'width 0.6s ease' }} />
                      </div>
                      <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted, width: '100px', flexShrink: 0 }}>{v.right}</span>
                      <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.ghost, width: '28px', textAlign: 'right' }}>{v.pct}%</span>
                      <span style={{ fontFamily: F.mono, fontSize: '9px', color: C.ghost, transition: 'transform 0.2s', transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>&#9654;</span>
                    </button>
                    {isExpanded && (
                      <div style={{ marginLeft: '88px', padding: '8px 14px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '6px', marginBottom: '4px' }}>
                        <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6, fontStyle: 'italic' }}>{v.example}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <SubLabel>Messaging DO / DON'T</SubLabel>
            <DoDont type="do">"Turn every listen into a fan." — Simple, active, outcome-focused.</DoDont>
            <DoDont type="do">"Fill the gap between first listen and forever fan." — Names the problem and the promise in one line.</DoDont>
            <DoDont type="do">"No algorithm. No per-message fees. No platform tax." — Concrete, repetitive structure that lands.</DoDont>
            <DoDont type="dont">"Leverage algorithmic distribution channels for optimal audience growth." — Corporate jargon.</DoDont>
            <DoDont type="dont">"Join our community of 6,000+ artists!" — Leads with community (heavy, high-commitment ask).</DoDont>
            <DoDont type="dont">"Growth hack your fan base with our viral tools." — Extractive language.</DoDont>
            <DoDont type="dont">Lead with features. Lead with the outcome for the artist, then explain the feature.</DoDont>

            <SubLabel>Brand Values</SubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '20px' }}>
              {BRAND_IDENTITY.values.map(v => (
                <GuideCard key={v.name} style={{ padding: '14px' }}>
                  <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '4px' }}>{v.name}</div>
                  <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.5 }}>{v.desc}</div>
                </GuideCard>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 09 — ICONOGRAPHY                          */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['iconography'] = el; }} id="iconography" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="09" title="Iconography" sub="Icon style and the signature motif that ties the visual system together." />

            <SubLabel>Concentric Arcs — Signature Motif</SubLabel>
            <GuideCard style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65, marginBottom: '12px' }}>
                {VI.signatureMotif.meaning}
              </div>
              {/* SVG arc demo */}
              <div style={{ display: 'flex', justifyContent: 'center', padding: '24px', background: C.s2, borderRadius: '8px', marginBottom: '12px' }}>
                <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                  <circle cx="70" cy="70" r="64" stroke={C.accent} strokeWidth="5" opacity="0.2" fill="none" />
                  <circle cx="70" cy="70" r="50" stroke={C.accent} strokeWidth="5" opacity="0.3" fill="none" />
                  <circle cx="70" cy="70" r="36" stroke={C.accent} strokeWidth="5" opacity="0.45" fill="none" />
                  <circle cx="70" cy="70" r="18" fill={C.accent} opacity="0.15" />
                  <text x="70" y="76" textAnchor="middle" fill={C.accent} fontFamily="Satoshi, sans-serif" fontSize="18" fontWeight="800">G</text>
                </svg>
              </div>
              <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, textAlign: 'center' }}>Concentric arcs radiating outward — sound waves, vinyl grooves, expanding reach</div>
            </GuideCard>

            <SubLabel>Motif Rules</SubLabel>
            {VI.signatureMotif.rules.map((r, i) => <Rule key={i}>{r}</Rule>)}

            <SubLabel>Usage Modes</SubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              {VI.signatureMotif.usage.map(u => (
                <GuideCard key={u.mode} style={{ padding: '14px' }}>
                  <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '4px' }}>{u.mode}</div>
                  <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted, marginBottom: '4px' }}>Opacity: {u.opacity}</div>
                  <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.5 }}>{u.use}</div>
                </GuideCard>
              ))}
            </div>

            <SubLabel>Icon Style</SubLabel>
            <GuideCard style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65, marginBottom: '12px' }}>
                Icons follow the same principles as the broader visual system: geometric, warm, and considered. Stroke-based with rounded caps, 1.5px default weight, sized at 20px for UI and 24px for navigation.
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub, background: C.s2, padding: '2px 8px', borderRadius: '4px' }}>Stroke-based</span>
                <span style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub, background: C.s2, padding: '2px 8px', borderRadius: '4px' }}>Rounded caps</span>
                <span style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub, background: C.s2, padding: '2px 8px', borderRadius: '4px' }}>1.5px weight</span>
                <span style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub, background: C.s2, padding: '2px 8px', borderRadius: '4px' }}>20/24px grid</span>
                <span style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub, background: C.s2, padding: '2px 8px', borderRadius: '4px' }}>Warm cream on dark</span>
              </div>
            </GuideCard>

          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 10 — APPROVALS & CONTACT                   */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['approvals'] = el; }} id="approvals" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="10" title="Approvals & Contact" sub="All brand usage requires approval. When in doubt, reach out." />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              <GuideCard style={{ padding: '20px' }}>
                <div style={{ fontFamily: F.display, fontSize: '16px', fontWeight: 700, color: C.accent, marginBottom: '8px' }}>Brand Approvals</div>
                <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65, marginBottom: '12px' }}>
                  All external-facing uses of the Grouped brand — co-branding, partnership materials, press kits, derivative artwork, and campaign assets — require written approval from the marketing team before publication.
                </div>
                <div style={{ fontFamily: F.mono, fontSize: '13px', color: C.focus }}>marketing@grouped.com</div>
              </GuideCard>
              <GuideCard style={{ padding: '20px' }}>
                <div style={{ fontFamily: F.display, fontSize: '16px', fontWeight: 700, color: C.accent, marginBottom: '8px' }}>Asset Requests</div>
                <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65, marginBottom: '12px' }}>
                  Need logo files, brand assets, or custom lockups for a specific use case? Contact the team and we will provide the correct formats and variants for your project.
                </div>
                <div style={{ fontFamily: F.mono, fontSize: '13px', color: C.focus }}>marketing@grouped.com</div>
              </GuideCard>
            </div>

            <SubLabel>What Needs Approval</SubLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '20px' }}>
              {[
                'Co-branded materials with partners or sponsors',
                'Press kits and media coverage assets',
                'Merchandise and physical goods featuring the brand',
                'Modified or adapted logo treatments',
                'Artist-facing templates and promotional tools',
                'Any use of the brand outside of this guide\'s specifications',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', padding: '6px 0', fontFamily: F.body, fontSize: '13px', color: C.sub }}>
                  <span style={{ color: C.accent, flexShrink: 0 }}>&#x2022;</span>{item}
                </div>
              ))}
            </div>

            <GuideCallout>Always credit artists. Every piece of content that features an artist — photography, design, video, social — must include proper attribution. Go the extra mile. The personal touch is a brand value, not an afterthought.</GuideCallout>

            {/* ── Coming Soon Tools ──────────────────── */}
            <SubLabel>Brand Tools — Coming Soon</SubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '8px' }}>
              <GuideCard style={{ padding: '24px', position: 'relative', overflow: 'hidden', opacity: 0.85 }}>
                <div style={{ position: 'absolute', top: '12px', right: '12px', fontFamily: F.mono, fontSize: '9px', fontWeight: 700, color: C.accent, background: 'rgba(196,138,58,0.12)', padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Coming Soon</div>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>🧭</div>
                <div style={{ fontFamily: F.display, fontSize: '16px', fontWeight: 700, color: C.text, marginBottom: '8px' }}>Brand Quiz</div>
                <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65 }}>
                  A personalized quiz that helps you navigate this guide based on who you are, how you'll use the brand, and what you need to communicate. Get tailored recommendations — the right assets, templates, and rules for your specific use case.
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '14px' }}>
                  {['Partner', 'Agency', 'Artist', 'Press', 'Internal'].map(tag => (
                    <span key={tag} style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, background: C.s2, padding: '3px 8px', borderRadius: '4px' }}>{tag}</span>
                  ))}
                </div>
              </GuideCard>
              <GuideCard style={{ padding: '24px', position: 'relative', overflow: 'hidden', opacity: 0.85 }}>
                <div style={{ position: 'absolute', top: '12px', right: '12px', fontFamily: F.mono, fontSize: '9px', fontWeight: 700, color: C.accent, background: 'rgba(196,138,58,0.12)', padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Coming Soon</div>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>✅</div>
                <div style={{ fontFamily: F.display, fontSize: '16px', fontWeight: 700, color: C.text, marginBottom: '8px' }}>Brand Checker</div>
                <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65 }}>
                  Upload a graphic and instantly check if it's on-brand. Get actionable recommendations for color, typography, logo usage, and spacing — so you can refine your work before submitting to a Grouped representative for final approval.
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '14px' }}>
                  {['Upload', 'Auto-Check', 'Recommendations', 'Pre-Approval'].map(tag => (
                    <span key={tag} style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, background: C.s2, padding: '3px 8px', borderRadius: '4px' }}>{tag}</span>
                  ))}
                </div>
              </GuideCard>
            </div>
          </section>

          {/* ── FOOTER ────────────────────────────────── */}
          <footer style={{ borderTop: `1px solid ${C.border}`, paddingTop: '24px', marginTop: '40px' }}>
            <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.ghost, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Grouped Brand Guide · GDS26R v1.0 · February 2026
            </div>
            <div style={{ fontFamily: F.body, fontSize: '12px', color: C.muted, marginTop: '6px' }}>
              Built from confirmed brand strategy. Every rule has a rationale.
            </div>
          </footer>
        </div>
      </main>

      {/* ── PRINT STYLES ─────────────────────────── */}
      <style>{`
        @media print {
          nav, button { display: none !important; }
          main { margin-left: 0 !important; padding-top: 0 !important; overflow: visible !important; height: auto !important; }
          div[style*="position: fixed"] { position: static !important; }
          section { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}
