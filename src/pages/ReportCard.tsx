import { REPORT_CARD } from '../data/brandData';
import { SectionHeader, Card, Lbl, Body, C } from '../components/ui';

export default function ReportCardPage() {
  return (
    <div>
      <SectionHeader num="13 / Workspace" title="Report Card" sub="Monthly 1-10 brand assessment — February 2026." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        {REPORT_CARD.map((s, i) => (
          <Card key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <Lbl style={{ marginBottom: 0 }}>{s.cat}</Lbl>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: s.trend === 'up' ? C.teal : s.trend === 'down' ? C.red : C.muted }}>{s.trend === 'up' ? '↑' : s.trend === 'down' ? '↓' : '—'}</span>
            </div>
            <div style={{ display: 'flex', gap: '3px', marginBottom: '8px' }}>
              {Array.from({ length: 10 }, (_, j) => <div key={j} style={{ flex: 1, height: '5px', borderRadius: '2px', background: j < s.score ? C.accent : C.s3 }} />)}
            </div>
            <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '26px', fontWeight: 800, color: s.score >= 7 ? C.accent : s.score >= 5 ? C.amber : C.red, marginBottom: '6px' }}>
              {s.score}<span style={{ fontSize: '12px', color: C.muted, fontWeight: 400 }}>/10</span>
            </div>
            <Body style={{ marginBottom: 0, fontSize: '11px' }}>{s.note}</Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
