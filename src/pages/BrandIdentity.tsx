import { BRAND_IDENTITY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, C } from '../components/ui';

export default function BrandIdentityPage() {
  return (
    <div>
      <SectionHeader num="02 / Brand" title="Brand Identity" sub="Archetype, brand anchor, mission, values, personality, and inspiration that drive every Grouped decision." />
      <Callout>
        The single idea the whole brand stands on: <strong>FIRST.</strong> First to hear. First to see. First to react. First to prove it. Every feature maps back to this. Swaps = first access. Feed = first to know. Groups = first in. Gamification = first on the leaderboard.
      </Callout>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
        <Card>
          <Lbl>Brand Archetype</Lbl>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '18px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>{BRAND_IDENTITY.archetype}</div>
          <Body style={{ marginBottom: 0, fontSize: '12px' }}>{BRAND_IDENTITY.archetypeNote}</Body>
        </Card>
        <Card>
          <Lbl>Brand Anchor</Lbl>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '32px', fontWeight: 800, color: C.accent, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '8px' }}>{BRAND_IDENTITY.brandAnchor}</div>
          <Body style={{ marginBottom: 0, fontSize: '12px' }}>{BRAND_IDENTITY.brandAnchorNote}</Body>
        </Card>
      </div>

      <Card style={{ marginBottom: '20px' }}>
        <Lbl>Core Narrative</Lbl>
        <Body style={{ fontStyle: 'italic', marginBottom: 0 }}>{BRAND_IDENTITY.coreNarrative}</Body>
      </Card>

      <Card style={{ marginBottom: '20px' }}>
        <Lbl>Core Values</Lbl>
        {BRAND_IDENTITY.values.map((v, i) => (
          <div key={i} style={{ display: 'flex', gap: '16px', padding: '11px 0', borderBottom: i < BRAND_IDENTITY.values.length - 1 ? `1px solid ${C.border}` : 'none' }}>
            <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: C.accent, minWidth: '160px', paddingTop: '1px' }}>{v.name}</div>
            <Body style={{ marginBottom: 0, lineHeight: 1.6 }}>{v.desc}</Body>
          </div>
        ))}
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
        <Card>
          <Lbl>Personality Traits</Lbl>
          {BRAND_IDENTITY.personalityTraits.map((p, i) => (
            <div key={i} style={{ padding: '8px 0', borderBottom: i < BRAND_IDENTITY.personalityTraits.length - 1 ? `1px solid ${C.border}` : 'none' }}>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: C.accent, marginBottom: '3px' }}>{p.trait}</div>
              <Body style={{ marginBottom: 0, fontSize: '11px' }}>{p.note}</Body>
            </div>
          ))}
        </Card>
        <Card>
          <Lbl>Brand Inspiration</Lbl>
          {BRAND_IDENTITY.inspiration.map((b, i) => (
            <div key={i} style={{ padding: '8px 0', borderBottom: i < BRAND_IDENTITY.inspiration.length - 1 ? `1px solid ${C.border}` : 'none' }}>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: C.accent, marginBottom: '3px' }}>{b.brand}</div>
              <Body style={{ marginBottom: 0, fontSize: '11px' }}>{b.reason}</Body>
            </div>
          ))}
        </Card>
      </div>

      <Card style={{ marginBottom: '14px' }}>
        <Lbl>Anti-Patterns (what we explicitly avoid)</Lbl>
        {BRAND_IDENTITY.antiPatterns.map((p, i) => (
          <div key={i} style={{ display: 'flex', gap: '8px', padding: '5px 0', fontFamily: 'Inter, sans-serif', fontSize: '12px', color: C.sub }}>
            <span style={{ color: C.red, flexShrink: 0 }}>✗</span>{p}
          </div>
        ))}
      </Card>

      <Block variant="amber">
        <strong>Name note:</strong> {BRAND_IDENTITY.nameConsiderations}
      </Block>
    </div>
  );
}
