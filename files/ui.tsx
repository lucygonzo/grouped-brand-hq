import { useState, ReactNode } from 'react';

// ============================================================
// UI TOKENS — GDS26R (Grouped Design System v1.0, Feb 2026)
// Source of truth: https://lucygonzo.github.io/grouped_brand/
// BRAND / MARKETING system. Deep blue + bronze + warm white.
// Anacrusis = display headlines. Satoshi = everything else.
// JetBrains Mono = data, labels, IDs.
// ============================================================
export const C = {
  // Backgrounds — Deep Navy (never neutral grey)
  bg:         '#111620',   // --bg-base     : page background, app shell
  s1:         '#181E2A',   // --bg-raised   : cards, modals, elevated surfaces
  s2:         '#1F2735',   // --bg-overlay  : dropdowns, panels
  s3:         '#262F3F',   // --bg-subtle   : hover states, selected rows
  s4:         '#2E3849',   // --bg-muted    : inputs, inset surfaces

  // Borders — warm white at low opacity (decimal format for Figma variables)
  border:     'rgba(235,225,210,0.07)',   // default
  borderHov:  'rgba(235,225,210,0.11)',   // hover
  borderAct:  'rgba(235,225,210,0.16)',   // active/focused
  borderStr:  'rgba(235,225,210,0.22)',   // strong
  borderSoft: 'rgba(235,225,210,0.04)',   // softest

  // Text — warm cream (#F0EBE3). NOT pure white.
  text:    '#F0EBE3',   // --text-primary  (100%)
  sub:     '#67686B',   // --text-secondary
  muted:   '#494B50',   // --text-tertiary
  ghost:   'rgba(240,235,227,0.18)',  // --deco-strong (watermarks, decorative)

  // Bronze — PRIMARY BRAND ACCENT
  // Headlines, logo, CTAs, section labels, concentric arc motif.
  // NEVER on interactive feedback (focus rings, stickers, status badges).
  accent:     '#C48A3A',  // --bronze-400  PRIMARY
  bronze300:  '#F6B44E',  // --bronze-300  body-size text (AA compliant)
  bronze500:  '#B87A2E',  // --bronze-500  hover on primary accent
  accentDim:  'rgba(196,138,58,0.10)',
  accentGlow: 'rgba(196,138,58,0.05)',

  // Focus Blue — INTERACTIVE STATES ONLY
  // Input focus rings, accent stickers, badges, active indicators, data viz.
  // NEVER for headlines, brand elements, CTAs, or section labels.
  focus:    '#7CBBDF',  // --focus  PRIMARY interactive accent
  focusDim: 'rgba(124,187,223,0.14)',

  // Semantic — vivid, warm palette
  success:    '#4ADE80',
  successDim: 'rgba(74,222,128,0.15)',
  warning:    '#F0C543',
  warningDim: 'rgba(240,197,67,0.15)',
  error:      '#F07068',
  errorDim:   'rgba(240,112,104,0.15)',
  info:       '#63B3ED',
  infoDim:    'rgba(99,179,237,0.15)',

  // Feature colors — per product feature, same in light + dark
  community:     '#38C3FF',
  swaps:         '#5B61D9',
  broadcasts:    '#AD6AD9',

  // Aliases for existing page components
  amber:    '#F0C543',
  amberDim: 'rgba(240,197,67,0.15)',
  blue:     '#7CBBDF',
  blueDim:  'rgba(124,187,223,0.14)',
  teal:     '#4ADE80',
  tealDim:  'rgba(74,222,128,0.15)',
  red:      '#F07068',
  redDim:   'rgba(240,112,104,0.15)',
} as const;

// Font stacks — GDS26R
// Anacrusis: display/brand only, 40px+ product, 32px+ marketing, NEVER below 32px
// Satoshi: everything else — body, UI, nav, buttons, headings H1-H5
// JetBrains Mono: data, code, IDs, metrics
export const F = {
  display: "'Anacrusis', 'Satoshi', sans-serif",
  body:    "'Satoshi', sans-serif",
  mono:    "'JetBrains Mono', 'SF Mono', monospace",
} as const;

