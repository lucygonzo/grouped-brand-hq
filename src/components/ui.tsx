import { useState, ReactNode } from 'react';

// ---- TOKENS ----
export const C = {
  bg: '#07070A', s1: '#0E0E13', s2: '#15151C', s3: '#1C1C26',
  border: '#272733', borderSoft: '#33333F',
  text: '#EDEDF5', sub: '#9494AA', muted: '#555566',
  accent: '#BFFF00', accentDim: 'rgba(191,255,0,0.10)', accentGlow: 'rgba(191,255,0,0.05)',
  amber: '#FFB020', amberDim: 'rgba(255,176,32,0.14)',
  blue: '#4DA8FF', blueDim: 'rgba(77,168,255,0.14)',
  teal: '#00E59B', tealDim: 'rgba(0,229,155,0.14)',
  red: '#FF4D4D', redDim: 'rgba(255,77,77,0.14)',
} as const;

const COLOR_KEYS: Record<string, string> = {
  accent: C.accent, blue: C.blue, teal: C.teal, amber: C.amber,
  red: C.red, muted: C.muted, sub: C.sub,
};
export const colorKey = (k: string) => COLOR_KEYS[k] ?? C.sub;

// ---- BASE COMPONENTS ----

export const SectionHeader = ({ num, title, sub }: { num: string; title: string; sub?: string }) => (
  <div style={{ marginBottom: '28px' }}>
    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: C.accent, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '8px' }}>{num}</div>
    <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '26px', fontWeight: 800, color: C.text, margin: '0 0 8px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>{title}</h1>
    {sub && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: C.sub, margin: 0, lineHeight: 1.65 }}>{sub}</p>}
  </div>
);

export const Callout = ({ children }: { children: ReactNode }) => (
  <div style={{ background: C.accentGlow, borderLeft: `3px solid ${C.accent}`, borderRadius: '0 8px 8px 0', padding: '14px 18px', marginBottom: '24px', fontFamily: 'Inter, sans-serif', fontSize: '13px', color: C.text, lineHeight: 1.65 }}>
    {children}
  </div>
);

type BlockVariant = 'default' | 'green' | 'amber' | 'blue' | 'red';
const BLOCK_STYLES: Record<BlockVariant, { bg: string; b: string; c: string }> = {
  default: { bg: C.s3, b: C.borderSoft, c: C.sub },
  green: { bg: C.tealDim, b: C.teal, c: C.teal },
  amber: { bg: C.amberDim, b: C.amber, c: C.amber },
  blue: { bg: C.blueDim, b: C.blue, c: C.blue },
  red: { bg: C.redDim, b: C.red, c: C.red },
};
export const Block = ({ variant = 'default', children }: { variant?: BlockVariant; children: ReactNode }) => {
  const v = BLOCK_STYLES[variant];
  return (
    <div style={{ background: v.bg, borderLeft: `2px solid ${v.b}`, borderRadius: '0 6px 6px 0', padding: '10px 14px', marginBottom: '10px', fontFamily: 'Inter, sans-serif', fontSize: '13px', color: C.text, lineHeight: 1.6 }}>{children}</div>
  );
};

export const Dot = () => (
  <span title="Needs confirmation" style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', background: C.amber, marginLeft: '5px', verticalAlign: 'middle', cursor: 'help' }} />
);

export const Card = ({ children, style = {}, onClick }: { children: ReactNode; style?: React.CSSProperties; onClick?: () => void }) => (
  <div onClick={onClick} style={{ background: C.s2, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '18px', cursor: onClick ? 'pointer' : undefined, ...style }}>{children}</div>
);

export const Lbl = ({ children, style = {} }: { children: ReactNode; style?: React.CSSProperties }) => (
  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '6px', ...style }}>{children}</div>
);

export const Body = ({ children, style = {} }: { children: ReactNode; style?: React.CSSProperties }) => (
  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: C.sub, lineHeight: 1.65, margin: '0 0 10px', ...style }}>{children}</p>
);

export const Chip = ({ children, color }: { children: ReactNode; color: string }) => (
  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', background: `${color}18`, color, border: `1px solid ${color}35`, borderRadius: '4px', padding: '2px 7px', marginRight: '4px', marginBottom: '4px', display: 'inline-block' }}>{children}</span>
);

