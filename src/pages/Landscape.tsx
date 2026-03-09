import { SectionHeader, Callout, C } from '../components/ui';

export default function LandscapePage() {
  return (
    <div>
      <SectionHeader num="04 / Foundation" title="Landscape" sub="Industry context, macro trends, and cultural moments in music and tech." />
      <Callout>
        Independent music distribution is growing at 20% YoY. Direct-to-fan platforms are replacing intermediaries as artists reclaim data ownership and monetization control. AI tools are compressing production costs while creator economy infrastructure matures.
      </Callout>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: C.sub, lineHeight: 1.65 }}>
        <p>The music industry generated $28.6B in global revenue in 2023, with streaming representing 84% of market value. But streaming economics remain hostile to independent artists — Spotify pays ~$0.003/stream, making fan-owned channels the only sustainable alternative for building a direct relationship with listeners.</p>
        <p>The creator economy is shifting from platform-dependent to portfolio-based income streams: merch, live, community memberships, and direct digital goods. Grouped sits at the intersection of this shift — capturing fans at the moment of excitement and compounding value across the full artist lifecycle.</p>
      </div>
    </div>
  );
}
