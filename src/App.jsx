import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import TopNav from './components/TopNav';
import ProfileSlide from './components/ProfileSlide';
import ProjectSlide from './components/ProjectSlide';
import ContactSlide from './components/ContactSlide';
import SimulatorModal from './components/SimulatorModal';
import CvModal from './components/CvModal';
import { portfolioData } from './data/portfolioData';
import seaVideo from './assets/laut.mp4';
import webVideo from './assets/web.mp4';

export default function App() {
  const [activeSlide, setActiveSlide] = useState('profile');
  const [lang, setLang] = useState('id');
  const [simulatorModalOpen, setSimulatorModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const videoRef = useRef(null);
  const isScrollingRef = useRef(false);
  const [isLaptop, setIsLaptop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 768 : true);

  const slides = ['profile', 'project', 'contact'];

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isLaptop]);

  // Smooth Reading / Exploration Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const goToSlide = (slideId) => {
    const el = document.getElementById(slideId);
    if (el) {
      isScrollingRef.current = true;
      setActiveSlide(slideId);
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 750);
    }
  };

  // Stop-motion page-by-page controlled scroll & keyboard navigation
  useEffect(() => {
    const handleWheel = (e) => {
      // Allow normal scrolling inside modals
      if (simulatorModalOpen || cvModalOpen) return;

      // Threshold to avoid accidental micro-movements
      if (Math.abs(e.deltaY) < 32) return;

      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      const currentIdx = slides.indexOf(activeSlide);
      if (currentIdx === -1) return;

      if (e.deltaY > 0) {
        // Scroll down to next slide
        if (currentIdx < slides.length - 1) {
          e.preventDefault();
          goToSlide(slides[currentIdx + 1]);
        }
      } else {
        // Scroll up to previous slide
        if (currentIdx > 0) {
          e.preventDefault();
          goToSlide(slides[currentIdx - 1]);
        }
      }
    };

    const handleKeyDown = (e) => {
      if (simulatorModalOpen || cvModalOpen) return;
      const currentIdx = slides.indexOf(activeSlide);
      if (currentIdx === -1) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (currentIdx < slides.length - 1) {
          e.preventDefault();
          goToSlide(slides[currentIdx + 1]);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentIdx > 0) {
          e.preventDefault();
          goToSlide(slides[currentIdx - 1]);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSlide, simulatorModalOpen, cvModalOpen]);

  // Scroll tracking to synchronize active navigation pill
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const profileElem = document.getElementById('profile');
      const projectElem = document.getElementById('project');
      const contactElem = document.getElementById('contact');

      if (!profileElem || !projectElem || !contactElem) return;

      const projectTop = projectElem.offsetTop - windowHeight * 0.4;
      const contactTop = contactElem.offsetTop - windowHeight * 0.4;

      if (scrollY >= contactTop) {
        setActiveSlide('contact');
      } else if (scrollY >= projectTop) {
        setActiveSlide('project');
      } else {
        setActiveSlide('profile');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'transparent' }}>
      
      {/* Ambient Sea Video Background (web.mp4 for laptop/desktop, laut.mp4 for mobile) */}
      <div className="video-background-container" aria-hidden="true">
        <video
          key={isLaptop ? 'laptop-video' : 'mobile-video'}
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`video-background ${isLaptop ? 'video-laptop' : 'video-mobile'}`}
        >
          <source src={isLaptop ? webVideo : seaVideo} type="video/mp4" />
          <source src={isLaptop ? "/web.mp4" : "/laut.mp4"} type="video/mp4" />
        </video>

        {/* Soft oceanic tint overlay */}
        <div className="video-overlay" />
      </div>

      {/* Top Reading Progress Bar (Framer Motion) */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #38bdf8, #0284c7, #10b981)',
          transformOrigin: '0%',
          zIndex: 100
        }}
      />

      {/* Top Header with Segmented Navigation Capsule */}
      <TopNav 
        activeSlide={activeSlide} 
        setActiveSlide={goToSlide} 
        lang={lang} 
        setLang={setLang} 
        onOpenCvModal={() => setCvModalOpen(true)}
        portfolioData={portfolioData}
      />

      {/* Main Presentation Slides */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        {/* Slide 1: PROFILE */}
        <ProfileSlide 
          lang={lang} 
          portfolioData={portfolioData} 
          onOpenCvModal={() => setCvModalOpen(true)}
        />

        {/* Slide 2: PROJECT (RECAP PROJECT 2025 - 2026) */}
        <ProjectSlide 
          lang={lang} 
          portfolioData={portfolioData} 
          onOpenSimulatorModal={() => setSimulatorModalOpen(true)}
        />

        {/* Slide 3: CONTACT PERSON (THANK YOU 2026) */}
        <ContactSlide 
          lang={lang} 
          portfolioData={portfolioData} 
          onOpenCvModal={() => setCvModalOpen(true)}
        />
      </main>

      {/* Interactive Simulator Modal */}
      <SimulatorModal 
        isOpen={simulatorModalOpen} 
        onClose={() => setSimulatorModalOpen(false)} 
        lang={lang} 
        portfolioData={portfolioData} 
      />

      {/* Curriculum Vitae Modal */}
      <CvModal 
        isOpen={cvModalOpen} 
        onClose={() => setCvModalOpen(false)} 
        lang={lang} 
        portfolioData={portfolioData} 
      />
    </div>
  );
}
