import { useState, ReactNode } from 'react';

// ============================================================
// UI TOKENS — GDS26R (Grouped Design System v1.0, Feb 2026)
// BRAND / MARKETING system. Deep blue + bronze + warm white.
// Satoshi = display + body. JetBrains Mono = data/labels.
// ============================================================
export const C = {
  // Backgrounds — Deep Blue
  bg:         '#111620',
  s1:         '#181E2A',  // raised (cards, modals)
  s2:         '#1F2735',  // overlay (dropdowns, panels)
  s3:         '#262F3F',  // subtle (hover, selected rows)
  s4:         '#2E3849',  // muted (inputs, inset)

  // Borders — warm white at low opacity
  border:     'rgba(235,225,210,0.07)',
  borderHov:  'rgba(235,225,210,0.11)',
  borderAct:  'rgba(235,225,210,0.16)',
  borderSoft: 'rgba(235,225,210,0.04)',

  // Text — warm white
  text:    '#F0EBE3',
  sub:     'rgba(240,235,227,0.60)',
  muted:   'rgba(240,235,227,0.38)',
  ghost:   'rgba(240,235,227,0.18)',

  // Bronze — PRIMARY BRAND ACCENT (headlines, logos, CTAs, brand voice)
  accent:     '#C48A3A',
  accentDim:  'rgba(196,138,58,0.10)',
  accentGlow: 'rgba(196,138,58,0.05)',
  bronze300:  '#F6B44E',
  bronze500:  '#B87A2E',

  // Focus Blue — interactive states ONLY
  focus:    '#7CBBDF',
  focusDim: 'rgba(124,187,223,0.14)',

  // Semantic
  success:    '#8BAF9C',
  successDim: 'rgba(139,175,156,0.15)',
  warning:    '#D4A24B',
  warningDim: 'rgba(212,162,75,0.15)',
  error:      '#C27A6B',
  errorDim:   'rgba(194,122,107,0.15)',
  info:       '#8BA4BE',
  infoDim:    'rgba(139,164,190,0.15)',

  // Legacy aliases so existing pages don't break
  amber:    '#D4A24B',
  amberDim: 'rgba(212,162,75,0.15)',
  blue:     '#7CBBDF',
  blueDim:  'rgba(124,187,223,0.14)',
  teal:     '#8BAF9C',
  tealDim:  'rgba(139,175,156,0.15)',
  red:      '#C27A6B',
  redDim:   'rgba(194,122,107,0.15)',
} as const;

// Font stacks — GDS26R
const F = {
  display: "'Satoshi', sans-serif",
  body:    "'Satoshi', sans-serif",
  mono:    "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
} as const;

const COLOR_KEYS: Record<string, string> = {
  accent: C.accent, blue: C.blue, teal: C.teal, amber: C.amber,
  red: C.red, muted: C.muted, sub: C.sub, focus: C.focus,
  success: C.success, warning: C.warning, error: C.error,
};
export const colorKey = (k: string) => COLOR_KEYS[k] ?? C.sub;

// ---- BASE COMPONENTS ----

export const SectionHeader = ({ num, title, sub }: { num: string; title: string; sub?: string }) => (
  <div style={{ marginBottom: '28px' }}>
    <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '8px' }}>{num}</div>
    <h1 style={{ fontFamily: F.display, fontSize: '26px', fontWeight: 800, color: C.text, margin: '0 0 8px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>{title}</h1>
    {sub && <p style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, margin: 0, lineHeight: 1.65 }}>{sub}</p>}
  </div>
);

export const Callout = ({ children }: { children: ReactNode }) => (
  <div style={{ background: C.accentGlow, borderLeft: `3px solid ${C.accent}`, borderRadius: '0 4px 4px 0', padding: '14px 18px', marginBottom: '24px', fontFamily: F.body, fontSize: '13px', color: C.text, lineHeight: 1.65 }}>
    {children}
  </div>
);

type BlockVariant = 'default' | 'green' | 'amber' | 'blue' | 'red';
const BLOCK_STYLES: Record<BlockVariant, { bg: string; b: string }> = {
  default: { bg: C.s3,          b: 'rgba(235,225,210,0.10)' },
  green:   { bg: C.successDim,  b: C.success },
  amber:   { bg: C.warningDim,  b: C.warning },
  blue:    { bg: C.focusDim,    b: C.focus },
  red:     { bg: C.errorDim,    b: C.error },
};
export const Block = ({ variant = 'default', children }: { variant?: BlockVariant; children: ReactNode }) => {
  const v = BLOCK_STYLES[variant];
  return (
    <div style={{ background: v.bg, borderLeft: `2px solid ${v.b}`, borderRadius: '0 4px 4px 0', padding: '10px 14px', marginBottom: '10px', fontFamily: F.body, fontSize: '13px', color: C.text, lineHeight: 1.6 }}>{children}</div>
  );
};

