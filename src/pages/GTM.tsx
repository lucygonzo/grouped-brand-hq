import { GTM_PHASES } from '../data/brandData';
import { SectionHeader, Callout, Body, Lbl, C } from '../components/ui';

export default function GTMPage() {
  return (
    <div>
      <SectionHeader num="10 / Business" title="Go-to-Market" sub="Acquisition, activation, growth, retention, and referral." />
      <Callout>The distribution partnership play is the key unlock: integrating into the upload flow of the top 2 distributors (controlling 50%+ of market) turns every music upload into a Grouped acquisition moment — at zero marginal cost to Grouped.</Callout>
      {GTM_PHASES.map((p, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', marginBottom: '2px' }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '14px', background: '#15151C', border: `1px solid #272733`, borderRadius: '8px 0 0 8px', borderRight: 'none' }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: '#C48A3A', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{p.label}</div>
              <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '10px', color: p.status === 'Active' ? '#8BAF9C' : p.status === 'Optimizing' ? '#D4A24B' : '#78716C', marginTop: '2px' }}>{p.status}</div>
            </div>
          </div>
          <div style={{ padding: '14px', background: '#15151C', border: `1px solid #272733`, borderRadius: '0 8px 8px 0' }}>
            <Body style={{ marginBottom: '8px', fontSize: '12px' }}>{p.strategy}</Body>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {p.kpis.map((k, j) => <span key={j} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', background: '#1F2735', border: `1px solid #2E3849`, color: '#A8A29E', padding: '2px 7px', borderRadius: '4px' }}>{k}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
