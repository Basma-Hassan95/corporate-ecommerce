import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight } from 'lucide-react';
import { BRAND_IMAGES } from '../data/products';

const HERO_SLIDES = [
  {
    id: 1,
    badge: 'SUSTAINABLE LUXURY CORPORATE GIFTING',
    headlineMain: 'Handcrafted Excellence.',
    headlineAccent: 'Zero Synthetic Fillers.',
    description: 'Elevate your brand with premium, ethically sourced corporate merchandise designed to leave a lasting impression on clients, partners, and teams.',
    image: BRAND_IMAGES.heroBanner,
    ctaPrimaryText: 'Request a Quote',
    ctaSecondaryText: 'Explore Catalog',
    linkPrimary: 'contact',
    linkSecondary: 'catalog'
  },
  {
    id: 2,
    badge: 'SUSTAINABLE LUXURY CORPORATE GIFTING',
    headlineMain: 'Handcrafted Excellence.',
    headlineAccent: 'Zero Synthetic Fillers.',
    description: 'Elevate your brand with premium, ethically sourced corporate merchandise designed to leave a lasting impression on clients, partners, and teams.',
    image: BRAND_IMAGES.craftsmanship,
    ctaPrimaryText: 'Request a Quote',
    ctaSecondaryText: 'Explore Catalog',
    linkPrimary: 'contact',
    linkSecondary: 'catalog'
  },
  {
    id: 3,
    badge: 'SUSTAINABLE LUXURY CORPORATE GIFTING',
    headlineMain: 'Handcrafted Excellence.',
    headlineAccent: 'Zero Synthetic Fillers.',
    description: 'Elevate your brand with premium, ethically sourced corporate merchandise designed to leave a lasting impression on clients, partners, and teams.',
    image: BRAND_IMAGES.engravingProcess,
    ctaPrimaryText: 'Request a Quote',
    ctaSecondaryText: 'Explore Catalog',
    linkPrimary: 'contact',
    linkSecondary: 'catalog'
  },
  {
    id: 4,
    badge: 'SUSTAINABLE LUXURY CORPORATE GIFTING',
    headlineMain: 'Handcrafted Excellence.',
    headlineAccent: 'Zero Synthetic Fillers.',
    description: 'Elevate your brand with premium, ethically sourced corporate merchandise designed to leave a lasting impression on clients, partners, and teams.',
    image: BRAND_IMAGES.aboutWorkshop,
    ctaPrimaryText: 'Request a Quote',
    ctaSecondaryText: 'Explore Catalog',
    linkPrimary: 'contact',
    linkSecondary: 'catalog'
  }
];

