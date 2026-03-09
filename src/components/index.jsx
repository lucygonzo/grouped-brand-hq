import { C, type as T } from '../lib/tokens.js'

// ─── LAYOUT ──────────────────────────────────────────────

export const SectionHeader = ({ num, title, sub }) => (
  <div style={{ marginBottom: '28px' }}>
    <div style={{ ...T.label, color: C.acid, marginBottom: '8px' }}>{num}</div>
    <h1 style={{ ...T.h1, color: C.textPrimary, margin: '0 0 8px 0' }}>{title}</h1>
    {sub && <p style={{ ...T.body, color: C.textSecond, margin: 0 }}>{sub}</p>}
  </div>
)

export const Card = ({ children, style = {}, onClick, active }) => (
  <div
    onClick={onClick}
    style={{
      background: C.surface2,
      border: `1px solid ${active ? C.acid : C.border}`,
      borderRadius: '10px',
      padding: '18px',
      transition: 'border-color 0.2s',
      cursor: onClick ? 'pointer' : 'default',
      ...style,
    }}
  >
    {children}
  </div>
)

export const Grid = ({ cols = 'repeat(auto-fill, minmax(200px,1fr))', gap = '12px', style = {}, children }) => (
  <div style={{ display: 'grid', gridTemplateColumns: cols, gap, ...style }}>{children}</div>
)

// ─── TYPOGRAPHY ──────────────────────────────────────────

export const Lbl = ({ children, color, style = {} }) => (
  <div style={{ ...T.label, color: color || C.textMuted, marginBottom: '6px', ...style }}>{children}</div>
)

export const Body = ({ children, style = {} }) => (
  <p style={{ ...T.body, color: C.textSecond, margin: '0 0 10px 0', ...style }}>{children}</p>
)

export const Mono = ({ children, style = {} }) => (
  <span style={{ ...T.mono, color: C.textSecond, ...style }}>{children}</span>
)

// ─── CALLOUTS ────────────────────────────────────────────

export const KeyCallout = ({ children }) => (
  <div style={{
    background: C.acidGlow,
    borderLeft: `3px solid ${C.acid}`,
    borderRadius: '0 8px 8px 0',
    padding: '14px 18px',
    marginBottom: '24px',
    ...T.body,
    color: C.textPrimary,
  }}>
    {children}
  </div>
)

export const HighlightBlock = ({ variant = 'default', children }) => {
  const variants = {
    default: { bg: C.surface3, border: C.borderBright, color: C.textSecond },
    green:   { bg: C.tealDim,  border: C.teal,         color: C.teal },
    amber:   { bg: C.amberDim, border: C.amber,        color: C.amber },
    blue:    { bg: C.blueDim,  border: C.blue,         color: C.blue },
    red:     { bg: C.redDim,   border: C.red,          color: C.red },
    acid:    { bg: C.acidDim,  border: C.acid,         color: C.acid },
  }
  const v = variants[variant] || variants.default
  return (
    <div style={{
      background: v.bg,
      borderLeft: `2px solid ${v.border}`,
      borderRadius: '0 6px 6px 0',
      padding: '10px 14px',
      marginBottom: '10px',
      ...T.body,
      color: C.textPrimary,
      lineHeight: 1.6,
    }}>
      {children}
    </div>
  )
}

export const ResearchFlag = ({ items = [] }) => (
  <div style={{ background: C.amberDim, border: `1px solid ${C.amber}30`, borderRadius: '8px', padding: '14px 16px', marginBottom: '14px' }}>
    <Lbl color={C.amber} style={{ marginBottom: '8px' }}>Research needed</Lbl>
    {items.map((item, i) => (
      <div key={i} style={{ display: 'flex', gap: '8px', ...T.bodySmall, color: C.textSecond, padding: '3px 0' }}>
        <span style={{ color: C.amber, flexShrink: 0 }}>?</span>{item}
      </div>
    ))}
  </div>
)

// ─── INDICATORS ──────────────────────────────────────────

/**
 * UnconfirmedDot — amber dot shown next to AI-generated or unverified data.
 * Core StartSuite UX pattern. Hovering shows tooltip.
 */
export const UnconfirmedDot = ({ tip = 'Needs client confirmation' }) => (
  <span
    title={tip}
    style={{
      display: 'inline-block',
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: C.amber,
      marginLeft: '5px',
      verticalAlign: 'middle',
      cursor: 'help',
      flexShrink: 0,
    }}
  />
)

export const ThreatBadge = ({ level }) => {
  const m = {
    High:   { bg: C.redDim,   border: C.red,         color: C.red },
    Medium: { bg: C.amberDim, border: C.amber,        color: C.amber },
    Watch:  { bg: C.surface3, border: C.borderBright, color: C.textMuted },
  }[level] || { bg: C.surface3, border: C.borderBright, color: C.textMuted }
  return (
    <span style={{
      ...T.label,
      fontSize: '8px',
      background: m.bg,
      border: `1px solid ${m.border}`,
      color: m.color,
      padding: '2px 7px',
      borderRadius: '4px',
    }}>
      {level}
    </span>
  )
}

export const StatusChip = ({ children, color }) => (
  <span style={{
    ...T.label,
    fontSize: '9px',
    background: `${color}18`,
    color,
    border: `1px solid ${color}35`,
    borderRadius: '4px',
    padding: '2px 7px',
    marginRight: '4px',
    marginBottom: '4px',
    display: 'inline-block',
  }}>
    {children}
  </span>
)

