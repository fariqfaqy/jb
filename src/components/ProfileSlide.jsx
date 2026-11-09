import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Compass
} from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';
import jubaktiPhoto from '../assets/jubakti.jpg';
import { 
  PythonLogo, 
  RLogo, 
  StataLogo, 
  SpssLogo, 
  ExcelLogo, 
  QgisLogo 
} from './icons/SoftwareLogos';

export default function ProfileSlide({ lang, portfolioData, onOpenCvModal }) {
  const { profile } = portfolioData;

  // Interactive Avatar Status Moods (Bilingual)
  const researchStatuses = [
    { 
      text: lang === 'en' ? 'Graduate Scholar (UNDIP FEB)' : 'Akademisi Pascasarjana (FEB UNDIP)', 
      color: '#0284c7', 
      bg: '#e0f2fe' 
    },
    { 
      text: lang === 'en' ? 'Fieldwork in Purworejo, Demak' : 'Riset Lapangan Pesisir Purworejo, Demak', 
      color: '#0d9488', 
      bg: '#ccfbf1' 
    },
    { 
      text: lang === 'en' ? 'Running Stata Probit & Panel Models' : 'Pemodelan Ekonometrika Probit & Panel', 
      color: '#2563eb', 
      bg: '#dbeafe' 
    },
    { 
      text: lang === 'en' ? 'Presenter at The 4th IRCBE 2026' : 'Pemakalah The 4th IRCBE 2026', 
      color: '#ea580c', 
      bg: '#ffedd5' 
    },
    { 
      text: lang === 'en' ? 'Blue Justice & Coastal Governance' : 'Kajian Blue Justice & Tata Kelola Pesisir', 
      color: '#059669', 
      bg: '#dcfce7' 
    }
  ];
  const [statusIndex, setStatusIndex] = useState(0);

  const softwareSkills = [
    { 
      name: 'Python', 
      icon: PythonLogo, 
      sub: lang === 'en' ? 'Data Science' : 'Sains Data', 
      bg: '#f8fafc', 
      border: '#e2e8f0'
    },
    { 
      name: 'Stata', 
      icon: StataLogo, 
      sub: lang === 'en' ? 'Econometrics' : 'Ekonometrika', 
      bg: '#f0f9ff', 
      border: '#bae6fd'
    },
    { 
      name: 'R Project', 
      icon: RLogo, 
      sub: lang === 'en' ? 'Statistical Computing' : 'Komputasi Statistik', 
      bg: '#eff6ff', 
      border: '#bfdbfe'
    },
    { 
      name: 'IBM SPSS', 
      icon: SpssLogo, 
      sub: lang === 'en' ? 'Survey Statistics' : 'Statistik Survei', 
      bg: '#fff1f2', 
      border: '#fecdd3'
    },
    { 
      name: 'MS Excel', 
      icon: ExcelLogo, 
      sub: lang === 'en' ? 'Financial Modeling' : 'Pemodelan Finansial', 
      bg: '#f0fdf4', 
      border: '#bbf7d0'
    },
    { 
      name: 'QGIS', 
      icon: QgisLogo, 
      sub: lang === 'en' ? 'Spatial GIS Mapping' : 'Pemetaan Spasial GIS', 
      bg: '#f7fee7', 
      border: '#d9f99d'
    }
  ];

  const handleAvatarClick = () => {
    setStatusIndex((prev) => (prev + 1) % researchStatuses.length);
  };

  return (
    <section id="profile" className="presentation-slide">
      <div className="container">
        
        {/* Main 2-Column Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 3rem)',
            alignItems: 'center',
            width: '100%'
          }}
        >
          
          {/* Left Column: Interactive Portrait Card with Enlarged Circular Avatar */}
          <div style={{ textAlign: 'center', maxWidth: '375px', margin: '0 auto', width: '100%' }}>
            
            {/* Sub-label */}
            <motion.div 
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontSize: '0.78rem',
                letterSpacing: '0.22em',
                fontWeight: 700,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                marginBottom: '0.25rem'
              }}
            >
              {lang === 'en' ? 'HELLO, I AM' : 'HALO, SAYA'}
            </motion.div>

            {/* Name */}
            <motion.h1 
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              style={{
                fontSize: 'clamp(1.85rem, 3.2vw, 2.45rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                marginBottom: '0.85rem'
              }}
            >
              JUBAKTI ANGGORO
            </motion.h1>

            {/* Interactive Portrait Card */}
            <div style={{ position: 'relative', width: '100%' }}>
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  borderRadius: '26px',
                  background: '#ffffff',
                  border: '1px solid rgba(226, 232, 240, 0.95)',
                  boxShadow: '0 14px 34px -8px rgba(15, 23, 42, 0.09), 0 2px 8px rgba(15, 23, 42, 0.03)',
                  padding: '1.35rem 1.45rem 1.25rem',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  WebkitTouchCallout: 'none'
                }}
              >
                {/* ENLARGED CIRCULAR AVATAR FRAME */}
                <motion.div 
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    position: 'relative',
                    width: 'clamp(150px, 17vw, 175px)',
                    height: 'clamp(150px, 17vw, 175px)',
                    margin: '0 auto 0.85rem',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4.5px solid #ffffff',
                    boxShadow: '0 12px 30px rgba(2, 132, 199, 0.28), 0 2px 8px rgba(0, 0, 0, 0.06)',
                    background: 'linear-gradient(135deg, #7dd3fc 0%, #0284c7 60%, #0369a1 100%)',
                    cursor: 'pointer'
                  }}
                  onClick={handleAvatarClick}
                  title={lang === 'en' ? 'Click to change research focus' : 'Klik foto untuk melihat fokus riset'}
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
                      display: 'block',
                      filter: 'contrast(1.03) brightness(1.02)'
                    }}
                  />
                </motion.div>

                {/* Dynamic Status Tag (Cycles on click) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={statusIndex}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      padding: '0.3rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      background: researchStatuses[statusIndex].bg,
                      color: researchStatuses[statusIndex].color,
                      marginBottom: '0.65rem',
                      cursor: 'pointer'
                    }}
                    onClick={handleAvatarClick}
                  >
                    <span>{researchStatuses[statusIndex].text}</span>
                  </motion.div>
                </AnimatePresence>

                {/* Title & Affiliation Badge */}
                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                  Jubakti Anggoro, S.E.
                </h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-accent)', fontWeight: 600, marginBottom: '0.55rem' }}>
                  {profile.title[lang]}
                </p>
                
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.76rem', color: 'var(--text-muted)', background: '#f1f5f9', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)' }}>
                  <MapPin size={12} color="var(--pastel-blue-dark)" />
                  <span>{lang === 'en' ? 'Diponegoro University, Semarang' : 'Universitas Diponegoro, Semarang'}</span>
                </div>

                {/* Interactive Buttons (LinkedIn, Instagram, CV) */}
                <div style={{ display: 'flex', gap: '0.45rem', marginTop: '0.95rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-pill-primary"
                    style={{ fontSize: '0.8rem', padding: '0.42rem 0.85rem' }}
                  >
                    <LinkedInIcon size={14} color="#ffffff" />
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.instagram.com/jubakt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.42rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #fbcfe8',
                      color: '#db2777',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      boxShadow: '0 2px 6px rgba(219, 39, 119, 0.12)'
                    }}
                  >
                    <InstagramIcon size={14} color="#db2777" />
                    <span>Instagram</span>
                  </motion.a>

                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenCvModal}
                    className="btn btn-soft"
                    style={{ fontSize: '0.8rem', padding: '0.42rem 0.85rem', borderRadius: 'var(--radius-full)' }}
                  >
                    <FileText size={14} color="var(--text-secondary)" />
                    <span>CV</span>
                  </motion.button>
                </div>

                {/* Micro Interaction Hint */}
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.55rem' }}>
                  {lang === 'en' ? 'Click avatar to cycle research focus' : 'Klik foto untuk melihat fokus riset'}
                </div>
              </motion.div>
            </div>

          </div>

          {/* Right Column: ABOUT ME, SOFTWARE SKILLS, and 3 HIGHLIGHT METADATA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            
            {/* ABOUT ME SECTION */}
            <motion.div 
              whileHover={{ x: 3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="soft-card" 
              style={{ 
                padding: '1.15rem 1.5rem',
                borderLeft: '4px solid var(--pastel-blue-dark)'
              }}
            >
              <h2 
                style={{
                  fontSize: '0.925rem',
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  marginBottom: '0.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                {lang === 'en' ? 'ABOUT ME' : 'TENTANG SAYA'}
              </h2>
              <p 
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.62,
                  margin: 0
                }}
              >
                {lang === 'en'
                  ? "Hello, I am Jubakti Anggoro, an environmental economist and graduate research scholar at the Faculty of Economics and Business, Diponegoro University (FEB UNDIP). My research focuses on balancing blue economy development, blue justice, and small-scale fisher household resilience against seasonal climate shocks across Central Java's coastal communities."
                  : "Halo, saya Jubakti Anggoro, peneliti ekonomi dan akademisi pascasarjana di Fakultas Ekonomika dan Bisnis, Universitas Diponegoro (FEB UNDIP). Fokus riset saya menelaah keseimbangan pertumbuhan ekonomi biru (blue economy), keadilan biru (blue justice), serta strategi adaptasi rumah tangga nelayan skala kecil dalam menghadapi guncangan musim paceklik di wilayah pesisir Jawa Tengah."}
              </p>
            </motion.div>

            {/* SOFTWARE SKILLS (Clean Professional Badges without code drawer) */}
            <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '0.95rem 1.35rem', borderRadius: '20px', border: '1px solid var(--bg-card-border)' }}>
              <div style={{ marginBottom: '0.55rem' }}>
                <h3 
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 900,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    margin: 0
                  }}
                >
                  {lang === 'en' ? 'QUANTITATIVE SOFTWARE & TOOLS' : 'PERANGKAT LUNAK & ANALISIS EKONOMETRIKA'}
                </h3>
              </div>

              {/* Horizontal Row of App Icon Badges */}
              <div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                {softwareSkills.map((app, index) => {
                  const IconComponent = app.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2, scale: 1.02 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: '#ffffff',
                        padding: '0.45rem 0.8rem',
                        borderRadius: '14px',
                        border: '1px solid var(--bg-card-border)',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                        userSelect: 'none'
                      }}
                    >
                      <div 
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '8px',
                          background: app.bg,
                          border: `1px solid ${app.border}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                          {app.name}
                        </div>
                        <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>
                          {app.sub}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* 3 METADATA HIGHLIGHT COLUMNS (EDUCATION, FORUM, FOCUS) */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 185px), 1fr))',
                gap: '0.7rem'
              }}
            >
              
              {/* Col 1: EDUCATION */}
              <motion.div 
                whileHover={{ y: -2 }}
                style={{
                  background: '#ffffff',
                  padding: '0.95rem 1.1rem',
                  borderRadius: '18px',
                  border: '1px solid var(--bg-card-border)',
                  boxShadow: 'var(--shadow-soft-sm)'
                }}
              >
                <h4 
                  style={{
                    fontSize: '0.825rem',
                    fontWeight: 900,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--pastel-blue-dark)',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <GraduationCap size={15} />
                  {lang === 'en' ? 'EDUCATION' : 'PENDIDIKAN'}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontWeight: 700 }}>
                      {lang === 'en' ? '2024 - Present' : '2024 - Sekarang'}
                    </div>
                    <div style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {lang === 'en' ? 'M.Sc. in Economics' : 'Magister Ilmu Ekonomi'}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      FEB UNDIP
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontWeight: 700 }}>
                      2020 - 2024
                    </div>
                    <div style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {lang === 'en' ? 'B.Sc. in Economics' : 'Sarjana Ekonomi (S.E.)'}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      FEB UNDIP
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Col 2: RESEARCH FORUM */}
              <motion.div 
                whileHover={{ y: -2 }}
                style={{
                  background: '#ffffff',
                  padding: '0.95rem 1.1rem',
                  borderRadius: '18px',
                  border: '1px solid var(--bg-card-border)',
                  boxShadow: 'var(--shadow-soft-sm)'
                }}
              >
                <h4 
                  style={{
                    fontSize: '0.825rem',
                    fontWeight: 900,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--pastel-teal-dark)',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <Briefcase size={15} />
                  {lang === 'en' ? 'ACADEMIC FORUMS' : 'FORUM AKADEMIK'}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  <div>{lang === 'en' ? '• The 4th IRCBE 2026 Author' : '• Pemakalah The 4th IRCBE 2026'}</div>
                  <div>{lang === 'en' ? '• V2V Global Partnership Network' : '• Kolaborator V2V Global Partnership'}</div>
                  <div>{lang === 'en' ? '• MARLISPACE Forum / Springer' : '• Forum Konservasi MARLISPACE'}</div>
                </div>
              </motion.div>

              {/* Col 3: RESEARCH PILLARS */}
              <motion.div 
                whileHover={{ y: -2 }}
                style={{
                  background: '#ffffff',
                  padding: '0.95rem 1.1rem',
                  borderRadius: '18px',
                  border: '1px solid var(--bg-card-border)',
                  boxShadow: 'var(--shadow-soft-sm)'
                }}
              >
                <h4 
                  style={{
                    fontSize: '0.825rem',
                    fontWeight: 900,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#8b5cf6',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <Compass size={15} />
                  {lang === 'en' ? 'RESEARCH FOCUS' : 'FOKUS RISET'}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  <div>• Blue Economy & Blue Justice</div>
                  <div>{lang === 'en' ? '• Fisher Resilience & Tidal Rob' : '• Resiliensi Nelayan & Banjir Rob'}</div>
                  <div>{lang === 'en' ? '• Coastal Resource Valuation' : '• Valuasi Sumber Daya Pesisir'}</div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
