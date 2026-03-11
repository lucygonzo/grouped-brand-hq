import { useState } from 'react';
import { SectionHeader, Card, Lbl, Body, Block, Chip, StatBox, C } from '../components/ui';

// ══════════════════════════════════════════════════════════
// AUDIT DATA — Figma GDS26R vs Brand Guide
// Last audited: March 2026
// ══════════════════════════════════════════════════════════

const FIGMA_BASE = 'https://www.figma.com/design/wValDdxygSxILi49qBBgAW/GDS26R';
const GUIDE_BASE = 'brand-guide.html';

type Severity = 'critical' | 'high' | 'medium' | 'low';
type Category = 'typography' | 'colors' | 'fonts' | 'copy';

interface AlignmentItem {
  id: string;
  item: string;
  category: Category;
  severity?: Severity;
  brandGuide: string;
  figma: string;
  brandGuideSection: string;
  figmaNodeId: string;
  aligned: boolean;
}

const CATEGORY_LABELS: Record<Category, string> = {
  typography: 'Typography',
  colors: 'Colors',
  fonts: 'Fonts in Product',
  copy: 'Copy / Verbal',
};

const SEVERITY_COLORS: Record<Severity, string> = {
  critical: C.red,
  high: C.amber,
  medium: C.blue,
  low: C.muted,
};

