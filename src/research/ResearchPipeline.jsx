import { useState } from 'react'
import { C } from '../lib/tokens.js'
import {
  SectionHeader, Card, KeyCallout, HighlightBlock,
  Lbl, Body, StatusChip, ProgressBar
} from '../components/index.jsx'
import {
  RESEARCH_STEPS, getPriorityColor, getStatusColor
} from './pipeline.js'

export default function ResearchPipeline() {
  const [statuses, setStatuses] = useState(
    () => Object.fromEntries(RESEARCH_STEPS.map(s => [s.id, s.status]))
  )
  const [activeStep, setActiveStep] = useState(null)
  const [copied, setCopied] = useState(null)

  const setStatus = (id, status) => setStatuses(prev => ({ ...prev, [id]: status }))

  const copyPrompt = (step) => {
    navigator.clipboard.writeText(step.prompt)
    setCopied(step.id)
    setTimeout(() => setCopied(null), 2000)
  }

  const completed = Object.values(statuses).filter(s => s === 'complete').length
  const total = RESEARCH_STEPS.length

  const activeStepData = activeStep ? RESEARCH_STEPS.find(s => s.id === activeStep) : null

  return (
    <div>
      <SectionHeader
        num="00 / Research Pipeline"
        title="Research Pipeline"
        sub="Sequential research process for each Brand HQ section. Complete steps in order — each builds on the last."
      />

      <KeyCallout>
        <strong>How this works:</strong> Each step generates a structured Claude prompt. Copy it, open a new Claude conversation, paste the prompt + any client context you have, and paste the output into the corresponding Google Drive markdown file. Once the file is updated, mark the step complete here.
      </KeyCallout>

      {/* Progress */}
      <Card style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <Lbl>Overall Progress</Lbl>
          <span style={{ fontFamily: C.fontMono, fontSize: '11px', color: C.acid }}>{completed}/{total} steps complete</span>
        </div>
        <ProgressBar pct={(completed / total) * 100} />
        <div style={{ display: 'flex', gap: '16px', marginTop: '10px', flexWrap: 'wrap' }}>
          {[
            { label: 'Pending',     color: getStatusColor('pending'),     count: Object.values(statuses).filter(s => s === 'pending').length },
            { label: 'In Progress', color: getStatusColor('in_progress'), count: Object.values(statuses).filter(s => s === 'in_progress').length },
            { label: 'Complete',    color: getStatusColor('complete'),    count: completed },
            { label: 'Needs Review',color: getStatusColor('needs_review'),count: Object.values(statuses).filter(s => s === 'needs_review').length },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.color }} />
              <span style={{ fontFamily: C.fontMono, fontSize: '9px', color: C.textMuted }}>{item.label}: {item.count}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Step list + detail panel */}
      <div style={{ display: 'grid', gridTemplateColumns: activeStep ? '300px 1fr' : '1fr', gap: '16px' }}>
        {/* Steps list */}
        <div>
          {RESEARCH_STEPS.map((step, i) => {
            const status = statuses[step.id]
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                style={{
                  display: 'flex',
                  gap: '12px',
                  padding: '14px',
                  background: activeStep === step.id ? C.acidDim : C.surface2,
                  border: `1px solid ${activeStep === step.id ? C.acid : C.border}`,
                  borderRadius: '8px',
                  marginBottom: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {/* Step number */}
                <div style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: status === 'complete' ? C.teal : status === 'in_progress' ? C.amberDim : C.surface3,
                  border: `1px solid ${status === 'complete' ? C.teal : status === 'in_progress' ? C.amber : C.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontFamily: C.fontMono,
                  fontSize: '10px',
                  color: status === 'complete' ? C.surface1 : C.textMuted,
                  fontWeight: 500,
                }}>
                  {status === 'complete' ? '✓' : step.step}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontFamily: C.fontDisplay, fontSize: '13px', fontWeight: 700, color: C.textPrimary }}>{step.section}</span>
                    <StatusChip color={getPriorityColor(step.priority)}>{step.priority}</StatusChip>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: C.fontMono, fontSize: '8px', color: C.textMuted }}>{step.estimatedTime}</span>
                    <span style={{ fontFamily: C.fontMono, fontSize: '8px', color: C.textMuted }}>→ {step.driveFile}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Detail panel */}
        {activeStepData && (
          <Card style={{ alignSelf: 'start', position: 'sticky', top: '0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontFamily: C.fontDisplay, fontSize: '17px', fontWeight: 700, color: C.textPrimary, marginBottom: '4px' }}>
                  Step {activeStepData.step}: {activeStepData.section}
                </div>
                <div style={{ fontFamily: C.fontMono, fontSize: '9px', color: C.textMuted }}>
                  {activeStepData.estimatedTime} · {activeStepData.driveFile}
                </div>
              </div>
              <button
                onClick={() => setActiveStep(null)}
                style={{ background: 'none', border: 'none', color: C.textMuted, cursor: 'pointer', fontSize: '16px', lineHeight: 1 }}
              >
                ×
              </button>
            </div>

            {/* Inputs needed */}
            <div style={{ marginBottom: '16px' }}>
              <Lbl>Inputs needed before running this prompt</Lbl>
              {activeStepData.inputsNeeded.map((inp, i) => (
                <div key={i} style={{ display: 'flex', gap: '6px', fontFamily: C.fontBody, fontSize: '12px', color: C.textSecond, padding: '3px 0' }}>
                  <span style={{ color: C.acid }}>→</span> {inp}
                </div>
              ))}
            </div>

            {/* Status control */}
            <div style={{ marginBottom: '16px' }}>
              <Lbl>Status</Lbl>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {['pending', 'in_progress', 'complete', 'needs_review'].map(s => (
                  <button
                    key={s}
                    onClick={(e) => { e.stopPropagation(); setStatus(activeStepData.id, s) }}
                    style={{
                      fontFamily: C.fontMono,
                      fontSize: '9px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      border: `1px solid ${statuses[activeStepData.id] === s ? getStatusColor(s) : C.border}`,
                      background: statuses[activeStepData.id] === s ? `${getStatusColor(s)}18` : 'transparent',
                      color: statuses[activeStepData.id] === s ? getStatusColor(s) : C.textMuted,
                      transition: 'all 0.15s',
                    }}
                  >
                    {s.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* The prompt */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <Lbl style={{ marginBottom: 0 }}>Claude Research Prompt</Lbl>
                <button
                  onClick={() => copyPrompt(activeStepData)}
                  style={{
                    fontFamily: C.fontMono,
                    fontSize: '9px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    padding: '5px 12px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    border: `1px solid ${copied === activeStepData.id ? C.teal : C.acid}`,
                    background: copied === activeStepData.id ? C.tealDim : C.acidDim,
                    color: copied === activeStepData.id ? C.teal : C.acid,
                    transition: 'all 0.2s',
                  }}
                >
                  {copied === activeStepData.id ? '✓ Copied!' : 'Copy Prompt'}
                </button>
              </div>
              <div style={{
                background: C.surface3,
                border: `1px solid ${C.border}`,
                borderRadius: '6px',
                padding: '12px',
                maxHeight: '320px',
                overflowY: 'auto',
                fontFamily: C.fontMono,
                fontSize: '10px',
                color: C.textSecond,
                lineHeight: 1.7,
                whiteSpace: 'pre-wrap',
              }}>
                {activeStepData.prompt}
              </div>
            </div>

            <HighlightBlock variant="blue">
              <strong>Next step:</strong> Copy the prompt above. Open a new Claude conversation. Paste the prompt + add any client context in the [PASTE HERE] sections. Copy Claude's output into <code>{activeStepData.driveFile}</code> in Google Drive. Mark complete.
            </HighlightBlock>
          </Card>
        )}
      </div>
    </div>
  )
}
