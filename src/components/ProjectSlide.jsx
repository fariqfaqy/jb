import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  Check, 
  X, 
  ArrowUpRight,
  ExternalLink,
  Anchor,
  TreePine,
  BarChart3,
  Waves,
  Building2,
  Database,
  Users,
  Compass,
  Leaf,
  Activity,
  TrendingUp,
  Fish,
  ShieldCheck
} from 'lucide-react';

export default function ProjectSlide({ lang, portfolioData, onOpenSimulatorModal }) {
  const { research } = portfolioData;

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [copied, setCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  // Responsive screen width tracker
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Touch swipe coordinates for mobile devices
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  // Complete 12 Indexed Publications + Interactive Simulator Data Lab (Fully Bilingual)
  const allProjects = [
    {
      id: 'res-1',
      title: research[0]?.title[lang] || (lang === 'en' ? "From Blue Economy to Blue Justice: Lake Rawa Pening" : "Dari Blue Economy Menuju Blue Justice: Rawa Pening"),
      location: research[0]?.forum || 'Highlights of Sustainability 2026',
      badge: 'HOS 2026',
      tag: 'Blue Economy',
      category: 'blue-economy',
      headerBg: '#38bdf8', // Soft Sky Blue
      subHeader: lang === 'en' ? 'HOS Vol. 5 : View Paper' : 'HOS Vol. 5 : Klik Detail & Link',
      visualType: 'mangrove',
      visualTitle: lang === 'en' ? 'Wetland Governance' : 'Tata Kelola Lahan Basah',
      visualSub: lang === 'en' ? 'Access Equity & Blue Justice' : 'Keadilan Akses & Blue Justice',
      stats: lang === 'en' ? '55% Conflict Reduction' : '55% Reduksi Konflik',
      link: research[0]?.link || 'https://www.hos.pub/articles/hsustain5010009',
      abstract: research[0]?.abstract[lang],
      finding: research[0]?.keyFinding[lang],
      method: research[0]?.methodology[lang],
      authors: research[0]?.authors,
      year: research[0]?.year || '2026'
    },
    {
      id: 'res-2',
      title: research[1]?.title[lang] || (lang === 'en' ? "Determinants of Blue Economy Share: 34 Provinces" : "Penentu Pangsa Ekonomi Biru: 34 Provinsi"),
      location: research[1]?.forum || 'Sosio e-Kons 2026',
      badge: 'SOSIO E-KONS',
      tag: 'Blue Economy',
      category: 'blue-economy',
      headerBg: '#34d399', // Soft Mint Green
      subHeader: lang === 'en' ? 'Panel 34 Provinces : View Paper' : 'Panel 34 Provinsi : Klik Detail & Link',
      visualType: 'chart',
      visualTitle: lang === 'en' ? 'Econometric Panel Data' : 'Panel Data Ekonometrika',
      visualSub: lang === 'en' ? 'Determinants of 34 Provinces' : 'Determinan 34 Provinsi',
      stats: lang === 'en' ? '34 Indonesian Provinces' : '34 Provinsi Indonesia',
      link: research[1]?.link || 'https://newjournal.lppmunindra.ac.id/index.php/sosio_ekons/article/view/4405',
      abstract: research[1]?.abstract[lang],
      finding: research[1]?.keyFinding[lang],
      method: research[1]?.methodology[lang],
      authors: research[1]?.authors,
      year: research[1]?.year || '2026'
    },
    {
      id: 'res-3',
      title: research[2]?.title[lang] || (lang === 'en' ? "Seasonality & Adaptation among Small- and Large-Scale Fishers" : "Musiman dan Adaptasi Penghidupan Nelayan"),
      location: research[2]?.forum || 'The 4th IRCBE 2026, FEB UNDIP',
      badge: 'IRCBE 2026',
      tag: 'Seasonality',
      category: 'seasonality',
      headerBg: '#fb923c', // Soft Warm Peach
      subHeader: lang === 'en' ? 'N=180 Fishers : View Paper' : 'N=180 Nelayan : Klik Detail & Link',
      visualType: 'boat',
      visualTitle: lang === 'en' ? 'Traditional Fishing Fleet' : 'Armada Nelayan Tradisional',
      visualSub: lang === 'en' ? 'Lean Season Adaptation Study' : 'Studi Adaptasi Musim Paceklik',
      stats: lang === 'en' ? '42% Income Buffer' : '42% Income Buffer',
      link: research[2]?.link || 'https://scholar.google.com/citations?view_op=view_citation&hl=id&user=4Ewu6UAAAAAJ&citation_for_view=4Ewu6UAAAAAJ:W7OEmFMy1HYC',
      abstract: research[2]?.abstract[lang],
      finding: research[2]?.keyFinding[lang],
      method: research[2]?.methodology[lang],
      authors: research[2]?.authors,
      year: research[2]?.year || '2026'
    },
    {
      id: 'res-4',
      title: research[3]?.title[lang] || (lang === 'en' ? "Blue Economy & Blue Justice: Purworejo Village, Demak" : "Blue Economy & Blue Justice: Purworejo Demak"),
      location: research[3]?.forum || 'Repositori Riset FEB UNDIP',
      badge: 'REPO FEB UNDIP',
      tag: 'Governance',
      category: 'seasonality',
      headerBg: '#2dd4bf', // Soft Ocean Aqua
      subHeader: lang === 'en' ? 'Demak Tidal Rob Study : View Paper' : 'Studi Rob Demak : Klik Detail & Link',
      visualType: 'cooperative',
      visualTitle: lang === 'en' ? 'Purworejo Coastal Village' : 'Pesisir Desa Purworejo',
      visualSub: lang === 'en' ? 'Social Capital & Rob Mitigation' : 'Modal Sosial & Mitigasi Rob',
      stats: lang === 'en' ? '3.8/5 Social Capital' : '3.8/5 Modal Sosial',
      link: research[3]?.link || 'https://repofeb.undip.ac.id/17854/',
      abstract: research[3]?.abstract[lang],
      finding: research[3]?.keyFinding[lang],
      method: research[3]?.methodology[lang],
      authors: research[3]?.authors,
      year: research[3]?.year || '2026'
    },
    {
      id: 'res-5',
      title: research[4]?.title[lang] || (lang === 'en' ? "Plastic Waste in Karimunjawa MPA: Fast Pyrolysis" : "Sampah Plastik Karimunjawa: Pirolisis Cepat"),
      location: research[4]?.forum || 'MARLISPACE Forum / Springer',
      badge: 'MARLISPACE',
      tag: 'Conservation',
      category: 'conservation',
      headerBg: '#fb7185', // Soft Coral Rose
      subHeader: lang === 'en' ? 'Fast Pyrolysis : View Paper' : 'Pirolisis Cepat : Klik Detail & Link',
      visualType: 'ocean',
      visualTitle: lang === 'en' ? 'Marine Protected Area' : 'Kawasan Konservasi Laut',
      visualSub: lang === 'en' ? 'Plastic Waste Pyrolysis' : 'Pirolisis Cepat Sampah Plastik',
      stats: lang === 'en' ? '2.7x Benefit-Cost' : '2.7x Benefit-Cost',
      link: research[4]?.link || 'https://scholar.google.com/citations?view_op=view_citation&hl=id&user=4Ewu6UAAAAAJ&citation_for_view=4Ewu6UAAAAAJ:zYLM7Y9cAGgC',
      abstract: research[4]?.abstract[lang],
      finding: research[4]?.keyFinding[lang],
      method: research[4]?.methodology[lang],
      authors: research[4]?.authors,
      year: research[4]?.year || '2026'
    },
    {
      id: 'res-6',
      title: research[5]?.title[lang] || (lang === 'en' ? "Dual Gender Roles in the Blue Economy: TPI Tawang Kendal" : "Peran Ganda Gender dalam Blue Economy"),
      location: research[5]?.forum || 'Jurnal Riset Ekonomi dan Bisnis (JREB USM)',
      badge: 'JREB USM',
      tag: 'Blue Economy',
      category: 'blue-economy',
      headerBg: '#a78bfa', // Soft Lavender
      subHeader: lang === 'en' ? 'TPI Tawang Kendal : View Paper' : 'TPI Tawang Kendal : Klik Detail & Link',
      visualType: 'gender',
      visualTitle: lang === 'en' ? 'Gender Triple Roles' : 'Peran Ganda Gender',
      visualSub: lang === 'en' ? 'Moser Framework at TPI Tawang' : 'Analisis Moser TPI Tawang',
      stats: lang === 'en' ? '48% Value-Added Share' : '48% Nilai Tambah',
      link: research[5]?.link || 'https://journals.usm.ac.id/index.php/jreb/article/view/13434',
      abstract: research[5]?.abstract[lang],
      finding: research[5]?.keyFinding[lang],
      method: research[5]?.methodology[lang],
      authors: research[5]?.authors,
      year: research[5]?.year || '2025'
    },
    {
      id: 'res-7',
      title: research[6]?.title[lang] || (lang === 'en' ? "Coastal Environment & Marine Waste at Mangunharjo Beach" : "Kondisi Lingkungan & Sampah Pantai Mangunharjo"),
      location: research[6]?.forum || 'Geodika: Jurnal Kajian Ilmu Geografi',
      badge: 'GEODIKA',
      tag: 'Conservation',
      category: 'conservation',
      headerBg: '#0ea5e9', // Soft Sky Cerulean
      subHeader: lang === 'en' ? 'Semarang Coast : View Paper' : 'Pantai Semarang : Klik Detail & Link',
      visualType: 'coastal',
      visualTitle: lang === 'en' ? 'Mangunharjo Green Belt' : 'Sabuk Hijau Mangunharjo',
      visualSub: lang === 'en' ? 'Coastal Waste Management' : 'Tata Kelola Sampah Pantai',
      stats: lang === 'en' ? '38% Waste Reduction' : '38% Reduksi Sampah',
      link: research[6]?.link || 'https://e-journal.hamzanwadi.ac.id/index.php/gdk/article/view/33662',
      abstract: research[6]?.abstract[lang],
      finding: research[6]?.keyFinding[lang],
      method: research[6]?.methodology[lang],
      authors: research[6]?.authors,
      year: research[6]?.year || '2026'
    },
    {
      id: 'res-8',
      title: research[7]?.title[lang] || (lang === 'en' ? "Carbon Footprint of Waste & Energy at Mangkang Market" : "Analisis Jejak Karbon Sampah Pasar Mangkang"),
      location: research[7]?.forum || 'Journal of Bioresources and Env Sciences (JBES)',
      badge: 'JBES 2026',
      tag: 'Conservation',
      category: 'conservation',
      headerBg: '#4ade80', // Soft Fresh Green
      subHeader: lang === 'en' ? 'Market Carbon Audit : View Paper' : 'Jejak Karbon Pasar : Klik Detail & Link',
      visualType: 'carbon',
      visualTitle: lang === 'en' ? 'Carbon Footprint Audit' : 'Audit Jejak Karbon',
      visualSub: lang === 'en' ? 'Mangkang Emission Mitigation' : 'Mitigasi Emisi Pasar Mangkang',
      stats: lang === 'en' ? '44% Emission Reduction Potential' : '44% Potensi Pangkas Emisi',
      link: research[7]?.link || 'https://jbes.cbiore.id/index.php/jbes/article/view/19999',
      abstract: research[7]?.abstract[lang],
      finding: research[7]?.keyFinding[lang],
      method: research[7]?.methodology[lang],
      authors: research[7]?.authors,
      year: research[7]?.year || '2026'
    },
    {
      id: 'res-9',
      title: research[8]?.title[lang] || (lang === 'en' ? "Prospects of Mobile Specialist Healthcare (Speling) in Demak" : "Prospek Program Dokter Spesialis Keliling (Speling)"),
      location: research[8]?.forum || 'Acta Innovations',
      badge: 'ACTA INNOV',
      tag: 'Healthcare',
      category: 'seasonality',
      headerBg: '#f472b6', // Soft Rose Pink
      subHeader: lang === 'en' ? 'Demak Speling Clinics : View Paper' : 'Puskesmas Bonang Demak : Klik Detail & Link',
      visualType: 'health',
      visualTitle: lang === 'en' ? 'Mobile Specialist Healthcare' : 'Layanan Dokter Spesialis',
      visualSub: lang === 'en' ? 'Speling Program Demak' : 'Program Speling Demak',
      stats: lang === 'en' ? '60% Transport Cost Cut' : '60% Hemat Biaya Transport',
      link: research[8]?.link || 'https://actainnovations.com/index.php/pub/article/view/2253',
      abstract: research[8]?.abstract[lang],
      finding: research[8]?.keyFinding[lang],
      method: research[8]?.methodology[lang],
      authors: research[8]?.authors,
      year: research[8]?.year || '2026'
    },
    {
      id: 'res-10',
      title: research[9]?.title[lang] || (lang === 'en' ? "HDI Growth & Regional Economic Resilience: 10 Cities/Regencies" : "IPM & Ketahanan Ekonomi Wilayah 10 Kab/Kota"),
      location: research[9]?.forum || 'Economics & Digital Business Review (Ecotal)',
      badge: 'ECOTAL',
      tag: 'Regional',
      category: 'regional',
      headerBg: '#818cf8', // Soft Indigo
      subHeader: lang === 'en' ? '10 Central Java Regions : View Paper' : '10 Daerah Jateng : Klik Detail & Link',
      visualType: 'regional',
      visualTitle: lang === 'en' ? 'Regional Resilience & HDI' : 'Ketahanan Wilayah & IPM',
      visualSub: lang === 'en' ? '10 Regencies / Cities in Central Java' : '10 Kab/Kota Jawa Tengah',
      stats: lang === 'en' ? '2x Shock Recovery Speed' : '2x Kecepatan Pemulihan',
      link: research[9]?.link || 'https://ojs.vifada.id/index.php/ecotal/article/view/2787',
      abstract: research[9]?.abstract[lang],
      finding: research[9]?.keyFinding[lang],
      method: research[9]?.methodology[lang],
      authors: research[9]?.authors,
      year: research[9]?.year || '2025'
    },
    {
      id: 'res-11',
      title: research[10]?.title[lang] || (lang === 'en' ? "Happiness & Well-being Narratives: Chilika Lagoon Realities" : "Narasi Kebahagiaan & Kesejahteraan: Laguna Chilika"),
      location: research[10]?.forum || 'Zenodo / V2V Global Partnership Network',
      badge: 'ZENODO V2V',
      tag: 'Well-being',
      category: 'seasonality',
      headerBg: '#f59e0b', // Soft Warm Amber
      subHeader: lang === 'en' ? 'V2V Working Paper : View Paper' : 'Working Paper V2V : Klik Detail & Link',
      visualType: 'lagoon',
      visualTitle: lang === 'en' ? 'Chilika Lagoon' : 'Laguna Chilika',
      visualSub: lang === 'en' ? 'V2V Research Partnership' : 'Kemitraan Riset V2V',
      stats: lang === 'en' ? 'Autonomy & Cultural Capital' : 'Otonomi & Modal Budaya',
      link: research[10]?.link || 'https://zenodo.org/records/18066420',
      abstract: research[10]?.abstract[lang],
      finding: research[10]?.keyFinding[lang],
      method: research[10]?.methodology[lang],
      authors: research[10]?.authors,
      year: research[10]?.year || '2025'
    },
    {
      id: 'res-12',
      title: research[11]?.title[lang] || (lang === 'en' ? "Adaptive Co-Management in Indonesian Small-Scale Fisheries" : "Adaptive Co-Management pada Perikanan Nelayan Kecil"),
      location: research[11]?.forum || 'UWSpace Digital Repository, University of Waterloo',
      badge: 'UWSPACE',
      tag: 'Governance',
      category: 'blue-economy',
      headerBg: '#14b8a6', // Soft Deep Teal
      subHeader: lang === 'en' ? 'Waterloo UWSpace : View Paper' : 'UWSpace Waterloo : Klik Detail & Link',
      visualType: 'governance',
      visualTitle: 'Adaptive Co-Management',
      visualSub: 'University of Waterloo',
      stats: lang === 'en' ? '70% Policy Compliance' : '70% Kepatuhan Kebijakan',
      link: research[11]?.link || 'https://hdl.handle.net/10012/21722',
      abstract: research[11]?.abstract[lang],
      finding: research[11]?.keyFinding[lang],
      method: research[11]?.methodology[lang],
      authors: research[11]?.authors,
      year: research[11]?.year || '2024'
    },
    {
      id: 'proj-simulator',
      title: lang === 'en'
        ? 'Coastal Economy & Resilience Simulator'
        : 'Simulator Resiliensi Pesisir & Blue Economy',
      location: lang === 'en' ? 'Econometrics Laboratory FEB UNDIP' : 'Laboratorium Ekonometrika FEB UNDIP',
      badge: 'LIVE TOOL',
      tag: 'Data Lab',
      category: 'interactive',
      headerBg: '#6366f1', // Soft Iris Indigo
      subHeader: lang === 'en' ? 'Interactive Laboratory : Open Tool' : 'Laboratorium Interaktif : Buka Simulator',
      visualType: 'simulator',
      visualTitle: lang === 'en' ? 'Interactive Live Data Lab' : 'Data Lab Interaktif Live',
      visualSub: lang === 'en' ? '4-Indicator Policy Simulation' : 'Simulasi 4 Indikator Kebijakan',
      stats: lang === 'en' ? '4 Dynamic Indicators' : '4 Indikator Dinamis',
      isInteractive: true,
      abstract: lang === 'en'
        ? 'Interactive simulation tool modeling household resilience, seasonal shocks, and conservation governance across coastal communities.'
        : 'Perangkat simulasi interaktif untuk memodelkan resiliensi nelayan saat menghadapi guncangan musim paceklik dan dampak kebijakan keadilan biru.',
      finding: lang === 'en' ? 'Click card to launch live Data Lab Simulator' : 'Klik kartu untuk membuka simulasi live interaktif',
      method: 'Microeconometric Policy Sandbox (React + Vite)',
      authors: 'Jubakti Anggoro',
      year: '2026'
    }
  ];

  const filterCategories = [
    { id: 'all', label: lang === 'en' ? 'All (12 Papers)' : 'Semua (12 Riset)' },
    { id: 'blue-economy', label: 'Blue Economy (4)' },
    { id: 'seasonality', label: lang === 'en' ? 'Coastal & Communities (4)' : 'Pesisir & Komunitas (4)' },
    { id: 'conservation', label: lang === 'en' ? 'Conservation & Emissions (3)' : 'Konservasi & Emisi (3)' },
    { id: 'regional', label: lang === 'en' ? 'Regional Resilience (1)' : 'Ketahanan Wilayah (1)' },
    { id: 'interactive', label: 'Data Lab Live' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeFilter]);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  const handleCardClick = (index, proj) => {
    if (index === activeIndex) {
      if (proj.isInteractive) {
        onOpenSimulatorModal();
      } else {
        setSelectedProject(proj);
      }
    } else {
      setActiveIndex(index);
    }
  };

  const handleCopyCitation = (project) => {
    const authorsText = project.authors || 'Anggoro, J.';
    const citation = `${authorsText} (${project.year}). ${project.title}. ${project.location}.${project.link ? ` ${project.link}` : ''}`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="project" className="presentation-slide">
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Center Header */}
        <div style={{ textAlign: 'center', marginBottom: '1rem', position: 'relative', zIndex: 6 }}>
          
          {/* Header Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.55rem', flexWrap: 'wrap', marginBottom: '0.45rem' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.28rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                fontSize: '0.78rem',
                fontWeight: 800,
                color: 'var(--pastel-blue-dark)'
              }}
            >
              <span>{lang === 'en' ? 'FEB UNDIP & V2V Partnership Publications' : 'Publikasi FEB UNDIP & Kemitraan V2V'}</span>
            </div>

            <a
              href="https://scholar.google.com/citations?view_op=list_works&hl=id&hl=id&user=4Ewu6UAAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.28rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#1d4ed8',
                boxShadow: '0 2px 6px rgba(29, 78, 216, 0.08)'
              }}
            >
              <span>{lang === 'en' ? '12 Google Scholar Indexed Papers' : '12 Publikasi Terindeks Google Scholar'}</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Main Display Title */}
          <h2 
            style={{
              fontSize: 'clamp(1.55rem, 2.8vw, 2.1rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              marginBottom: '0.25rem'
            }}
          >
            {lang === 'en' ? 'Selected Scientific Publications' : 'Publikasi Ilmiah & Riset Terpilih'}
          </h2>

          <p 
            style={{
              fontSize: '0.84rem',
              color: 'var(--text-secondary)',
              maxWidth: '640px',
              margin: '0 auto 0.55rem',
              lineHeight: 1.5,
              padding: '0 0.5rem'
            }}
          >
            {lang === 'en'
              ? 'Browse and swipe research cards to read abstracts, or click the direct link icon to view official journal articles.'
              : 'Pilih dan geser kartu riset untuk membaca abstrak, atau klik tombol link di kartu untuk membuka jurnal resmi.'}
          </p>

          {/* Category Filter Pills */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#ffffff',
              padding: '0.25rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              gap: '0.3rem',
              maxWidth: '100%',
              overflowX: 'auto'
            }}
          >
            {filterCategories.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  style={{
                    border: 'none',
                    outline: 'none',
                    padding: isMobile ? '0.28rem 0.65rem' : '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: isMobile ? '0.72rem' : '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    background: isActive ? '#0284c7' : 'transparent',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    boxShadow: isActive ? '0 3px 10px rgba(2, 132, 199, 0.28)' : 'none'
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* FANNED CARD DECK CAROUSEL */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'relative',
            height: isMobile ? '370px' : '385px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0.15rem',
            perspective: '1200px',
            userSelect: 'none'
          }}
        >
          {/* Navigation Button: Previous (<) */}
          <motion.button
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: isMobile ? '2px' : isTablet ? '14px' : '34px',
              zIndex: 35,
              width: isMobile ? '38px' : '44px',
              height: isMobile ? '38px' : '44px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 6px 16px rgba(0,0,0,0.11)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)'
            }}
            aria-label={lang === 'en' ? 'Previous card' : 'Pilih kartu sebelumnya'}
          >
            <ChevronLeft size={isMobile ? 18 : 22} />
          </motion.button>

          {/* Navigation Button: Next (>) */}
          <motion.button
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: isMobile ? '2px' : isTablet ? '14px' : '34px',
              zIndex: 35,
              width: isMobile ? '38px' : '44px',
              height: isMobile ? '38px' : '44px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 6px 16px rgba(0,0,0,0.11)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)'
            }}
            aria-label={lang === 'en' ? 'Next card' : 'Pilih kartu berikutnya'}
          >
            <ChevronRight size={isMobile ? 18 : 22} />
          </motion.button>

          {/* Cards Stack Container */}
          <div 
            style={{
              position: 'relative',
              width: isMobile ? '285px' : '310px',
              height: isMobile ? '360px' : '375px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {filteredProjects.map((proj, idx) => {
              const diff = idx - activeIndex;
              const isCenter = diff === 0;

              // Hide cards that are more than 2 steps away
              if (Math.abs(diff) > 2) return null;

              // Dynamic responsive offsets
              const rotateDeg = isMobile ? diff * 5 : diff * 7.5;
              const xOffset = isMobile ? diff * 50 : isTablet ? diff * 105 : diff * 150;
              const yOffset = Math.abs(diff) * (isMobile ? 7 : 11);
              const scale = isCenter ? 1.05 : 1 - Math.abs(diff) * (isMobile ? 0.08 : 0.07);
              const zIndex = 20 - Math.abs(diff) * 5;
              const opacity = Math.abs(diff) === 2 ? 0.65 : 1;

              return (
                <motion.div
                  key={proj.id}
                  onClick={() => handleCardClick(idx, proj)}
                  animate={{
                    x: xOffset,
                    y: yOffset,
                    rotate: rotateDeg,
                    scale: scale,
                    opacity: opacity
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 320,
                    damping: 26
                  }}
                  whileHover={isCenter ? { scale: 1.07, y: -4 } : { scale: scale * 1.02 }}
                  style={{
                    position: 'absolute',
                    width: isMobile ? '285px' : '310px',
                    height: isMobile ? '360px' : '375px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: '#ffffff',
                    border: '1px solid rgba(226, 232, 240, 0.95)',
                    boxShadow: isCenter 
                      ? '0 22px 46px -10px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0,0,0,0.03)' 
                      : '0 10px 24px -5px rgba(0, 0, 0, 0.09)',
                    zIndex: zIndex,
                    cursor: 'pointer',
                    userSelect: 'none',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Card Header Top Block */}
                  <div 
                    style={{
                      background: proj.headerBg,
                      padding: '0.95rem 1.15rem',
                      color: '#ffffff',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1, paddingRight: '0.45rem' }}>
                        <h3 
                          style={{
                            fontSize: '0.975rem',
                            fontWeight: 900,
                            lineHeight: 1.25,
                            letterSpacing: '-0.02em',
                            color: '#ffffff',
                            marginBottom: '0.2rem',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {proj.title}
                        </h3>
                        <p 
                          style={{
                            fontSize: '0.72rem',
                            color: 'rgba(255, 255, 255, 0.94)',
                            fontWeight: 600,
                            lineHeight: 1.25,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {proj.location}
                        </p>
                      </div>

                      {/* Pill Badge */}
                      <span 
                        style={{
                          background: 'rgba(255, 255, 255, 0.22)',
                          backdropFilter: 'blur(4px)',
                          borderRadius: 'var(--radius-full)',
                          padding: '0.18rem 0.55rem',
                          fontSize: '0.66rem',
                          fontWeight: 800,
                          letterSpacing: '0.04em',
                          color: '#ffffff',
                          border: '1px solid rgba(255, 255, 255, 0.35)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {proj.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Body Area */}
                  <div 
                    style={{
                      flex: 1,
                      background: '#f8fafc',
                      padding: '0.85rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative'
                    }}
                  >
                    {/* Visual Graphic Representation */}
                    <div 
                      style={{
                        height: isMobile ? '135px' : '148px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        padding: '0.75rem',
                        textAlign: 'center',
                        boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.02)'
                      }}
                    >
                      {proj.visualType === 'boat' && (
                        <div>
                          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#fff7ed', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.4rem' }}>
                            <Anchor size={22} />
                          </div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {proj.visualTitle}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {proj.visualSub}
                          </div>
                        </div>
                      )}

                      {proj.visualType === 'mangrove' && (
                        <div>
                          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.4rem' }}>
                            <TreePine size={22} />
                          </div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {proj.visualTitle}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {proj.visualSub}
                          </div>
                        </div>
                      )}

                      {proj.visualType === 'simulator' && (
                        <div>
                          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#ede9fe', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.4rem' }}>
                            <BarChart3 size={22} />
                          </div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#7c3aed' }}>
                            {proj.visualTitle}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {proj.visualSub}
                          </div>
                        </div>
                      )}

                      {proj.visualType === 'ocean' && (
                        <div>
                          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#ffe4e6', color: '#e11d48', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.4rem' }}>
                            <Waves size={22} />
                          </div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {proj.visualTitle}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {proj.visualSub}
                          </div>
                        </div>
                      )}

                      {proj.visualType === 'cooperative' && (
                        <div>
                          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#ccfbf1', color: '#0d9488', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.4rem' }}>
                            <Building2 size={22} />
                          </div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {proj.visualTitle}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {proj.visualSub}
                          </div>
                        </div>
                      )}

                      {proj.visualType === 'chart' && (
                        <div>
                          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.4rem' }}>
                            <Database size={22} />
                          </div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {proj.visualTitle}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {proj.visualSub}
                          </div>
                        </div>
                      )}

                      {proj.visualType === 'gender' && (
                        <div>
                          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#f3e8ff', color: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.4rem' }}>
                            <Users size={22} />
                          </div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {proj.visualTitle}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {proj.visualSub}
                          </div>
                        </div>
                      )}

                      {proj.visualType === 'coastal' && (
                        <div>
                          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.4rem' }}>
                            <Compass size={22} />
                          </div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {proj.visualTitle}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {proj.visualSub}
                          </div>
                        </div>
                      )}

                      {proj.visualType === 'carbon' && (
                        <div>
                          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#dcfce7', color: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.4rem' }}>
                            <Leaf size={22} />
                          </div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {proj.visualTitle}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {proj.visualSub}
                          </div>
                        </div>
                      )}

                      {proj.visualType === 'health' && (
                        <div>
                          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#fce7f3', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.4rem' }}>
                            <Activity size={22} />
                          </div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {proj.visualTitle}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {proj.visualSub}
                          </div>
                        </div>
                      )}

                      {proj.visualType === 'regional' && (
                        <div>
                          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#e0e7ff', color: '#4338ca', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.4rem' }}>
                            <TrendingUp size={22} />
                          </div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {proj.visualTitle}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {proj.visualSub}
                          </div>
                        </div>
                      )}

                      {proj.visualType === 'lagoon' && (
                        <div>
                          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.4rem' }}>
                            <Fish size={22} />
                          </div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {proj.visualTitle}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {proj.visualSub}
                          </div>
                        </div>
                      )}

                      {proj.visualType === 'governance' && (
                        <div>
                          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#ccfbf1', color: '#0f766e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.4rem' }}>
                            <ShieldCheck size={22} />
                          </div>
                          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {proj.visualTitle}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {proj.visualSub}
                          </div>
                        </div>
                      )}

                      {/* Small Metric Pill in image */}
                      <div 
                        style={{
                          position: 'absolute',
                          top: '7px',
                          left: '7px',
                          background: '#f1f5f9',
                          padding: '0.15rem 0.5rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {proj.stats}
                      </div>
                    </div>

                    {/* Bottom Action Area: SubHeader + Direct External Link Button */}
                    <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.55rem' }}>
                      <div 
                        style={{
                          flex: 1,
                          background: '#1e293b',
                          color: '#ffffff',
                          padding: '0.45rem 0.75rem',
                          borderRadius: '12px',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.35rem',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                        }}
                      >
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {proj.subHeader}
                        </span>
                        <ArrowUpRight size={13} color="#38bdf8" style={{ flexShrink: 0 }} />
                      </div>

                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title={lang === 'en' ? 'Open paper directly on official journal' : 'Buka artikel langsung di Google Scholar / Jurnal resmi'}
                          style={{
                            background: '#ffffff',
                            border: '1px solid #cbd5e1',
                            borderRadius: '12px',
                            width: '38px',
                            height: '38px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#0284c7',
                            cursor: 'pointer',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                            transition: 'all 0.2s ease',
                            textDecoration: 'none',
                            flexShrink: 0
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f0f9ff';
                            e.currentTarget.style.borderColor = '#0284c7';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#ffffff';
                            e.currentTarget.style.borderColor = '#cbd5e1';
                          }}
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginTop: '0.65rem' }}>
          {filteredProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                border: 'none',
                width: i === activeIndex ? '26px' : '8px',
                height: '8px',
                borderRadius: 'var(--radius-full)',
                background: i === activeIndex ? '#0284c7' : '#cbd5e1',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              title={lang === 'en' ? `Card ${i + 1}` : `Kartu ${i + 1}`}
            />
          ))}
        </div>

        {/* Deep Dive Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(15, 23, 42, 0.45)',
                backdropFilter: 'blur(8px)',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: isMobile ? '1rem' : '1.5rem'
              }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                style={{
                  maxWidth: '700px',
                  width: '100%',
                  maxHeight: '88vh',
                  overflowY: 'auto',
                  padding: isMobile ? '1.25rem' : '2rem',
                  background: '#ffffff',
                  borderRadius: isMobile ? '20px' : '26px',
                  boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
                  border: '1px solid #e2e8f0'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span 
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      background: selectedProject.headerBg,
                      color: '#ffffff'
                    }}
                  >
                    {selectedProject.badge} ({selectedProject.year})
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    style={{
                      border: 'none',
                      background: '#f1f5f9',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <X size={17} />
                  </motion.button>
                </div>

                <h3 style={{ fontSize: isMobile ? '1.15rem' : '1.35rem', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.35, marginBottom: '0.35rem' }}>
                  {selectedProject.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: selectedProject.headerBg, fontWeight: 700, marginBottom: '0.4rem' }}>
                  {selectedProject.location}
                </p>
                {selectedProject.authors && (
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1.1rem' }}>
                    {lang === 'en' ? 'Authors: ' : 'Penulis: '}{selectedProject.authors}
                  </p>
                )}

                <div style={{ marginBottom: '1.1rem' }}>
                  <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: selectedProject.headerBg, fontWeight: 800, marginBottom: '0.35rem' }}>
                    {lang === 'en' ? 'RESEARCH ABSTRACT' : 'ABSTRAK PENELITIAN'}
                  </h4>
                  <p style={{ fontSize: isMobile ? '0.85rem' : '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {selectedProject.abstract}
                  </p>
                </div>

                <div style={{ marginBottom: '1.1rem' }}>
                  <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: selectedProject.headerBg, fontWeight: 800, marginBottom: '0.35rem' }}>
                    {lang === 'en' ? 'ECONOMETRIC METHODOLOGY' : 'METODOLOGI EKONOMETRIKA'}
                  </h4>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-primary)', background: '#f8fafc', padding: '0.7rem 0.95rem', borderRadius: '12px', border: '1px solid #e2e8f0', fontFamily: 'var(--font-mono)' }}>
                    {selectedProject.method}
                  </div>
                </div>

                <div style={{ marginBottom: '1.35rem', padding: '0.8rem 1rem', background: '#f8fafc', borderRadius: '14px', borderLeft: `4px solid ${selectedProject.headerBg}` }}>
                  <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: selectedProject.headerBg, fontWeight: 800, marginBottom: '0.25rem' }}>
                    {lang === 'en' ? 'KEY POLICY FINDINGS' : 'TEMUAN KUNCI KEBIJAKAN'}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.55, fontWeight: 600 }}>
                    {selectedProject.finding}
                  </p>
                </div>

                {/* Modal Footer Actions: Citation + Primary Direct Link Button */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => handleCopyCitation(selectedProject)}
                    className="btn btn-soft"
                    style={{ fontSize: '0.825rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.55rem 1rem', borderRadius: 'var(--radius-full)' }}
                  >
                    {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                    <span>{copied ? (lang === 'en' ? 'Citation Copied!' : 'Sitasi Berhasil Disalin!') : (lang === 'en' ? 'Copy Citation (APA)' : 'Salin Sitasi (APA)')}</span>
                  </motion.button>

                  {selectedProject.link && (
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-pill-primary"
                      style={{ 
                        fontSize: '0.825rem', 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.45rem',
                        textDecoration: 'none',
                        padding: '0.55rem 1.15rem'
                      }}
                    >
                      <ExternalLink size={15} />
                      <span>{lang === 'en' ? 'Open Official Publication (Google Scholar / Journal)' : 'Buka Publikasi Resmi (Google Scholar / Jurnal)'}</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