// ── MISMATCHES ──────────────────────────────────────────
const MISMATCHES: AlignmentItem[] = [
  // Typography
  {
    id: 'type-font-name',
    item: 'Display font name',
    category: 'typography',
    severity: 'critical',
    brandGuide: '"Grouped Font" — Custom OTF, single weight, 160 glyphs. Min size 28px.',
    figma: '"Anacrusis" — Variable --font/family/display resolves to Anacrusis:Regular.',
    brandGuideSection: 'typography',
    figmaNodeId: '757-1300',
    aligned: false,
  },
  {
    id: 'type-scale-arch',
    item: 'Type scale architecture',
    category: 'typography',
    severity: 'critical',
    brandGuide: '11 marketing tokens: --display-xl (80px) → --overline (11px). Covers marketing site, pitch decks, social assets.',
    figma: '22 product tokens: D0–D6 (Display), H1–H5 (Heading), Body Default/Emphasized, Caption, C1–C7 (Component). Covers product UI.',
    brandGuideSection: 'typography',
    figmaNodeId: '4-58',
    aligned: false,
  },
  {
    id: 'type-display-xl',
    item: 'Largest display size',
    category: 'typography',
    severity: 'high',
    brandGuide: '--display-xl = 80px, Black 900, lh 0.95, ls -0.03em. Hero headlines.',
    figma: 'D0 (Display Hero) = 96px, Anacrusis Regular, lh 116px (7.25rem), ls -1%.',
    brandGuideSection: 'typography',
    figmaNodeId: '757-1295',
    aligned: false,
  },
  {
    id: 'type-display-lg',
    item: 'Second display size',
    category: 'typography',
    severity: 'high',
    brandGuide: '--display-lg = 64px, Black 900, lh 0.98, ls -0.025em. Secondary heroes.',
    figma: 'D1 (Display XXL) = 40px, Anacrusis Regular, lh 48px (4.25rem), ls -0.05%.',
    brandGuideSection: 'typography',
    figmaNodeId: '729-396',
    aligned: false,
  },
  {
    id: 'type-component-scale',
    item: 'Component scale (C1–C7)',
    category: 'typography',
    severity: 'high',
    brandGuide: 'Not documented. Brand guide covers marketing tokens only — no component/UI type scale.',
    figma: '7 component tokens: C1 (20px Medium) → C7 (9px Medium). Covers buttons, nav, badges.',
    brandGuideSection: 'typography',
    figmaNodeId: '1531-84',
    aligned: false,
  },
  {
    id: 'type-weight-600',
    item: 'Font weight 600',
    category: 'typography',
    severity: 'medium',
    brandGuide: 'Not documented. Weight scale jumps 400 → 500 → 700 → 900. Semibold mapped to Bold 700.',
    figma: 'Used for Component L/M/S (C2–C4) as "600 / Bold". Three component tokens use this weight.',
    brandGuideSection: 'typography',
    figmaNodeId: '1534-91',
    aligned: false,
  },
  {
    id: 'type-d2-weight',
    item: 'D2 Display XL weight mismatch',
    category: 'typography',
    severity: 'medium',
    brandGuide: '--display-sm = 36px Bold 700, lh 1.1. Closest match to D2 size but different weight.',
    figma: 'D2 (Display XL) = 36px Satoshi Regular 400, lh 48px, ls -1%.',
    brandGuideSection: 'typography',
    figmaNodeId: '744-84',
    aligned: false,
  },
  {
    id: 'type-body-default',
    item: 'Body default size',
    category: 'typography',
    severity: 'medium',
    brandGuide: '--body-md = 16px, Regular 400. Documented as "default body copy".',
    figma: 'Body Default = 14px, Regular 400. Product UI body text.',
    brandGuideSection: 'typography',
    figmaNodeId: '757-35',
    aligned: false,
  },
  {
    id: 'type-caption-ls',
    item: 'Caption letter spacing',
    category: 'typography',
    severity: 'low',
    brandGuide: '--caption ls = 0.02em (≈ 0.24px at 12px). Labels, badges, metadata.',
    figma: 'Caption ls = 1% (≈ 0.12px at 12px). Same size/weight but different spacing.',
    brandGuideSection: 'typography',
    figmaNodeId: '757-42',
    aligned: false,
  },

  // Colors
  {
    id: 'color-hero-accent',
    item: 'Hero accent color',
    category: 'colors',
    severity: 'critical',
    brandGuide: '#C48A3A — Warm Bronze. Primary brand accent for headlines, logos, CTAs.',
    figma: '#f9a81a — Bright gold/amber used on Title frame hero accent text.',
    brandGuideSection: 'colors',
    figmaNodeId: '4056-38',
    aligned: false,
  },
  {
    id: 'color-page-bg',
    item: 'Page background',
    category: 'colors',
    severity: 'medium',
    brandGuide: '#111620 — Navy. Page background, app shell. --bg-base.',
    figma: '#141b21 — Used as Title frame background. Slightly lighter than brand guide.',
    brandGuideSection: 'colors',
    figmaNodeId: '4056-2',
    aligned: false,
  },
  {
    id: 'color-cream-text',
    item: 'Cream text color',
    category: 'colors',
    severity: 'medium',
    brandGuide: '#F0EBE3 — Warm Cream. Primary text on dark backgrounds.',
    figma: '#f3e9dc — Used on Title frame text. Slightly warmer/different tone.',
    brandGuideSection: 'colors',
    figmaNodeId: '4056-38',
    aligned: false,
  },
  {
    id: 'color-navbar',
    item: 'Navbar gradient colors',
    category: 'colors',
    severity: 'medium',
    brandGuide: 'Not documented. No navbar gradient in the brand guide color system.',
    figma: 'Linear gradient: rgb(37,53,68) → rgb(28,30,33). Used in Title frame navbar.',
    brandGuideSection: 'colors',
    figmaNodeId: '4056-5',
    aligned: false,
  },

  // Fonts in product
  {
    id: 'fonts-non-brand',
    item: 'Non-brand fonts in Title frame',
    category: 'fonts',
    severity: 'critical',
    brandGuide: 'Only 3 approved typefaces: Grouped Font (display), Satoshi (body/UI), JetBrains Mono (data).',
    figma: 'Title frame uses: All Round Gothic, Quicksand, TT Commons, TT Commons Pro — none approved in brand guide.',
    brandGuideSection: 'typography',
    figmaNodeId: '4056-2',
    aligned: false,
  },
  {
    id: 'fonts-inter-labels',
    item: 'Internal labels font',
    category: 'fonts',
    severity: 'low',
    brandGuide: 'Satoshi or JetBrains Mono for all UI text. No other fonts approved.',
    figma: 'Inter used throughout type scale definition headers and metadata labels.',
    brandGuideSection: 'typography',
    figmaNodeId: '757-1296',
    aligned: false,
  },

  // Copy / Verbal
  {
    id: 'copy-hero-headline',
    item: 'Hero headline',
    category: 'copy',
    severity: 'high',
    brandGuide: '"Where Artists and Fans Connect." — Primary tagline, approved for hero use.',
    figma: '"Turn every release into lasting fan relationships." — Used in Title frame hero.',
    brandGuideSection: 'verbal',
    figmaNodeId: '4056-37',
    aligned: false,
  },
  {
    id: 'copy-sub-headline',
    item: 'Sub-headline copy',
    category: 'copy',
    severity: 'medium',
    brandGuide: 'No dedicated sub-headline documented. Closest: brand anchor "FIRST" copy.',
    figma: '"Own the first listen. Capture real fan data. Build direct channels that compound. Grow with every release."',
    brandGuideSection: 'verbal',
    figmaNodeId: '4056-38',
    aligned: false,
  },
];

