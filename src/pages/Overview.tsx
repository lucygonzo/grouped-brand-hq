import { METRICS, OPEN_PRIORITIES, CLIENT } from '../data/brandData';
import { SectionHeader, Callout, Card, StatBox, Lbl, Body, Chip, C } from '../components/ui';

export default function OverviewPage() {
  return (
    <div>
      <SectionHeader num="00 / Foundation" title="Overview" sub="Executive summary — current state, key metrics, and open priorities for the grouped. Brand HQ." />
      <Callout>
        <strong>grouped.</strong> is the direct-to-fan growth engine for independent musicians. The 2026 merger of Tribly (top-of-funnel swaps) and Grouped (bottom-of-funnel community) created the only full-funnel platform that captures fans at the moment of excitement, keeps them year-round, and compounds value across every release. The brand anchor: <strong>FIRST.</strong> First to hear. First to see. First to prove it.
      </Callout>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
        {METRICS.map((m, i) => <StatBox key={i} label={m.label} value={m.value} note={m.note} />)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
        <Card>
          <Lbl>Current Phase</Lbl>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '17px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>Pre-Series A</div>
          <Body style={{ marginBottom: 0 }}>Phase 1 SaaS live. Free + Starter tiers active. Series A fundraise in active preparation. Distribution partnership conversations underway.</Body>
        </Card>
        <Card>
          <Lbl>Stage</Lbl>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '17px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>{CLIENT.stage}</div>
          <Body style={{ marginBottom: 0 }}>Post-merger brand unification in progress. Visual and verbal system documentation underway. Figma GDS26R in active development.</Body>
        </Card>
      </div>

      <Lbl>Open Priorities</Lbl>
      {OPEN_PRIORITIES.map((p, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: C.s2, border: `1px solid ${C.border}`, borderRadius: '7px', marginBottom: '6px' }}>
          <div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: C.text }}>{p.text}</span>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: C.muted, marginLeft: '10px' }}>{p.owner}</span>
          </div>
          <Chip color={p.urgency === 'Critical' ? C.red : p.urgency === 'High' ? C.amber : C.blue}>{p.urgency}</Chip>
        </div>
      ))}
    </div>
  );
}
