import { useState } from 'react';
import { VISUAL_IDENTITY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, StatBox, C, F, R } from '../components/ui';

const VI = VISUAL_IDENTITY;

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '12px', marginTop: '28px', paddingBottom: '6px', borderBottom: `1px solid ${C.border}` }}>{children}</div>
);

const Swatch = ({ hex, opacity, token, usage, primary }: { hex: string; opacity?: string; token: string; usage: string; primary?: boolean }) => {
  const [copied, setCopied] = useState(false);
  const bgColor = opacity
    ? `rgba(${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)},${parseFloat(opacity)/100})`
    : hex;
  return (
    <div onClick={() => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1200); }}
      style={{ cursor: 'pointer', background: C.s1, border: `1px solid ${primary ? C.accent+'50' : C.border}`, borderRadius: R.sm, overflow: 'hidden' }}>
      <div style={{ height: '32px', background: bgColor, position: 'relative' }}>
        {primary && <div style={{ position: 'absolute', top: '4px', right: '6px', fontFamily: F.mono, fontSize: '7px', color: 'rgba(0,0,0,0.5)' }}>★</div>}
      </div>
      <div style={{ padding: '8px 10px' }}>
        <div style={{ fontFamily: F.mono, fontSize: '9px', color: copied ? C.accent : C.text }}>{copied ? 'Copied!' : hex}{opacity ? ` / ${opacity}` : ''}</div>
        <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, marginTop: '1px' }}>{token}</div>
        <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, marginTop: '3px', lineHeight: 1.35 }}>{usage}</div>
      </div>
    </div>
  );
};

const TABS = ['Overview', 'Colors', 'Typography', 'Surfaces + Radius', 'Logo', 'Motif + Motion', 'Brand Elements'];

