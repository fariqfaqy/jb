import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Sliders, 
  MapPin, 
  ShieldCheck, 
  Waves, 
  BookOpen, 
  Award 
} from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Hero({ lang, portfolioData, onOpenCvModal }) {
  const { profile } = portfolioData;

  const dynamicKeywords = lang === 'en' 
    ? ["Blue Economy & Justice", "Fisher Livelihood Adaptation", "Natural Resource Economics", "Econometric Modeling"]
    : ["Ekonomi Biru & Keadilan Biru", "Adaptasi Penghidupan Nelayan", "Ekonomi Sumber Daya Alam", "Pemodelan Ekonometrika"];

  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % dynamicKeywords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [dynamicKeywords.length]);

  return (
    <section 
      style={{
        paddingTop: '8rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Column: Hero Text & Actions */}
          <div>
            {/* Status Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--gradient-badge)',
                border: '1px solid rgba(20, 184, 166, 0.3)',
                color: 'var(--accent-teal)',
                fontSize: '0.825rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
                <span style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: 'var(--accent-emerald)', opacity: 0.75, animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }}></span>
                <span style={{ position: 'relative', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)' }}></span>
              </span>
              {profile.status[lang]}
            </div>

            {/* Main Headline */}
            <h1 
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.035em',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem'
              }}
            >
              {profile.name}
            </h1>

            {/* Dynamic Rotating Subtitle */}
            <div 
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 600,
                color: 'var(--text-accent)',
                marginBottom: '1.5rem',
                minHeight: '2.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Waves size={24} color="var(--accent-teal)" />
              <span key={keywordIndex} className="fade-in" style={{ borderBottom: '2px dashed var(--accent-cyan)' }}>
                {dynamicKeywords[keywordIndex]}
              </span>
            </div>

            {/* Bio Description */}
            <p 
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '2rem',
                maxWidth: '560px'
              }}
            >
              {profile.bio[lang]}
            </p>

            {/* Affiliation & Location Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <div className="badge badge-cyan" style={{ fontSize: '0.85rem', padding: '0.35rem 0.85rem' }}>
                <BookOpen size={14} />
                {profile.institution[lang]}
              </div>
              <div className="badge" style={{ fontSize: '0.85rem', padding: '0.35rem 0.85rem' }}>
                <MapPin size={14} color="var(--accent-teal)" />
                {profile.location}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
              <a href="#research" className="btn btn-primary">
                <span>{lang === 'en' ? 'Explore Research' : 'Jelajahi Riset'}</span>
                <ArrowRight size={16} />
              </a>
              
              <a href="#simulator" className="btn btn-secondary">
                <Sliders size={16} color="var(--accent-cyan)" />
                <span>{lang === 'en' ? 'Data Lab Simulator' : 'Simulasi Kebijakan'}</span>
              </a>

              <a 
                href={profile.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
                title="View LinkedIn Profile"
              >
                <LinkedInIcon size={16} color="#0a66c2" />
                <span>LinkedIn</span>
              </a>

              <button 
                onClick={onOpenCvModal} 
                className="btn btn-outline"
                title={lang === 'en' ? 'View Executive CV' : 'Lihat Ringkasan CV'}
              >
                <FileText size={16} color="var(--accent-amber)" />
                <span>{lang === 'en' ? 'CV Summary' : 'Ringkasan CV'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Profile Card & Highlight Metrics */}
          <div style={{ position: 'relative' }}>
            <div 
              className="glass-card" 
              style={{
                padding: '2.25rem',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--gradient-card-glow), var(--bg-card)',
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              {/* Profile Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
                <div 
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '24px',
                    background: 'var(--gradient-ocean)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '2rem',
                    fontWeight: 800,
                    boxShadow: '0 8px 24px rgba(2, 132, 199, 0.45)',
                    position: 'relative'
                  }}
                >
                  JA
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      right: '-4px',
                      background: 'var(--bg-secondary)',
                      padding: '4px',
                      borderRadius: '50%'
                    }}
                  >
                    <Award size={18} color="var(--accent-amber)" />
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    Jubakti Anggoro, S.E.
                  </h3>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-accent)', fontWeight: 600 }}>
                    {lang === 'en' ? 'Master Candidate in Economics (FEB UNDIP)' : 'Kandidat Magister Ilmu Ekonomi (FEB UNDIP)'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {lang === 'en' ? 'V2V Global Partnership Collaborator' : 'Kolaborator Kemitraan Global V2V'}
                  </div>
                </div>
              </div>

              {/* Research Focus Matrix */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {lang === 'en' ? 'Empirical Focus Areas' : 'Fokus Riset Empiris'}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  {[
                    { label: lang === 'en' ? 'Fisher Seasonality' : 'Musiman Nelayan', code: 'IRCBE 2026' },
                    { label: lang === 'en' ? 'Blue Justice in Demak' : 'Keadilan Biru Demak', code: 'Purworejo Study' },
                    { label: lang === 'en' ? 'Marine Plastic MPA' : 'Sampah Plastik MPA', code: 'MARLISPACE' },
                    { label: lang === 'en' ? 'Panel Econometrics' : 'Ekonometrika Panel', code: 'Stata & R' }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--bg-card-border)',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>{item.label}</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--accent-teal)', fontFamily: 'var(--font-mono)' }}>{item.code}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Counters */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '0.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--bg-card-border)',
                  textAlign: 'center'
                }}
              >
                {profile.stats.map((stat, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-accent)' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600, lineHeight: 1.2 }}>
                      {stat.label[lang]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