export const Threat = ({ level }: { level: string }) => {
  const m = level === 'High' ? { bg: C.redDim, b: C.red, c: C.red } : level === 'Medium' ? { bg: C.amberDim, b: C.amber, c: C.amber } : { bg: C.s3, b: C.borderSoft, c: C.muted };
  return <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', background: m.bg, border: `1px solid ${m.b}`, color: m.c, padding: '2px 7px', borderRadius: '4px' }}>{level}</span>;
};

export const StatBox = ({ label, value, note }: { label: string; value: string; note?: string }) => (
  <div style={{ background: C.s2, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px' }}>
    <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '22px', fontWeight: 800, color: C.accent, lineHeight: 1, marginBottom: '4px' }}>{value}</div>
    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: C.sub, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
    {note && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: C.muted, marginTop: '3px' }}>{note}</div>}
  </div>
);

export const StatusChip = ({ status, color }: { status: string; color: string }) => (
  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color, marginTop: '2px', display: 'block' }}>{status}</span>
);

export const SubTabs = ({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (t: string) => void }) => (
  <div style={{ display: 'flex', gap: '2px', marginBottom: '24px', borderBottom: `1px solid ${C.border}` }}>
    {tabs.map(t => (
      <button key={t} onClick={() => onChange(t)} style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '8px 14px', background: 'none', border: 'none', cursor: 'pointer', color: active === t ? C.accent : C.muted, borderBottom: `2px solid ${active === t ? C.accent : 'transparent'}`, marginBottom: '-1px', transition: 'color 0.15s' }}>{t}</button>
    ))}
  </div>
);

export const ColorStrip = ({ colors, label }: { colors: string[]; label: string }) => (
  <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
    {colors.map((c, i) => <div key={i} style={{ width: '14px', height: '14px', borderRadius: '3px', background: c, border: `1px solid ${C.border}` }} />)}
    <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: C.muted, marginLeft: '4px' }}>{label}</span>
  </div>
);

// ---- PROGRESS BAR ----
export const ProgressBar = ({ pct, color = C.accent }: { pct: number; color?: string }) => (
  <div style={{ height: '3px', background: C.s3, borderRadius: '2px' }}>
    <div style={{ height: '3px', width: `${pct}%`, background: color, borderRadius: '2px', transition: 'width 0.4s ease' }} />
  </div>
);

// ---- COPY HEX ----
export const CopyHex = ({ hex, name, role }: { hex: string; name: string; role: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <div onClick={handleCopy} style={{ cursor: 'pointer', background: C.s2, border: `1px solid ${C.border}`, borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ height: '40px', background: hex, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {copied && <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', background: 'rgba(0,0,0,0.75)', color: '#fff', padding: '2px 6px', borderRadius: '3px' }}>Copied!</span>}
      </div>
      <div style={{ padding: '7px 9px' }}>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: C.text }}>{hex}</div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: C.muted }}>{name} · {role}</div>
      </div>
    </div>
  );
};

// ---- PLACEHOLDER ----
export const Placeholder = ({ title, num, note }: { title: string; num: string; note?: string }) => (
  <div>
    <SectionHeader num={num} title={title} sub={note || 'Research and data pending.'} />
    <Block variant="amber"><Dot /> This section is queued for population. Add content to the corresponding Google Drive markdown file and it will sync here.</Block>
  </div>
);

// ---- RESEARCH RUNNER (AI-powered) ----
export type ResearchStep = {
  id: string;
  label: string;
  prompt: string;
  sources: string[];
};

type StepState = { status: 'idle' | 'running' | 'done' | 'error'; result?: string };