export const Dot = () => (
  <span title="Needs confirmation" style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', background: C.warning, marginLeft: '5px', verticalAlign: 'middle', cursor: 'help' }} />
);

export const Card = ({ children, style = {}, onClick }: { children: ReactNode; style?: React.CSSProperties; onClick?: () => void }) => (
  <div onClick={onClick} style={{ background: C.s1, border: `1px solid ${C.border}`, borderRadius: '4px', padding: '18px', cursor: onClick ? 'pointer' : undefined, transition: 'border-color 0.2s', ...style }}>{children}</div>
);

export const Lbl = ({ children, style = {} }: { children: ReactNode; style?: React.CSSProperties }) => (
  <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.ghost, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '6px', ...style }}>{children}</div>
);

export const Body = ({ children, style = {} }: { children: ReactNode; style?: React.CSSProperties }) => (
  <p style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65, margin: '0 0 10px', ...style }}>{children}</p>
);

export const Chip = ({ children, color }: { children: ReactNode; color: string }) => (
  <span style={{ fontFamily: F.mono, fontSize: '9px', background: `${color}18`, color, border: `1px solid ${color}35`, borderRadius: '9999px', padding: '2px 8px', marginRight: '4px', marginBottom: '4px', display: 'inline-block', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{children}</span>
);

export const Threat = ({ level }: { level: string }) => {
  const m = level === 'High' ? { bg: C.errorDim, b: C.error, c: C.error } : level === 'Medium' ? { bg: C.warningDim, b: C.warning, c: C.warning } : { bg: C.s3, b: C.border, c: C.muted };
  return <span style={{ fontFamily: F.mono, fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', background: m.bg, border: `1px solid ${m.b}`, color: m.c, padding: '2px 7px', borderRadius: '9999px' }}>{level}</span>;
};

export const StatBox = ({ label, value, note }: { label: string; value: string; note?: string }) => (
  <div style={{ background: C.s1, border: `1px solid ${C.border}`, borderRadius: '4px', padding: '14px 16px' }}>
    <div style={{ fontFamily: F.display, fontSize: '22px', fontWeight: 800, color: C.accent, lineHeight: 1, marginBottom: '4px', fontVariantNumeric: 'tabular-nums' } as React.CSSProperties}>{value}</div>
    <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
    {note && <div style={{ fontFamily: F.body, fontSize: '10px', color: C.ghost, marginTop: '3px' }}>{note}</div>}
  </div>
);

export const StatusChip = ({ status, color }: { status: string; color: string }) => (
  <span style={{ fontFamily: F.mono, fontSize: '9px', color, marginTop: '2px', display: 'block' }}>{status}</span>
);

export const SubTabs = ({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (t: string) => void }) => (
  <div style={{ display: 'flex', gap: '2px', marginBottom: '24px', borderBottom: `1px solid ${C.border}` }}>
    {tabs.map(t => (
      <button key={t} onClick={() => onChange(t)} style={{ fontFamily: F.mono, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '8px 14px', background: 'none', border: 'none', cursor: 'pointer', color: active === t ? C.accent : C.ghost, borderBottom: `2px solid ${active === t ? C.accent : 'transparent'}`, marginBottom: '-1px', transition: 'color 0.15s' }}>{t}</button>
    ))}
  </div>
);

export const ColorStrip = ({ colors, label }: { colors: string[]; label: string }) => (
  <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
    {colors.map((c, i) => <div key={i} style={{ width: '14px', height: '14px', borderRadius: '3px', background: c, border: `1px solid ${C.border}` }} />)}
    <span style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, marginLeft: '4px' }}>{label}</span>
  </div>
);

export const ProgressBar = ({ pct, color = C.accent }: { pct: number; color?: string }) => (
  <div style={{ height: '3px', background: C.s3, borderRadius: '2px' }}>
    <div style={{ height: '3px', width: `${pct}%`, background: color, borderRadius: '2px', transition: 'width 0.4s ease' }} />
  </div>
);

export const CopyHex = ({ hex, name, role }: { hex: string; name: string; role: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1400); };
  return (
    <div onClick={handleCopy} style={{ cursor: 'pointer', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '4px', overflow: 'hidden' }}>
      <div style={{ height: '40px', background: hex, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {copied && <span style={{ fontFamily: F.mono, fontSize: '9px', background: 'rgba(0,0,0,0.75)', color: '#fff', padding: '2px 6px', borderRadius: '3px' }}>Copied!</span>}
      </div>
      <div style={{ padding: '7px 9px' }}>
        <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.text }}>{hex}</div>
        <div style={{ fontFamily: F.body, fontSize: '10px', color: C.ghost }}>{name} · {role}</div>
      </div>
    </div>
  );
};

export const Placeholder = ({ title, num, note }: { title: string; num: string; note?: string }) => (
  <div>
    <SectionHeader num={num} title={title} sub={note || 'Research and data pending.'} />
    <Block variant="amber"><Dot /> This section is queued for population. Add content to the corresponding Google Drive markdown file and it will sync here.</Block>
  </div>
);

// ---- RESEARCH RUNNER ----
export type ResearchStep = { id: string; label: string; prompt: string; sources: string[] };
type StepState = { status: 'idle' | 'running' | 'done' | 'error'; result?: string };

export const ResearchRunner = ({ steps, context }: { steps: ResearchStep[]; context: string }) => {
  const [stepStates, setStepStates] = useState<Record<string, StepState>>({});
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [globalRunning, setGlobalRunning] = useState(false);

  const runStep = async (step: ResearchStep, idx: number) => {
    setCurrentStep(idx);
    setStepStates(s => ({ ...s, [step.id]: { status: 'running' } }));
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: `You are a brand strategist working on Grouped Brand HQ (grouped.com), a direct-to-fan music platform. Research context: "${context}". Be specific, concise, commercially relevant. Format with headers.`,
          messages: [{ role: 'user', content: `${step.prompt}\n\nSources: ${step.sources.join(', ')}\n\nDeliver 300-500 words. Use headers. Be direct.` }],
          tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        }),
      });
      const data = await res.json();
      const text = data.content?.filter((b: { type: string }) => b.type === 'text').map((b: { text: string }) => b.text).join('\n') || 'No results returned.';
      setStepStates(s => ({ ...s, [step.id]: { status: 'done', result: text } }));
    } catch {
      setStepStates(s => ({ ...s, [step.id]: { status: 'error', result: 'Research failed. Check API connection.' } }));
    }
  };

  const runAll = async () => {
    setGlobalRunning(true);
    for (let i = 0; i < steps.length; i++) await runStep(steps[i], i);
    setCurrentStep(null);
    setGlobalRunning(false);
  };

  const allDone = steps.every(s => stepStates[s.id]?.status === 'done');

  return (
    <div style={{ marginTop: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <Lbl style={{ marginBottom: '2px' }}>Research Pipeline</Lbl>
          <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub }}>{steps.length} steps · web search enabled</div>
        </div>
        {!allDone && (
          <button onClick={runAll} disabled={globalRunning} style={{ fontFamily: F.mono, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '8px 16px', background: globalRunning ? C.s3 : C.accentDim, border: `1px solid ${globalRunning ? C.border : C.accent}`, color: globalRunning ? C.ghost : C.accent, borderRadius: '9999px', cursor: globalRunning ? 'not-allowed' : 'pointer', transition: 'all 0.2s' }}>
            {globalRunning ? 'Running...' : 'Run All Steps'}
          </button>
        )}
      </div>
      {steps.map((step, i) => {
        const state = stepStates[step.id] ?? { status: 'idle' };
        const isRunning = state.status === 'running';
        const isDone = state.status === 'done';
        const isError = state.status === 'error';
        return (
          <div key={step.id} style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', background: isRunning ? C.accentGlow : isDone ? C.successDim : C.s1, border: `1px solid ${isRunning ? C.accent : isDone ? C.success : C.border}`, borderRadius: isDone && state.result ? '4px 4px 0 0' : '4px', transition: 'all 0.2s' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: isRunning ? C.accentDim : isDone ? C.successDim : isError ? C.errorDim : C.s3, border: `1px solid ${isRunning ? C.accent : isDone ? C.success : isError ? C.error : C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {isDone && <span style={{ color: C.success, fontSize: '10px' }}>✓</span>}
                {isRunning && <span style={{ color: C.accent, fontSize: '8px', fontFamily: F.mono }}>{currentStep === i ? '...' : '·'}</span>}
                {isError && <span style={{ color: C.error, fontSize: '10px' }}>✗</span>}
                {state.status === 'idle' && <span style={{ color: C.ghost, fontSize: '9px', fontFamily: F.mono }}>{i + 1}</span>}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: F.body, fontSize: '13px', color: isDone || isRunning ? C.text : C.sub }}>{step.label}</div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.ghost, marginTop: '2px' }}>Sources: {step.sources.join(' · ')}</div>
              </div>
              {!isDone && !isRunning && (
                <button onClick={() => runStep(step, i)} style={{ fontFamily: F.mono, fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 10px', background: C.s3, border: `1px solid ${C.border}`, color: C.sub, borderRadius: '9999px', cursor: 'pointer' }}>Run</button>
              )}
            </div>
            {(isDone || isError) && state.result && (
              <div style={{ background: isDone ? 'rgba(139,175,156,0.04)' : C.errorDim, border: `1px solid ${isDone ? C.success : C.error}`, borderTop: 'none', borderRadius: '0 0 4px 4px', padding: '16px', fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
                {state.result}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
