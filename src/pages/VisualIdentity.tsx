import { useState } from 'react';
import { VISUAL_IDENTITY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, C } from '../components/ui';

// ---- Local colour swatch ----
const Swatch = ({ hex, opacity, token, usage }: { hex: string; opacity?: string; token: string; usage: string }) => {
  const [copied, setCopied] = useState(false);
  const display = opacity ? `${hex} / ${opacity}` : hex;
  const copy = () => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1200); };
  return (
    <div onClick={copy} style={{ cursor: 'pointer', background: C.s2, border: `1px solid ${C.border}`, borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ height: '36px', background: opacity ? `rgba(${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)},${parseFloat(opacity)/100})` : hex }} />
      <div style={{ padding: '8px 10px' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: copied ? C.accent : C.text }}>{copied ? 'Copied!' : display}</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, marginTop: '2px' }}>{token}</div>
        <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '10px', color: C.sub, marginTop: '3px', lineHeight: 1.4 }}>{usage}</div>
      </div>
    </div>
  );
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '12px', marginTop: '28px', paddingBottom: '6px', borderBottom: `1px solid ${C.border}` }}>{children}</div>
);

export default function VisualIdentityPage() {
  const VI = VISUAL_IDENTITY;
  const TABS = ['Overview', 'Colors', 'Typography', 'Surfaces', 'Motif + Motion'];
  const [tab, setTab] = useState('Overview');

  return (
    <div>
      <SectionHeader
        num="03 / Brand"
        title="Visual Identity"
        sub="GDS26R v1.0 — February 2026. Brand + Marketing system. Product UI is a separate spec."
      />

      <Block variant="blue">
        <strong>Two visual systems, one brand.</strong> The specs on this page govern the marketing site, pitch decks, social assets, and all brand-facing surfaces. The product app runs a separate design system. Do not conflate the two.
      </Block>

      <a href="brand-guide.html" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: C.accentGlow, border: `1px solid ${C.accent}35`, borderRadius: '7px', marginBottom: '20px', textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '13px', fontWeight: 600, color: C.accent }}>Brand Guide</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>Shareable external version with logo downloads</span>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.accent }}>↗</span>
      </a>

      <SubTabs tabs={TABS} active={tab} onChange={setTab} />

      {/* ===== OVERVIEW ===== */}
      {tab === 'Overview' && (
        <div>
          <SectionLabel>Foundation Principle</SectionLabel>
          <Callout>{VI.foundationPrinciple}</Callout>

          <SectionLabel>Extension Metaphor</SectionLabel>
          <Card style={{ marginBottom: '20px' }}>
            <Body style={{ fontSize: '14px', lineHeight: 1.7, color: C.text, fontStyle: 'italic', marginBottom: 0 }}>"{VI.extensionMetaphor}"</Body>
          </Card>

          <SectionLabel>Design Principles</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
            {VI.designPrinciples.map((p, i) => (
              <Card key={i}>
                <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '16px', fontWeight: 800, color: C.accent, marginBottom: '8px' }}>{p.name}</div>
                <Body style={{ marginBottom: 0, fontSize: '12px' }}>{p.desc}</Body>
              </Card>
            ))}
          </div>

          <SectionLabel>What This System Avoids</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '24px' }}>
            {VI.avoidList.map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '8px 12px', background: C.s2, border: `1px solid ${C.border}`, borderRadius: '6px' }}>
                <span style={{ color: C.red, fontSize: '10px', marginTop: '2px', flexShrink: 0 }}>✕</span>
                <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '11px', color: C.sub }}>{a}</span>
              </div>
            ))}
          </div>

          <SectionLabel>Competitive Greenspace</SectionLabel>
          <Card>
            <Body style={{ marginBottom: '16px' }}>The music tech space defaults to purple (Laylo), black (Community), coral (Patreon), and indigo (Discord/OpenStage). Grouped's bronze + deep navy occupies entirely unoccupied visual territory — premium, warm, music-culture-coded.</Body>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
              {VI.greenspace.map(g => (
                <div key={g.name} style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', marginBottom: '5px' }}>
                    {g.colors.map((col, i) => <div key={i} style={{ width: '22px', height: '22px', borderRadius: '4px', background: col, border: `1px solid ${C.border}` }} />)}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: g.name === 'Grouped' ? C.accent : C.muted }}>{g.name}</div>
                  <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '9px', color: C.muted, marginTop: '2px' }}>{g.note}</div>
                </div>
              ))}
            </div>
          </Card>

          <SectionLabel>Wordmark</SectionLabel>
          <Card>
            <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '42px', fontWeight: 800, color: '#C48A3A', letterSpacing: '-0.03em', marginBottom: '12px' }}>Grouped</div>
            <Body style={{ fontSize: '12px', marginBottom: '10px' }}><strong>Font:</strong> Grouped Font (custom OTF, single weight, 160 glyphs). Title case, no period. Clean, confident, stands on its own.</Body>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href={VI.wordmark.driveFolder} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.amber, textDecoration: 'none', padding: '4px 10px', border: `1px solid ${C.amber}35`, borderRadius: '4px' }}>Google Drive assets</a>
              <a href={VI.wordmark.figmaFile} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.blue, textDecoration: 'none', padding: '4px 10px', border: `1px solid ${C.blue}35`, borderRadius: '4px' }}>Figma GDS26R</a>
            </div>
          </Card>
        </div>
      )}

      {/* ===== COLORS ===== */}
      {tab === 'Colors' && (
        <div>
          <Block variant="default">Three temperature layers: <strong>cool navy surfaces</strong> · <strong>warm bronze brand elements</strong> · <strong>cool blue interactive accents</strong>. Bronze is brand voice. Focus blue is interface voice. Never swap them.</Block>

          <SectionLabel>Backgrounds — Deep Blue</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '24px' }}>
            {VI.colorSystem.backgrounds.map(c => <Swatch key={c.token} hex={c.hex} token={c.token} usage={c.usage} />)}
          </div>

          <SectionLabel>Bronze Palette — Primary Brand Accent</SectionLabel>
          <Block variant="amber">Bronze is the brand voice. Use for headlines, logos, labels, CTAs, concentric arc motif. Never use for interactive states. Use --bronze-300 for body-size text to ensure AA contrast compliance.</Block>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '24px' }}>
            {VI.colorSystem.bronze.map(c => <Swatch key={c.token} hex={c.hex} token={c.token} usage={c.usage} />)}
          </div>

          <SectionLabel>Focus Blue — Interactive States Only</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '14px', marginBottom: '24px' }}>
            <Swatch hex={VI.colorSystem.focusBlue.hex} token={VI.colorSystem.focusBlue.token} usage="Focus rings, stickers, badges, active indicators, data viz" />
            <Card>
              <Lbl>The Split Rule</Lbl>
              <Body style={{ marginBottom: 0 }}>{VI.colorSystem.focusBlue.rule}</Body>
            </Card>
          </div>

          <SectionLabel>Text — Warm White</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '24px' }}>
            {VI.colorSystem.text.map(c => <Swatch key={c.token} hex={c.hex} opacity={c.opacity !== '100%' ? c.opacity : undefined} token={c.token} usage={c.usage} />)}
          </div>

          <SectionLabel>Borders — Warm White at Low Opacity</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '24px' }}>
            {VI.colorSystem.borders.map(c => <Swatch key={c.token} hex={c.hex} opacity={c.opacity} token={c.token} usage={c.usage} />)}
          </div>

          <SectionLabel>Semantic Colors</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '24px' }}>
            {VI.colorSystem.semantic.filter(s => !s.token.includes('muted')).map(c => <Swatch key={c.token} hex={c.hex} token={c.token} usage={c.usage} />)}
          </div>

          <SectionLabel>Ring System — Concentric Arc Motif Colors</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
            {VI.colorSystem.ringSystem.map(c => <Swatch key={c.token} hex={c.hex} opacity={c.opacity} token={c.token} usage={c.state} />)}
          </div>
        </div>
      )}

      {/* ===== TYPOGRAPHY ===== */}
      {tab === 'Typography' && (
        <div>
          <Block variant="default">{VI.typography.systemNote}</Block>

          <SectionLabel>Typefaces</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {VI.typography.fonts.map((f, i) => (
              <Card key={i}>
                <Chip color={i === 0 ? '#C48A3A' : i === 1 ? C.blue : C.teal}>{f.role}</Chip>
                <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '20px', fontWeight: 800, color: C.text, margin: '10px 0 6px' }}>{f.name}</div>
                <Body style={{ fontSize: '11px', marginBottom: '8px' }}>{f.type}</Body>
                {'source' in f && <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginBottom: '8px' }}>{f.source}</div>}
                {'useFor' in f && f.useFor && (
                  <div>
                    <Lbl>Use for</Lbl>
                    {f.useFor.map((u, j) => <div key={j} style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '10px', color: C.sub, padding: '1px 0' }}>+ {u}</div>)}
                  </div>
                )}
                {'dontUseFor' in f && f.dontUseFor && (
                  <div style={{ marginTop: '8px' }}>
                    <Lbl>Do not use for</Lbl>
                    {f.dontUseFor.map((u, j) => <div key={j} style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '10px', color: C.red + 'AA', padding: '1px 0' }}>✕ {u}</div>)}
                  </div>
                )}
                {'rule' in f && f.rule && <Block variant="amber" ><span style={{ fontSize: '11px' }}>{f.rule}</span></Block>}
              </Card>
            ))}
          </div>

          <SectionLabel>Type Scale — Marketing / Website</SectionLabel>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', overflow: 'hidden', marginBottom: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 60px 90px 60px 60px 1fr', background: C.s3, padding: '8px 14px' }}>
              {['Token','Size','Weight','LH','LS','Usage'].map(h => <div key={h} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</div>)}
            </div>
            {VI.typography.scaleMarketing.map((s, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 60px 90px 60px 60px 1fr', padding: '9px 14px', borderTop: `1px solid ${C.border}`, alignItems: 'center' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent }}>{s.token}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.text }}>{s.size}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.sub }}>{s.weight}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.sub }}>{s.lh}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.sub }}>{s.ls}</div>
                <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '11px', color: C.sub }}>{s.usage}</div>
              </div>
            ))}
          </div>

          <SectionLabel>Type Rules</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {VI.typography.rules.map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', padding: '8px 12px', background: C.s2, border: `1px solid ${C.border}`, borderRadius: '6px' }}>
                <span style={{ color: C.accent, fontSize: '10px', flexShrink: 0, marginTop: '2px' }}>→</span>
                <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '11px', color: C.sub }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== SURFACES ===== */}
      {tab === 'Surfaces' && (
        <div>
          <Callout>{VI.surfaces.concept}</Callout>

          <SectionLabel>Surface Types</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {VI.surfaces.types.map((s, i) => (
              <Card key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '15px', fontWeight: 700, color: C.text }}>{s.name}</div>
                  {'usage' in s && <Chip color={C.blue}>{s.usage}</Chip>}
                </div>
                <Body style={{ fontSize: '11px', marginBottom: '8px' }}>{s.description}</Body>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, padding: '5px 8px', background: C.s3, borderRadius: '4px' }}>{s.cssNote}</div>
              </Card>
            ))}
          </div>

          <SectionLabel>Grain + Ambient Glow</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            <Card>
              <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text, marginBottom: '8px' }}>Grain Texture</div>
              <Body style={{ fontSize: '11px', marginBottom: 0 }}>{VI.surfaces.grain}</Body>
            </Card>
            <Card>
              <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text, marginBottom: '8px' }}>Ambient Glow</div>
              <Body style={{ fontSize: '11px', marginBottom: 0 }}>{VI.surfaces.ambientGlow}</Body>
            </Card>
          </div>

          <SectionLabel>Border Radius System — Sleeves vs Labels</SectionLabel>
          <Block variant="default">
            <strong>Sleeves (4px):</strong> Cards, panels, containers — the barely-worn edges of vinyl pulled from a crate.<br />
            <strong>Labels (9999px / pill):</strong> Buttons, stickers, badges — the round stickers stuck to the sleeve.<br />
            <em>Rule: if it holds content, it's a sleeve. If you tap it, it's a label.</em>
          </Block>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
            {VI.radiusSystem.tokens.map((r, i) => (
              <Card key={i} style={{ textAlign: 'center', padding: '14px' }}>
                <div style={{ width: '40px', height: '40px', background: C.s3, border: `1px solid ${C.accent}40`, borderRadius: r.value === '9999px' ? '9999px' : r.value, margin: '0 auto 10px' }} />
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, marginBottom: '2px' }}>{r.token}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.text, marginBottom: '4px' }}>{r.value}</div>
                <Chip color={r.family === 'Sleeve' ? C.blue : r.family === 'Label' ? '#C48A3A' : C.teal}>{r.family}</Chip>
                <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '9px', color: C.muted, marginTop: '4px' }}>{r.usage}</div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* ===== MOTIF + MOTION ===== */}
      {tab === 'Motif + Motion' && (
        <div>
          <SectionLabel>Signature Motif — Concentric Arcs</SectionLabel>
          <Callout>
            <strong>{VI.signatureMotif.name}.</strong> {VI.signatureMotif.meaning}
          </Callout>

          {/* Visual demo of the arc motif */}
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '20px', marginBottom: '24px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', background: C.s2, border: `1px solid ${C.border}`, borderRadius: '8px', position: 'relative' }}>
              <svg viewBox="0 0 200 200" width="180" height="180">
                {/* Concentric arcs — 3 rings at 5% opacity (subtle usage) */}
                <g opacity="0.9">
                  <circle cx="100" cy="100" r="82" fill="none" stroke="#C48A3A" strokeWidth="28" strokeDasharray="200 320" strokeDashoffset="0" />
                  <circle cx="100" cy="100" r="56" fill="none" stroke="#C48A3A" strokeWidth="24" strokeDasharray="160 210" strokeDashoffset="0" />
                  <circle cx="100" cy="100" r="34" fill="none" stroke="#C48A3A" strokeWidth="18" strokeDasharray="100 120" strokeDashoffset="0" />
                </g>
                <text x="100" y="106" textAnchor="middle" fill="#C48A3A" fontSize="18" fontWeight="bold" fontFamily="serif" opacity="0.35">G</text>
              </svg>
            </div>
            <Card>
              <Lbl>Construction Rules</Lbl>
              {VI.signatureMotif.rules.map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', padding: '5px 0', borderBottom: i < VI.signatureMotif.rules.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                  <span style={{ color: '#C48A3A', fontSize: '10px', flexShrink: 0 }}>→</span>
                  <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '11px', color: C.sub }}>{r}</span>
                </div>
              ))}
            </Card>
          </div>

          <SectionLabel>Ring Proportions</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '24px' }}>
            {Object.entries(VI.signatureMotif.ringProportions).map(([k, v]) => (
              <Card key={k} style={{ textAlign: 'center', padding: '12px' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{k}</div>
                <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '13px', fontWeight: 700, color: '#C48A3A' }}>{v}</div>
              </Card>
            ))}
          </div>

          <SectionLabel>Usage Modes</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
            {VI.signatureMotif.usage.map((u, i) => (
              <Card key={i}>
                <Chip color={i === 0 ? C.muted : '#C48A3A'}>{u.mode} — {u.opacity}</Chip>
                <Body style={{ marginTop: '8px', marginBottom: 0, fontSize: '12px' }}>{u.use}</Body>
              </Card>
            ))}
          </div>

          <SectionLabel>Motion Principles</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '24px' }}>
            {VI.motionPrinciples.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', padding: '8px 12px', background: C.s2, border: `1px solid ${C.border}`, borderRadius: '6px' }}>
                <span style={{ color: '#C48A3A', fontSize: '10px', flexShrink: 0, marginTop: '2px' }}>→</span>
                <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '11px', color: C.sub }}>{p}</span>
              </div>
            ))}
          </div>

          <SectionLabel>Easing Library</SectionLabel>
          <div style={{ border: `1px solid ${C.border}`, borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr', background: C.s3, padding: '8px 14px' }}>
              {['Token', 'Value', 'Usage'].map(h => <div key={h} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</div>)}
            </div>
            {VI.easing.map((e, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr', padding: '9px 14px', borderTop: `1px solid ${C.border}`, alignItems: 'center' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: '#C48A3A' }}>{e.token}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.sub }}>{e.value}</div>
                <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '11px', color: C.sub }}>{e.usage}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
