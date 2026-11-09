import React, { useState } from 'react';
import { MapPin, Calendar, Compass, CheckCircle2, FileText, Sparkles } from 'lucide-react';

export default function FieldworkGallery({ lang, portfolioData }) {
  const { fieldwork } = portfolioData;
  const [selectedSite, setSelectedSite] = useState(fieldwork[0].id);

  return (
    <section id="fieldwork" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            {lang === 'en' ? 'Empirical Field Dispatches' : 'Kajian Lapangan & Lapangan Riset'}
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'From Coastal Mudflats to International Auditoriums' : 'Dari Lumpur Pesisir Hingga Forum Internasional'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Economics cannot be understood solely behind spreadsheets. Explore the primary fieldwork sites and international conferences where my data is gathered and debated.'
              : 'Ilmu ekonomi tidak hanya dipahami di balik layar komputer. Telusuri lokasi riset lapangan dan konferensi internasional tempat data dikumpulkan dan diuji.'}
          </p>
        </div>

        {/* Sites Showcase */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {fieldwork.map((site) => (
            <div 
              key={site.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem'
              }}
            >
              <div>
                {/* Badge and Period */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span className="badge badge-teal">
                    {site.badge}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    <Calendar size={13} />
                    <span>{site.period}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  {site.title[lang]}
                </h3>

                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                  <MapPin size={15} />
                  <span>{site.location}</span>
                </div>

                {/* Summary */}
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {site.summary[lang]}
                </p>

                {/* Highlights List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {site.highlights.map((hl, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} color="var(--accent-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{hl[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--bg-card-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {site.type}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-accent)', fontWeight: 700 }}>
                  {lang === 'en' ? 'Primary Research Site' : 'Lokasi Riset Utama'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

