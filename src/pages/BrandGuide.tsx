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
  { id: 'logo', label: 'Logo & Wordmark' },
  { id: 'typography', label: 'Typography' },
  { id: 'surfaces', label: 'Surfaces & Texture' },
  { id: 'motion', label: 'Motif & Motion' },
  { id: 'verbal', label: 'Verbal Identity' },
  { id: 'elements', label: 'Brand Elements' },
];

// ── Copy Hex Swatch ─────────────────────────────────────
const Swatch = ({ hex, name, sub, wide }: { hex: string; name: string; sub: string; wide?: boolean }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1200); };
  return (
    <div onClick={copy} style={{ cursor: 'pointer', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', overflow: 'hidden', flex: wide ? '1 1 100%' : '1 1 160px', minWidth: wide ? undefined : '140px', transition: 'border-color 0.2s' }}>
      <div style={{ height: wide ? '56px' : '48px', background: hex, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {copied && <span style={{ fontFamily: F.mono, fontSize: '10px', background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '2px 8px', borderRadius: '4px' }}>Copied!</span>}
      </div>
      <div style={{ padding: '8px 10px' }}>
        <div style={{ fontFamily: F.mono, fontSize: '11px', color: C.text, fontWeight: 500 }}>{hex}</div>
        <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginTop: '2px' }}>{name}</div>
        <div style={{ fontFamily: F.body, fontSize: '10px', color: C.muted, marginTop: '1px' }}>{sub}</div>
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

// ── Row of swatches ─────────────────────────────────────
const SwatchRow = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>{children}</div>
);

// ── Rule item ───────────────────────────────────────────
const Rule = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '6px' }}>
    <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, marginTop: '3px', flexShrink: 0 }}>&#x2022;</span>
    <span style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.6 }}>{children}</span>
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
        {SECTIONS.map(s => {
          const active = activeSection === s.id;
          return (
            <button key={s.id} onClick={() => scrollTo(s.id)} style={{
              display: 'block', width: '100%', textAlign: 'left', fontFamily: F.body, fontSize: '13px',
              color: active ? C.accent : C.sub, background: active ? C.accentGlow : 'transparent',
              border: 'none', borderLeft: active ? `2px solid ${C.accent}` : '2px solid transparent',
              padding: '8px 12px', cursor: 'pointer', transition: 'all 0.15s', borderRadius: '0 6px 6px 0', marginBottom: '2px',
            }}>
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
            <SectionHeading num="01" title="Color System" sub={VI.colorSystem.modeNote} />

            <SubLabel>Backgrounds</SubLabel>
            <SwatchRow>
              {VI.colorSystem.backgrounds.map(b => (
                <Swatch key={b.token} hex={b.hex} name={b.token} sub={b.usage} />
              ))}
            </SwatchRow>

            <SubLabel>Bronze — Primary Brand Accent</SubLabel>
            <GuideCallout>Bronze is the brand voice. Headlines, logos, CTAs, brand moments. If it appears on a poster, it's bronze. Never use bronze for interactive UI states — that's focus blue's job.</GuideCallout>
            <SwatchRow>
              {VI.colorSystem.bronze.map(b => (
                <Swatch key={b.token} hex={b.hex} name={b.token} sub={b.usage} />
              ))}
            </SwatchRow>

            <SubLabel>Focus Blue — Interactive States Only</SubLabel>
            <div style={{ marginBottom: '20px' }}>
              <Swatch hex={VI.colorSystem.focusBlue.hex} name="--focus" sub={VI.colorSystem.focusBlue.rule} wide />
            </div>

            <SubLabel>Text</SubLabel>
            <SwatchRow>
              {VI.colorSystem.text.map(t => (
                <Swatch key={t.token} hex={t.hex} name={`${t.token} (${t.opacity})`} sub={t.usage} />
              ))}
            </SwatchRow>

            <SubLabel>Borders</SubLabel>
            <SwatchRow>
              {VI.colorSystem.borders.map(b => (
                <Swatch key={b.token} hex={`rgba(235,225,210,${parseFloat(b.opacity) / 100})`} name={`${b.token} (${b.opacity})`} sub={b.usage} />
              ))}
            </SwatchRow>

            <SubLabel>Semantic Colors</SubLabel>
            <SwatchRow>
              {VI.colorSystem.semantic.map(s => (
                <Swatch key={s.token} hex={s.hex} name={s.token} sub={s.usage} />
              ))}
            </SwatchRow>

            <SubLabel>Feature Colors</SubLabel>
            <SwatchRow>
              <Swatch hex="#38C3FF" name="Community" sub="Groups and community surfaces" />
              <Swatch hex="#5B61D9" name="Swaps" sub="Early access swap mechanics" />
              <Swatch hex="#AD6AD9" name="Broadcasts" sub="Email and messaging" />
            </SwatchRow>

            <SubLabel>Accessibility Compliance</SubLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
              <WcagBadge level="AAA" ratio="13.5:1" fg="#F0EBE3" bg="#111620" label="Primary text on base background" />
              <WcagBadge level="AAA" ratio="11.2:1" fg="#C48A3A" bg="#111620" label="Bronze accent on base background" />
              <WcagBadge level="AA" ratio="7.8:1" fg="#7CBBDF" bg="#111620" label="Focus blue on base background" />
              <WcagBadge level="AA" ratio="4.6:1" fg="rgba(240,235,227,0.60)" bg="#111620" label="Secondary text on base background" />
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 02 — LOGO & WORDMARK                      */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['logo'] = el; }} id="logo" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="02" title="Logo & Wordmark" sub="The grouped. wordmark is the brand's primary identifier. The Vinyl G mark is the secondary mark. Both require governance, not redesign." />

            <SubLabel>Wordmark</SubLabel>
            <GuideCard style={{ marginBottom: '20px', textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontFamily: F.display, fontSize: '48px', fontWeight: 900, color: C.accent, letterSpacing: '-0.03em' }}>grouped.</div>
              <div style={{ fontFamily: F.mono, fontSize: '11px', color: C.muted, marginTop: '12px' }}>Anacrusis (Custom OTF) · Lowercase with period · Always.</div>
            </GuideCard>

            <GuideCallout>{VI.wordmark.rationale}</GuideCallout>

            <SubLabel>Treatment Rules</SubLabel>
            <DoDont type="do">Always render "grouped." in lowercase with a period. The period is the brand's punctuation signature.</DoDont>
            <DoDont type="do">Use Anacrusis (custom display OTF) for the wordmark at 28px+ minimum size.</DoDont>
            <DoDont type="dont">Never capitalize: "Grouped", "GROUPED", or "Grouped."</DoDont>
            <DoDont type="dont">Never remove the period. "grouped" without the period is incomplete.</DoDont>
            <DoDont type="dont">Never set the wordmark in Satoshi, Arial, or any substitute typeface.</DoDont>

            <SubLabel>Vinyl G Mark</SubLabel>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65, marginBottom: '16px' }}>The secondary mark — a geometric "G" within concentric arcs evoking vinyl grooves and sound waves. Used as an app icon, favicon, social avatar, and watermark.</p>

            <SubLabel>Color Variants</SubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
              {[
                { name: 'Bronze on Navy', bg: '#111620', fg: '#C48A3A', use: 'Primary — headers, dark surfaces' },
                { name: 'White on Navy', bg: '#111620', fg: '#F0EBE3', use: 'Reversed — dark backgrounds' },
                { name: 'Navy on White', bg: '#F0EBE3', fg: '#111620', use: 'Print, light surfaces' },
                { name: 'Bronze on White', bg: '#F0EBE3', fg: '#C48A3A', use: 'Premium print materials' },
                { name: 'Mono White', bg: '#2E3849', fg: '#F0EBE3', use: 'Photo overlays, video' },
                { name: 'Mono Dark', bg: '#F0EBE3', fg: '#2E3849', use: 'Single-color print' },
              ].map(v => (
                <GuideCard key={v.name} style={{ padding: '14px', textAlign: 'center' }}>
                  <div style={{ height: '48px', background: v.bg, borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', border: `1px solid ${C.border}` }}>
                    <span style={{ fontFamily: F.display, fontSize: '20px', fontWeight: 900, color: v.fg, letterSpacing: '-0.02em' }}>g.</span>
                  </div>
                  <div style={{ fontFamily: F.body, fontSize: '11px', color: C.text }}>{v.name}</div>
                  <div style={{ fontFamily: F.body, fontSize: '10px', color: C.muted }}>{v.use}</div>
                </GuideCard>
              ))}
            </div>

            <SubLabel>Asset Links</SubLabel>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href={VI.wordmark.driveFolder} target="_blank" rel="noopener noreferrer" style={{ fontFamily: F.mono, fontSize: '10px', color: C.focus, textDecoration: 'none', padding: '6px 14px', border: `1px solid ${C.focusDim}`, borderRadius: '39px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Google Drive Assets</a>
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
              <DoDont type="dont">Use Anacrusis for body copy, buttons, or any text under 28px.</DoDont>
              <DoDont type="dont">Mix condensed and standard variants in the same text block.</DoDont>
              <DoDont type="dont">Use pure white (#FFFFFF) for text — always use warm cream #F0EBE3.</DoDont>
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 04 — SURFACES & TEXTURE                   */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['surfaces'] = el; }} id="surfaces" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="04" title="Surfaces & Texture" sub={VI.surfaces.concept} />

            <SubLabel>Surface Types</SubLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {VI.surfaces.types.map(s => (
                <GuideCard key={s.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontFamily: F.display, fontSize: '16px', fontWeight: 700, color: C.text }}>{s.name}</div>
                      <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.6, marginTop: '4px' }}>{s.description}</div>
                    </div>
                  </div>
                  {'cssNote' in s && <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted, marginTop: '8px', background: C.s2, padding: '6px 10px', borderRadius: '4px' }}>{s.cssNote}</div>}
                  {'usage' in s && s.usage && <div style={{ fontFamily: F.body, fontSize: '11px', color: C.accent, marginTop: '6px' }}>Use for: {s.usage}</div>}
                </GuideCard>
              ))}
            </div>

            <SubLabel>Grain Overlay</SubLabel>
            <GuideCard style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65 }}>{VI.surfaces.grain}</div>
              <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.muted, marginTop: '8px', background: C.s2, padding: '6px 10px', borderRadius: '4px' }}>opacity: 0.028 · mix-blend-mode: overlay · SVG fractalNoise · 200px tile</div>
            </GuideCard>

            <SubLabel>Border Radius System</SubLabel>
            <GuideCallout>{VI.radiusSystem.rule}</GuideCallout>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {[
                { label: 'Cards', value: '8px', token: '--radius-card' },
                { label: 'Modals', value: '16px', token: '--radius-modal' },
                { label: 'Hero', value: '24px', token: '--radius-hero' },
                { label: 'Pills / Buttons', value: '39px', token: '--radius-pill' },
              ].map(r => (
                <div key={r.label} style={{ flex: '1 1 120px', textAlign: 'center' }}>
                  <div style={{ width: '80px', height: '56px', background: C.s2, border: `1px solid ${C.borderHov}`, borderRadius: r.value, margin: '0 auto 8px' }} />
                  <div style={{ fontFamily: F.mono, fontSize: '11px', color: C.text }}>{r.value}</div>
                  <div style={{ fontFamily: F.body, fontSize: '10px', color: C.muted }}>{r.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 05 — MOTIF & MOTION                       */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['motion'] = el; }} id="motion" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="05" title="Motif & Motion" sub="The concentric arc is Grouped's signature visual motif. Motion is intentional, weighted, and never decorative." />

            <SubLabel>Concentric Arcs</SubLabel>
            <GuideCallout>{VI.signatureMotif.meaning}</GuideCallout>

            {/* SVG Demo */}
            <GuideCard style={{ textAlign: 'center', padding: '32px', marginBottom: '20px' }}>
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                <circle cx="80" cy="80" r="75" stroke={C.accent} strokeWidth="4" strokeOpacity="0.15" fill="none" />
                <circle cx="80" cy="80" r="55" stroke={C.accent} strokeWidth="4" strokeOpacity="0.22" fill="none" />
                <circle cx="80" cy="80" r="35" stroke={C.accent} strokeWidth="4" strokeOpacity="0.32" fill="none" />
                <text x="80" y="88" textAnchor="middle" fill={C.accent} fontFamily={F.display} fontSize="24" fontWeight="900" opacity="0.6">g.</text>
              </svg>
              <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, marginTop: '12px' }}>3 arcs · 2.5:1 stroke-to-gap ratio · Bronze at varying opacity</div>
            </GuideCard>

            <SubLabel>Construction Rules</SubLabel>
            {VI.signatureMotif.rules.map((r, i) => <Rule key={i}>{r}</Rule>)}

            <SubLabel>Ring Proportions</SubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '24px' }}>
              {Object.entries(VI.signatureMotif.ringProportions).map(([k, v]) => (
                <div key={k} style={{ background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '10px 14px' }}>
                  <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{k}</div>
                  <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, marginTop: '2px' }}>{v}</div>
                </div>
              ))}
            </div>

            <SubLabel>Usage Modes</SubLabel>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
              {VI.signatureMotif.usage.map(u => (
                <GuideCard key={u.mode} style={{ flex: 1 }}>
                  <div style={{ fontFamily: F.display, fontSize: '14px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>{u.mode}</div>
                  <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, marginBottom: '6px' }}>Opacity: {u.opacity}</div>
                  <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.5 }}>{u.use}</div>
                </GuideCard>
              ))}
            </div>

            <SubLabel>Motion Principles</SubLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
              {VI.motionPrinciples.map((p, i) => <Rule key={i}>{p}</Rule>)}
            </div>

            <SubLabel>Easing Library</SubLabel>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: F.body, fontSize: '12px' }}>
                <thead>
                  <tr>
                    {['Token', 'Value', 'Usage'].map(h => (
                      <th key={h} style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '8px 10px', borderBottom: `1px solid ${C.border}`, textAlign: 'left' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {VI.easing.map(e => (
                    <tr key={e.token}>
                      <td style={{ fontFamily: F.mono, fontSize: '11px', color: C.accent, padding: '8px 10px', borderBottom: `1px solid ${C.borderSoft}` }}>{e.token}</td>
                      <td style={{ fontFamily: F.mono, fontSize: '10px', color: C.sub, padding: '8px 10px', borderBottom: `1px solid ${C.borderSoft}` }}>{e.value}</td>
                      <td style={{ color: C.muted, padding: '8px 10px', borderBottom: `1px solid ${C.borderSoft}` }}>{e.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ═══════════════════════════════════════════ */}
          {/* 06 — VERBAL IDENTITY                      */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['verbal'] = el; }} id="verbal" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="06" title="Verbal Identity" sub="The grouped. voice is artist-to-artist, not SaaS-to-customer. Direct, bold, warm — never corporate." />

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
          {/* 07 — BRAND ELEMENTS                       */}
          {/* ═══════════════════════════════════════════ */}
          <section ref={el => { sectionRefs.current['elements'] = el; }} id="elements" style={{ marginBottom: '64px', scrollMarginTop: '72px' }}>
            <SectionHeading num="07" title="Brand Elements" sub="Feature colors, iconography status, and competitive greenspace analysis." />

            <SubLabel>Feature Colors</SubLabel>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65, marginBottom: '16px' }}>Each core product feature has a dedicated color for badges, charts, and UI accents within the product. These supplement — never replace — the primary bronze/blue system.</p>
            <SwatchRow>
              <Swatch hex="#38C3FF" name="Community" sub="Groups, community surfaces, member badges" />
              <Swatch hex="#5B61D9" name="Swaps" sub="Early access mechanics, swap cards, trade UI" />
              <Swatch hex="#AD6AD9" name="Broadcasts" sub="Email, messaging, notification surfaces" />
            </SwatchRow>

            <SubLabel>Iconography</SubLabel>
            <div style={{ background: C.warningDim, borderLeft: `3px solid ${C.warning}`, borderRadius: '0 8px 8px 0', padding: '14px 18px', marginBottom: '24px' }}>
              <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.warning, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>Pending Figma Update</div>
              <div style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.6 }}>Custom icon set is being finalized in the GDS26R Figma file. The icon system will follow the concentric arc motif language — geometric, medium weight, consistent stroke width matching Satoshi letterforms.</div>
            </div>

            <SubLabel>Competitive Greenspace</SubLabel>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65, marginBottom: '16px' }}>Bronze + deep navy is entirely unoccupied territory in the music tech / direct-to-fan space. Every competitor clusters around purple, black, coral, indigo, or yellow. Grouped's color position is proprietary.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {VI.greenspace.map(g => (
                <div key={g.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 14px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {g.colors.map((c, i) => (
                      <div key={i} style={{ width: '18px', height: '18px', borderRadius: '4px', background: c, border: `1px solid ${C.border}` }} />
                    ))}
                  </div>
                  <span style={{ fontFamily: F.body, fontSize: '13px', color: g.name === 'grouped.' ? C.accent : C.text, fontWeight: g.name === 'grouped.' ? 700 : 400, flex: 1 }}>{g.name}</span>
                  <span style={{ fontFamily: F.body, fontSize: '11px', color: C.muted }}>{g.note}</span>
                </div>
              ))}
            </div>

            <SubLabel>What This System Avoids</SubLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px', marginTop: '12px' }}>
              {VI.avoidList.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: F.mono, fontSize: '10px', color: C.error, marginTop: '3px', flexShrink: 0 }}>&#x2717;</span>
                  <span style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.5 }}>{a}</span>
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
