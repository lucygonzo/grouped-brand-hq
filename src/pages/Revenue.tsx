import { REVENUE_TIERS, UNIT_ECONOMICS, PROJECTIONS } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, colorKey, C } from '../components/ui';

export default function RevenuePage() {
  return (
    <div>
      <SectionHeader num="08 / Business" title="Revenue Model" sub="Subscription tiers, transactional revenue, unit economics, and 3-year projections." />
      <Callout>Three revenue layers compound: <strong>SaaS subscriptions</strong> provide predictable MRR. <strong>Email credits</strong> add variable revenue on top. <strong>Transactional</strong> (fan tiers, listening parties, direct sales) layers in as the platform matures. Base case: $100M+. Upside: category-defining platform.</Callout>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '20px' }}>
        {REVENUE_TIERS.map((t, i) => {
          const color = colorKey(t.colorKey);
          return (
            <Card key={i} style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: color }} />
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3px' }}>{t.name}</div>
              <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '22px', fontWeight: 800, color: C.text, marginBottom: '2px' }}>{t.price}<span style={{ fontSize: '12px', fontWeight: 400, color: C.sub }}>/{t.per}</span></div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: t.statusColor === 'teal' ? C.teal : C.amber, marginBottom: '10px' }}>{t.status}</div>
              {t.features.map((f, j) => <div key={j} style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '11px', color: C.sub, padding: '4px 0', borderBottom: `1px solid ${C.border}40` }}>{f}</div>)}
            </Card>
          );
        })}
      </div>

      <Card style={{ marginBottom: '20px' }}>
        <Lbl>Unit Economics</Lbl>
        <div style={{ overflowX: 'auto', marginTop: '10px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Satoshi', sans-serif", fontSize: '12px' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                {['Metric', 'Observed (Tribly 2025)', 'Target (Pro Forma)', 'Note'].map(h => <th key={h} style={{ textAlign: 'left', padding: '6px 10px', fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 400 }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {UNIT_ECONOMICS.map((r, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${C.border}40` }}>
                  <td style={{ padding: '8px 10px', color: C.text }}>{r.metric}</td>
                  <td style={{ padding: '8px 10px', color: C.sub, fontFamily: "'JetBrains Mono', monospace" }}>{r.observed}</td>
                  <td style={{ padding: '8px 10px', color: C.accent, fontFamily: "'JetBrains Mono', monospace" }}>{r.target}</td>
                  <td style={{ padding: '8px 10px', color: C.muted, fontSize: '11px' }}>{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <Lbl>3-Year Projections (Base Case)</Lbl>
        <Block variant="amber">Email credit revenue NOT included in projections — represents meaningful additional upside once pricing is finalized.</Block>
        <div style={{ overflowX: 'auto', marginTop: '10px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                {['Year', 'Ad Spend', 'Sign-ups', 'Paid Subs (EOY)', 'Total Revenue', 'EOY ARR', 'Cumulative ROI'].map(h => <th key={h} style={{ textAlign: 'left', padding: '6px 10px', fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 400 }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {PROJECTIONS.map((p, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${C.border}40` }}>
                  <td style={{ padding: '8px 10px', color: C.accent, fontWeight: 500 }}>{p.year}</td>
                  <td style={{ padding: '8px 10px', color: C.sub }}>{p.spend}</td>
                  <td style={{ padding: '8px 10px', color: C.sub }}>{p.signups}</td>
                  <td style={{ padding: '8px 10px', color: C.sub }}>{p.paid}</td>
                  <td style={{ padding: '8px 10px', color: C.text, fontWeight: 500 }}>{p.rev}</td>
                  <td style={{ padding: '8px 10px', color: C.text, fontWeight: 500 }}>{p.arr}</td>
                  <td style={{ padding: '8px 10px', color: p.roiPositive ? C.teal : C.sub }}>{p.roi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
