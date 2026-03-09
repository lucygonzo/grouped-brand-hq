import { COMPANY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, C } from '../components/ui';

export default function CompanyPage() {
  return (
    <div>
      <SectionHeader num="01 / Foundation" title="Company Profile" sub="The founding story, mission, thesis, and team behind grouped." />
      <Callout>
        Grouped is the direct-to-fan relationship layer that the music industry has been missing. Not a distributor. Not a social platform. The owned channel between every artist and every fan they have ever earned.
      </Callout>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
        <Card>
          <Lbl>Mission</Lbl>
          <Body style={{ marginBottom: 0 }}>{COMPANY.mission}</Body>
        </Card>
        <Card>
          <Lbl>Vision</Lbl>
          <Body style={{ marginBottom: 0 }}>{COMPANY.vision}</Body>
        </Card>
      </div>

      <Card style={{ marginBottom: '20px' }}>
        <Lbl>Core Thesis</Lbl>
        <Body style={{ fontStyle: 'italic' }}>{COMPANY.thesis}</Body>
        <div style={{ height: '1px', background: C.border, margin: '12px 0' }} />
        <Lbl>The Merger</Lbl>
        <Body style={{ marginBottom: '12px' }}>{COMPANY.merger.summary}</Body>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {[{ label: 'Tribly (Top of Funnel)', desc: COMPANY.merger.tribly }, { label: 'Grouped (Bottom of Funnel)', desc: COMPANY.merger.grouped }].map((b, i) => (
            <div key={i} style={{ background: C.s3, borderRadius: '7px', padding: '12px' }}>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '5px' }}>{b.label}</div>
              <Body style={{ marginBottom: 0, fontSize: '12px' }}>{b.desc}</Body>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
        {[
          { label: 'For Investors', line: COMPANY.oneLiners.investors },
          { label: 'For Artists', line: COMPANY.oneLiners.artists },
          { label: 'For Press', line: COMPANY.oneLiners.press },
        ].map((l, i) => (
          <Card key={i} style={i === 2 ? { gridColumn: '1 / -1' } : {}}>
            <Lbl>{l.label}</Lbl>
            <Body style={{ marginBottom: 0, fontStyle: 'italic' }}>{l.line}</Body>
          </Card>
        ))}
      </div>

      <Lbl>Team</Lbl>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        {COMPANY.team.map((m, i) => (
          <Card key={i}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '16px', fontWeight: 700, color: C.text, marginBottom: '2px' }}>{m.name}</div>
            <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>{m.role}</div>
            <Body style={{ marginBottom: 0, fontSize: '12px' }}>{m.story}</Body>
          </Card>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <Block variant="blue">
          <strong>No label agenda.</strong> Seth was explicit: no interest in catering to labels. Artists' average stint at a label is 3 years. Better to own the next generation of artists before they sign those big deals than go from label → artist. "We are the good guys — we have no intention of recreating extractive models."
        </Block>
      </div>
    </div>
  );
}