export default function VisualIdentityPage() {
  const [tab, setTab] = useState('Overview');

  return (
    <div>
      <SectionHeader num="03 / Brand" title="Visual Identity"
        sub={`${VI.systemVersion} · Source: lucygonzo.github.io/grouped_brand/ · ${VI.scope}`} />

      <Block variant="blue">
        <strong>Two visual systems.</strong> This page documents the <strong>Brand + Marketing</strong> system. Product UI runs a separate spec — see the P/ section of the design system. Do not conflate them.
      </Block>

      <SubTabs tabs={TABS} active={tab} onChange={setTab} />

      {/* ── OVERVIEW ── */}
      {tab === 'Overview' && (
        <div>
          <SectionLabel>Foundation</SectionLabel>
          <Callout>{VI.foundationPrinciple}</Callout>

          <SectionLabel>The Feeling</SectionLabel>
          <Card>
            <Body style={{ fontStyle: 'italic', fontSize: '14px', color: C.text, marginBottom: 0 }}>"{VI.extensionMetaphor}"</Body>
          </Card>

          <SectionLabel>Design Principles</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '24px' }}>
            {VI.designPrinciples.map((p, i) => (
              <Card key={i}>
                <div style={{ fontSize: '20px', marginBottom: '8px', opacity: 0.6 }}>{p.symbol}</div>
                <div style={{ fontFamily: F.body, fontSize: '15px', fontWeight: 800, color: C.accent, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{p.name}</div>
                <Body style={{ marginBottom: 0, fontSize: '12px' }}>{p.desc}</Body>
              </Card>
            ))}
          </div>

          <SectionLabel>What to Avoid</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '24px' }}>
            {VI.motion.avoidList.map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', padding: '8px 12px', background: C.s2, border: `1px solid ${C.border}`, borderRadius: R.sm }}>
                <span style={{ color: C.error, fontSize: '10px', flexShrink: 0, marginTop: '1px' }}>✕</span>
                <span style={{ fontFamily: F.body, fontSize: '11px', color: C.sub }}>{a}</span>
              </div>
            ))}
          </div>

          <SectionLabel>Competitive Greenspace</SectionLabel>
          <Card>
            <Body style={{ marginBottom: '16px' }}>Music tech defaults to purple (Laylo), black (Community), coral (Patreon), indigo (Discord/OpenStage). Grouped's bronze + deep navy is entirely unoccupied.</Body>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
              {VI.colorSystem.greenspace.map(g => (
                <div key={g.name} style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', marginBottom: '5px' }}>
                    {g.colors.map((col, i) => <div key={i} style={{ width: '22px', height: '22px', borderRadius: '4px', background: col, border: `1px solid ${C.border}` }} />)}
                  </div>
                  <div style={{ fontFamily: F.mono, fontSize: '9px', color: g.name === 'grouped.' ? C.accent : C.muted }}>{g.name}</div>
                  <div style={{ fontFamily: F.body, fontSize: '9px', color: C.muted, marginTop: '2px' }}>{g.note}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* ── COLORS ── */}
      {tab === 'Colors' && (
        <div>
          <Block variant="amber">Three temperature layers: <strong>cool navy surfaces</strong> · <strong>warm bronze brand elements</strong> · <strong>cool blue interactive accents</strong>. Bronze = brand voice. Focus blue = interface voice. Never swap them.</Block>

          <SectionLabel>Navy Rule</SectionLabel>
          <Callout>{VI.colorSystem.navyRule}</Callout>
          <Block variant="red" style={{ marginTop: '-8px' }}>{VI.colorSystem.neverUse}</Block>

          <SectionLabel>Backgrounds</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '8px', marginBottom: '24px' }}>
            {VI.colorSystem.backgrounds.map(c => <Swatch key={c.token} hex={c.hex} token={c.token} usage={c.usage} />)}
          </div>

          <SectionLabel>Bronze Scale — Primary Brand Accent</SectionLabel>
          <Block variant="amber">★ #C48A3A (--bronze-400) is the PRIMARY brand accent — headlines, logo, CTAs, section labels, arc motif. Use --bronze-300 (#F6B44E) for body-size text (AA contrast compliant). Never use on interactive feedback elements.</Block>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px', marginBottom: '24px' }}>
            {VI.colorSystem.bronze.map(c => <Swatch key={c.scale} hex={c.hex} token={`--bronze-${c.scale}`} usage={c.usage} primary={c.scale === '400'} />)}
          </div>

          <SectionLabel>Focus Blue — Interactive States Only</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '14px', marginBottom: '24px', alignItems: 'start' }}>
            <Swatch hex={VI.colorSystem.focusBlue.hex} token={VI.colorSystem.focusBlue.token} usage="Focus rings, stickers, badges, active indicators, data viz" />
            <div>
              <Card style={{ marginBottom: '8px' }}>
                <Lbl>The Split Rule</Lbl>
                <Body style={{ marginBottom: '6px' }}>{VI.colorSystem.focusBlue.splitTest}</Body>
                <Body style={{ marginBottom: 0, fontSize: '11px' }}>{VI.colorSystem.focusBlue.cardHoverNote}</Body>
              </Card>
            </div>
          </div>

          <SectionLabel>Text Hierarchy — Warm Cream</SectionLabel>
          <Block variant="default">{VI.colorSystem.figmaTextNote}</Block>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px', marginBottom: '24px' }}>
            {VI.colorSystem.text.map(c => (
              <div key={c.token} style={{ background: C.s1, border: `1px solid ${C.border}`, borderRadius: R.sm, padding: '12px' }}>
                <div style={{ height: '28px', display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ fontFamily: F.body, fontSize: '16px', fontWeight: 700, color: c.hex.startsWith('rgba') ? c.hex : c.hex }}>Aa</div>
                </div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, marginBottom: '2px' }}>{c.token}</div>
                <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, marginBottom: '4px' }}>{c.hex}</div>
                <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, lineHeight: 1.4 }}>{c.note}</div>
              </div>
            ))}
          </div>

          <SectionLabel>Borders — Warm White at Low Opacity</SectionLabel>
          <Block variant="default">{VI.colorSystem.borderNote}</Block>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px', marginBottom: '24px' }}>
            {VI.colorSystem.borders.map(c => (
              <div key={c.token} style={{ background: C.s1, border: `2px solid ${c.value}`, borderRadius: R.sm, padding: '12px' }}>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, marginBottom: '3px' }}>{c.token}</div>
                <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, marginBottom: '4px' }}>{c.value}</div>
                <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub }}>{c.usage}</div>
              </div>
            ))}
          </div>

          <SectionLabel>Semantic Colors — Vivid Palette</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px', marginBottom: '24px' }}>
            {VI.colorSystem.semantic.map(c => <Swatch key={c.token} hex={c.hex} token={c.token} usage={c.usage} />)}
          </div>

          <SectionLabel>Feature Colors</SectionLabel>
          <Block variant="default">{VI.colorSystem.featureNote}</Block>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px' }}>
            {VI.colorSystem.featureColors.map(c => <Swatch key={c.feature} hex={c.hex} token={c.feature} usage={c.usage} />)}
          </div>
        </div>
      )}

      {/* ── TYPOGRAPHY ── */}
      {tab === 'Typography' && (
        <div>
          <Block variant="default">{VI.typography.systemNote}</Block>
          <Block variant="amber" style={{ marginTop: '-4px' }}>{VI.typography.figmaNote}</Block>

          <SectionLabel>Typefaces</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {VI.typography.fonts.map((f, i) => (
              <Card key={i}>
                <Chip color={i === 0 ? C.accent : i === 1 ? C.focus : C.success}>{f.role}</Chip>
                <div style={{ fontFamily: F.body, fontSize: '18px', fontWeight: 800, color: C.text, margin: '10px 0 4px' }}>{f.name}</div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, marginBottom: '8px' }}>{f.stack}</div>
                {'source' in f && f.source && (
                  <a href={f.source} target="_blank" rel="noreferrer" style={{ fontFamily: F.mono, fontSize: '9px', color: C.focus, textDecoration: 'none', display: 'block', marginBottom: '8px' }}>↗ Download / Source</a>
                )}
                {'useFor' in f && f.useFor && (
                  <div style={{ marginBottom: '8px' }}>
                    <Lbl>Use for</Lbl>
                    {f.useFor.map((u, j) => <div key={j} style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, padding: '1px 0' }}>+ {u}</div>)}
                  </div>
                )}
                {'dontUseFor' in f && f.dontUseFor && (
                  <div style={{ marginBottom: '8px' }}>
                    <Lbl>Do not use for</Lbl>
                    {f.dontUseFor.map((u, j) => <div key={j} style={{ fontFamily: F.body, fontSize: '10px', color: `${C.error}AA`, padding: '1px 0' }}>✕ {u}</div>)}
                  </div>
                )}
                {'rule' in f && f.rule && <Block variant="amber"><span style={{ fontSize: '10px' }}>{f.rule}</span></Block>}
                {'semiboldNote' in f && f.semiboldNote && <Block variant="default"><span style={{ fontSize: '10px' }}>{f.semiboldNote}</span></Block>}
              </Card>
            ))}
          </div>

          <SectionLabel>Marketing Type Scale</SectionLabel>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: R.sm, overflow: 'hidden', marginBottom: '28px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 55px 90px 55px 70px 1fr', background: C.s3, padding: '7px 14px' }}>
              {['Token','Size','Weight','LH','LS','Usage'].map(h => <div key={h} style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</div>)}
            </div>
            {VI.typography.scaleMarketing.map((s, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 55px 90px 55px 70px 1fr', padding: '8px 14px', borderTop: `1px solid ${C.border}`, alignItems: 'center' }}>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent }}>{s.token}</div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.text }}>{s.size}</div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub }}>{s.weight}</div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub }}>{s.lh}</div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub }}>{s.ls}</div>
                <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub }}>{s.usage}</div>
              </div>
            ))}
          </div>

          <SectionLabel>Product Type Scale (D0–C7)</SectionLabel>
          <Block variant="blue">Product body text defaults to <strong>14px</strong>, not 16px — intentional product override for data-dense dashboard layouts. D0/D1 use Anacrusis. Everything else is Satoshi.</Block>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: R.sm, overflow: 'hidden', marginBottom: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '60px 55px 100px 50px 65px 1fr 70px', background: C.s3, padding: '7px 14px' }}>
              {['Token','Size','Font','LH','LS','Usage','Override'].map(h => <div key={h} style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</div>)}
            </div>
            {VI.typography.scaleProduct.map((s, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 55px 100px 50px 65px 1fr 70px', padding: '7px 14px', borderTop: `1px solid ${C.border}`, alignItems: 'center', background: 'override' in s && s.override ? `${C.warning}08` : 'transparent' }}>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: 'override' in s && s.override ? C.warning : C.accent }}>{s.token}</div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.text }}>{s.size}</div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: s.font === 'Anacrusis' ? C.accent : C.sub }}>{s.font}</div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub }}>{s.lh}</div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub }}>{s.ls}</div>
                <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub }}>{s.usage}</div>
                <div>{'override' in s && s.override && <Chip color={C.warning}>Override</Chip>}</div>
              </div>
            ))}
          </div>

          <SectionLabel>Type Rules</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {VI.typography.rules.map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', padding: '8px 12px', background: C.s2, border: `1px solid ${C.border}`, borderRadius: R.sm }}>
                <span style={{ color: C.accent, fontSize: '10px', flexShrink: 0, marginTop: '1px' }}>→</span>
                <span style={{ fontFamily: F.body, fontSize: '11px', color: C.sub }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── SURFACES + RADIUS ── */}
      {tab === 'Surfaces + Radius' && (
        <div>
          <Callout>{VI.surfaces.concept}</Callout>

          <SectionLabel>Surface Types</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {VI.surfaces.types.map((s, i) => (
              <Card key={i}>
                <div style={{ fontFamily: F.body, fontSize: '14px', fontWeight: 700, color: C.text, marginBottom: '8px' }}>{s.name}</div>
                <Body style={{ fontSize: '12px', marginBottom: 0 }}>{s.description}</Body>
              </Card>
            ))}
          </div>

          <SectionLabel>Stacking Rule</SectionLabel>
          <Block variant="default">{VI.surfaces.stackingRule}</Block>

          <SectionLabel>Grain + Ambient Glow</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            <Card><Lbl>Grain Texture</Lbl><Body style={{ fontSize: '12px', marginBottom: 0 }}>{VI.surfaces.grain}</Body></Card>
            <Card><Lbl>Ambient Glow</Lbl><Body style={{ fontSize: '12px', marginBottom: 0 }}>{VI.surfaces.ambientGlow}</Body></Card>
          </div>

          <SectionLabel>Border Radius — 4-Token Scale</SectionLabel>
          <Block variant="default">{VI.radiusSystem.note}<br /><br /><em>{VI.radiusSystem.figmaNote}</em></Block>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px', marginBottom: '24px' }}>
            {VI.radiusSystem.tokens.map((r, i) => (
              <Card key={i} style={{ textAlign: 'center', padding: '16px' }}>
                <div style={{ width: '44px', height: '44px', background: C.s3, border: `1px solid ${C.accent}40`, borderRadius: r.value, margin: '0 auto 12px' }} />
                <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, marginBottom: '2px' }}>{r.token}</div>
                <div style={{ fontFamily: F.mono, fontSize: '13px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>{r.value}</div>
                <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, lineHeight: 1.4 }}>{r.usage}</div>
              </Card>
            ))}
          </div>

          <SectionLabel>Spacing Scale — 4px Base</SectionLabel>
          <Block variant="default"><strong>4px base unit.</strong> All values are multiples of 4. Exception: 6px for micro icon-text gaps only. Avoid 10px (Figma default, not in the system).</Block>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: R.sm, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 70px 1fr', background: C.s3, padding: '7px 14px' }}>
              {['Token','Value','When to use'].map(h => <div key={h} style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</div>)}
            </div>
            {VI.spacing.scale.map((s, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 70px 1fr', padding: '7px 14px', borderTop: `1px solid ${C.border}`, alignItems: 'center' }}>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent }}>{s.token}</div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.text }}>{s.value}</div>
                <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub }}>{s.when}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── LOGO ── */}
      {tab === 'Logo' && (
        <div>
          <Block variant="amber">Always use approved logo files. Never recreate or approximate the Vinyl G mark. Assets live on GitHub Pages and Google Drive.</Block>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
            <a href={VI.logoSystem.assetsUrl} target="_blank" rel="noreferrer" style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, textDecoration: 'none', padding: '6px 14px', border: `1px solid ${C.accent}40`, borderRadius: R.full }}>↗ SVG Assets</a>
            <a href={VI.logoSystem.driveUrl} target="_blank" rel="noreferrer" style={{ fontFamily: F.mono, fontSize: '9px', color: C.focus, textDecoration: 'none', padding: '6px 14px', border: `1px solid ${C.focus}40`, borderRadius: R.full }}>↗ Google Drive</a>
            <a href={VI.logoSystem.figmaUrl} target="_blank" rel="noreferrer" style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub, textDecoration: 'none', padding: '6px 14px', border: `1px solid ${C.border}`, borderRadius: R.full }}>↗ Figma GDS26R</a>
          </div>

          <SectionLabel>The Mark</SectionLabel>
          <Card style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Live SVG logos from GitHub Pages */}
              {[
                { label: 'Vinyl G Icon', src: 'https://lucygonzo.github.io/Logo%20Assets/SVG/Grouped_Rebrand_Visual%20Assets_VinylG%20Icon_WarmBronze.svg', desc: 'Favicons, app icons, avatars. Min: 24px.' },
                { label: 'Horizontal Lockup', src: 'https://lucygonzo.github.io/Logo%20Assets/SVG/Grouped_Rebrand_Visual%20Assets_Lockup%20Horizontal_Warm%20Bronze.svg', desc: 'PRIMARY. Nav, headers, footers. Min: 100px wide.' },
                { label: 'Vertical Lockup', src: 'https://lucygonzo.github.io/Logo%20Assets/SVG/Grouped_Rebrand_Visual%20Assets_Lockup%20Vertical_Warm%20Bronze.svg', desc: 'Social profiles, splash screens, square formats.' },
              ].map((logo, i) => (
                <div key={i} style={{ textAlign: 'center', flex: i === 1 ? '1 1 200px' : '0 0 auto' }}>
                  <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: R.sm, padding: '16px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60px' }}>
                    <img src={logo.src} alt={logo.label} style={{ maxHeight: '48px', maxWidth: '160px', objectFit: 'contain' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  </div>
                  <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, marginBottom: '3px' }}>{logo.label}</div>
                  <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub }}>{logo.desc}</div>
                </div>
              ))}
            </div>
          </Card>

          <SectionLabel>Color Variants</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '8px', marginBottom: '24px' }}>
            {VI.logoSystem.colorVariants.map((v, i) => (
              <Card key={i} style={{ textAlign: 'center', padding: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: v.hex === '#000000' ? '#000' : v.hex === '#FFFFFF' ? '#FFF' : v.hex, border: `1px solid ${C.border}`, margin: '0 auto 8px' }} />
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, marginBottom: '2px' }}>{v.name}</div>
                <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, marginBottom: '4px' }}>{v.hex}</div>
                <div style={{ fontFamily: F.body, fontSize: '9px', color: C.sub }}>{v.use}</div>
              </Card>
            ))}
          </div>

          <SectionLabel>Extended Library</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '24px' }}>
            {VI.logoSystem.extendedLibrary.map((l, i) => (
              <Card key={i}>
                <div style={{ fontFamily: F.body, fontSize: '12px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>{l.name}</div>
                <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub }}>{l.use}</div>
              </Card>
            ))}
          </div>

          <SectionLabel>Wordmark</SectionLabel>
          <Card>
            <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '40px', fontWeight: 900, color: C.accent, letterSpacing: '-0.03em', marginBottom: '12px' }}>grouped.</div>
            <Body style={{ fontSize: '12px' }}>{VI.logoSystem.wordmark}</Body>
          </Card>

          <SectionLabel>Do / Don't</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <Card>
              <Lbl style={{ color: C.success }}>Do</Lbl>
              {VI.logoSystem.dos.map((d, i) => <div key={i} style={{ display: 'flex', gap: '8px', padding: '4px 0', fontFamily: F.body, fontSize: '11px', color: C.sub }}><span style={{ color: C.success }}>✓</span>{d}</div>)}
            </Card>
            <Card>
              <Lbl style={{ color: C.error }}>Don't</Lbl>
              {VI.logoSystem.donts.map((d, i) => <div key={i} style={{ display: 'flex', gap: '8px', padding: '4px 0', fontFamily: F.body, fontSize: '11px', color: C.sub }}><span style={{ color: C.error }}>✕</span>{d}</div>)}
            </Card>
          </div>
        </div>
      )}

      {/* ── MOTIF + MOTION ── */}
      {tab === 'Motif + Motion' && (
        <div>
          <SectionLabel>Signature Motif — Concentric Arcs</SectionLabel>
          <Callout><strong>{VI.signatureMotif.name}.</strong> {VI.signatureMotif.meaning} {VI.signatureMotif.markDNA}</Callout>

          <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '20px', marginBottom: '24px', alignItems: 'start' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '180px', background: C.s2, border: `1px solid ${C.border}`, borderRadius: R.sm }}>
              <svg viewBox="0 0 200 200" width="160" height="160">
                <g>
                  <circle cx="100" cy="100" r="82" fill="none" stroke="#C48A3A" strokeWidth="28" strokeDasharray="200 320" />
                  <circle cx="100" cy="100" r="56" fill="none" stroke="#C48A3A" strokeWidth="24" strokeDasharray="160 210" />
                  <circle cx="100" cy="100" r="34" fill="none" stroke="#C48A3A" strokeWidth="18" strokeDasharray="100 120" />
                </g>
                <text x="100" y="107" textAnchor="middle" fill="#C48A3A" fontSize="18" fontWeight="bold" fontFamily="serif" opacity="0.35">G</text>
              </svg>
            </div>
            <Card>
              <Lbl>Construction Rules</Lbl>
              {VI.signatureMotif.rules.map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', padding: '6px 0', borderBottom: i < VI.signatureMotif.rules.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                  <span style={{ color: C.accent, fontSize: '10px', flexShrink: 0 }}>→</span>
                  <span style={{ fontFamily: F.body, fontSize: '11px', color: C.sub }}>{r}</span>
                </div>
              ))}
            </Card>
          </div>

          <SectionLabel>Usage Modes</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginBottom: '24px' }}>
            {VI.signatureMotif.configurations.map((c, i) => (
              <Card key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent, marginBottom: '4px' }}>{c.name}</div>
                <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub }}>{c.use}</div>
              </Card>
            ))}
          </div>

          <SectionLabel>Motion Priority</SectionLabel>
          <Block variant="red"><strong>Phase 2.</strong> {VI.motion.priority}</Block>

          <SectionLabel>Motion Principles</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '24px' }}>
            {VI.motion.principles.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', padding: '8px 12px', background: C.s2, border: `1px solid ${C.border}`, borderRadius: R.sm }}>
                <span style={{ color: C.accent, fontSize: '10px', flexShrink: 0, marginTop: '1px' }}>→</span>
                <span style={{ fontFamily: F.body, fontSize: '11px', color: C.sub }}>{p}</span>
              </div>
            ))}
          </div>

          <SectionLabel>Easing Library</SectionLabel>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: R.sm, overflow: 'hidden', marginBottom: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr 1fr', background: C.s3, padding: '7px 14px' }}>
              {['Token','Value','Usage'].map(h => <div key={h} style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</div>)}
            </div>
            {VI.motion.easing.map((e, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '130px 1fr 1fr', padding: '8px 14px', borderTop: `1px solid ${C.border}`, alignItems: 'center' }}>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.accent }}>{e.token}</div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub }}>{e.value}</div>
                <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub }}>{e.usage}</div>
              </div>
            ))}
          </div>

          <SectionLabel>Duration Scale</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '8px' }}>
            {VI.motion.durations.map((d, i) => (
              <Card key={i} style={{ textAlign: 'center', padding: '12px' }}>
                <div style={{ fontFamily: F.mono, fontSize: '11px', fontWeight: 700, color: C.text, marginBottom: '3px' }}>{d.ms}ms</div>
                <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub }}>{d.name}</div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* ── BRAND ELEMENTS ── */}
      {tab === 'Brand Elements' && (
        <div>
          <SectionLabel>Physical Controls</SectionLabel>
          <Callout>{VI.brandElements.physicalControls.concept}</Callout>
          <Block variant="amber">{VI.brandElements.physicalControls.rule}</Block>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginBottom: '24px' }}>
            {VI.brandElements.physicalControls.types.map((t, i) => (
              <Card key={i}>
                <div style={{ fontFamily: F.body, fontSize: '13px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>{t.name}</div>
                <Body style={{ fontSize: '11px', marginBottom: 0 }}>{t.desc}</Body>
              </Card>
            ))}
          </div>

          <SectionLabel>Badge + Patch Aesthetic</SectionLabel>
          <Card style={{ marginBottom: '24px' }}>
            <Body style={{ marginBottom: '6px' }}>{VI.brandElements.badgePatch.concept}</Body>
            <Body style={{ marginBottom: 0, fontStyle: 'italic', color: C.text }}>{VI.brandElements.badgePatch.feel}</Body>
          </Card>

          <SectionLabel>Interaction Language</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            <Card>
              <Chip color={C.focus}>Light Elements</Chip>
              <Body style={{ marginTop: '6px', marginBottom: 0, fontSize: '12px' }}>{VI.brandElements.interactionLanguage.light}</Body>
            </Card>
            <Card>
              <Chip color={C.muted}>Solid Elements</Chip>
              <Body style={{ marginTop: '6px', marginBottom: 0, fontSize: '12px' }}>{VI.brandElements.interactionLanguage.solid}</Body>
            </Card>
          </div>
          <Block variant="default">{VI.brandElements.interactionLanguage.interplay}</Block>

          <SectionLabel>Iconography</SectionLabel>
          <Block variant="amber"><strong>{VI.iconography.status}</strong> {VI.iconography.note}</Block>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px', marginBottom: '16px' }}>
            {VI.iconography.sizes.map((s, i) => (
              <Card key={i} style={{ textAlign: 'center', padding: '12px' }}>
                <div style={{ fontFamily: F.mono, fontSize: '13px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>{s.size}</div>
                <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub }}>{s.use}</div>
              </Card>
            ))}
          </div>
          {VI.iconography.colorRules.map((r, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', padding: '7px 12px', background: C.s2, border: `1px solid ${C.border}`, borderRadius: R.sm, marginBottom: '4px' }}>
              <span style={{ color: C.accent, flexShrink: 0, fontSize: '10px', marginTop: '1px' }}>→</span>
              <span style={{ fontFamily: F.body, fontSize: '11px', color: C.sub }}>{r}</span>
            </div>
          ))}

          <SectionLabel>Photography</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <Card>
              <Lbl style={{ color: C.success }}>Do</Lbl>
              {VI.photography.dos.map((d, i) => <div key={i} style={{ display: 'flex', gap: '8px', padding: '3px 0', fontFamily: F.body, fontSize: '11px', color: C.sub }}><span style={{ color: C.success, flexShrink: 0 }}>✓</span>{d}</div>)}
            </Card>
            <Card>
              <Lbl style={{ color: C.error }}>Don't</Lbl>
              {VI.photography.donts.map((d, i) => <div key={i} style={{ display: 'flex', gap: '8px', padding: '3px 0', fontFamily: F.body, fontSize: '11px', color: C.sub }}><span style={{ color: C.error, flexShrink: 0 }}>✕</span>{d}</div>)}
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