export const ResearchRunner = ({ steps, context }: { steps: ResearchStep[]; context: string }) => {
  const [stepStates, setStepStates] = useState<Record<string, StepState>>({});
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [globalRunning, setGlobalRunning] = useState(false);

  const runStep = async (step: ResearchStep, idx: number) => {
    setCurrentStep(idx);
    setStepStates(s => ({ ...s, [step.id]: { status: 'running' } }));

    try {
      const systemPrompt = `You are a brand strategist and researcher working on the Grouped Brand HQ — a direct-to-fan music platform (grouped.com). You are running structured brand research for the "${context}" section. Be specific, concise, and commercially relevant. Format your output in clear sections with headers. Focus on actionable insights, not general platitudes.`;

      const userPrompt = `${step.prompt}\n\nPreferred sources to reference (if publicly available): ${step.sources.join(', ')}\n\nDeliver structured research findings in 300-500 words. Use headers. Be direct and specific.`;

      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: systemPrompt,
          messages: [{ role: 'user', content: userPrompt }],
          tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        }),
      });

      const data = await res.json();
      const textBlocks = data.content?.filter((b: { type: string }) => b.type === 'text').map((b: { text: string }) => b.text).join('\n') || 'No results returned.';
      setStepStates(s => ({ ...s, [step.id]: { status: 'done', result: textBlocks } }));
    } catch {
      setStepStates(s => ({ ...s, [step.id]: { status: 'error', result: 'Research failed. Check API connection.' } }));
    }
  };

  const runAll = async () => {
    setGlobalRunning(true);
    for (let i = 0; i < steps.length; i++) {
      await runStep(steps[i], i);
    }
    setCurrentStep(null);
    setGlobalRunning(false);
  };

  const allDone = steps.every(s => stepStates[s.id]?.status === 'done');

  return (
    <div style={{ marginTop: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <Lbl style={{ marginBottom: '2px' }}>Research Pipeline</Lbl>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: C.sub }}>{steps.length} steps · web search enabled</div>
        </div>
        {!allDone && (
          <button
            onClick={runAll}
            disabled={globalRunning}
            style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '8px 16px', background: globalRunning ? C.s3 : C.accentDim, border: `1px solid ${globalRunning ? C.border : C.accent}`, color: globalRunning ? C.muted : C.accent, borderRadius: '6px', cursor: globalRunning ? 'not-allowed' : 'pointer', transition: 'all 0.2s' }}
          >
            {globalRunning ? 'Running...' : 'Run All Steps'}
          </button>
        )}
      </div>

      {steps.map((step, i) => {
        const state = stepStates[step.id] ?? { status: 'idle' };
        const isRunning = state.status === 'running';
        const isDone = state.status === 'done';
        const isError = state.status === 'error';
        const isCurrent = currentStep === i;

        return (
          <div key={step.id} style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', background: isRunning ? C.accentGlow : isDone ? C.tealDim : C.s2, border: `1px solid ${isRunning ? C.accent : isDone ? C.teal : C.border}`, borderRadius: isDone && state.result ? '8px 8px 0 0' : '8px', transition: 'all 0.2s' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: isRunning ? C.accentDim : isDone ? C.tealDim : isError ? C.redDim : C.s3, border: `1px solid ${isRunning ? C.accent : isDone ? C.teal : isError ? C.red : C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {isDone && <span style={{ color: C.teal, fontSize: '10px' }}>✓</span>}
                {isRunning && <span style={{ color: C.accent, fontSize: '8px', fontFamily: 'DM Mono, monospace' }}>{isCurrent ? '...' : '·'}</span>}
                {isError && <span style={{ color: C.red, fontSize: '10px' }}>✗</span>}
                {state.status === 'idle' && <span style={{ color: C.muted, fontSize: '9px', fontFamily: 'DM Mono, monospace' }}>{i + 1}</span>}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: isDone ? C.text : isRunning ? C.text : C.sub }}>{step.label}</div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: C.muted, marginTop: '2px' }}>Sources: {step.sources.join(' · ')}</div>
              </div>
              {!isDone && !isRunning && (
                <button onClick={() => runStep(step, i)} style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 10px', background: C.s3, border: `1px solid ${C.border}`, color: C.sub, borderRadius: '4px', cursor: 'pointer' }}>Run</button>
              )}
            </div>
            {(isDone || isError) && state.result && (
              <div style={{ background: isDone ? 'rgba(0,229,155,0.04)' : C.redDim, border: `1px solid ${isDone ? C.teal : C.red}`, borderTop: 'none', borderRadius: '0 0 8px 8px', padding: '16px', fontFamily: 'Inter, sans-serif', fontSize: '12px', color: C.sub, lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
                {state.result}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
