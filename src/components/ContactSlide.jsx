import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  FileText, 
  ExternalLink,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';
import jubaktiPhoto from '../assets/jubakti.jpg';

export default function ContactSlide({ lang, portfolioData, onOpenCvModal }) {
  const { profile } = portfolioData;

  const [formOpen, setFormOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const archives = [
    {
      year: '2024',
      label: lang === 'en' ? 'PORTFOLIO 2024' : 'PORTOFOLIO 2024',
      title: lang === 'en' ? 'Undergraduate Economic Thesis & Regional Analytics' : 'Skripsi Ilmu Ekonomi & Analisis Pembangunan Regional',
      sub: 'FEB UNDIP'
    },
    {
      year: '2025',
      label: lang === 'en' ? 'RESEARCH 2025' : 'RISET 2025',
      title: lang === 'en' ? 'Demak Coastal Household & Fisher Survey Database' : 'Database Survei Rumah Tangga & Nelayan Pesisir Demak',
      sub: lang === 'en' ? '180 Fisher Household Samples' : '180 Sampel Rumah Tangga Nelayan'
    },
    {
      year: '2026',
      label: 'POLICY BRIEF 2026',
      title: lang === 'en' ? 'Blue Economy & Fisher Livelihood Adaptation Framework' : 'Ringkasan Kebijakan Adaptasi Penghidupan Nelayan & Blue Economy',
      sub: 'The 4th IRCBE 2026 Forum'
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSent(true);
  };

  return (
    <section id="contact" className="presentation-slide">
      <div className="container">
        
        {/* Main 2-Column Section */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.5rem, 3.5vw, 3.5rem)',
            alignItems: 'center',
            width: '100%'
          }}
        >
          
          {/* Left Column: Avatar + Contact Handles + Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            
            {/* Header Identity Row with Jubakti Photo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <motion.div 
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 8px 22px rgba(2, 132, 199, 0.25)',
                  border: '3.5px solid #ffffff',
                  background: 'linear-gradient(135deg, #7dd3fc 0%, #0284c7 60%, #0369a1 100%)',
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
                    display: 'block',
                    filter: 'contrast(1.03) brightness(1.02)'
                  }}
                />
              </motion.div>

              <div>
                <div style={{ fontSize: '0.76rem', letterSpacing: '0.14em', fontWeight: 800, color: 'var(--pastel-blue-dark)', textTransform: 'uppercase' }}>
                  {lang === 'en' ? 'GRADUATE SCHOLAR' : 'AKADEMISI PASCASARJANA'}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                  JUBAKTI ANGGORO, S.E.
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {lang === 'en' ? 'Diponegoro University, Semarang' : 'Universitas Diponegoro, Semarang'}
                </p>
              </div>
            </div>

            {/* Social / Contact Items List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              
              {/* LinkedIn */}
              <motion.a
                whileHover={{ x: 5, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  background: '#ffffff',
                  padding: '0.55rem 0.95rem',
                  borderRadius: '16px',
                  border: '1px solid var(--bg-card-border)',
                  boxShadow: 'var(--shadow-soft-sm)',
                  color: 'inherit'
                }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#0a66c2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0
                  }}
                >
                  <LinkedInIcon size={16} color="#ffffff" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>LinkedIn</div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>/in/jubaktianggoro</div>
                </div>
                <ExternalLink size={13} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />
              </motion.a>

              {/* Instagram */}
              <motion.a
                whileHover={{ x: 5, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.instagram.com/jubakt/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  background: '#ffffff',
                  padding: '0.55rem 0.95rem',
                  borderRadius: '16px',
                  border: '1px solid var(--bg-card-border)',
                  boxShadow: 'var(--shadow-soft-sm)',
                  color: 'inherit'
                }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0
                  }}
                >
                  <InstagramIcon size={16} color="#ffffff" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>Instagram</div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>@jubakt</div>
                </div>
                <ExternalLink size={13} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />
              </motion.a>

              {/* Google Scholar */}
              <motion.a
                whileHover={{ x: 5, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={profile.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  background: '#ffffff',
                  padding: '0.55rem 0.95rem',
                  borderRadius: '16px',
                  border: '1px solid var(--bg-card-border)',
                  boxShadow: 'var(--shadow-soft-sm)',
                  color: 'inherit'
                }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1d4ed8',
                    flexShrink: 0
                  }}
                >
                  <GraduationCap size={17} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>Google Scholar</div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {lang === 'en' ? 'Jubakti Anggoro (12 Publications)' : 'Jubakti Anggoro (12 Publikasi)'}
                  </div>
                </div>
                <ExternalLink size={13} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />
              </motion.a>

              {/* Email */}
              <motion.a
                whileHover={{ x: 5, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${profile.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  background: '#ffffff',
                  padding: '0.55rem 0.95rem',
                  borderRadius: '16px',
                  border: '1px solid var(--bg-card-border)',
                  boxShadow: 'var(--shadow-soft-sm)',
                  color: 'inherit'
                }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--pastel-blue-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--pastel-blue-dark)',
                    flexShrink: 0
                  }}
                >
                  <Mail size={16} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>Email</div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{profile.email}</div>
                </div>
              </motion.a>

              {/* Campus */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: '#ffffff',
                  padding: '0.55rem 0.95rem',
                  borderRadius: '16px',
                  border: '1px solid var(--bg-card-border)',
                  boxShadow: 'var(--shadow-soft-sm)'
                }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--pastel-teal-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--pastel-teal-dark)',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={16} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {lang === 'en' ? 'Campus' : 'Kampus'}
                  </div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {lang === 'en' ? 'FEB Diponegoro University, Semarang' : 'FEB Universitas Diponegoro, Semarang'}
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons: Inquiry Form & CV Modal */}
            <div style={{ marginTop: '0.45rem', display: 'flex', gap: '0.6rem' }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFormOpen(!formOpen)}
                className="btn btn-pill-primary"
                style={{ fontSize: '0.825rem', flex: 1, padding: '0.55rem 1rem' }}
              >
                <Send size={14} />
                <span>
                  {formOpen 
                    ? (lang === 'en' ? 'Close Message Form' : 'Tutup Form Pesan') 
                    : (lang === 'en' ? 'Send Collaboration Message' : 'Kirim Pesan Kolaborasi')}
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenCvModal}
                className="btn btn-soft"
                style={{ fontSize: '0.825rem', padding: '0.55rem 1rem', borderRadius: 'var(--radius-full)' }}
                title="Curriculum Vitae"
              >
                <FileText size={14} />
                <span>CV</span>
              </motion.button>
            </div>

            {/* Interactive Contact Form Drawer */}
            <AnimatePresence>
              {formOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: '#ffffff',
                    padding: '1.15rem',
                    borderRadius: '18px',
                    border: '1px solid #cbd5e1',
                    boxShadow: 'var(--shadow-soft-md)',
                    overflow: 'hidden'
                  }}
                >
                  {formSent ? (
                    <div style={{ textAlign: 'center', padding: '0.85rem 0' }}>
                      <CheckCircle size={36} color="#10b981" style={{ margin: '0 auto 0.5rem' }} />
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {lang === 'en' ? 'Message Sent Successfully!' : 'Pesan Terkirim!'}
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                        {lang === 'en' 
                          ? 'Thank you! Jubakti will review your inquiry and reply promptly.' 
                          : 'Jubakti akan membaca pesan Anda dan segera membalas.'}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSendMessage} style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                      <input 
                        type="text" 
                        required
                        placeholder={lang === 'en' ? 'Full Name' : 'Nama Lengkap'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.8rem', fontFamily: 'inherit' }}
                      />
                      <input 
                        type="email" 
                        required
                        placeholder={lang === 'en' ? 'Email Address' : 'Alamat Email'}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.8rem', fontFamily: 'inherit' }}
                      />
                      <textarea 
                        rows="2" 
                        required
                        placeholder={lang === 'en' ? 'Message or research inquiry...' : 'Pesan atau pertanyaan kolaborasi...'}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.8rem', fontFamily: 'inherit', resize: 'vertical' }}
                      ></textarea>
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit" 
                        className="btn btn-pill-primary" 
                        style={{ padding: '0.55rem', fontSize: '0.825rem' }}
                      >
                        <Send size={13} />
                        <span>{lang === 'en' ? 'Send Message' : 'Kirim Sekarang'}</span>
                      </motion.button>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right Column: THANK YOU 2026 + Quote + Academic Archives */}
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>

            <div>
              <motion.div 
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                style={{
                  fontSize: 'clamp(2.4rem, 5.2vw, 4rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase'
                }}
              >
                THANK YOU
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                style={{
                  fontSize: 'clamp(3rem, 6.8vw, 5rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.9,
                  color: 'var(--pastel-blue-dark)',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem'
                }}
              >
                2026
              </motion.div>

              <p 
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '460px',
                  marginLeft: 'auto',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  margin: '0 0 0.95rem auto'
                }}
              >
                "{lang === 'en' 
                  ? 'Transforming coastal vulnerabilities into shared viability through sound economic science and community-grounded insights.' 
                  : 'Mentransformasi kerentanan pesisir menjadi keberdayaan bersama melalui ketajaman ilmu ekonomi dan kepedulian nyata bagi masyarakat.'}"
              </p>
            </div>

            {/* Academic Archives Capsules */}
            <div style={{ textAlign: 'left', background: 'rgba(255, 255, 255, 0.8)', padding: '0.85rem 1.15rem', borderRadius: '20px', border: '1px solid var(--bg-card-border)' }}>
              <div 
                style={{
                  fontSize: '0.76rem',
                  letterSpacing: '0.12em',
                  fontWeight: 800,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '0.55rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <BookOpen size={14} color="var(--pastel-blue-dark)" />
                <span>{lang === 'en' ? 'RESEARCH ARCHIVES & RETROSPECTIVE' : 'ARSIP PENELITIAN & RETROSPEKSI'}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {archives.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      background: '#ffffff',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      fontSize: '0.78rem'
                    }}
                  >
                    <span 
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        padding: '0.18rem 0.5rem',
                        borderRadius: 'var(--radius-full)',
                        background: '#f0f9ff',
                        color: 'var(--pastel-blue-dark)',
                        flexShrink: 0
                      }}
                    >
                      {item.year}
                    </span>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.title}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', flexShrink: 0 }}>
                      {item.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.45rem', color: 'var(--pastel-blue-dark)', fontWeight: 700, fontSize: '0.84rem' }}>
              <span>Jubakti Anggoro • Universitas Diponegoro</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
