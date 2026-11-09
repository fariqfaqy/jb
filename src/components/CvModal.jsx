import React, { useState } from 'react';
import { X, Printer, ExternalLink, Globe } from 'lucide-react';

export default function CvModal({ isOpen, onClose, lang: initialLang, portfolioData }) {
  if (!isOpen) return null;

  const [cvLang, setCvLang] = useState(initialLang || 'id');
  const { profile } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const publications = [
    {
      title: cvLang === 'en'
        ? "From Blue Economy to Blue Justice: Ensuring Inclusive Sustainability in Rawa Pening's Resource Utilization"
        : "Dari Blue Economy Menuju Blue Justice: Memastikan Keberlanjutan Inklusif Pemanfaatan Sumber Daya Rawa Pening",
      journal: "Highlights of Sustainability, Vol. 5, No. 1, pp. 116-129",
      year: "2026",
      authors: "Waridin, Zulfikar Al Hafidz, Nugroho S. B. M., Munasik, Jubakti Anggoro",
      link: "https://www.hos.pub/articles/hsustain5010009"
    },
    {
      title: cvLang === 'en'
        ? "Determinants of the Blue Economy Share in Indonesia: Panel Data Analysis of 34 Provinces (2021-2024)"
        : "Penentu Pangsa Ekonomi Biru di Indonesia: Panel Analisis Data 34 Provinsi Tahun 2021-2024",
      journal: "Sosio e-Kons, Vol. 18, No. 2, pp. 352-361",
      year: "2026",
      authors: "Indah Susilowati, Jubakti Anggoro, Graciella Salianto, Nada Zaretta Aulia Islamei",
      link: "https://newjournal.lppmunindra.ac.id/index.php/sosio_ekons/article/view/4405"
    },
    {
      title: cvLang === 'en'
        ? "Seasonality and Livelihood Adaptation among Small- and Large-Scale Fishers in Coastal Indonesia"
        : "Musiman dan Adaptasi Penghidupan antara Nelayan Skala Kecil dan Besar di Pesisir Indonesia",
      journal: "The 4th International Research Conference on Business and Economics (IRCBE 2026), FEB UNDIP",
      year: "2026",
      authors: "Jubakti Anggoro, Indah Susilowati",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=id&user=4Ewu6UAAAAAJ&citation_for_view=4Ewu6UAAAAAJ:W7OEmFMy1HYC"
    },
    {
      title: cvLang === 'en'
        ? "Assessing Blue Economy Implementation in Supporting Blue Growth and Blue Justice: Purworejo Village, Demak Regency"
        : "Menakar Implementasi Blue Economy dalam Mendukung Blue Growth dan Blue Justice: Studi Kasus Desa Purworejo, Kabupaten Demak",
      journal: "Repositori Riset FEB Universitas Diponegoro",
      year: "2026",
      authors: "Jubakti Anggoro",
      link: "https://repofeb.undip.ac.id/17854/"
    },
    {
      title: cvLang === 'en'
        ? "Plastic Waste Management in Karimunjawa Small Island Marine Protected Area: Fast Pyrolysis and Governance Integration"
        : "Pengelolaan Sampah Plastik di Kawasan Konservasi Laut Karimunjawa: Pirolisis Cepat dan Integrasi Tata Kelola",
      journal: "MARLISPACE International Forum / Springer",
      year: "2026",
      authors: "Jubakti Anggoro, Indah Susilowati",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=id&user=4Ewu6UAAAAAJ&citation_for_view=4Ewu6UAAAAAJ:zYLM7Y9cAGgC"
    },
    {
      title: cvLang === 'en'
        ? "Dual Gender Roles in the Blue Economy: Case Study of TPI Tawang, Kendal Regency"
        : "Peran Ganda Gender dalam Ekonomi Biru Studi Kasus: TPI Tawang, Kendal",
      journal: "Jurnal Riset Ekonomi dan Bisnis (JREB USM), Vol. 18, No. 3",
      year: "2025",
      authors: "S. Lintang Wijaya, Yossi Amalia, Christian M. Siregar, Klara H. Canisa, Thomas Saputra, Rangga Kyoretsu, Indah Susilowati, Jubakti Anggoro",
      link: "https://journals.usm.ac.id/index.php/jreb/article/view/13434"
    },
    {
      title: cvLang === 'en'
        ? "Coastal Environmental Analysis and Marine Waste Challenges at Mangunharjo Beach, Semarang City"
        : "Analisis Kondisi Lingkungan Pesisir dan Permasalahan Sampah di Pantai Mangunharjo Kota Semarang",
      journal: "Geodika: Jurnal Kajian Ilmu dan Pendidikan Geografi, Vol. 10, No. 1",
      year: "2026",
      authors: "Muhammad Iqbal Ash-shidiqy, Jubakti Anggoro, dkk.",
      link: "https://e-journal.hamzanwadi.ac.id/index.php/gdk/article/view/33662"
    },
    {
      title: cvLang === 'en'
        ? "Carbon Footprint Analysis of Waste Generation and Electricity Consumption at Mangkang Market, Indonesia"
        : "Analisis Jejak Karbon dari Timbulan Sampah dan Konsumsi Listrik di Pasar Mangkang",
      journal: "Journal of Bioresources and Environmental Sciences (JBES)",
      year: "2026",
      authors: "Jubakti Anggoro, dkk.",
      link: "https://jbes.cbiore.id/index.php/jbes/article/view/19999"
    },
    {
      title: cvLang === 'en'
        ? "The Prospects of Specialist Outreach (Speling) in Improving Community Health Care at the Village Level: Demak Regency"
        : "Prospek Program Pelayanan Spesialis Keliling (Speling) dalam Meningkatkan Layanan Kesehatan di Tingkat Desa: Kabupaten Demak",
      journal: "Acta Innovations",
      year: "2026",
      authors: "F. N. Kholis, D. S. Ratnaningsih, J. P. Suko, Z. Wahab, Jubakti Anggoro, G. Salianto",
      link: "https://actainnovations.com/index.php/pub/article/view/2253"
    },
    {
      title: cvLang === 'en'
        ? "Human Development Index Growth and Its Implications for Regional Economic Resilience: 10 Cities/Regencies in Central Java (2015-2024)"
        : "Analisis Pengaruh Peningkatan Indeks Pembangunan Manusia terhadap Ketahanan Ekonomi Wilayah: 10 Kab/Kota Jawa Tengah (2015-2024)",
      journal: "Economics and Digital Business Review (Ecotal)",
      year: "2025",
      authors: "Jubakti Anggoro, dkk.",
      link: "https://ojs.vifada.id/index.php/ecotal/article/view/2787"
    },
    {
      title: cvLang === 'en'
        ? "Narratives of Happiness and Well-being: Lived Realities in the Chilika Lagoon"
        : "Narasi Kebahagiaan dan Kesejahteraan: Realitas Kehidupan di Laguna Chilika",
      journal: "Zenodo / V2V Global Partnership Working Paper Series",
      year: "2025",
      authors: "V2V Global Partnership Network (kontributor Jubakti Anggoro)",
      link: "https://zenodo.org/records/18066420"
    },
    {
      title: cvLang === 'en'
        ? "Applicability of Adaptive Co-Management within Indonesian Small-Scale Fisheries"
        : "Penerapan Tata Kelola Bersama Adaptif (Adaptive Co-Management) pada Perikanan Skala Kecil Indonesia",
      journal: "UWSpace Digital Repository, University of Waterloo",
      year: "2024",
      authors: "University of Waterloo UWSpace Repository / V2V Global Partnership Network",
      link: "https://hdl.handle.net/10012/21722"
    }
  ];

  return (
    <div 
      className="cv-modal-backdrop"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 110,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        animation: 'fadeIn 0.2s ease'
      }}
      onClick={onClose}
    >
      <div 
        className="cv-modal-card"
        style={{
          maxWidth: '860px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #cbd5e1',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.35)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Action Toolbar (Hidden in Print) */}
        <div 
          className="no-print"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(6px)',
            borderBottom: '1px solid #e2e8f0',
            padding: '0.75rem 1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '20px 20px 0 0'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)', background: '#f1f5f9', color: '#334155' }}>
              ATS FORMAT RESUME
            </span>
            <button
              onClick={() => setCvLang(cvLang === 'en' ? 'id' : 'en')}
              style={{
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                padding: '0.28rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#0284c7'
              }}
            >
              <Globe size={13} />
              <span>{cvLang === 'en' ? 'Bahasa Indonesia' : 'English CV'}</span>
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={handlePrint}
              style={{
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                color: '#1e293b',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
              title={cvLang === 'en' ? 'Print or Save as PDF' : 'Cetak atau Simpan PDF'}
            >
              <Printer size={15} />
              <span>{cvLang === 'en' ? 'Print / PDF' : 'Cetak / PDF'}</span>
            </button>

            <button 
              onClick={onClose}
              style={{
                border: 'none',
                background: '#f1f5f9',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#475569'
              }}
              title="Close"
            >
              <X size={17} />
            </button>
          </div>
        </div>

        {/* ATS Resume Printable Paper Body */}
        <div 
          className="ats-resume-body"
          style={{
            padding: '2.5rem 3rem',
            color: '#111827',
            fontFamily: 'var(--font-sans)',
            lineHeight: 1.5,
            fontSize: '0.92rem'
          }}
        >
          {/* Header (Centered ATS Style) */}
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <h1 
              style={{
                fontSize: '1.85rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#000000',
                margin: '0 0 0.35rem 0'
              }}
            >
              JUBAKTI ANGGORO, S.E.
            </h1>

            <div 
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#1e293b',
                marginBottom: '0.35rem'
              }}
            >
              {cvLang === 'en' 
                ? 'Environmental Economist | Blue Economy & Coastal Livelihood Researcher' 
                : 'Peneliti Ekonomi Lingkungan | Blue Economy & Valuasi Sumber Daya Pesisir'}
            </div>

            <div 
              style={{
                fontSize: '0.84rem',
                color: '#334155',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}
            >
              <span>{cvLang === 'en' ? 'Semarang, Central Java, Indonesia' : 'Semarang, Jawa Tengah'}</span>
              <span>|</span>
              <a href={`mailto:${profile.email}`} style={{ color: '#0f172a', textDecoration: 'none' }}>
                {profile.email}
              </a>
              <span>|</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7', textDecoration: 'underline' }}>
                linkedin.com/in/jubaktianggoro
              </a>
              <span>|</span>
              <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7', textDecoration: 'underline' }}>
                {cvLang === 'en' ? 'Google Scholar Profile' : 'Profil Google Scholar'}
              </a>
            </div>

            {/* Horizontal Line under Header */}
            <div style={{ width: '100%', height: '1.5px', background: '#000000', margin: '0.95rem 0 1.25rem' }} />
          </div>

          {/* SECTION 1: PROFIL / PROFESSIONAL SUMMARY */}
          <div style={{ marginBottom: '1.4rem' }}>
            <div 
              style={{
                fontSize: '0.98rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#000000',
                paddingBottom: '0.25rem',
                borderBottom: '1.5px solid #000000',
                marginBottom: '0.6rem'
              }}
            >
              {cvLang === 'en' ? 'PROFESSIONAL SUMMARY' : 'PROFIL'}
            </div>
            <p style={{ margin: 0, textAlign: 'justify', lineHeight: 1.65, color: '#1f2937' }}>
              {cvLang === 'en'
                ? "Economics graduate (B.Econ.) and active Master of Science in Economics scholar at the Faculty of Economics and Business, Diponegoro University (FEB UNDIP). Possesses deep empirical and econometric research expertise in Environmental Economics, Blue Economy, Blue Justice, and small-scale fisher livelihood adaptation facing monsoon lean-season shocks and chronic tidal flooding (rob). Highly proficient in advanced quantitative modeling (Panel Data Regression, Multivariate Probit, Simultaneous Latent Factors, and Contingent Valuation Method) using Stata, R, Python, SPSS, and QGIS. Authored 12 indexed scientific publications and actively presents research in international academic symposia."
                : "Lulusan Sarjana Ekonomi (S1) dan akademisi aktif Program Magister Ilmu Ekonomi (S2) di Fakultas Ekonomika dan Bisnis, Universitas Diponegoro (FEB UNDIP). Memiliki rekam jejak riset mendalam pada bidang Ekonomi Lingkungan, Blue Economy, Keadilan Biru (Blue Justice), serta strategi resiliensi dan adaptasi penghidupan nelayan skala kecil dalam menghadapi guncangan musim paceklik dan bencana banjir rob. Memiliki kompetensi kuat dalam pemodelan ekonometrika terapan (Regresi Data Panel, Probit Multivariat, SLF, dan CVM) menggunakan Stata, R, Python, SPSS, dan QGIS. Telah menghasilkan 12 publikasi ilmiah terindeks serta aktif sebagai pemakalah pada forum riset internasional."}
            </p>
          </div>

          {/* SECTION 2: PENDIDIKAN / EDUCATION */}
          <div style={{ marginBottom: '1.4rem' }}>
            <div 
              style={{
                fontSize: '0.98rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#000000',
                paddingBottom: '0.25rem',
                borderBottom: '1.5px solid #000000',
                marginBottom: '0.65rem'
              }}
            >
              {cvLang === 'en' ? 'EDUCATION' : 'PENDIDIKAN'}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 800 }}>
                  <span style={{ fontSize: '0.95rem', color: '#000000' }}>Universitas Diponegoro</span>
                  <span style={{ fontSize: '0.86rem', color: '#1e293b', fontWeight: 700 }}>Semarang, Jawa Tengah</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontStyle: 'italic', color: '#334155', fontSize: '0.88rem', margin: '0.1rem 0' }}>
                  <span>{cvLang === 'en' ? 'Master of Science in Economics (S2 Magister)' : 'Magister Ilmu Ekonomi (S2)'}</span>
                  <span style={{ fontStyle: 'normal', fontWeight: 700 }}>{cvLang === 'en' ? '2024 - Present' : '2024 - Sekarang'}</span>
                </div>
                <div style={{ fontSize: '0.84rem', color: '#374151' }}>
                  {cvLang === 'en'
                    ? 'Concentration: Natural Resource & Environmental Economics, Blue Growth Policy, Coastal Livelihood Adaptation.'
                    : 'Fokus Riset: Ekonomi Sumber Daya Alam & Lingkungan, Kebijakan Blue Economy, dan Adaptasi Penghidupan Pesisir.'}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 800 }}>
                  <span style={{ fontSize: '0.95rem', color: '#000000' }}>Universitas Diponegoro</span>
                  <span style={{ fontSize: '0.86rem', color: '#1e293b', fontWeight: 700 }}>Semarang, Jawa Tengah</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontStyle: 'italic', color: '#334155', fontSize: '0.88rem', margin: '0.1rem 0' }}>
                  <span>{cvLang === 'en' ? 'Bachelor of Economics (S1 Ilmu Ekonomi) | GPA: 3.82 / 4.00 (Cum Laude)' : 'Sarjana Ekonomi (S1 Ilmu Ekonomi) | IPK: 3.82 / 4.00 (Cum Laude)'}</span>
                  <span style={{ fontStyle: 'normal', fontWeight: 700 }}>2020 - 2024</span>
                </div>
                <div style={{ fontSize: '0.84rem', color: '#374151' }}>
                  {cvLang === 'en'
                    ? 'Undergraduate Thesis: Assessing Blue Economy Implementation in Supporting Blue Growth and Blue Justice: Case Study of Purworejo Village, Demak Regency.'
                    : 'Skripsi: Menakar Implementasi Blue Economy dalam Mendukung Blue Growth dan Blue Justice: Studi Kasus Desa Purworejo, Kabupaten Demak.'}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: PUBLIKASI RISET ILMIAH TERINDEKS (12 PUBLIKASI) */}
          <div style={{ marginBottom: '1.4rem' }}>
            <div 
              style={{
                fontSize: '0.98rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#000000',
                paddingBottom: '0.25rem',
                borderBottom: '1.5px solid #000000',
                marginBottom: '0.65rem'
              }}
            >
              {cvLang === 'en'
                ? 'INDEXED SCIENTIFIC PUBLICATIONS (12 PAPERS)'
                : 'PUBLIKASI ILMIAH & RISET TERINDEKS (12 PUBLIKASI)'}
            </div>

            <ol style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {publications.map((pub, idx) => (
                <li key={idx} style={{ fontSize: '0.84rem', lineHeight: 1.5, color: '#1f2937' }}>
                  <span style={{ fontWeight: 700, color: '#000000' }}>"{pub.title}"</span>. {pub.authors}. <em>{pub.journal}</em> ({pub.year}).{' '}
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#0284c7', textDecoration: 'underline', wordBreak: 'break-all' }}
                  >
                    [Link Publikasi]
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* SECTION 4: PENGALAMAN RISET & FORUM AKADEMIK */}
          <div style={{ marginBottom: '1.4rem' }}>
            <div 
              style={{
                fontSize: '0.98rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#000000',
                paddingBottom: '0.25rem',
                borderBottom: '1.5px solid #000000',
                marginBottom: '0.65rem'
              }}
            >
              {cvLang === 'en' ? 'RESEARCH EXPERIENCE & ACADEMIC FORUMS' : 'PENGALAMAN RISET & FORUM AKADEMIK'}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 800 }}>
                  <span style={{ fontSize: '0.9rem', color: '#000000' }}>
                    {cvLang === 'en' ? 'Presenter & Author - The 4th IRCBE 2026' : 'Pemakalah & Peneliti - The 4th IRCBE 2026'}
                  </span>
                  <span style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 700 }}>2026</span>
                </div>
                <div style={{ fontSize: '0.84rem', color: '#374151', fontStyle: 'italic', marginBottom: '0.2rem' }}>
                  Faculty of Economics and Business, Universitas Diponegoro
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.83rem', color: '#374151' }}>
                  <li>
                    {cvLang === 'en'
                      ? 'Presented empirical research on seasonality and livelihood adaptation among coastal fishers across Central Java.'
                      : 'Mempresentasikan temuan riset empiris mengenai dinamika musiman dan adaptasi penghidupan nelayan pesisir Jawa Tengah.'}
                  </li>
                  <li>
                    {cvLang === 'en'
                      ? 'Formulated microeconometric policy recommendations to shield smallholders from West Monsoon seasonal income drops.'
                      : 'Merumuskan rekomendasi kebijakan perlindungan nelayan tradisional dari dampak penurunan pendapatan saat musim angin barat (paceklik).'}
                  </li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 800 }}>
                  <span style={{ fontSize: '0.9rem', color: '#000000' }}>
                    {cvLang === 'en' ? 'Research Collaborator - Vulnerability to Viability (V2V) Global Partnership' : 'Kolaborator Peneliti - Kemitraan Global Vulnerability to Viability (V2V)'}
                  </span>
                  <span style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 700 }}>2021 - {cvLang === 'en' ? 'Present' : 'Sekarang'}</span>
                </div>
                <div style={{ fontSize: '0.84rem', color: '#374151', fontStyle: 'italic', marginBottom: '0.2rem' }}>
                  International Research Network across Asia and Africa
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.83rem', color: '#374151' }}>
                  <li>
                    {cvLang === 'en'
                      ? 'Collaborated in multi-country research assessing institutional drivers transforming coastal fishery vulnerability into sustainable viability.'
                      : 'Terlibat dalam konsorsium riset internasional mengkaji faktor kelembagaan yang mentransformasi kerentanan nelayan menjadi keberdayaan.'}
                  </li>
                  <li>
                    {cvLang === 'en'
                      ? 'Contributed to working papers on small-scale fisheries and subjective community well-being (Chilika Lagoon and coastal Indonesia).'
                      : 'Berkontribusi dalam working paper perikanan skala kecil dan analisis kesejahteraan subjektif komunitas nelayan pesisir.'}
                  </li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 800 }}>
                  <span style={{ fontSize: '0.9rem', color: '#000000' }}>
                    {cvLang === 'en' ? 'Delegate & Author - MARLISPACE International Forum' : 'Delegasi Peneliti - MARLISPACE International Forum & Springer'}
                  </span>
                  <span style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 700 }}>2023 - 2024</span>
                </div>
                <div style={{ fontSize: '0.84rem', color: '#374151', fontStyle: 'italic', marginBottom: '0.2rem' }}>
                  Marine Litter Prevention and Circular Economy (Vietnam)
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.83rem', color: '#374151' }}>
                  <li>
                    {cvLang === 'en'
                      ? 'Evaluated the techno-economic feasibility and circular valuation of fast pyrolysis plastic waste processing in Karimunjawa Marine Protected Area.'
                      : 'Mengevaluasi kelayakan tekno-ekonomi dan valuasi sirkular konversi limbah plastik laut dengan pirolisis cepat di Kawasan Konservasi Laut Karimunjawa.'}
                  </li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 800 }}>
                  <span style={{ fontSize: '0.9rem', color: '#000000' }}>
                    {cvLang === 'en' ? 'Fieldwork Research Coordinator - Demak Coastal Survey' : 'Koordinator Riset Lapangan Pesisir Demak - FEB UNDIP'}
                  </span>
                  <span style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 700 }}>2024 - 2025</span>
                </div>
                <div style={{ fontSize: '0.84rem', color: '#374151', fontStyle: 'italic', marginBottom: '0.2rem' }}>
                  Purworejo Village, Demak Regency, Central Java
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.83rem', color: '#374151' }}>
                  <li>
                    {cvLang === 'en'
                      ? 'Directed structured socio-economic surveys across 180 smallholder fisher households and facilitated participatory focus group discussions (FGD).'
                      : 'Memimpin survei sosio-ekonomi terstruktur pada 180 rumah tangga nelayan kecil dan memfasilitasi Focus Group Discussion (FGD).'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECTION 5: KEAHLIAN / SKILLS */}
          <div style={{ marginBottom: '1.4rem' }}>
            <div 
              style={{
                fontSize: '0.98rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#000000',
                paddingBottom: '0.25rem',
                borderBottom: '1.5px solid #000000',
                marginBottom: '0.65rem'
              }}
            >
              {cvLang === 'en' ? 'SKILLS' : 'KEAHLIAN'}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#1f2937' }}>
              <div>
                <strong style={{ color: '#000000' }}>
                  {cvLang === 'en' ? 'Econometrics & Methodology: ' : 'Ekonometrika & Kuantitatif: '}
                </strong>
                {cvLang === 'en'
                  ? 'Panel Data Regression (Fixed/Random Effects), Multivariate Probit, Simultaneous Latent Factor (SLF), Contingent Valuation Method (CVM), Moser Gender Analysis Framework, Sustainable Livelihoods Framework (SLF).'
                  : 'Regresi Data Panel (Fixed/Random Effects), Probit Multivariat, Simultaneous Latent Factor (SLF), Contingent Valuation Method (CVM), Kerangka Analisis Gender Moser, Sustainable Livelihoods Framework (SLF).'}
              </div>

              <div>
                <strong style={{ color: '#000000' }}>
                  {cvLang === 'en' ? 'Software & Data Tools: ' : 'Perangkat Lunak & Analisis: '}
                </strong>
                Stata, R & RStudio, Python, IBM SPSS, Microsoft Excel (Financial & Econometric Modeling), QGIS (Geographic Information Systems).
              </div>

              <div>
                <strong style={{ color: '#000000' }}>
                  {cvLang === 'en' ? 'Research & Field Competencies: ' : 'Kompetensi Riset: '}
                </strong>
                {cvLang === 'en'
                  ? 'Household Survey Questionnaire Design, Field Enumeration, Key Informant Interviews (KII), Focus Group Discussions (FGD), Policy Brief Drafting, Environmental Valuation.'
                  : 'Desain Kuesioner Survei Rumah Tangga, Enumerasi Lapangan, Wawancara Mendalam Tokoh Kunci (KII), Fasilitasi FGD, Perumusan Policy Brief, Valuasi Sumber Daya Alam.'}
              </div>
            </div>
          </div>

          {/* SECTION 6: BAHASA / LANGUAGES */}
          <div style={{ marginBottom: '0.5rem' }}>
            <div 
              style={{
                fontSize: '0.98rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#000000',
                paddingBottom: '0.25rem',
                borderBottom: '1.5px solid #000000',
                marginBottom: '0.65rem'
              }}
            >
              {cvLang === 'en' ? 'LANGUAGES' : 'BAHASA'}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.85rem', color: '#1f2937' }}>
              <div>
                <strong style={{ color: '#000000' }}>
                  {cvLang === 'en' ? 'Indonesian: ' : 'Bahasa Indonesia: '}
                </strong>
                {cvLang === 'en' ? 'Native Proficiency' : 'Bahasa Utama / Penutur Asli'}
              </div>
              <div>
                <strong style={{ color: '#000000' }}>
                  {cvLang === 'en' ? 'English: ' : 'Bahasa Inggris: '}
                </strong>
                {cvLang === 'en' ? 'Full Professional & Academic Proficiency' : 'Tingkat Lanjut / Kemampuan Akademik & Profesional'}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
