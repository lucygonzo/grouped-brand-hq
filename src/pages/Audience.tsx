import { useState } from 'react';
import { AUDIENCE } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Chip, C } from '../components/ui';

export default function AudiencePage() {
  const [active, setActive] = useState(0);
  const seg = AUDIENCE[active];
  return (
    <div>
      <SectionHeader num="06 / Market" title="Audience" sub="Target artist segments by listener tier, psychographics, and jobs-to-be-done." />
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        {AUDIENCE.map((a, i) => (
          <button key={i} onClick={() => setActive(i)} style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '7px 14px', borderRadius: '6px', cursor: 'pointer', border: `1px solid ${active === i ? C.accent : C.border}`, background: active === i ? C.accentDim : C.s2, color: active === i ? C.accent : C.sub, transition: 'all 0.15s' }}>{a.name}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '16px' }}>
        <div>
          <Card style={{ marginBottom: '10px' }}>
            <Lbl>Tier</Lbl>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '15px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>{seg.name}</div>
            <Chip color={seg.priority.startsWith('Primary') ? C.accent : C.blue}>{seg.priority.startsWith('Primary') ? 'Primary' : 'Secondary'}</Chip>
            <div style={{ marginTop: '10px' }}><Lbl>Listeners</Lbl><div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: C.text }}>{seg.range}</div></div>
            <div style={{ marginTop: '8px' }}><Lbl>Market Size</Lbl><div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: C.text }}>{seg.count}</div></div>
            <div style={{ marginTop: '8px' }}><Lbl>Est. ARPU</Lbl><div style={{ fontFamily: 'Syne, sans-serif', fontSize: '20px', fontWeight: 800, color: C.accent }}>{seg.arpu}</div></div>
            <div style={{ marginTop: '8px' }}><Lbl>Phase</Lbl><div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: C.amber }}>{seg.phase}</div></div>
          </Card>
          <Card><Lbl>Churn Risk</Lbl><Body style={{ marginBottom: 0, fontSize: '11px' }}>{seg.churn}</Body></Card>
        </div>
        <div>
          <Card style={{ marginBottom: '10px' }}>
            <Lbl>Artist Story</Lbl>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: C.text, lineHeight: 1.7, fontStyle: 'italic', padding: '6px 0' }}>{seg.story}</div>
          </Card>
          <Card style={{ marginBottom: '10px' }}>
            <Lbl>Psychographics</Lbl>
            {seg.psycho.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', padding: '5px 0', borderBottom: i < seg.psycho.length - 1 ? `1px solid ${C.border}` : 'none', fontFamily: 'Inter, sans-serif', fontSize: '12px', color: C.sub }}>
                <span style={{ color: C.accent, flexShrink: 0 }}>—</span>{p}
              </div>
            ))}
          </Card>
          <Card><Lbl>Job to Be Done</Lbl><Body style={{ marginBottom: 0 }}>{seg.jtbd}</Body></Card>
          <Card style={{ marginTop: '10px' }}><Lbl>How to Reach</Lbl><Body style={{ marginBottom: 0 }}>{seg.reach}</Body></Card>
        </div>
      </div>
    </div>
  );
}