// ── ALIGNED ─────────────────────────────────────────────
const ALIGNED: AlignmentItem[] = [
  {
    id: 'align-text-primary',
    item: 'Primary text color',
    category: 'colors',
    brandGuide: '#F0EBE3 — Warm Cream. --text-primary at 100% opacity.',
    figma: '--text/core/primary resolves to #f0ebe3. Used across all type tokens.',
    brandGuideSection: 'colors',
    figmaNodeId: '757-1300',
    aligned: true,
  },
  {
    id: 'align-bronze',
    item: 'Bronze primary accent',
    category: 'colors',
    brandGuide: '#C48A3A — --bronze-400. Primary brand accent.',
    figma: '#C48A3A used in type variable fallbacks and accent references.',
    brandGuideSection: 'colors',
    figmaNodeId: '0-1',
    aligned: true,
  },
  {
    id: 'align-satoshi',
    item: 'Satoshi typeface',
    category: 'typography',
    brandGuide: 'Satoshi — workhorse. Weights: Light 300, Regular 400, Medium 500, Bold 700, Black 900.',
    figma: 'Satoshi used for title, body, and component font families throughout.',
    brandGuideSection: 'typography',
    figmaNodeId: '4-59',
    aligned: true,
  },
  {
    id: 'align-jetbrains',
    item: 'JetBrains Mono',
    category: 'typography',
    brandGuide: 'JetBrains Mono — data typeface. Metrics, code, IDs.',
    figma: 'Documented in design system font stack. Used for data displays.',
    brandGuideSection: 'typography',
    figmaNodeId: '4122-2232',
    aligned: true,
  },
  {
    id: 'align-weight-map',
    item: 'Weight mapping: Semibold → Bold',
    category: 'typography',
    brandGuide: 'Semibold mapped to Bold (700). Black = 900. No standalone Semibold.',
    figma: 'Font weight table: font-semibold = Bold / 700, font-bold = Black / 900.',
    brandGuideSection: 'typography',
    figmaNodeId: '597-631',
    aligned: true,
  },
  {
    id: 'align-body-14',
    item: 'Body Default = 14px Regular',
    category: 'typography',
    brandGuide: '--body-sm = 14px, Regular 400. Secondary body and descriptions.',
    figma: 'Body Default = 14px, Satoshi Regular 400, lh 20px.',
    brandGuideSection: 'typography',
    figmaNodeId: '757-35',
    aligned: true,
  },
  {
    id: 'align-caption',
    item: 'Caption = 12px Medium 500',
    category: 'typography',
    brandGuide: '--caption = 12px, Medium 500, lh 1.4. Labels, badges, metadata.',
    figma: 'Caption = 12px, Satoshi Medium 500, lh 20px.',
    brandGuideSection: 'typography',
    figmaNodeId: '757-42',
    aligned: true,
  },
  {
    id: 'align-heading-bold',
    item: 'Heading Bold 700',
    category: 'typography',
    brandGuide: 'Heading tokens use Bold 700 (--heading-lg, --heading-md).',
    figma: 'H1–H5 all use Satoshi Bold 700.',
    brandGuideSection: 'typography',
    figmaNodeId: '729-408',
    aligned: true,
  },
];

// ── HELPERS ─────────────────────────────────────────────
const severityLabel = (s: Severity) => s.charAt(0).toUpperCase() + s.slice(1);
const categoryIcon = (c: Category) =>
  c === 'typography' ? '🔤' : c === 'colors' ? '🎨' : c === 'fonts' ? '🔡' : '💬';

const figmaUrl = (nodeId: string) => `${FIGMA_BASE}?node-id=${nodeId}`;
const guideUrl = (section: string) => `${GUIDE_BASE}#${section}`;

