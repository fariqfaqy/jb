import React, { useState } from 'react';
import { Waves, Anchor, Scale, TrendingUp, CheckCircle2, Milestone, Sparkles } from 'lucide-react';

const iconMap = {
  Waves: Waves,
  Anchor: Anchor,
  Scale: Scale,
  TrendingUp: TrendingUp
};

export default function AboutSection({ lang, portfolioData }) {
  const { about } = portfolioData;
  const [activeTab, setActiveTab] = useState('pillars'); // 'pillars' or 'journey'

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            {lang === 'en' ? 'Research Philosophy & Core Pillars' : 'Filosofi Riset & Pilar Utama'}
          </div>
          <h2 className="section-title">
            {lang === 'en' 
              ? 'Balancing Ecological Integrity with Human Well-Being' 
              : 'Menyelaraskan Kelestarian Ekologi & Kesejahteraan Nelayan'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Rooted in the Vulnerability to Viability (V2V) global framework, my research integrates quantitative econometric rigor with grounded participatory fieldwork along the vulnerable coasts of Central Java.'
              : 'Berakar pada kerangka global Vulnerability to Viability (V2V), riset saya mengintegrasikan ketajaman ekonometrika kuantitatif dengan pendekatan partisipatif di garis pesisir rentan Jawa Tengah.'}
          </p>

          {/* Tab Switcher */}
          <div style={{ display: 'inline-flex', padding: '0.35rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', marginTop: '1.5rem', border: '1px solid var(--bg-card-border)' }}>
            <button
              onClick={() => setActiveTab('pillars')}
              style={{
                padding: '0.5rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: activeTab === 'pillars' ? 'var(--gradient-ocean)' : 'transparent',
                color: activeTab === 'pillars' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {lang === 'en' ? '4 Research Pillars' : '4 Pilar Riset'}
            </button>
            <button
              onClick={() => setActiveTab('journey')}
              style={{
                padding: '0.5rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: activeTab === 'journey' ? 'var(--gradient-ocean)' : 'transparent',
                color: activeTab === 'journey' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {lang === 'en' ? 'Research Milestones' : 'Milestone Riset'}
            </button>
          </div>
        </div>

        {/* Tab 1: 4 Research Pillars */}
        {activeTab === 'pillars' && (
          <div 
            className="fade-in"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {about.pillars.map((pillar) => {
              const IconComponent = iconMap[pillar.icon] || Waves;
              return (
                <div 
                  key={pillar.id}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    padding: '2rem 1.75rem'
                  }}
                >
                  <div 
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '16px',
                      background: 'var(--bg-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-teal)',
                      border: '1px solid var(--bg-card-border)'
                    }}
                  >
                    <IconComponent size={26} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {pillar.title[lang]}
                  </h3>

                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {pillar.desc[lang]}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-teal)', fontSize: '0.8rem', fontWeight: 700 }}>
                    <CheckCircle2 size={15} />
                    <span>{lang === 'en' ? 'Empirically Tested' : 'Teruji Secara Empiris'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Research Milestones Roadmap */}
        {activeTab === 'journey' && (
          <div 
            className="fade-in"
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            {about.journey.map((item, index) => (
              <div 
                key={index}
                className="glass-card"
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  padding: '1.75rem'
                }}
              >
                <div 
                  style={{
                    padding: '0.4rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--gradient-badge)',
                    color: 'var(--accent-teal)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {item.year}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    {item.title[lang]}
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