export default function CorporateHeroSection({ setActivePage = () => {} }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const activeSlide = HERO_SLIDES[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Continuous Auto-Play Loop every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      style={{
        position: 'relative',
        width: '100%',
        height: '85vh',
        minHeight: '600px',
        backgroundColor: '#16120B',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}
      className="reference-hero-section"
    >
      {/* BACKGROUND SLIDE IMAGE SHOWCASE */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIdx;

        return (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isActive ? 'scale(1)' : 'scale(1.05)',
              backgroundImage: `linear-gradient(90deg, rgba(22, 18, 11, 0.94) 0%, rgba(22, 18, 11, 0.72) 45%, rgba(22, 18, 11, 0.25) 100%), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        );
      })}

      {/* LEFT & RIGHT NAVIGATION ARROW BUTTONS */}
      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 30,
          transition: 'all 0.3s ease'
        }}
        className="nav-arrow-btn"
        title="Previous Slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 30,
          transition: 'all 0.3s ease'
        }}
        className="nav-arrow-btn"
        title="Next Slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* HERO CONTENT CONTAINER */}
      <div 
        className="container hero-content-inner"
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '3.5rem',
          paddingRight: '3.5rem',
          maxWidth: '1240px',
          margin: '0 auto',
          zIndex: 20
        }}
      >
        <div style={{ maxWidth: '640px' }}>
          
          {/* 1. Category Badge */}
          <div 
            key={`badge-${currentIdx}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.4rem 1rem',
              borderRadius: '30px',
              backgroundColor: 'rgba(154, 120, 36, 0.18)',
              border: '1px solid rgba(194, 154, 56, 0.35)',
              fontSize: '0.74rem',
              fontWeight: '700',
              letterSpacing: '0.08em',
              color: '#C29A38',
              marginBottom: '1.2rem',
              backdropFilter: 'blur(10px)',
              animation: 'slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#9A7824' }} />
            <span>✦ {activeSlide.badge}</span>
          </div>

          {/* 2. Main Headline */}
          <h1 
            key={`title-${currentIdx}`}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
              lineHeight: 1.15,
              fontWeight: '300',
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
              marginBottom: '1.2rem',
              animation: 'slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards'
            }}
          >
            {activeSlide.headlineMain} <br />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', color: '#9A7824', fontStyle: 'italic' }}>
              {activeSlide.headlineAccent}
            </span>
          </h1>

          {/* 3. Sub-headline Description */}
          <p 
            key={`desc-${currentIdx}`}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.98rem',
              color: 'rgba(250, 247, 242, 0.85)',
              maxWidth: '560px',
              lineHeight: 1.6,
              fontWeight: '300',
              marginBottom: '2rem',
              animation: 'slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards'
            }}
          >
            {activeSlide.description}
          </p>

          {/* 4. Primary & Secondary CTA Buttons */}
          <div 
            key={`cta-${currentIdx}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              animation: 'slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards'
            }}
          >
            <button
              onClick={() => setActivePage('contact')}
              className="reference-gold-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '0.85rem 1.8rem',
                borderRadius: '30px',
                backgroundColor: '#9A7824',
                color: '#FFFFFF',
                fontSize: '0.92rem',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 8px 25px rgba(154, 120, 36, 0.4)'
              }}
            >
              <span>Request a Quote</span>
              <span 
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'transform 0.3s ease'
                }}
                className="btn-arrow-circle"
              >
                <ArrowUpRight size={15} />
              </span>
            </button>

            <button
              onClick={() => setActivePage('catalog')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.6rem',
                borderRadius: '30px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                fontWeight: '600',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
            >
              <span>Explore Catalog</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* 5. Social Proof Ticker / Trust Badges */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem', 
              marginTop: '2rem', 
              paddingTop: '1.2rem', 
              borderTop: '1px solid rgba(255, 255, 255, 0.15)', 
              flexWrap: 'wrap' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#9A7824' }} />
              <span>Over 100,000+ Units Delivered</span>
            </div>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#9A7824' }} />
              <span>Trusted by 500+ Global Enterprises</span>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM LEFT: THUMBNAIL SLIDE PREVIEWS */}
      <div 
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '5rem',
          display: 'flex',
          gap: '0.8rem',
          zIndex: 30
        }}
        className="hero-thumbnails-bar"
      >
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            onClick={() => setCurrentIdx(idx)}
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: currentIdx === idx ? '2px solid #9A7824' : '1px solid rgba(255, 255, 255, 0.25)',
              opacity: currentIdx === idx ? 1 : 0.6,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: currentIdx === idx ? '0 4px 15px rgba(0,0,0,0.5)' : 'none'
            }}
            className="thumb-card"
          >
            <img src={slide.image} alt={`Slide ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      {/* BOTTOM RIGHT: ROTATING CIRCULAR EMBLEM */}
      <div 
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '5rem',
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backgroundColor: 'rgba(22, 18, 11, 0.8)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          zIndex: 30
        }}
        className="hero-circular-emblem"
      >
        <svg 
          viewBox="0 0 100 100" 
          style={{ width: '100%', height: '100%', animation: 'spinSlow 16s linear infinite' }}
        >
          <path id="circlePathHeroRef2" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
          <text fontSize="10" letterSpacing="2.2" fill="rgba(250, 247, 242, 0.85)">
            <textPath href="#circlePathHeroRef2">EXPLORE MORE ✦ WAKEEL &amp; SONS ✦</textPath>
          </text>
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ArrowRight size={17} color="#9A7824" style={{ transform: 'rotate(45deg)' }} />
        </div>
      </div>

      {/* KEYFRAME ANIMATIONS & HOVER HELPER */}
      <style>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .nav-arrow-btn:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
          transform: translateY(-50%) scale(1.08) !important;
        }
        .reference-gold-btn:hover {
          transform: scale(1.04);
          background-color: #80631C !important;
        }
        .reference-gold-btn:hover .btn-arrow-circle {
          transform: rotate(45deg);
        }
        .thumb-card:hover {
          opacity: 1 !important;
          transform: scale(1.08);
        }
        @media (max-width: 960px) {
          .reference-hero-section {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .hero-content-inner {
            padding-left: 1.2rem !important;
            padding-right: 1.2rem !important;
            max-width: 100% !important;
          }
          .hero-content-inner h1 {
            font-size: clamp(1.6rem, 7vw, 2.3rem) !important;
            word-break: break-word;
            hyphens: auto;
          }
          .hero-content-inner p {
            font-size: 0.88rem !important;
            max-width: 100% !important;
          }
          .hero-thumbnails-bar {
            display: none !important;
          }
          .hero-circular-emblem {
            display: flex !important;
            width: 70px !important;
            height: 70px !important;
            right: 1rem !important;
            bottom: 1rem !important;
          }
          .nav-arrow-btn {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