// Border radius — GDS26R token scale
// --radius-sm  8px   : most cards, containers, inputs
// --radius-md  16px  : larger cards, modals
// --radius-lg  24px  : hero containers, large panels
// --radius-full 39px : buttons, badges, pills, toggles (all interactive)
export const R = {
  sm:   '8px',
  md:   '16px',
  lg:   '24px',
  full: '39px',
} as const;

// ---- Shared helper components ----

export const SectionHeader = ({ num, title, sub }: { num: string; title: string; sub?: string }) => (
  <div style={{ marginBottom: '28px', paddingBottom: '20px', borderBottom: `1px solid ${C.border}` }}>
    <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '6px' }}>{num}</div>
    <h1 style={{ fontFamily: F.body, fontSize: '26px', fontWeight: 900, color: C.text, letterSpacing: '-0.02em', marginBottom: sub ? '6px' : 0 }}>{title}</h1>
    {sub && <p style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.5, margin: 0 }}>{sub}</p>}
  </div>
);

export const SubTabs = ({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (t: string) => void }) => (
  <div style={{ display: 'flex', gap: '2px', marginBottom: '24px', borderBottom: `1px solid ${C.border}`, paddingBottom: '0' }}>
    {tabs.map(t => (
      <button key={t} onClick={() => onChange(t)} style={{
        padding: '7px 14px', fontFamily: F.body, fontSize: '12px', fontWeight: 600,
        color: active === t ? C.accent : C.sub,
        background: 'transparent', border: 'none', cursor: 'pointer',
        borderBottom: `2px solid ${active === t ? C.accent : 'transparent'}`,
        marginBottom: '-1px', transition: 'all 0.15s',
        letterSpacing: '0.02em',
      }}>{t}</button>
    ))}
  </div>
);

export const Callout = ({ children, style }: { children: ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: C.accentDim, border: `1px solid rgba(196,138,58,0.18)`, borderRadius: R.sm, padding: '14px 16px', marginBottom: '20px', fontFamily: F.body, fontSize: '13px', color: C.text, lineHeight: 1.6, ...style }}>
    {children}
  </div>
);

export const Block = ({ children, variant = 'default', style }: { children: ReactNode; variant?: 'default' | 'amber' | 'blue' | 'red' | 'green'; style?: React.CSSProperties }) => {
  const colors: Record<string, { bg: string; border: string }> = {
    default: { bg: C.s2,        border: C.border },
    amber:   { bg: C.warningDim, border: `rgba(240,197,67,0.25)` },
    blue:    { bg: C.focusDim,  border: `rgba(124,187,223,0.25)` },
    red:     { bg: C.errorDim,  border: `rgba(240,112,104,0.25)` },
    green:   { bg: C.successDim, border: `rgba(74,222,128,0.25)` },
  };
  const { bg, border } = colors[variant] ?? colors.default;
  return (
    <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: R.sm, padding: '12px 14px', marginBottom: '16px', fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6, ...style }}>
      {children}
    </div>
  );
};

export const Card = ({ children, style }: { children: ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: C.s1, border: `1px solid ${C.border}`, borderRadius: R.sm, padding: '16px', marginBottom: '12px', ...style }}>
    {children}
  </div>
);

export const Lbl = ({ children, style }: { children: ReactNode; style?: React.CSSProperties }) => (
  <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '5px', ...style }}>{children}</div>
);

export const Body = ({ children, style }: { children: ReactNode; style?: React.CSSProperties }) => (
  <p style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.6, marginBottom: '12px', ...style }}>{children}</p>
);

export const Chip = ({ children, color }: { children: ReactNode; color?: string }) => (
  <span style={{ display: 'inline-block', padding: '2px 10px', borderRadius: R.full, background: color ? `${color}18` : C.s3, border: `1px solid ${color ? `${color}35` : C.border}`, fontFamily: F.mono, fontSize: '9px', color: color ?? C.sub, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>{children}</span>
);

export const StatBox = ({ label, value, note, color }: { label: string; value: string; note?: string; color?: string }) => (
  <div style={{ background: C.s1, border: `1px solid ${C.border}`, borderRadius: R.sm, padding: '14px 16px' }}>
    <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '6px' }}>{label}</div>
    <div style={{ fontFamily: F.body, fontSize: '22px', fontWeight: 900, color: color ?? C.accent, letterSpacing: '-0.02em' }}>{value}</div>
    {note && <div style={{ fontFamily: F.body, fontSize: '10px', color: C.muted, marginTop: '3px' }}>{note}</div>}
  </div>
);

