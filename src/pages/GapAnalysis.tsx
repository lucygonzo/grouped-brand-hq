import { GAP_ANALYSIS } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Chip, Block, ProgressBar, C } from '../components/ui';

export default function GapPage() {
  return (
    <div>
      <SectionHeader num="07 / Market" title="Gap Analysis" sub="Current state vs. future state across key brand and business dimensions." />
      <Callout>The Tribly/Grouped merger created a unified product, but the brand narrative, visual system, and verbal playbook need consolidation under one roof. This tracks progress across the six most critical dimensions.</Callout>
      {GAP_ANALYSIS.map((d, i) => (
        <Card key={i} style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{d.dim}</div>
            <Chip color={d.priority === 'Critical' ? C.red : d.priority === 'High' ? C.amber : C.blue}>{d.priority}</Chip>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
            <div style={{ background: C.s3, borderRadius: '6px', padding: '10px' }}>
              <Lbl>Current</Lbl>
              <Body style={{ marginBottom: 0, fontSize: '11px' }}>{d.current}</Body>
            </div>
            <div style={{ background: 'rgba(191,255,0,0.04)', border: `1px solid rgba(191,255,0,0.12)`, borderRadius: '6px', padding: '10px' }}>
              <Lbl style={{ color: C.accent }}>Future</Lbl>
              <Body style={{ marginBottom: 0, fontSize: '11px' }}>{d.future}</Body>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <Lbl style={{ marginBottom: 0 }}>Progress</Lbl>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent }}>{d.pct}%</span>
          </div>
          <ProgressBar pct={d.pct} />
        </Card>
      ))}
    </div>
  );
}