// ══════════════════════════════════════════════════════════
// PAGE
// ══════════════════════════════════════════════════════════
export default function RebrandAlignmentPage() {
  const [showAligned, setShowAligned] = useState(false);

  const criticalCount = MISMATCHES.filter(m => m.severity === 'critical').length;
  const highCount = MISMATCHES.filter(m => m.severity === 'high').length;
  const medLowCount = MISMATCHES.filter(m => m.severity === 'medium' || m.severity === 'low').length;
  const alignedCount = ALIGNED.length;
  const totalItems = MISMATCHES.length + alignedCount;
  const coveragePct = Math.round((alignedCount / totalItems) * 100);

  // Group mismatches by category
  const categories = (['typography', 'colors', 'fonts', 'copy'] as Category[]).filter(
    cat => MISMATCHES.some(m => m.category === cat)
  );

  return (
    <div>
      <SectionHeader
        num="02 / Brand"
        title="P1 / Rebrand Alignment"
        sub="Tracking alignment between the Brand Guide and Figma GDS26R. Mismatches need resolution before P1 rebrand ships."
      />

      <Block variant="amber">
        <strong>Audit scope:</strong> Brand Guide (brand-guide.html) vs Figma GDS26R typography page and Title frame. This audit compares documented brand specs against what's actually built in the design system file. Items marked as mismatches need team discussion to decide which source is correct.
      </Block>

      {/* ── Summary stats ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '24px' }}>
        <StatBox label="Critical + High" value={`${criticalCount + highCount}`} note={`${criticalCount} critical · ${highCount} high`} />
        <StatBox label="Medium + Low" value={`${medLowCount}`} note="Resolve after critical items" />
        <StatBox label="Aligned" value={`${alignedCount}`} note="Confirmed matching" />
        <StatBox label="Coverage" value={`${coveragePct}%`} note={`${alignedCount} of ${totalItems} items aligned`} />
      </div>

      {/* ── Mismatches by category ── */}
      {categories.map(cat => {
        const items = MISMATCHES.filter(m => m.category === cat);
        return (
          <div key={cat} style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', paddingBottom: '8px', borderBottom: `1px solid ${C.border}` }}>
              <span style={{ fontSize: '14px' }}>{categoryIcon(cat)}</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.16em' }}>
                {CATEGORY_LABELS[cat]}
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>
                {items.length} {items.length === 1 ? 'mismatch' : 'mismatches'}
              </span>
            </div>

            {items.map(m => (
              <Card key={m.id} style={{ marginBottom: '10px', padding: '16px' }}>
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{m.item}</span>
                    {m.severity && <Chip color={SEVERITY_COLORS[m.severity]}>{severityLabel(m.severity)}</Chip>}
                  </div>
                </div>

                {/* Side-by-side comparison */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                  {/* Brand Guide value */}
                  <div style={{ background: C.s3, border: `1px solid ${C.border}`, borderRadius: '6px', padding: '12px' }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '6px' }}>Brand Guide</div>
                    <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '12px', color: C.sub, lineHeight: 1.5 }}>{m.brandGuide}</div>
                  </div>
                  {/* Figma value */}
                  <div style={{ background: C.s3, border: `1px solid ${C.border}`, borderRadius: '6px', padding: '12px' }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.blue, textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '6px' }}>Figma GDS26R</div>
                    <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '12px', color: C.sub, lineHeight: 1.5 }}>{m.figma}</div>
                  </div>
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a href={guideUrl(m.brandGuideSection)} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.amber, textDecoration: 'none', padding: '4px 10px', border: `1px solid ${C.amber}35`, borderRadius: '4px' }}>
                    Brand Guide → #{m.brandGuideSection}
                  </a>
                  <a href={figmaUrl(m.figmaNodeId)} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.blue, textDecoration: 'none', padding: '4px 10px', border: `1px solid ${C.blue}35`, borderRadius: '4px' }}>
                    Figma GDS26R ↗
                  </a>
                </div>
              </Card>
            ))}
          </div>
        );
      })}

      {/* ── Aligned items — collapsible ── */}
      <div style={{ marginTop: '32px', borderTop: `1px solid ${C.border}`, paddingTop: '20px' }}>
        <button
          onClick={() => setShowAligned(!showAligned)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 0',
            width: '100%',
          }}
        >
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: C.muted,
            transition: 'transform 0.2s',
            transform: showAligned ? 'rotate(90deg)' : 'rotate(0deg)',
          }}>&#9654;</span>
          <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '15px', fontWeight: 700, color: C.sub }}>
            Aligned Items ({alignedCount})
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, background: C.s2, padding: '2px 10px', borderRadius: '4px' }}>
            Brand guide matches Figma
          </span>
        </button>

        {showAligned && (
          <div style={{ paddingLeft: '20px', paddingTop: '12px' }}>
            {ALIGNED.map(a => (
              <div key={a.id} style={{ marginBottom: '8px', padding: '14px', background: C.s2, border: `1px solid ${C.border}`, borderRadius: '7px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#8BAF9C', fontSize: '12px' }}>✓</span>
                    <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '13px', fontWeight: 600, color: C.text }}>{a.item}</span>
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase' }}>{CATEGORY_LABELS[a.category]}</span>
                </div>

                {/* Side-by-side values */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                  <div style={{ background: C.s3, borderRadius: '5px', padding: '10px' }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '4px' }}>Brand Guide</div>
                    <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.5 }}>{a.brandGuide}</div>
                  </div>
                  <div style={{ background: C.s3, borderRadius: '5px', padding: '10px' }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: C.blue, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '4px' }}>Figma GDS26R</div>
                    <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.5 }}>{a.figma}</div>
                  </div>
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a href={guideUrl(a.brandGuideSection)} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.amber, textDecoration: 'none', padding: '3px 8px', border: `1px solid ${C.amber}30`, borderRadius: '4px' }}>
                    Brand Guide → #{a.brandGuideSection}
                  </a>
                  <a href={figmaUrl(a.figmaNodeId)} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.blue, textDecoration: 'none', padding: '3px 8px', border: `1px solid ${C.blue}30`, borderRadius: '4px' }}>
                    Figma GDS26R ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
