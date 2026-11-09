import React, { useState } from 'react';
import { 
  BookOpen, 
  Tag, 
  ExternalLink, 
  Filter, 
  Lightbulb, 
  Layers, 
  FileCheck2, 
  X, 
  Copy, 
  Check,
  Share2
} from 'lucide-react';

export default function ResearchShowcase({ lang, portfolioData }) {
  const { research } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [copiedId, setCopiedId] = useState(false);

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Publications' : 'Semua Publikasi' },
    { id: 'seasonality', label: lang === 'en' ? 'Fisher Seasonality' : 'Musiman Nelayan' },
    { id: 'blue-economy', label: lang === 'en' ? 'Blue Justice & Demak' : 'Keadilan Biru Demak' },
    { id: 'conservation', label: lang === 'en' ? 'Plastics & MPA' : 'Sampah Plastik & MPA' },
    { id: 'v2v', label: lang === 'en' ? 'V2V Framework' : 'Kerangka V2V' }
  ];

  const filteredResearch = activeCategory === 'all' 
    ? research 
    : research.filter(item => item.category === activeCategory);

  const handleCopyCitation = (paper) => {
    const citation = `Anggoro, J. (${paper.year}). ${paper.title.en}. Presented at/Published in: ${paper.forum}.`;
    navigator.clipboard.writeText(citation);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <section id="research" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} />
            {lang === 'en' ? 'Peer-Reviewed & Conference Papers' : 'Publikasi & Konferensi Ilmiah'}
          </div>
          <h2 className="section-title">
            {lang === 'en' ? 'Research Publications & Working Papers' : 'Publikasi Riset & Kertas Kerja Ilmiah'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'Rigorous empirical investigations combining microeconometric techniques with socio-ecological resilience metrics.'
              : 'Kajian empiris mendalam yang memadukan teknik ekonometrika mikro dengan parameter resiliensi sosial-ekologis pesisir.'}
          </p>

          {/* Category Filter Pills */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.6rem', 
              justifyContent: 'center', 
              marginTop: '1.75rem' 
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`btn ${activeCategory === cat.id ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  padding: '0.45rem 1rem',
                  fontSize: '0.85rem',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Research Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredResearch.map((paper) => (
            <div 
              key={paper.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem'
              }}
            >
              <div>
                {/* Meta Badge & Year */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span className="badge badge-teal" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                    {paper.forum}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {paper.year}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 800, 
                    color: 'var(--text-primary)', 
                    marginBottom: '1rem',
                    lineHeight: 1.4 
                  }}
                >
                  {paper.title[lang]}
                </h3>

                {/* Abstract snippet */}
                <p 
                  style={{ 
                    fontSize: '0.92rem', 
                    color: 'var(--text-secondary)', 
                    lineHeight: 1.65, 
                    marginBottom: '1.5rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {paper.abstract[lang]}
                </p>

                {/* Key Finding Box */}
                <div 
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-tertiary)',
                    borderLeft: '3px solid var(--accent-cyan)',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    <Lightbulb size={13} />
                    {lang === 'en' ? 'Core Empirical Finding' : 'Temuan Kunci Riset'}
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {paper.keyFinding[lang]}
                  </div>
                </div>
              </div>

              <div>
                {/* Methodology Pill */}
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Layers size={14} color="var(--accent-teal)" />
                  <span style={{ fontWeight: 600 }}>{paper.methodology[lang]}</span>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {paper.tags.map((t, idx) => (
                    <span key={idx} className="badge" style={{ fontSize: '0.7rem' }}>
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <button 
                    onClick={() => setSelectedPaper(paper)}
                    className="btn btn-secondary"
                    style={{ flex: 1, padding: '0.55rem', fontSize: '0.85rem' }}
                  >
                    <span>{lang === 'en' ? 'Deep Dive & Insights' : 'Pelajari Detail & Data'}</span>
                  </button>

                  <button 
                    onClick={() => handleCopyCitation(paper)}
                    className="btn btn-outline btn-icon"
                    title={lang === 'en' ? 'Copy Academic Citation' : 'Salin Sitasi Akademik'}
                  >
                    {copiedId ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Paper Details Modal */}
        {selectedPaper && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(8px)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              animation: 'fadeIn 0.2s ease'
            }}
            onClick={() => setSelectedPaper(null)}
          >
            <div 
              className="glass-card"
              style={{
                maxWidth: '700px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '2.5rem',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-xl)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <span className="badge badge-cyan" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
                  {selectedPaper.forum} ({selectedPaper.year})
                </span>
                <button 
                  onClick={() => setSelectedPaper(null)}
                  className="btn btn-secondary btn-icon"
                  style={{ width: '36px', height: '36px' }}
                >
                  <X size={18} />
                </button>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.3 }}>
                {selectedPaper.title[lang]}
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--accent-teal)', fontWeight: 800, marginBottom: '0.5rem' }}>
                  {lang === 'en' ? 'Full Abstract' : 'Abstrak Lengkap'}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {selectedPaper.abstract[lang]}
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--accent-teal)', fontWeight: 800, marginBottom: '0.5rem' }}>
                  {lang === 'en' ? 'Empirical Methodology & Data Sources' : 'Metodologi Empiris & Sumber Data'}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontFamily: 'var(--font-mono)' }}>
                  {selectedPaper.methodology[lang]}
                </p>
              </div>

              <div style={{ marginBottom: '2rem', padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-blue)' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-blue)', fontWeight: 800, marginBottom: '0.4rem' }}>
                  {lang === 'en' ? 'Policy & Practical Implications' : 'Implikasi Kebijakan & Praktik'}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {selectedPaper.keyFinding[lang]}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <button 
                  onClick={() => handleCopyCitation(selectedPaper)}
                  className="btn btn-primary"
                  style={{ padding: '0.6rem 1.25rem' }}
                >
                  {copiedId ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copiedId ? (lang === 'en' ? 'Citation Copied!' : 'Sitasi Disalin!') : (lang === 'en' ? 'Copy APA Citation' : 'Salin Sitasi APA')}</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

