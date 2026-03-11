import { DECISIONS } from '../data/brandData';
import { SectionHeader, Card, Lbl, Body, Chip, C } from '../components/ui';

export default function DecisionsPage() {
  return (
    <div>
      <SectionHeader num="12 / Workspace" title="Decision Audit Log" sub="Chronological record of strategic choices, rationale, and owners." />
      {DECISIONS.map((d, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: '14px', marginBottom: '10px' }}>
          <div style={{ paddingTop: '16px' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>{d.date}</div>
          </div>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text, flex: 1 }}>{d.decision}</div>
              <Chip color={d.status === 'Active' ? C.teal : C.muted}>{d.status}</Chip>
            </div>
            <Body style={{ marginBottom: '5px', fontSize: '12px' }}>{d.rationale}</Body>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>Owner: {d.owner}</span>
          </Card>
        </div>
      ))}
    </div>
  );
}
