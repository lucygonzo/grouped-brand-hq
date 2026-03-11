import { PRODUCT_ROADMAP } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Chip, C } from '../components/ui';

export default function ProductPage() {
  return (
    <div>
      <SectionHeader num="09 / Business" title="Product Strategy" sub="Feature map, phase evolution, and the platform vision." />
      <Callout>Platform vision: once critical mass is reached, network effects flip the model. Fans discover new artists on Grouped. Artists acquire new fans through Grouped. The Epic Games model — own the theme park AND the creative engine.</Callout>
      {PRODUCT_ROADMAP.map((r, i) => (
        <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: '10px' }}>
          <div style={{ width: '90px', flexShrink: 0, paddingTop: '14px' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{r.phase}</div>
            <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '10px', color: r.status === 'Live' ? C.teal : r.status.includes('2026') ? C.amber : C.sub, marginTop: '2px' }}>{r.status}</div>
          </div>
          <Card style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{r.label}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>{r.rev}</div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {r.items.map((item, j) => <Chip key={j} color={r.status === 'Live' ? C.teal : r.status.includes('2026') ? C.amber : C.sub}>{item}</Chip>)}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
