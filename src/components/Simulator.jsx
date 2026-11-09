import React, { useState, useMemo } from 'react';
import { 
  Sliders, 
  RotateCcw, 
  ShieldAlert, 
  TrendingUp, 
  Leaf, 
  Scale, 
  HeartHandshake, 
  Info,
  Sparkles,
  Download
} from 'lucide-react';

export default function Simulator({ lang, portfolioData }) {
  const defaults = portfolioData.simulatorDefaults;

  // Simulator State
  const [fleetScale, setFleetScale] = useState(defaults.fleetScale); // "small" or "large"
  const [seasonSeverity, setSeasonSeverity] = useState(defaults.seasonSeverity); // 1 - 10
  const [diversificationRate, setDiversificationRate] = useState(defaults.diversificationRate); // 0 - 100%
  const [conservationPolicy, setConservationPolicy] = useState(defaults.conservationPolicy); // boolean
  const [subsidyAccess, setSubsidyAccess] = useState(defaults.subsidyAccess); // boolean

  // Computed Economic Metrics based on Jubakti Anggoro's empirical findings
  const metrics = useMemo(() => {
    // 1. Economic Viability
    let viabilityBase = fleetScale === 'large' ? 70 : 45;
    let seasonalShock = (seasonSeverity / 10) * (fleetScale === 'small' ? 42 : 22);
    let divBoost = (diversificationRate / 100) * 35;
    let subsidyBoost = subsidyAccess ? (fleetScale === 'small' ? 18 : 8) : 0;
    let economicViability = Math.min(100, Math.max(10, Math.round(viabilityBase - seasonalShock + divBoost + subsidyBoost)));

    // 2. Household Resilience Index (HRI)
    let resilienceBase = fleetScale === 'small' ? 50 : 65;
    let resilienceDiversification = (diversificationRate / 100) * 40;
    let resilienceSeverityDrag = (seasonSeverity / 10) * 30;
    let resilienceCredit = subsidyAccess ? 20 : 0;
    let householdResilience = Math.min(100, Math.max(15, Math.round(resilienceBase + resilienceDiversification - resilienceSeverityDrag + resilienceCredit)));

    // 3. Ecological Sustainability Index
    let baseEcology = 55;
    let mpaBonus = conservationPolicy ? 30 : -15;
    let fleetPressure = fleetScale === 'large' ? -20 : -5;
    let ecologicalSustainability = Math.min(100, Math.max(10, Math.round(baseEcology + mpaBonus + fleetPressure)));

    // 4. Blue Justice Index (Fairness & Social Safety)
    let baseJustice = fleetScale === 'small' ? 40 : 65;
    let safetyNet = subsidyAccess ? 25 : 0;
    let mpaEquity = conservationPolicy ? (fleetScale === 'small' ? 15 : -10) : 0;
    let blueJustice = Math.min(100, Math.max(10, Math.round(baseJustice + safetyNet + mpaEquity)));

    // Qualitative Economic Synthesis
    let statusText = '';
    let recommendation = '';

    if (householdResilience > 75 && ecologicalSustainability > 70) {
      statusText = lang === 'en' 
        ? 'Optimal Sustainable Equilibrium (High Resilience & Ecological Balance)' 
        : 'Keseimbangan Berkelanjutan Optimal (Resiliensi Tinggi & Ekosistem Terjaga)';
      recommendation = lang === 'en'
        ? 'Current policy settings successfully buffer coastal fishers against monsoon climate shocks while safeguarding marine natural capital.'
        : 'Kombinasi kebijakan berhasil melindungi nelayan dari gejolak cuaca ekstrem sekaligus menjaga stok sumber daya perikanan.';
    } else if (seasonSeverity >= 7 && diversificationRate < 30) {
      statusText = lang === 'en' 
        ? 'Severe Vulnerability Trap (Paceklik Crisis)' 
        : 'Perangkap Kerentanan Akut (Krisis Musim Paceklik)';
      recommendation = lang === 'en'
        ? 'Urgent policy intervention required: Expand household income diversification (processing, aquaculture) and direct seasonal emergency safety nets.'
        : 'Diperlukan intervensi mendesak: perluas diversifikasi usaha (olahan terasi/tambak) dan jaring pengaman tunai saat paceklik.';
    } else {
      statusText = lang === 'en' 
        ? 'Moderate Adaptive State' 
        : 'Kondisi Adaptif Moderat';
      recommendation = lang === 'en'
        ? 'Community resilience can be elevated by strengthening cooperative credit unions and enforcing community-managed conservation zones.'
        : 'Ketahanan komunitas dapat ditingkatkan dengan penguatan koperasi nelayan dan penegakan zonasi konservasi berbasis kearifan lokal.';
    }

    return {
      economicViability,
      householdResilience,
      ecologicalSustainability,
      blueJustice,
      statusText,
      recommendation
    };
  }, [fleetScale, seasonSeverity, diversificationRate, conservationPolicy, subsidyAccess, lang]);

  const handleReset = () => {
    setFleetScale(defaults.fleetScale);
    setSeasonSeverity(defaults.seasonSeverity);
    setDiversificationRate(defaults.diversificationRate);
    setConservationPolicy(defaults.conservationPolicy);
    setSubsidyAccess(defaults.subsidyAccess);
  };

  return (
    <section id="simulator" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sliders size={14} />
            {lang === 'en' ? 'Interactive Empirical Data Lab' : 'Laboratorium Simulasi Kebijakan'}
          </div>
          <h2 className="section-title">
            {lang === 'en' 
              ? 'Coastal Economy & Livelihood Resilience Simulator' 
              : 'Simulator Resiliensi Ekonomi & Penghidupan Pesisir'}
          </h2>
          <p className="section-subtitle">
            {lang === 'en'
              ? 'An interactive econometric simulation inspired by Jubakti Anggoro’s field research in Demak and Central Java. Experiment with seasonal shocks and policy levers to observe socio-economic trade-offs.'
              : 'Simulasi ekonometrika interaktif berdasarkan riset lapangan Jubakti Anggoro di Demak & Jawa Tengah. Eksplorasi intervensi kebijakan untuk melihat dampak terhadap ketahanan nelayan.'}
          </p>
        </div>

        {/* Simulator Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          
          {/* Controls Panel */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sliders size={18} color="var(--accent-teal)" />
                {lang === 'en' ? 'Policy & Climate Levers' : 'Parameter Kebijakan & Iklim'}
              </h3>
              <button 
                onClick={handleReset} 
                className="btn btn-secondary btn-icon"
                title={lang === 'en' ? 'Reset to Baseline' : 'Reset ke Awal'}
              >
                <RotateCcw size={15} />
              </button>
            </div>

            {/* Control 1: Fleet Scale */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                {lang === 'en' ? '1. Fisher Fleet Type' : '1. Skala Armada Perikanan'}
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                <button
                  type="button"
                  onClick={() => setFleetScale('small')}
                  className={`btn ${fleetScale === 'small' ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '0.6rem', fontSize: '0.85rem' }}
                >
                  {lang === 'en' ? 'Artisanal / Small-Scale' : 'Nelayan Skala Kecil'}
                </button>
                <button
                  type="button"
                  onClick={() => setFleetScale('large')}
                  className={`btn ${fleetScale === 'large' ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '0.6rem', fontSize: '0.85rem' }}
                >
                  {lang === 'en' ? 'Commercial / Mechanized' : 'Nelayan Skala Besar'}
                </button>
              </div>
            </div>

            {/* Control 2: Seasonal Volatility Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {lang === 'en' ? '2. Seasonal Monsoon Shock (Paceklik)' : '2. Intensitas Musim Paceklik / Barat'}
                </label>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  {seasonSeverity} / 10
                </span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={seasonSeverity}
                onChange={(e) => setSeasonSeverity(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--accent-cyan)',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                <span>{lang === 'en' ? 'Mild Calm Waters' : 'Teduh / Normal'}</span>
                <span>{lang === 'en' ? 'Severe Wind & Tidal Rob' : 'Badai & Rob Ekstrem'}</span>
              </div>
            </div>

            {/* Control 3: Livelihood Diversification Rate */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {lang === 'en' ? '3. Livelihood Diversification Rate' : '3. Tingkat Diversifikasi Penghidupan'}
                </label>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-teal)', fontFamily: 'var(--font-mono)' }}>
                  {diversificationRate}%
                </span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="5"
                value={diversificationRate}
                onChange={(e) => setDiversificationRate(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--accent-teal)',
                  cursor: 'pointer'
                }}
              />
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                {lang === 'en' ? 'Non-fishing income: Aquaculture, Terasi processing, Mangrove ecotourism' : 'Pendapatan non-tangkap: Tambak, olahan terasi, ekowisata mangrove'}
              </div>
            </div>

            {/* Toggles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', paddingTop: '0.5rem', borderTop: '1px solid var(--bg-card-border)' }}>
              {/* Conservation Toggle */}
              <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', padding: '0.4rem 0' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {lang === 'en' ? 'Enforce Marine Protected Area (MPA)' : 'Penegakan Kawasan Konservasi Laut (MPA)'}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {lang === 'en' ? 'Fish nursery restoration & plastic traps' : 'Pemulihan habitat benur & penanganan sampah'}
                  </div>
                </div>
                <input 
                  type="checkbox"
                  checked={conservationPolicy}
                  onChange={(e) => setConservationPolicy(e.target.checked)}
                  style={{ width: '20px', height: '20px', accentColor: 'var(--accent-emerald)', cursor: 'pointer' }}
                />
              </label>

              {/* Subsidies Toggle */}
              <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', padding: '0.4rem 0' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {lang === 'en' ? 'Seasonal Microcredit & Social Safety Nets' : 'Akses Kredit Koperasi & Bantuan Paceklik'}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {lang === 'en' ? 'Protection from informal debt traps (tengkulak)' : 'Perlindungan dari jeratan rentenir / tengkulak'}
                  </div>
                </div>
                <input 
                  type="checkbox"
                  checked={subsidyAccess}
                  onChange={(e) => setSubsidyAccess(e.target.checked)}
                  style={{ width: '20px', height: '20px', accentColor: 'var(--accent-blue)', cursor: 'pointer' }}
                />
              </label>
            </div>

          </div>

          {/* Results & Live Indicators Panel */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {lang === 'en' ? 'Simulation Impact Metrics' : 'Indikator Dampak Kebijakan'}
                </h3>
                <span className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
                  {fleetScale === 'small' ? (lang === 'en' ? 'Artisanal Model' : 'Model Nelayan Kecil') : (lang === 'en' ? 'Commercial Model' : 'Model Komersial')}
                </span>
              </div>

              {/* Metric 1: Household Resilience */}
              <div style={{ marginBottom: '1.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <HeartHandshake size={15} color="var(--accent-cyan)" />
                    {lang === 'en' ? 'Household Resilience Index (HRI)' : 'Indeks Ketahanan Rumah Tangga (HRI)'}
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                    {metrics.householdResilience} / 100
                  </span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                  <div style={{ width: `${metrics.householdResilience}%`, height: '100%', background: 'linear-gradient(90deg, #0284c7, #06b6d4)', borderRadius: 'var(--radius-full)', transition: 'width 0.4s ease' }}></div>
                </div>
              </div>

              {/* Metric 2: Economic Viability */}
              <div style={{ marginBottom: '1.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <TrendingUp size={15} color="var(--accent-teal)" />
                    {lang === 'en' ? 'Economic Viability Metric' : 'Kelayakan Ekonomi (Economic Viability)'}
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--accent-teal)', fontFamily: 'var(--font-mono)' }}>
                    {metrics.economicViability} / 100
                  </span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                  <div style={{ width: `${metrics.economicViability}%`, height: '100%', background: 'linear-gradient(90deg, #0d9488, #14b8a6)', borderRadius: 'var(--radius-full)', transition: 'width 0.4s ease' }}></div>
                </div>
              </div>

              {/* Metric 3: Ecological Sustainability */}
              <div style={{ marginBottom: '1.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Leaf size={15} color="var(--accent-emerald)" />
                    {lang === 'en' ? 'Ecological Sustainability Index' : 'Indeks Keberlanjutan Ekologis'}
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                    {metrics.ecologicalSustainability} / 100
                  </span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                  <div style={{ width: `${metrics.ecologicalSustainability}%`, height: '100%', background: 'linear-gradient(90deg, #059669, #34d399)', borderRadius: 'var(--radius-full)', transition: 'width 0.4s ease' }}></div>
                </div>
              </div>

              {/* Metric 4: Blue Justice */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Scale size={15} color="var(--accent-amber)" />
                    {lang === 'en' ? 'Blue Justice & Equity Score' : 'Skor Keadilan Biru (Blue Justice)'}
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)' }}>
                    {metrics.blueJustice} / 100
                  </span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                  <div style={{ width: `${metrics.blueJustice}%`, height: '100%', background: 'linear-gradient(90deg, #d97706, #fbbf24)', borderRadius: 'var(--radius-full)', transition: 'width 0.4s ease' }}></div>
                </div>
              </div>

              {/* Synthesis Callout */}
              <div 
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--bg-card-border)'
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  {metrics.statusText}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {metrics.recommendation}
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.75rem', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Info size={14} />
              <span>{lang === 'en' ? 'Model calibrated with survey data from Demak coastal regency (Purworejo case study).' : 'Model dikalibrasi dengan data empiris survei nelayan pesisir Kabupaten Demak.'}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

