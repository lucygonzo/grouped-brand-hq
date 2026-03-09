import { useState } from 'react';
import { COMPETITIVE } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Threat, ColorStrip, C } from '../components/ui';

export default function CompetitivePage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      <SectionHeader num="05 / Market" title="Competitive Analysis" sub="Direct, adjacent, and platform-threat mapping with threat level and moat assessment. Click to expand." />
      <Callout>Core competitive moat: <strong>no legacy revenue to protect.</strong> Laylo/Community cannot drop per-SMS pricing without destroying their business. Grouped disrupts with Fan Passes at 1/1,000th the cost and still builds profitable SaaS on the way there.</Callout>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '12px' }}>
        {COMPETITIVE.map((c, i) => (
          <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{ background: C.s2, border: `1px solid ${open === i ? C.accent : C.border}`, borderRadius: '10px', padding: '16px', cursor: 'pointer', transition: 'border-color 0.2s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '15px', fontWeight: 700, color: C.text }}>{c.name}</div>
              <Threat level={c.threat} />
            </div>
            <ColorStrip colors={c.colors} label={c.category} />
            <Body style={{ marginTop: '8px', marginBottom: 0, fontSize: '11px' }}>{c.position}</Body>
            {open === i && (
              <div style={{ marginTop: '12px', borderTop: `1px solid ${C.border}`, paddingTop: '12px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                  <div><Lbl>Strengths</Lbl>{c.strengths.map((s, j) => <div key={j} style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: C.sub, padding: '2px 0' }}>+ {s}</div>)}</div>
                  <div><Lbl>Weaknesses</Lbl>{c.weaknesses.map((w, j) => <div key={j} style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: C.sub, padding: '2px 0' }}>- {w}</div>)}</div>
                </div>
                <Block variant="green"><strong>Grouped's moat:</strong> {c.moat}</Block>
                {c.note && <Block variant="blue">{c.note}</Block>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
