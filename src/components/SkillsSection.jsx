import React from 'react';
import { 
  BarChart3, 
  Database, 
  Layers, 
  Terminal, 
  Users, 
  GraduationCap,
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function SkillsSection({ lang, portfolioData }) {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <BarChart3 size={14} />
            {lang === 'en' ? 'Methodological & Analytical Toolkit' : 'Perangkat Metodologi & Analisis'}
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'Econometric Rigor Meets Field Grounding' : 'Kombinasi Ketajaman Ekonometrika & Riset Partisipatif'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'A dual competency profile: advanced econometric estimation software paired with deep ethnographic and participatory field techniques.'
              : 'Profil kompetensi ganda: penguasaan perangkat lunak estimasi ekonometrika dipadukan dengan teknik riset lapangan partisipatif.'}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          
          {/* Column 1: Quantitative & Software Proficiency */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
              <Terminal size={20} color="var(--accent-teal)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {lang === 'en' ? 'Econometric & Statistical Tools' : 'Perangkat Lunak Ekonometrika & Statistik'}
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {skills.quantitative.map((item, index) => (
                <div key={index}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.name}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                      {item.category}
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                    <div 
                      style={{ 
                        width: `${item.level}%`, 
                        height: '100%', 
                        background: 'var(--gradient-ocean)', 
                        borderRadius: 'var(--radius-full)' 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Theoretical & Domain Frameworks */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
              <Layers size={20} color="var(--accent-cyan)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {lang === 'en' ? 'Domain & Theoretical Frameworks' : 'Kerangka Teori & Domain Keahlian'}
              </h3>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              {skills.domain.map((item, index) => (
                <div 
                  key={index}
                  className="badge badge-cyan"
                  style={{ 
                    padding: '0.55rem 0.9rem', 
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  {item[lang]}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--bg-card-border)' }}>
              <Users size={18} color="var(--accent-teal)" />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {lang === 'en' ? 'Fieldwork & Participatory Protocols' : 'Protokol Survei & Riset Lapangan'}
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {skills.fieldworkSkills.map((item, index) => (
                <div 
                  key={index} 
                  style={{
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--bg-card-border)',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 600
                  }}
                >
                  ✓ {item[lang]}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