export const LiveDot = ({ status = 'live' }) => {
  const c = status === 'live' ? C.teal : status === 'soon' ? C.amber : C.textMuted
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', ...T.label, fontSize: '8px', color: c }}>
      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: c, display: 'inline-block' }} />
      {status === 'live' ? 'Live' : status === 'soon' ? 'Coming soon' : 'Planned'}
    </span>
  )
}

// ─── VISUAL IDENTITY COMPONENTS ──────────────────────────

/**
 * CopyableHex — color swatch that copies hex to clipboard on click.
 */
export const CopyableHex = ({ hex, name, role }) => {
  const [copied, setCopied] = React.useState(false)

  const copy = () => {
    navigator.clipboard.writeText(hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  return (
    <div onClick={copy} style={{ cursor: 'pointer', background: C.surface2, border: `1px solid ${C.border}`, borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ height: '40px', background: hex, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.2s' }}>
        {copied && (
          <span style={{ ...T.label, fontSize: '8px', background: 'rgba(0,0,0,0.75)', color: '#fff', padding: '2px 6px', borderRadius: '3px' }}>
            Copied!
          </span>
        )}
      </div>
      <div style={{ padding: '7px 10px' }}>
        <div style={{ ...T.mono, color: C.textPrimary, fontSize: '10px' }}>{hex}</div>
        <div style={{ ...T.caption, color: C.textMuted, marginTop: '1px' }}>{name} · {role}</div>
      </div>
    </div>
  )
}

/**
 * VisualIdentityStrip — mini color palette + label for competitor cards.
 */
export const VisualIdentityStrip = ({ colors = [], label }) => (
  <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
    {colors.map((c, i) => (
      <div key={i} style={{ width: '14px', height: '14px', borderRadius: '3px', background: c, border: `1px solid ${C.border}` }} />
    ))}
    {label && <span style={{ ...T.label, fontSize: '8px', color: C.textMuted, marginLeft: '4px' }}>{label}</span>}
  </div>
)

// ─── DATA DISPLAY ─────────────────────────────────────────

export const StatBox = ({ label, value, sub, accent = false }) => (
  <div style={{ background: C.surface2, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px' }}>
    <div style={{ fontFamily: C.fontDisplay, fontSize: '24px', fontWeight: 800, color: accent ? C.acid : C.textPrimary, lineHeight: 1, marginBottom: '4px' }}>
      {value}
    </div>
    <div style={{ ...T.label, color: C.textSecond }}>{label}</div>
    {sub && <div style={{ ...T.caption, color: C.textMuted, marginTop: '3px' }}>{sub}</div>}
  </div>
)

export const ProgressBar = ({ pct, color, label, note }) => (
  <div style={{ marginBottom: '14px' }}>
    {(label || note) && (
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        {label && <span style={{ ...T.mono, color: C.textPrimary, fontSize: '10px' }}>{label}</span>}
        {note && <span style={{ ...T.label, fontSize: '8px', color: C.textMuted }}>{note}</span>}
      </div>
    )}
    <div style={{ height: '3px', background: C.surface3, borderRadius: '2px' }}>
      <div style={{ height: '3px', width: `${pct}%`, background: color || C.acid, borderRadius: '2px', transition: 'width 0.6s ease' }} />
    </div>
  </div>
)

export const ScoreBar = ({ score, max = 10 }) => (
  <div style={{ display: 'flex', gap: '3px' }}>
    {Array.from({ length: max }, (_, i) => (
      <div key={i} style={{ flex: 1, height: '4px', borderRadius: '2px', background: i < score ? C.acid : C.surface3 }} />
    ))}
  </div>
)

export const DataTable = ({ headers = [], rows = [], style = {} }) => (
  <div style={{ overflowX: 'auto', ...style }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', ...T.body, fontSize: '12px' }}>
      <thead>
        <tr style={{ borderBottom: `1px solid ${C.border}` }}>
          {headers.map((h, i) => (
            <th key={i} style={{ textAlign: 'left', padding: '6px 10px', ...T.label, fontSize: '8px', color: C.textMuted, fontWeight: 400 }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: `1px solid ${C.border}30` }}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding: '8px 10px', color: j === 0 ? C.textPrimary : C.textSecond, fontFamily: typeof cell === 'string' && cell.startsWith('$') ? C.fontMono : C.fontBody }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

// ─── SUB-NAV ──────────────────────────────────────────────

export const SubNav = ({ tabs = [], active, onChange }) => (
  <div style={{ display: 'flex', gap: '2px', marginBottom: '24px', borderBottom: `1px solid ${C.border}` }}>
    {tabs.map(t => (
      <button
        key={t.id}
        onClick={() => onChange(t.id)}
        style={{
          ...T.label,
          fontSize: '9px',
          padding: '8px 14px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: active === t.id ? C.acid : C.textMuted,
          borderBottom: `2px solid ${active === t.id ? C.acid : 'transparent'}`,
          marginBottom: '-1px',
          transition: 'color 0.15s',
          whiteSpace: 'nowrap',
        }}
      >
        {t.label}
      </button>
    ))}
  </div>
)

// ─── PLACEHOLDER ──────────────────────────────────────────

export const Placeholder = ({ title, num, note, researchKey }) => (
  <div>
    <SectionHeader num={num} title={title} sub={note} />
    <HighlightBlock variant="amber">
      <strong>Research pending.</strong> Add content to the corresponding Drive markdown file to populate this section.
      {researchKey && (
        <span style={{ ...T.label, fontSize: '8px', marginLeft: '8px', color: C.amber }}>Key: {researchKey}</span>
      )}
    </HighlightBlock>
  </div>
)

// need to import React for CopyableHex useState
import React from 'react'
