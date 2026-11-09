import React, { useState, useMemo } from 'react';
import { 
  X, 
  RotateCcw, 
  HeartHandshake, 
  TrendingUp, 
  Leaf, 
  Scale, 
  Sliders, 
  Info,
  Sparkles
} from 'lucide-react';

export default function SimulatorModal({ isOpen, onClose, lang, portfolioData }) {
  if (!isOpen) return null;

  const defaults = portfolioData.simulatorDefaults;

  const [fleetScale, setFleetScale] = useState(defaults.fleetScale);
  const [seasonSeverity, setSeasonSeverity] = useState(defaults.seasonSeverity);
  const [diversificationRate, setDiversificationRate] = useState(defaults.diversificationRate);
  const [conservationPolicy, setConservationPolicy] = useState(defaults.conservationPolicy);
  const [subsidyAccess, setSubsidyAccess] = useState(defaults.subsidyAccess);

  const metrics = useMemo(() => {
    let viabilityBase = fleetScale === 'large' ? 70 : 45;
    let seasonalShock = (seasonSeverity / 10) * (fleetScale === 'small' ? 42 : 22);
    let divBoost = (diversificationRate / 100) * 35;
    let subsidyBoost = subsidyAccess ? (fleetScale === 'small' ? 18 : 8) : 0;
    let economicViability = Math.min(100, Math.max(10, Math.round(viabilityBase - seasonalShock + divBoost + subsidyBoost)));

    let resilienceBase = fleetScale === 'small' ? 50 : 65;
    let resilienceDiversification = (diversificationRate / 100) * 40;
    let resilienceSeverityDrag = (seasonSeverity / 10) * 30;
    let resilienceCredit = subsidyAccess ? 20 : 0;
    let householdResilience = Math.min(100, Math.max(15, Math.round(resilienceBase + resilienceDiversification - resilienceSeverityDrag + resilienceCredit)));

    let baseEcology = 55;
    let mpaBonus = conservationPolicy ? 30 : -15;
    let fleetPressure = fleetScale === 'large' ? -20 : -5;
    let ecologicalSustainability = Math.min(100, Math.max(10, Math.round(baseEcology + mpaBonus + fleetPressure)));

    let baseJustice = fleetScale === 'small' ? 40 : 65;
    let safetyNet = subsidyAccess ? 25 : 0;
    let mpaEquity = conservationPolicy ? (fleetScale === 'small' ? 15 : -10) : 0;
    let blueJustice = Math.min(100, Math.max(10, Math.round(baseJustice + safetyNet + mpaEquity)));

    let statusText = '';
    let recommendation = '';

    if (householdResilience > 75 && ecologicalSustainability > 70) {
      statusText = lang === 'en' 
        ? 'Optimal Sustainable Equilibrium' 
        : 'Keseimbangan Berkelanjutan Optimal';
      recommendation = lang === 'en'
        ? 'Policy levers successfully shield fishing households against monsoon shocks while protecting marine nursery stocks.'
        : 'Kombinasi kebijakan berhasil melindungi nelayan dari gejolak paceklik sekaligus menjaga stok sumber daya perikanan.';
    } else if (seasonSeverity >= 7 && diversificationRate < 30) {
      statusText = lang === 'en' 
        ? 'Severe Vulnerability Trap (Paceklik Crisis)' 
        : 'Perangkap Kerentanan Akut (Krisis Musim Paceklik)';
      recommendation = lang === 'en'
        ? 'Urgent policy intervention required: Expand household income diversification (processing, aquaculture) and credit safety nets.'
        : 'Diperlukan intervensi mendesak: perluas diversifikasi usaha (olahan terasi/tambak) dan jaring pengaman tunai saat paceklik.';
    } else {
      statusText = lang === 'en' ? 'Moderate Adaptive State' : 'Kondisi Adaptif Moderat';
      recommendation = lang === 'en'
        ? 'Community resilience can be elevated by strengthening cooperative credit unions and enforcing conservation zones.'
        : 'Ketahanan komunitas dapat ditingkatkan dengan penguatan koperasi nelayan dan penegakan zonasi konservasi.';
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

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(15, 23, 42, 0.5)',
        backdropFilter: 'blur(8px)',
        zIndex: 110,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.2s ease'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          maxWidth: '850px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '2.5rem',
          background: '#ffffff',
          borderRadius: '28px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', background: '#f3e8ff', color: '#8b5cf6' }}>
              INTERACTIVE EMPIRICAL DATA LAB
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-primary)', marginTop: '0.4rem' }}>
              {lang === 'en' ? 'Coastal Economy & Livelihood Resilience Simulator' : 'Simulator Resiliensi Ekonomi & Penghidupan Pesisir'}
            </h3>
          </div>

          <button
            onClick={onClose}
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
            <X size={18} />
          </button>
        </div>

        {/* Controls & Gauges Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {lang === 'en' ? 'Fleet Scale Type' : 'Skala Armada Nelayan'}
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setFleetScale('small')}
                  className={`btn ${fleetScale === 'small' ? 'btn-pill-primary' : 'btn-soft'}`}
                  style={{ fontSize: '0.8rem', padding: '0.5rem' }}
                >
                  {lang === 'en' ? 'Artisanal / Small' : 'Nelayan Kecil'}
                </button>
                <button
                  type="button"
                  onClick={() => setFleetScale('large')}
                  className={`btn ${fleetScale === 'large' ? 'btn-pill-primary' : 'btn-soft'}`}
                  style={{ fontSize: '0.8rem', padding: '0.5rem' }}
                >
                  {lang === 'en' ? 'Commercial / Large' : 'Nelayan Besar'}
                </button>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.825rem', fontWeight: 800 }}>
                <span>{lang === 'en' ? 'Monsoon Shock Severity' : 'Intensitas Musim Paceklik'}</span>
                <span style={{ color: 'var(--pastel-blue-dark)', fontFamily: 'var(--font-mono)' }}>{seasonSeverity} / 10</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={seasonSeverity}
                onChange={(e) => setSeasonSeverity(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#0284c7' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.825rem', fontWeight: 800 }}>
                <span>{lang === 'en' ? 'Livelihood Diversification' : 'Diversifikasi Usaha Nelayan'}</span>
                <span style={{ color: '#10b981', fontFamily: 'var(--font-mono)' }}>{diversificationRate}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="5"
                value={diversificationRate}
                onChange={(e) => setDiversificationRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#10b981' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid #f1f5f9' }}>
              <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.825rem', fontWeight: 700, cursor: 'pointer' }}>
                <span>{lang === 'en' ? 'Marine Protected Area (MPA)' : 'Penegakan Kawasan Konservasi'}</span>
                <input 
                  type="checkbox"
                  checked={conservationPolicy}
                  onChange={(e) => setConservationPolicy(e.target.checked)}
                  style={{ accentColor: '#059669', width: '18px', height: '18px' }}
                />
              </label>

              <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.825rem', fontWeight: 700, cursor: 'pointer' }}>
                <span>{lang === 'en' ? 'Cooperative Safety Net Credit' : 'Kredit Koperasi Nelayan'}</span>
                <input 
                  type="checkbox"
                  checked={subsidyAccess}
                  onChange={(e) => setSubsidyAccess(e.target.checked)}
                  style={{ accentColor: '#0284c7', width: '18px', height: '18px' }}
                />
              </label>
            </div>
          </div>

          {/* Results Display */}
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                  <span>{lang === 'en' ? 'Household Resilience Index' : 'Indeks Ketahanan Rumah Tangga'}</span>
                  <span style={{ color: '#0284c7', fontFamily: 'var(--font-mono)' }}>{metrics.householdResilience}/100</span>
                </div>
                <div style={{ height: '7px', background: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: `${metrics.householdResilience}%`, height: '100%', background: 'linear-gradient(90deg, #0284c7, #38bdf8)' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                  <span>{lang === 'en' ? 'Economic Viability' : 'Kelayakan Ekonomi'}</span>
                  <span style={{ color: '#10b981', fontFamily: 'var(--font-mono)' }}>{metrics.economicViability}/100</span>
                </div>
                <div style={{ height: '7px', background: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: `${metrics.economicViability}%`, height: '100%', background: 'linear-gradient(90deg, #10b981, #34d399)' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                  <span>{lang === 'en' ? 'Ecological Sustainability' : 'Keberlanjutan Ekologis'}</span>
                  <span style={{ color: '#059669', fontFamily: 'var(--font-mono)' }}>{metrics.ecologicalSustainability}/100</span>
                </div>
                <div style={{ height: '7px', background: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: `${metrics.ecologicalSustainability}%`, height: '100%', background: 'linear-gradient(90deg, #059669, #10b981)' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                  <span>{lang === 'en' ? 'Blue Justice Score' : 'Skor Keadilan Biru'}</span>
                  <span style={{ color: '#ea580c', fontFamily: 'var(--font-mono)' }}>{metrics.blueJustice}/100</span>
                </div>
                <div style={{ height: '7px', background: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: `${metrics.blueJustice}%`, height: '100%', background: 'linear-gradient(90deg, #ea580c, #fb923c)' }}></div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', padding: '0.85rem', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {metrics.statusText}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.25rem', lineHeight: 1.5 }}>
                {metrics.recommendation}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

