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
  { id: 'colors', label: 'Color System' },
  { id: 'logo', label: 'Logo Rules' },
  { id: 'typography', label: 'Typography' },
  { id: 'photography', label: 'Photography & Video' },
  { id: 'visual-voice', label: 'Visual Voice' },
  { id: 'dark-mode', label: 'Dark Mode' },
  { id: 'verbal', label: 'Verbal Identity' },
  { id: 'iconography', label: 'Iconography' },
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

const LOGO_CATEGORIES = [
  {
    type: 'Grouped Typemark', desc: 'Primary wordmark — "grouped." in Anacrusis', hero: true,
    variants: [
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_Grouped Typemark_WarmBronze', bg: '#111620' },
      { color: 'White', file: 'Grouped_Rebrand_Visual Assets_Grouped Typemark_White', bg: '#111620' },
      { color: 'Cream', file: 'Grouped_Rebrand_Visual Assets_Grouped Typemark_Cream', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_Grouped Typemark_Navy', bg: '#F0EBE3' },
      { color: 'Black', file: 'Grouped_Rebrand_Visual Assets_Grouped Typemark_Black', bg: '#F0EBE3' },
      { color: 'Focus Blue', file: 'Grouped_Rebrand_Visual Assets_Grouped Typemark_Focus Blue', bg: '#111620' },
    ],
  },
  {
    type: 'VinylG Icon', desc: 'Standalone G mark — app icon, favicon, social avatar, watermark', hero: true,
    variants: [
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_VinylG Icon_WarmBronze', bg: '#111620' },
      { color: 'White', file: 'Grouped_Rebrand_Visual Assets_VinylG Icon_White', bg: '#111620' },
      { color: 'Cream', file: 'Grouped_Rebrand_Visual Assets_VinylG Icon_Cream', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_VinylG Icon_Navy', bg: '#F0EBE3' },
      { color: 'Black', file: 'Grouped_Rebrand_Visual Assets_VinylG Icon_Black', bg: '#F0EBE3' },
      { color: 'Focus Blue', file: 'Grouped_Rebrand_Visual Assets_VinylG Icon_Focus Blue', bg: '#111620' },
    ],
  },
  {
    type: 'Lockup Horizontal', desc: 'VinylG + wordmark side by side',
    variants: [
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_Lockup Horizontal_Warm Bronze', bg: '#111620' },
      { color: 'White', file: 'Grouped_Rebrand_Visual Assets_Lockup Horizontal_white', bg: '#111620' },
      { color: 'Cream', file: 'Grouped_Rebrand_Visual Assets_Lockup Horizontal_Cream', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_Lockup Horizontal_Navy', bg: '#F0EBE3' },
      { color: 'Black', file: 'Grouped_Rebrand_Visual Assets_Lockup Horizontal_Black', bg: '#F0EBE3' },
      { color: 'Focus Blue', file: 'Grouped_Rebrand_Visual Assets_Lockup Horizontal_Focus Blue', bg: '#111620' },
    ],
  },
  {
    type: 'Lockup Vertical', desc: 'VinylG + wordmark stacked',
    variants: [
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_Lockup Vertical_Warm Bronze', bg: '#111620' },
      { color: 'Cream', file: 'Grouped_Rebrand_Visual Assets_Lockup Vertical_Cream', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_Lockup Vertical_Navy', bg: '#F0EBE3' },
      { color: 'Black', file: 'Grouped_Rebrand_Visual Assets_Lockup Vertical_Black', bg: '#F0EBE3' },
      { color: 'Focus Blue', file: 'Grouped_Rebrand_Visual Assets_Lockup Vertical_Focus Blue', bg: '#111620' },
    ],
  },
  {
    type: 'Pill Tag', desc: 'Pill-shaped logo badge',
    variants: [
      { color: 'Full Color', file: 'Grouped_Rebrand_Visual Assets_Pill Tag_Full Color', bg: '#111620' },
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_Pill Tag_Warm Bronze', bg: '#111620' },
      { color: 'White', file: 'Grouped_Rebrand_Visual Assets_Pill Tag_White', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_Pill Tag_Navy', bg: '#F0EBE3' },
      { color: 'Black', file: 'Grouped_Rebrand_Visual Assets_Pill Tag_Black', bg: '#F0EBE3' },
    ],
  },
  {
    type: 'Stacked Askew', desc: 'Angled stacked treatment',
    variants: [
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_Stacked Askew_Warm Bronze', bg: '#111620' },
      { color: 'White', file: 'Grouped_Rebrand_Visual Assets_Stacked Askew_White', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_Stacked Askew_Navy', bg: '#F0EBE3' },
      { color: 'Black', file: 'Grouped_Rebrand_Visual Assets_Stacked Askew_Black', bg: '#F0EBE3' },
    ],
  },
  {
    type: 'Stacked Sticker', desc: 'Sticker-style stacked treatment',
    variants: [
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_Stacked Sticker_WarmBronze', bg: '#111620' },
      { color: 'White', file: 'Grouped_Rebrand_Visual Assets_Stacked Sticker_White', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_Stacked Sticker_Navy', bg: '#F0EBE3' },
      { color: 'Black', file: 'Grouped_Rebrand_Visual Assets_Stacked Sticker_Black', bg: '#F0EBE3' },
    ],
  },
  {
    type: 'Stacked Window', desc: 'Window-framed stacked treatment',
    variants: [
      { color: 'Warm Bronze', file: 'Grouped_Rebrand_Visual Assets_Stacked Window_Warm Bronze', bg: '#111620' },
      { color: 'White', file: 'Grouped_Rebrand_Visual Assets_Stacked Window_White', bg: '#111620' },
      { color: 'Navy', file: 'Grouped_Rebrand_Visual Assets_Stacked Window_Navy', bg: '#F0EBE3' },
      { color: 'Black', file: 'Grouped_Rebrand_Visual Assets_Stacked Window_Black', bg: '#F0EBE3' },
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
  const [activeSection, setActiveSection] = useState('colors');
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
          <span style={{ fontFamily: F.display, fontSize: '18px', fontWeight: 900, color: C.accent, letterSpacing: '-0.02em' }}>grouped.</span>
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
              <span style={{ fontFamily: F.mono, fontSize: '10px', color: active ? C.accent : C.ghost, marginRight: '8px' }}>0{i + 1}</span>
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
          {/* 01 — COLOR SYSTEM                         */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['colors'] = el; }} id="colors" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="01" title="Color System" sub="Three temperature layers: cool navy surfaces, warm bronze brand elements, cool blue interactive accents." />

            <SubLabel>Primary Palette</SubLabel>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <ColorCard hex="#111620" name="Navy" desc="The foundation. Deep, warm navy grounds every surface. Not pure black — the blue undertone creates depth without harshness." usage={['Page backgrounds', 'App shell', 'Cards and containers']} />
              <ColorCard hex="#C48A3A" name="Bronze" desc="The brand voice. Bronze is reserved for headlines, logos, CTAs, and brand moments. If it appears on a poster, it's bronze." usage={['Headlines', 'Logos', 'CTAs', 'Brand accents']} />
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <ColorCard hex="#F0EBE3" name="Warm Cream" desc="Primary text color. Not pure white — the warm cream prevents eye strain on dark backgrounds and feels more intentional." usage={['Body text', 'Headlines', 'Light surfaces']} />
              <ColorCard hex="#7CBBDF" name="Focus Blue" desc="Interactive states only. Focus rings, active indicators, links, and data visualization accents. Never use for brand voice elements." usage={['Links', 'Focus rings', 'Selected states', 'Data viz']} />
            </div>

            <DoDont type="do">Use bronze for anything that represents the brand voice — headlines, logos, CTAs, accent marks.</DoDont>
            <DoDont type="do">Use focus blue exclusively for interactive elements — links, buttons, focus rings, active states.</DoDont>
            <DoDont type="dont">Mix up bronze and blue. If it appears on a poster, it's bronze. If you click it, it's blue.</DoDont>
            <DoDont type="dont">Use pure white (#FFFFFF) for text. Always use warm cream #F0EBE3.</DoDont>

            <SubLabel>Secondary & Semantic</SubLabel>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <SmallSwatch hex="#8BAF9C" name="Success" sub="Confirmations, connected" />
              <SmallSwatch hex="#D4A24B" name="Warning" sub="Caution, limits" />
              <SmallSwatch hex="#C27A6B" name="Error" sub="Errors, destructive" />
              <SmallSwatch hex="#8BA4BE" name="Info" sub="Tips, neutral" />
            </div>

            <SubLabel>Accessibility</SubLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
              <WcagBadge level="AAA" ratio="13.5:1" fg="#F0EBE3" bg="#111620" label="Cream text on navy background" />
              <WcagBadge level="AAA" ratio="11.2:1" fg="#C48A3A" bg="#111620" label="Bronze accent on navy background" />
              <WcagBadge level="AA" ratio="7.8:1" fg="#7CBBDF" bg="#111620" label="Focus blue on navy background" />
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 02 — LOGO RULES                           */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['logo'] = el; }} id="logo" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="02" title="Logo Rules" sub="The grouped. wordmark is the brand's primary identifier. The Vinyl G mark is the secondary mark. Both require governance, not redesign." />

            {/* Hero: Primary Typemark */}
            <SubLabel>Wordmark</SubLabel>
            <GuideCard style={{ marginBottom: '20px', textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ background: '#111620', borderRadius: '8px', padding: '24px 32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.border}` }}>
                <img src={logoSvgUrl('Grouped_Rebrand_Visual Assets_Grouped Typemark_WarmBronze')} alt="grouped. wordmark" style={{ height: '48px', objectFit: 'contain' }} />
              </div>
              <div style={{ fontFamily: F.mono, fontSize: '11px', color: C.muted, marginTop: '16px' }}>Grouped Font (Custom OTF) · Lowercase with period · Always.</div>
            </GuideCard>

            <GuideCallout>{VI.wordmark.rationale}</GuideCallout>

            <SubLabel>Treatment Rules</SubLabel>
            <DoDont type="do">Always render "grouped." in lowercase with a period. The period is the brand's punctuation signature.</DoDont>
            <DoDont type="do">Use Grouped Font (custom display OTF) for the wordmark at 28px+ minimum size.</DoDont>
            <DoDont type="dont">Never capitalize: "Grouped", "GROUPED", or "Grouped."</DoDont>
            <DoDont type="dont">Never remove the period. "grouped" without the period is incomplete.</DoDont>
            <DoDont type="dont">Never set the wordmark in Satoshi, Arial, or any substitute typeface.</DoDont>

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

            {/* All Logo Categories */}
            {LOGO_CATEGORIES.map(cat => (
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

            {/* Asset Links */}
            <SubLabel>Download All Assets</SubLabel>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href={GDRIVE_ASSETS} target="_blank" rel="noopener noreferrer" style={{ fontFamily: F.mono, fontSize: '10px', color: C.focus, textDecoration: 'none', padding: '6px 14px', border: `1px solid ${C.focusDim}`, borderRadius: '39px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Google Drive — All Assets</a>
              <a href={VI.wordmark.figmaFile} target="_blank" rel="noopener noreferrer" style={{ fontFamily: F.mono, fontSize: '10px', color: C.focus, textDecoration: 'none', padding: '6px 14px', border: `1px solid ${C.focusDim}`, borderRadius: '39px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Figma GDS26R</a>
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 03 — TYPOGRAPHY                           */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['typography'] = el; }} id="typography" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="03" title="Typography" sub={VI.typography.systemNote} />

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
              <div style={{ fontFamily: F.display, fontSize: '48px', fontWeight: 900, color: C.text, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: '16px' }}>The growth engine for lifelong music careers.</div>
              <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted }}>DISPLAY XL · Satoshi Black 900 · 48px · -0.03em</div>
            </GuideCard>
            <GuideCard style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: F.display, fontSize: '28px', fontWeight: 700, color: C.text, letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: '12px' }}>Direct-to-fan, finally done right.</div>
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
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 04 — PHOTOGRAPHY & VIDEO                  */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['photography'] = el; }} id="photography" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="04" title="Photography & Video" sub="Artist content is always the brightest, warmest, most vivid thing on screen. Grouped never competes with the artist's visual identity." />

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

            <DoDont type="do">Feature real artists and real fans. Authenticity is non-negotiable.</DoDont>
            <DoDont type="do">Use warm, moody lighting that complements the bronze + navy palette.</DoDont>
            <DoDont type="do">Prioritize close-up and candid shots over posed group photos.</DoDont>
            <DoDont type="dont">Use stock photography. Every image should feel real and earned.</DoDont>
            <DoDont type="dont">Use high-key, overlit studio photography — it clashes with the dark-mode aesthetic.</DoDont>
            <DoDont type="dont">Show generic "people on phones" imagery. Show the music, the connection, the craft.</DoDont>

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
          {/* 05 — VISUAL VOICE                         */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['visual-voice'] = el; }} id="visual-voice" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="05" title="Visual Voice" sub={VI.foundationPrinciple} />

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
              {BRAND_IDENTITY.inspiration.map(b => (
                <GuideCard key={b.brand} style={{ padding: '14px' }}>
                  <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '4px' }}>{b.brand}</div>
                  <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.5 }}>{b.reason}</div>
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
          {/* 06 — DARK MODE                            */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['dark-mode'] = el; }} id="dark-mode" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="06" title="Dark Mode" sub="Dark mode is the primary surface. Light mode is secondary, reserved for documentation, print materials, and partner-facing content." />

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
          {/* 07 — VERBAL IDENTITY                      */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['verbal'] = el; }} id="verbal" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="07" title="Verbal Identity" sub="The grouped. voice is artist-to-artist, not SaaS-to-customer. Direct, bold, warm — never corporate." />

            <SubLabel>Taglines</SubLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
              {VB.taglines.map((t, i) => (
                <div key={i} style={{ padding: '10px 14px', background: i === 0 ? C.accentGlow : C.s1, border: `1px solid ${i === 0 ? C.accent : C.border}`, borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {i === 0 && <span style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', flexShrink: 0 }}>Primary</span>}
                  <span style={{ fontFamily: F.display, fontSize: i === 0 ? '18px' : '15px', fontWeight: i === 0 ? 700 : 500, color: i === 0 ? C.text : C.sub, fontStyle: 'italic' }}>{t}</span>
                </div>
              ))}
            </div>

            <SubLabel>Brand Anchor — FIRST</SubLabel>
            <GuideCard style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: F.display, fontSize: '32px', fontWeight: 900, color: C.accent, letterSpacing: '-0.02em', marginBottom: '12px' }}>FIRST</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {VB.brandAnchorCopy.lines.map((l, i) => (
                  <div key={i} style={{ fontFamily: F.body, fontSize: '15px', color: C.text, fontWeight: 500 }}>{l}</div>
                ))}
              </div>
              <div style={{ fontFamily: F.body, fontSize: '12px', color: C.muted, marginTop: '12px', lineHeight: 1.6 }}>{VB.brandAnchorCopy.note}</div>
            </GuideCard>

            <SubLabel>Voice Spectrum</SubLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              {VB.voiceSpectrum.map(v => (
                <div key={v.dim} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, width: '140px', flexShrink: 0 }}>{v.dim}</div>
                  <div style={{ flex: 1, height: '6px', background: C.s2, borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${v.pct}%`, height: '100%', background: C.accent, borderRadius: '3px', transition: 'width 0.6s ease' }} />
                  </div>
                  <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted, width: '32px', textAlign: 'right' }}>{v.pct}%</span>
                </div>
              ))}
            </div>

            <SubLabel>Voice Traits</SubLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              {VB.voiceTraits.map(t => (
                <GuideCard key={t.trait}>
                  <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>{t.trait}</div>
                  <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>{t.ex}</div>
                </GuideCard>
              ))}
            </div>

            <SubLabel>Messaging DO / DON'T</SubLabel>
            <DoDont type="do">"Stop renting your audience." — Direct, anti-jargon, reframes the problem.</DoDont>
            <DoDont type="do">"1,000 fans who drive hours to see you play." — Reframes vanity metrics into real value.</DoDont>
            <DoDont type="dont">"Leverage algorithmic distribution channels for optimal audience growth." — Corporate jargon.</DoDont>
            <DoDont type="dont">"Join our community of 4,500+ artists!" — Leads with community (heavy, high-commitment).</DoDont>
            <DoDont type="dont">"Growth hack your fan base with our viral tools." — Extractive language.</DoDont>

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
          {/* 08 — ICONOGRAPHY                          */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['iconography'] = el; }} id="iconography" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="08" title="Iconography" sub="Feature colors, icon style, and the signature motif that ties the visual system together." />

            <SubLabel>Feature Colors</SubLabel>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65, marginBottom: '16px' }}>Each product pillar has a designated color for consistent identification across the platform.</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <ColorCard hex="#38C3FF" name="Community" desc="Groups and community surfaces. The color of belonging, participation, and fan connection." usage={['Group badges', 'Community features', 'Fan spaces']} />
              <ColorCard hex="#5B61D9" name="Swaps" desc="Early access swap mechanics. The color of exchange, discovery, and first access." usage={['Swap cards', 'Release mechanics', 'Access gates']} />
              <ColorCard hex="#AD6AD9" name="Broadcasts" desc="Email and messaging channels. The color of outreach, announcements, and direct communication." usage={['Email features', 'Push notifications', 'Messaging']} />
            </div>

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
                  <text x="70" y="76" textAnchor="middle" fill={C.accent} fontFamily="Satoshi, sans-serif" fontSize="18" fontWeight="800">g.</text>
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

            <SubLabel>Color Greenspace</SubLabel>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65, marginBottom: '12px' }}>The bronze + deep navy combination is entirely unoccupied in the music platform space.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
              {VI.greenspace.map(g => (
                <div key={g.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 14px', background: g.name === 'grouped.' ? C.accentGlow : C.s1, border: `1px solid ${g.name === 'grouped.' ? C.accent : C.border}`, borderRadius: '8px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {g.colors.map((c, i) => <div key={i} style={{ width: '18px', height: '18px', borderRadius: '4px', background: c, border: `1px solid ${C.border}` }} />)}
                  </div>
                  <span style={{ fontFamily: F.display, fontSize: '13px', fontWeight: g.name === 'grouped.' ? 700 : 500, color: g.name === 'grouped.' ? C.accent : C.text, flex: 1 }}>{g.name}</span>
                  <span style={{ fontFamily: F.body, fontSize: '11px', color: C.muted }}>{g.note}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── FOOTER ────────────────────────────────── */}
          <footer style={{ borderTop: `1px solid ${C.border}`, paddingTop: '24px', marginTop: '40px' }}>
            <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.ghost, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              grouped. Brand Guide · GDS26R v1.0 · February 2026
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
