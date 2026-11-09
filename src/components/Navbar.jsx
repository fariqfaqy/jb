import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Compass, 
  FileText, 
  Sparkles,
  Sliders,
  GraduationCap,
  Mail
} from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Navbar({ lang, setLang, theme, toggleTheme, portfolioData }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: lang === 'en' ? 'About' : 'Tentang' },
    { href: '#research', label: lang === 'en' ? 'Research' : 'Riset' },
    { href: '#simulator', label: lang === 'en' ? 'Data Lab' : 'Simulasi Lab' },
    { href: '#fieldwork', label: lang === 'en' ? 'Fieldwork' : 'Lapangan' },
    { href: '#skills', label: lang === 'en' ? 'Toolkit' : 'Keahlian' },
    { href: '#education', label: lang === 'en' ? 'Academic' : 'Akademik' },
    { href: '#contact', label: lang === 'en' ? 'Contact' : 'Kontak' }
  ];

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--bg-glass)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--bg-card-border)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand / Logo */}
        <a 
          href="#" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <div 
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'var(--gradient-ocean)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1.1rem',
              letterSpacing: '-0.03em',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.4)'
            }}
          >
            JA
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              Jubakti Anggoro
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent-teal)', display: 'inline-block' }}></span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              {lang === 'en' ? 'Blue Economy Researcher' : 'Peneliti Ekonomi Biru'}
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '1.75rem' 
          }}
          className="desktop-nav-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'color 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text-accent)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Controls: Language, Theme, LinkedIn */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className="btn btn-secondary btn-icon"
            title={lang === 'en' ? 'Ubah ke Bahasa Indonesia' : 'Switch to English'}
            style={{ width: 'auto', padding: '0.45rem 0.8rem', fontSize: '0.8rem', gap: '0.4rem' }}
          >
            <Globe size={15} color="var(--accent-teal)" />
            <span style={{ fontWeight: 700 }}>{lang.toUpperCase()}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-secondary btn-icon"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={17} color="var(--accent-amber)" /> : <Moon size={17} color="var(--accent-blue)" />}
          </button>

          {/* LinkedIn Profile Direct Link */}
          <a
            href={portfolioData.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
          >
            <LinkedInIcon size={15} color="#ffffff" />
            <span className="desktop-only-text">LinkedIn</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-secondary btn-icon mobile-menu-btn"
            style={{ display: 'none' }}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--bg-card-border)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '1rem',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--bg-tertiary)'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .mobile-menu-btn {
            display: inline-flex !important;
          }
          .desktop-only-text {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
