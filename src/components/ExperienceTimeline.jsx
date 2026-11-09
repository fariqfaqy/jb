import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, Sparkles } from 'lucide-react';

export default function ExperienceTimeline({ lang, portfolioData }) {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            {lang === 'en' ? 'Academic Foundations & Credentials' : 'Rekam Jejak Akademik & Kredensial'}
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'Education & Academic Affiliations' : 'Pendidikan & Afiliasi Akademik'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Anchored at the Faculty of Economics and Business, Universitas Diponegoro (FEB UNDIP), one of Indonesia’s premier economic faculties.'
              : 'Berakar di Fakultas Ekonomika dan Bisnis, Universitas Diponegoro (FEB UNDIP), salah satu fakultas ekonomi terkemuka di Indonesia.'}
          </p>
        </div>

        {/* Education Cards */}
        <div 
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem'
          }}
        >
          {education.map((edu, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                padding: '2.25rem',
                display: 'flex',
                gap: '1.75rem',
                alignItems: 'flex-start'
              }}
            >
              <div 
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'var(--gradient-ocean)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  flexShrink: 0,
                  boxShadow: '0 4px 14px rgba(2, 132, 199, 0.35)'
                }}
              >
                <GraduationCap size={28} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {edu.degree[lang]}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-teal)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700 }}>
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.75rem' }}>
                  {edu.institution}
                </div>

                <div style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
                  <strong>{lang === 'en' ? 'Specialization:' : 'Konsentrasi:'}</strong> {edu.specialization[lang]}
                </div>

                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--bg-card-border)',
                    fontSize: '0.85rem',
                    color: 'var(--accent-amber)',
                    fontWeight: 700
                  }}
                >
                  <Award size={16} />
                  <span>{edu.honors[lang]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

