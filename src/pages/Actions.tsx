import { ACTIONS } from '../data/brandData';
import { SectionHeader, Card, Lbl, Body, Chip, C } from '../components/ui';

export default function ActionsPage() {
  return (
    <div>
      <SectionHeader num="11 / Workspace" title="Action Items" sub="Priorities across Now / Next / Later." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {(['Now', 'Next', 'Later'] as const).map(g => (
          <div key={g}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: g === 'Now' ? C.accent : g === 'Next' ? C.amber : C.muted, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '10px' }}>{g}</div>
            {ACTIONS.filter(a => a.status === g).map((a, i) => (
              <Card key={i} style={{ marginBottom: '8px' }}>
                <Body style={{ marginBottom: '6px', fontSize: '12px', color: C.text, lineHeight: 1.45 }}>{a.text}</Body>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>{a.owner}</span>
                  <Chip color={a.priority === 'Critical' ? C.red : a.priority === 'High' ? C.amber : a.priority === 'Medium' ? C.blue : C.muted}>{a.priority}</Chip>
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
