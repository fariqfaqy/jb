import React from 'react';
import { Heart, ArrowUp, Waves } from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Footer({ lang, portfolioData }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--bg-card-border)',
        padding: '3.5rem 0 2rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div 
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--gradient-ocean)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.95rem'
              }}
            >
              JA
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>
                Jubakti Anggoro
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {portfolioData.profile.institution[lang]}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a 
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-icon"
              title="LinkedIn Profile"
            >
              <LinkedInIcon size={18} color="#0a66c2" />
            </a>

            <button 
              onClick={scrollToTop}
              className="btn btn-secondary btn-icon"
              title={lang === 'en' ? 'Back to top' : 'Kembali ke atas'}
            >
              <ArrowUp size={18} />
            </button>
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--bg-tertiary)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <div>
            © {new Date().getFullYear()} Jubakti Anggoro. {lang === 'en' ? 'All research rights reserved.' : 'Hak cipta riset dilindungi.'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>{lang === 'en' ? 'Built with React & Environmental Economics Rigor' : 'Dikembangkan dengan React & Dedikasi Riset Pesisir'}</span>
            <Waves size={14} color="var(--accent-teal)" />
          </div>
        </div>

      </div>
    </footer>
  );
}
