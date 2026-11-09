import React from 'react';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';
import jubaktiPhoto from '../assets/jubakti.jpg';

export default function TopNav({ activeSlide, setActiveSlide, lang, setLang, onOpenCvModal, portfolioData }) {
  const navItems = [
    { id: 'profile', label: lang === 'en' ? 'PROFILE' : 'PROFIL' },
    { id: 'project', label: lang === 'en' ? 'PUBLICATIONS' : 'PUBLIKASI' },
    { id: 'contact', label: lang === 'en' ? 'CONTACT' : 'KONTAK' }
  ];

  const handleNavClick = (id) => {
    setActiveSlide(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0.75rem 0',
        background: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        transition: 'all 0.3s ease'
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}
      >
        {/* Brand with Circular Jubakti Photo */}
        <motion.a 
          href="#profile"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('profile');
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            color: 'inherit'
          }}
        >
          <div 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid #ffffff',
              boxShadow: '0 2px 10px rgba(2, 132, 199, 0.25)',
              background: '#e0f2fe',
              flexShrink: 0
            }}
          >
            <img 
              src={jubaktiPhoto} 
              alt="Jubakti Anggoro, S.E."
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 46%',
                transform: 'scale(1.15)',
                display: 'block'
              }}
            />
          </div>
          <div style={{ display: 'none' }} className="brand-label">
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              Jubakti Anggoro
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              FEB UNDIP
            </div>
          </div>
        </motion.a>

        {/* Center: Segmented Capsule Navigation */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(241, 245, 249, 0.85)',
            padding: '0.28rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.04)',
            position: 'relative'
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSlide === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="nav-capsule-btn"
                style={{
                  border: 'none',
                  outline: 'none',
                  padding: '0.42rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  position: 'relative',
                  background: 'transparent',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  zIndex: 2,
                  transition: 'color 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavCapsule"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: 'var(--radius-full)',
                      background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                      boxShadow: '0 3px 12px rgba(2, 132, 199, 0.35)',
                      zIndex: -1
                    }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right Actions: Language Switch */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Language Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className="btn btn-soft"
            style={{
              padding: '0.42rem 0.85rem',
              fontSize: '0.8rem',
              borderRadius: 'var(--radius-full)',
              gap: '0.35rem',
              border: '1px solid #bae6fd',
              background: '#f0f9ff',
              color: '#0284c7',
              boxShadow: '0 1px 4px rgba(2, 132, 199, 0.08)'
            }}
            title={lang === 'en' ? 'Ubah ke Bahasa Indonesia' : 'Switch to English'}
          >
            <Globe size={14} color="#0284c7" />
            <span style={{ fontWeight: 800 }}>{lang.toUpperCase()}</span>
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .brand-label {
            display: block !important;
          }
        }
        @media (max-width: 600px) {
          .nav-capsule-btn {
            padding: 0.35rem 0.65rem !important;
            font-size: 0.72rem !important;
          }
        }
        @media (max-width: 400px) {
          .nav-capsule-btn {
            padding: 0.3rem 0.5rem !important;
            font-size: 0.68rem !important;
          }
        }
      `}</style>
    </header>
  );
}
