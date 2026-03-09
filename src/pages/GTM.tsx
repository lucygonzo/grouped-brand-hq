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
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: '#BFFF00', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{p.label}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: p.status === 'Active' ? '#00E59B' : p.status === 'Optimizing' ? '#FFB020' : '#555566', marginTop: '2px' }}>{p.status}</div>
            </div>
          </div>
          <div style={{ padding: '14px', background: '#15151C', border: `1px solid #272733`, borderRadius: '0 8px 8px 0' }}>
            <Body style={{ marginBottom: '8px', fontSize: '12px' }}>{p.strategy}</Body>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {p.kpis.map((k, j) => <span key={j} style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', background: '#1C1C26', border: `1px solid #33333F`, color: '#9494AA', padding: '2px 7px', borderRadius: '4px' }}>{k}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
