import { SectionHeader, Callout, Card, Lbl, C } from '../components/ui';

export default function NewsFeedPage() {
  return (
    <div>
      <SectionHeader num="03 / Foundation" title="Live News Feed" sub="AI-curated briefings on music tech, direct-to-fan, and competitor moves." />
      <Callout>
        News feed is configured to track: direct-to-fan platforms, music distribution, creator economy, fan engagement tools, and Grouped competitors. Configure RSS sources to activate automated daily briefings.
      </Callout>
      <Card style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '24px' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.amber, textTransform: 'uppercase', letterSpacing: '0.14em' }}>Coming Soon</div>
        <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '12px', color: C.sub }}>RSS feed integration + AI daily briefing. Activate by connecting RSS sources in settings.</div>
      </Card>
    </div>
  );
}
