import { useState } from 'react';
import { VERBAL_IDENTITY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, C } from '../components/ui';

export default function VerbalIdentityPage() {
  const [sub, setSub] = useState('positioning');

  return (
    <div>
      <SectionHeader num="04 / Brand" title="Verbal Identity" sub="Positioning, voice, tone, and audience-specific messaging cheat sheet." />
      <SubTabs tabs={['positioning', 'voice', 'messaging']} active={sub} onChange={setSub} />

      {sub === 'positioning' && (
        <div>
          <Callout>
            The brand anchor is <strong>FIRST</strong> — and the anti-pattern is "community." Don't lead with grouping or community — lead with premiere window, early access, and what it means to be first.
          </Callout>
          <Card style={{ marginBottom: '14px' }}>
            <Lbl>Brand Anchor: FIRST</Lbl>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '10px 0 8px' }}>
              {VERBAL_IDENTITY.brandAnchorCopy.lines.map((l, i) => (
                <div key={i} style={{ background: C.accentGlow, border: `1px solid ${C.accent}30`, borderRadius: '6px', padding: '8px 14px', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '14px', color: C.accent }}>{l}</div>
              ))}
            </div>
            <Body style={{ marginBottom: 0, fontSize: '12px' }}>{VERBAL_IDENTITY.brandAnchorCopy.note}</Body>
          </Card>
          <Block variant="red"><strong>Anti-community note:</strong> {VERBAL_IDENTITY.antiCommunityNote}</Block>
          <Card style={{ marginTop: '14px' }}>
            <Lbl>Approved Taglines</Lbl>
            {VERBAL_IDENTITY.taglines.map((t, i) => (
              <div key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: C.text, padding: '6px 0', borderBottom: i < VERBAL_IDENTITY.taglines.length - 1 ? `1px solid ${C.border}` : 'none', fontStyle: 'italic' }}>"{t}"</div>
            ))}
          </Card>
          <Card style={{ marginTop: '14px' }}>
            <Lbl>The Proof Reframe</Lbl>
            <Body style={{ marginBottom: '10px', fontSize: '12px' }}>Artists measure proxies. Grouped anchors on outcomes artists actually feel.</Body>
            {VERBAL_IDENTITY.proofReframe.map((r, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '10px', padding: '6px 0', borderBottom: i < VERBAL_IDENTITY.proofReframe.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: C.muted, textDecoration: 'line-through' }}>{r.proxy}</span>
                <span style={{ color: C.accent, fontSize: '10px' }}>→</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: C.text }}>{r.real}</span>
              </div>
            ))}
          </Card>
        </div>
      )}

      {sub === 'voice' && (
        <div>
          <Card style={{ marginBottom: '16px' }}>
            <Lbl>Tone Spectrum</Lbl>
            {VERBAL_IDENTITY.voiceSpectrum.map((s, i) => (
              <div key={i} style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: C.text }}>{s.dim}</span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: C.muted }}>{s.pct}%</span>
                </div>
                <div style={{ height: '3px', background: C.s3, borderRadius: '2px' }}>
                  <div style={{ height: '3px', width: `${s.pct}%`, background: C.accent, borderRadius: '2px' }} />
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: C.muted, marginTop: '3px' }}>{s.note}</div>
              </div>
            ))}
          </Card>
          <Card>
            <Lbl>Voice Characteristics</Lbl>
            {VERBAL_IDENTITY.voiceTraits.map((v, i) => (
              <div key={i} style={{ padding: '10px 0', borderBottom: i < VERBAL_IDENTITY.voiceTraits.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{v.trait}</div>
                <Body style={{ marginBottom: 0, fontSize: '12px' }}>{v.ex}</Body>
              </div>
            ))}
          </Card>
        </div>
      )}

      {sub === 'messaging' && (
        <div>
          {VERBAL_IDENTITY.segments.map((seg, i) => (
            <Card key={i} style={{ marginBottom: '14px' }}>
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '15px', fontWeight: 700, color: C.text }}>{seg.name}</div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: C.muted, marginTop: '2px' }}>{seg.range}</div>
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: C.text, fontStyle: 'italic', background: C.s3, padding: '10px', borderRadius: '6px', marginBottom: '12px', lineHeight: 1.65 }}>{seg.story}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                {[{ l: 'Hook', v: `"${seg.hook}"`, it: true }, { l: 'Pain Point', v: seg.pain }, { l: 'Proof Point', v: seg.proof }].map((f, j) => (
                  <div key={j}><Lbl>{f.l}</Lbl><Body style={{ marginBottom: 0, fontSize: '11px', fontStyle: f.it ? 'italic' : 'normal' }}>{f.v}</Body></div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                <div><Lbl>Use</Lbl><div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', marginTop: '4px' }}>{seg.use.map(l => <Chip key={l} color={C.teal}>{l}</Chip>)}</div></div>
                <div><Lbl>Avoid</Lbl><div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', marginTop: '4px' }}>{seg.avoid.map(l => <Chip key={l} color={C.red}>{l}</Chip>)}</div></div>
              </div>
              <div style={{ background: C.accentGlow, borderLeft: `2px solid ${C.accent}`, borderRadius: '0 4px 4px 0', padding: '7px 12px' }}>
                <Lbl style={{ marginBottom: '1px' }}>CTA</Lbl>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: C.text }}>{seg.cta}</span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
