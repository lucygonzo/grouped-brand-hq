import { useState } from 'react';
import { C } from './components/ui';

// Pages
import OverviewPage from './pages/Overview';
import CompanyPage from './pages/Company';
import BrandIdentityPage from './pages/BrandIdentity';
import VisualIdentityPage from './pages/VisualIdentity';
import VerbalIdentityPage from './pages/VerbalIdentity';
import AudiencePage from './pages/Audience';
import CompetitivePage from './pages/Competitive';
import GapPage from './pages/GapAnalysis';
import RevenuePage from './pages/Revenue';
import ProductPage from './pages/Product';
import GTMPage from './pages/GTM';
import ActionsPage from './pages/Actions';
import DecisionsPage from './pages/Decisions';
import ReportCardPage from './pages/ReportCard';
import LandscapePage from './pages/Landscape';
import NewsFeedPage from './pages/NewsFeed';

type TabId = string;
type Tab = { id: TabId; label: string; component: React.ComponentType };
type Group = { group: string; tabs: Tab[] };

const NAV: Group[] = [
  { group: 'Foundation', tabs: [
    { id: 'overview', label: 'Overview', component: OverviewPage },
    { id: 'company', label: 'Company Profile', component: CompanyPage },
    { id: 'newsfeed', label: 'Live News Feed', component: NewsFeedPage },
    { id: 'landscape', label: 'Landscape', component: LandscapePage },
  ]},
  { group: 'Brand', tabs: [
    { id: 'identity', label: 'Brand Identity', component: BrandIdentityPage },
    { id: 'visual', label: 'Visual Identity', component: VisualIdentityPage },
    { id: 'verbal', label: 'Verbal Identity', component: VerbalIdentityPage },
  ]},
  { group: 'Market', tabs: [
    { id: 'audience', label: 'Audience', component: AudiencePage },
    { id: 'competitive', label: 'Competitive', component: CompetitivePage },
    { id: 'gap', label: 'Gap Analysis', component: GapPage },
  ]},
  { group: 'Business', tabs: [
    { id: 'product', label: 'Product Strategy', component: ProductPage },
    { id: 'revenue', label: 'Revenue Model', component: RevenuePage },
    { id: 'gtm', label: 'Go-to-Market', component: GTMPage },
  ]},
  { group: 'Workspace', tabs: [
    { id: 'actions', label: 'Action Items', component: ActionsPage },
    { id: 'decisions', label: 'Decision Audit Log', component: DecisionsPage },
    { id: 'reportcard', label: 'Report Card', component: ReportCardPage },
  ]},
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const allTabs = NAV.flatMap(g => g.tabs);
  const active = allTabs.find(t => t.id === activeTab) ?? allTabs[0];
  const ActiveComponent = active.component;

  return (
    <div style={{ display: 'flex', height: '100vh', background: C.bg, overflow: 'hidden' }}>
      {/* Sidebar */}
      <nav style={{ width: '210px', flexShrink: 0, background: C.s1, borderRight: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column' }}>
        {/* Logo */}
        <div style={{ padding: '18px', borderBottom: `1px solid ${C.border}`, flexShrink: 0 }}>
          <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '19px', fontWeight: 800, color: C.accent, letterSpacing: '-0.02em' }}>grouped.</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.16em', marginTop: '3px' }}>Brand HQ · Feb 2026</div>
        </div>

        {/* Nav groups */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '10px 0' }}>
          {NAV.map(group => (
            <div key={group.group} style={{ marginBottom: '6px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.18em', padding: '4px 16px 5px' }}>
                {group.group}
              </div>
              {group.tabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '7px 16px', fontFamily: "'Satoshi', sans-serif", fontSize: '12px', color: activeTab === tab.id ? C.accent : C.sub, background: activeTab === tab.id ? C.accentDim : 'transparent', border: 'none', cursor: 'pointer', borderLeft: `2px solid ${activeTab === tab.id ? C.accent : 'transparent'}`, transition: 'all 0.15s' }}>
                  {tab.label}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Brand Guide Link */}
        <div style={{ padding: '10px 16px', flexShrink: 0 }}>
          <a href="brand-guide.html" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: C.accentDim, border: `1px solid ${C.accent}35`, borderRadius: '8px', textDecoration: 'none', transition: 'border-color 0.2s' }}>
            <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '12px', fontWeight: 600, color: C.accent }}>Brand Guide</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, marginLeft: 'auto' }}>↗</span>
          </a>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.ghost, marginTop: '6px', paddingLeft: '2px' }}>Shareable external reference</div>
        </div>

        {/* Footer */}
        <div style={{ padding: '10px 16px', borderTop: `1px solid ${C.border}`, flexShrink: 0 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted }}>Pre-Series A · Phase 1</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, marginTop: '1px' }}>grouped.com</div>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '32px 36px' }}>
        <div style={{ maxWidth: '940px' }}>
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
}
