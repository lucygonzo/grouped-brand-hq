import { useState } from 'react';
import { VISUAL_IDENTITY } from '../data/brandData';
import { SectionHeader, Card, Lbl, Body, Block, Dot, CopyHex, ColorStrip, C } from '../components/ui';

export default function VisualIdentityPage() {
  return (
    <div>
      <SectionHeader num="03 / Brand" title="Visual Identity" sub="Color system, typography, wordmark, and competitive greenspace. Pending full Figma GDS26R export." />
      <Block variant="amber"><Dot /> Color system below is inferred from site + brand files. Full Figma export (GDS26R node 7-89) pending to confirm all design tokens and asset specifications.</Block>

      <div style={{ marginBottom: '10px' }}>
        <Lbl>Direction</Lbl>
        <Body style={{ marginBottom: 0 }}>{VISUAL_IDENTITY.direction}</Body>
      </div>

      <Lbl style={{ marginTop: '20px' }}>Color Palette — click to copy hex</Lbl>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(145px, 1fr))', gap: '8px', margin: '10px 0 24px' }}>
        {VISUAL_IDENTITY.palette.map(p => <CopyHex key={p.hex} hex={p.hex} name={p.name} role={p.role} />)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
        <Card>
          <Lbl>Typography</Lbl>
          {VISUAL_IDENTITY.typography.map((t, i) => (
            <div key={i} style={{ padding: '9px 0', borderBottom: i < 2 ? `1px solid ${C.border}` : 'none' }}>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.role}</div>
              <div style={{ fontFamily: t.family, fontSize: '16px', color: C.text, margin: '3px 0 2px' }}>{t.family}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: C.sub }}>{t.usage}</div>
            </div>
          ))}
        </Card>
        <Card>
          <Lbl>Wordmark</Lbl>
          <div style={{ margin: '12px 0 8px', fontFamily: 'Syne, sans-serif', fontSize: '34px', fontWeight: 800, color: C.text, letterSpacing: '-0.03em' }}>grouped.</div>
          <Body style={{ fontSize: '12px', marginBottom: '12px' }}>{VISUAL_IDENTITY.wordmark.treatment} {VISUAL_IDENTITY.wordmark.rationale}</Body>
          <Block variant="amber"><Dot /> Logo assets in <a href={VISUAL_IDENTITY.wordmark.driveFolder} target="_blank" rel="noreferrer" style={{ color: C.amber }}>Google Drive</a>. Full export pending from <a href={VISUAL_IDENTITY.wordmark.figmaFile} target="_blank" rel="noreferrer" style={{ color: C.amber }}>Figma GDS26R</a>.</Block>
        </Card>
      </div>

      <Card>
        <Lbl>Competitive Greenspace</Lbl>
        <Body style={{ marginTop: '6px', marginBottom: '16px' }}>The music tech space defaults to purple (Laylo), black (Community), coral (Patreon), and indigo (Discord/OpenStage). Grouped's electric lime occupies genuine visual white space — aggressive, energetic, and music-culture-coded.</Body>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          {VISUAL_IDENTITY.greenspace.map(g => (
            <div key={g.name} style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', marginBottom: '5px' }}>
                {g.colors.map((c, i) => <div key={i} style={{ width: '20px', height: '20px', borderRadius: '4px', background: c, border: `1px solid ${C.border}` }} />)}
              </div>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: g.name === 'grouped.' ? C.accent : C.muted }}>{g.name}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