export const Threat = ({ level }: { level: 'High' | 'Medium' | 'Low' | 'Watch' }) => {
  const map = { High: C.error, Medium: C.warning, Low: C.success, Watch: C.info };
  return <Chip color={map[level]}>{level}</Chip>;
};

export const ColorStrip = ({ colors }: { colors: string[] }) => (
  <div style={{ display: 'flex', gap: '3px' }}>
    {colors.map((c, i) => (
      <div key={i} title={c} style={{ width: '18px', height: '18px', borderRadius: '3px', background: c, border: `1px solid ${C.border}` }} />
    ))}
  </div>
);

export const ProgressBar = ({ pct, color }: { pct: number; color?: string }) => (
  <div style={{ height: '4px', background: C.s3, borderRadius: '9999px', overflow: 'hidden' }}>
    <div style={{ height: '100%', width: `${pct}%`, background: color ?? C.accent, borderRadius: '9999px', transition: 'width 0.4s ease' }} />
  </div>
);

export const CopyHex = ({ hex }: { hex: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <span onClick={() => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1200); }}
      style={{ fontFamily: F.mono, fontSize: '10px', color: copied ? C.accent : C.muted, cursor: 'pointer', padding: '2px 6px', background: C.s3, borderRadius: '4px' }}>
      {copied ? 'Copied!' : hex}
    </span>
  );
};

export const Placeholder = ({ label, height = 80 }: { label: string; height?: number }) => (
  <div style={{ height, background: C.s2, border: `1px dashed ${C.borderAct}`, borderRadius: R.sm, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: F.mono, fontSize: '10px', color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
    {label}
  </div>
);

// ResearchRunner — AI-powered research step runner (unchanged)
export const ResearchRunner = ({ steps }: { steps: Array<{ id: string; label: string; prompt: string; sources: string[] }> }) => {
  const [results, setResults] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<string | null>(null);

  const run = async (step: { id: string; prompt: string }) => {
    setLoading(step.id);
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          tools: [{ type: 'web_search_20250305', name: 'web_search' }],
          messages: [{ role: 'user', content: step.prompt }],
        }),
      });
      const data = await res.json();
      const text = data.content?.filter((b: { type: string }) => b.type === 'text').map((b: { text: string }) => b.text).join('\n') ?? 'No result.';
      setResults(r => ({ ...r, [step.id]: text }));
    } catch (e) {
      setResults(r => ({ ...r, [step.id]: `Error: ${String(e)}` }));
    }
    setLoading(null);
  };

  return (
    <div>
      {steps.map(step => (
        <Card key={step.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div>
              <Lbl>Research Step</Lbl>
              <div style={{ fontFamily: F.body, fontSize: '13px', fontWeight: 700, color: C.text }}>{step.label}</div>
            </div>
            <button onClick={() => run(step)} disabled={!!loading} style={{
              padding: '6px 14px', borderRadius: R.full, background: loading === step.id ? C.s3 : C.accent,
              color: loading === step.id ? C.sub : '#111620', border: 'none', cursor: loading ? 'default' : 'pointer',
              fontFamily: F.body, fontSize: '11px', fontWeight: 700, flexShrink: 0,
            }}>
              {loading === step.id ? 'Running…' : 'Run'}
            </button>
          </div>
          <Body style={{ fontSize: '11px', marginBottom: '8px' }}>{step.prompt}</Body>
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: results[step.id] ? '10px' : 0 }}>
            {step.sources.map(s => <Chip key={s} color={C.focus}>{s}</Chip>)}
          </div>
          {results[step.id] && (
            <div style={{ background: C.s2, borderRadius: R.sm, padding: '10px 12px', fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6, whiteSpace: 'pre-wrap', maxHeight: '300px', overflowY: 'auto' }}>
              {results[step.id]}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};
