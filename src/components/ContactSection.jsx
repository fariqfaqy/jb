import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  FileText, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import LinkedInIcon from './icons/LinkedInIcon';

export default function ContactSection({ lang, portfolioData, onOpenCvModal }) {
  const { profile } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    institution: '',
    topic: 'Research Collaboration',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Simulate successful dispatch
    setSubmitted(true);
    setTimeout(() => {
      // Keep state or reset after 5s
    }, 5000);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            {lang === 'en' ? 'Get In Touch' : 'Hubungi & Kolaborasi'}
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'Let’s Collaborate on Coastal Economics & Policy' : 'Mari Berkolaborasi untuk Riset & Kebijakan Pesisir'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Available for joint research proposals, econometric advisory, policy brief co-authorship, and academic symposium speaking.'
              : 'Terbuka untuk inisiasi riset bersama, konsultasi ekonometrika, penulisan policy brief, dan narasumber forum ilmiah.'}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '1050px', margin: '0 auto' }}>
          
          {/* Left Column: Direct Links & Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* LinkedIn Showcase Card */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: '#0a66c2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}
                >
                  <LinkedInIcon size={24} color="#ffffff" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    LinkedIn Network
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    /in/jubaktianggoro
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {lang === 'en' 
                  ? 'Connect with Jubakti Anggoro directly on LinkedIn for the fastest professional response and academic networking.' 
                  : 'Terhubung langsung dengan Jubakti Anggoro di LinkedIn untuk komunikasi profesional tercepat dan jejaring riset.'}
              </p>

              <a 
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <LinkedInIcon size={16} color="#ffffff" />
                <span>{lang === 'en' ? 'Open LinkedIn Profile' : 'Kunjungi Profil LinkedIn'}</span>
              </a>
            </div>

            {/* Academic Office Card */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={18} color="var(--accent-teal)" />
                {lang === 'en' ? 'Academic Affiliation' : 'Afiliasi Kampus'}
              </h4>

              <div style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                <strong>{profile.institution[lang]}</strong><br />
                Jl. Prof. Soedarto, S.H., Tembalang<br />
                Semarang, Jawa Tengah 50275, Indonesia
              </div>

              <button 
                onClick={onOpenCvModal} 
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.875rem' }}
              >
                <FileText size={16} color="var(--accent-amber)" />
                <span>{lang === 'en' ? 'Download Executive Summary' : 'Unduh Ringkasan CV & Riset'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={18} color="var(--accent-cyan)" />
              {lang === 'en' ? 'Send a Collaboration Inquiry' : 'Kirim Pesan / Pengajuan Kolaborasi'}
            </h3>

            {submitted ? (
              <div 
                className="fade-in"
                style={{
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                  background: 'var(--bg-tertiary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--accent-emerald)'
                }}
              >
                <CheckCircle size={48} color="var(--accent-emerald)" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {lang === 'en' ? 'Inquiry Received!' : 'Pesan Berhasil Terkirim!'}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {lang === 'en' 
                    ? 'Thank you for reaching out. Jubakti will review your collaboration note and respond promptly.'
                    : 'Terima kasih telah menghubungi. Jubakti akan meninjau catatan kolaborasi Anda dan segera memberikan tanggapan.'}
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  {lang === 'en' ? 'Send Another Note' : 'Kirim Pesan Lain'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    {lang === 'en' ? 'Your Name' : 'Nama Lengkap'} *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder={lang === 'en' ? 'e.g. Dr. Jane Smith' : 'cth. Dr. Budi Santoso'}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--bg-card-border)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                      {lang === 'en' ? 'Email Address' : 'Alamat Email'} *
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@institution.edu"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--bg-card-border)',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                      {lang === 'en' ? 'Institution' : 'Institusi / Instansi'}
                    </label>
                    <input 
                      type="text" 
                      placeholder={lang === 'en' ? 'University / Agency' : 'Universitas / Lembaga'}
                      value={formState.institution}
                      onChange={(e) => setFormState({ ...formState, institution: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--bg-card-border)',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    {lang === 'en' ? 'Collaboration Type' : 'Kategori Keperluan'}
                  </label>
                  <select
                    value={formState.topic}
                    onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--bg-card-border)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Research Collaboration">{lang === 'en' ? 'Joint Research Project / Grant' : 'Riset Bersama / Hibah Riset'}</option>
                    <option value="Conference / Speaking">{lang === 'en' ? 'Conference Keynote / Panelist' : 'Undangan Pembicara / Seminar'}</option>
                    <option value="Policy Advisory">{lang === 'en' ? 'Policy Brief / Maritime Consulting' : 'Konsultasi Kebijakan Kelautan'}</option>
                    <option value="Academic Exchange">{lang === 'en' ? 'Academic / Student Inquiry' : 'Diskusi Akademik Umum'}</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    {lang === 'en' ? 'Message' : 'Isi Pesan'} *
                  </label>
                  <textarea 
                    rows="4" 
                    required
                    placeholder={lang === 'en' ? 'Describe the proposed research scope, questions, or collaboration idea...' : 'Jelaskan rencana penelitian, topik, atau ide kolaborasi yang diajukan...'}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--bg-card-border)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.9rem',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  <Send size={16} />
                  <span>{lang === 'en' ? 'Send Message' : 'Kirim Pesan'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
