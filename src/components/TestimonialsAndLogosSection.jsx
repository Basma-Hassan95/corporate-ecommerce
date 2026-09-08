import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND_IMAGES } from '../data/products';

const CORPORATE_LOGOS = [
  { name: 'HBL', text: 'HBL' },
  { name: 'Swvl', text: 'SWVL' },
  { name: 'Adamjee DuraBuilt', text: 'DURA BUILT' },
  { name: 'Lucky Cement', text: 'LUCKY CEMENT' },
  { name: 'Engro', text: 'ENGRO' },
  { name: 'Unilever', text: 'UNILEVER' },
  { name: 'MCB', text: 'MCB BANK' },
  { name: 'Khaadi', text: 'KHAADI' }
];

const TESTIMONIAL_SLIDES = [
  {
    id: 1,
    name: "Marcus Vance",
    role: "Head of People & Culture, Apex Global Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "The quality of the customized leather sets exceeded our expectations. Our executive clients were genuinely impressed, and the fulfillment process was flawless from start to finish."
  },
  {
    id: 2,
    name: "Ali Bohri",
    role: "Director Operations, SAIF UL BURHAN",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    quote: "MashAllah kiya dealing hai! Best rates, best quality, straight commitment wale log. The custom leather passport holders and wooden gift sets for our annual corporate milestone were praised by all board members."
  },
  {
    id: 3,
    name: "Farhan Ahmed",
    role: "Head of Admin & HR",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    quote: "Ordered 500 customized full-grain leather passport holders with precision company logo debossing. Delivered 2 days ahead of schedule in luxury velvet presentation boxes. Outstanding experience!"
  }
];

export default function TestimonialsAndLogosSection({ setActivePage = () => {} }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const activeItem = TESTIMONIAL_SLIDES[currentIdx];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TESTIMONIAL_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ backgroundColor: 'var(--surface-linen)', color: 'var(--text-dark-coffee)', padding: '4.5rem 0 5.5rem', position: 'relative', borderTop: '1px solid var(--border-light)', overflow: 'hidden' }}>
      
      {/* 1. TOP CENTERED PILL BADGE */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.5rem 1.4rem',
            borderRadius: '30px',
            backgroundColor: 'var(--surface-white)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            fontSize: '0.88rem',
            color: 'var(--text-dark-coffee)',
            fontWeight: '500'
          }}
        >
          <span>Join Over</span>
          <span style={{ color: 'var(--btn-coffee-bean)', fontWeight: '700' }}>500+</span>
          <span>Global Enterprises with</span>
          <span style={{ color: 'var(--text-dark-coffee)', fontWeight: '700' }}>Wakeel &amp; Sons</span>
        </div>
      </div>

      {/* 2. INFINITE SMOOTH HORIZONTAL LOGO MARQUEE */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          marginBottom: '5.5rem',
          padding: '1rem 0'
        }}
      >
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '120px', background: 'linear-gradient(90deg, var(--surface-linen) 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '120px', background: 'linear-gradient(270deg, var(--surface-linen) 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />

        <div className="logos-marquee-track" style={{ display: 'flex', gap: '1.8rem', width: 'max-content' }}>
          {[...CORPORATE_LOGOS, ...CORPORATE_LOGOS, ...CORPORATE_LOGOS, ...CORPORATE_LOGOS].map((logo, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 1.6rem',
                borderRadius: '30px',
                backgroundColor: 'var(--surface-white)',
                border: '1px solid var(--border-light)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                fontSize: '0.85rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                color: 'var(--text-dark-coffee)',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease'
              }}
              className="logo-capsule-card"
            >
              <span>✦ {logo.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. TESTIMONIAL GRID */}
      <div className="container" style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
          className="testimonials-exact-grid"
        >
          
          {/* LEFT SIDE: PHOTO FRAME WITH OVERLAY & FLOATING 4.9 TEAL RATING BADGE */}
          <div 
            style={{
              gridColumn: 'span 5',
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              minHeight: '380px'
            }}
            className="left-photo-card"
          >
            <img 
              src={BRAND_IMAGES.heroBanner} 
              alt="Hear from Our Customers" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 100%)' }} />

            {/* Top Text Overlay */}
            <div style={{ position: 'absolute', top: '2.2rem', left: '2.2rem', zIndex: 10 }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: '600',
                color: '#FFFFFF',
                lineHeight: 1.15,
                margin: 0
              }}>
                Hear from Our <br />
                <span style={{ opacity: 0.65, fontWeight: 300 }}>Customer.</span>
              </h2>
            </div>

            {/* FLOATING TEAL RATING BADGE (EXACT MATCH FOR REFERENCE SCREENSHOT) */}
            <div 
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                backgroundColor: 'var(--btn-coffee-bean)',
                color: '#FFFFFF',
                borderRadius: '16px',
                padding: '1.4rem 1.6rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                zIndex: 10,
                minWidth: '160px'
              }}
            >
              <span style={{ fontSize: '3.2rem', fontWeight: '800', fontFamily: 'var(--font-heading)', lineHeight: 1, marginBottom: '0.6rem' }}>
                4.9
              </span>
              
              <div style={{ display: 'flex', gap: '0.2rem', color: '#FBBC05', marginBottom: '0.4rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#FBBC05" color="#FBBC05" />
                ))}
              </div>

              <span style={{ fontSize: '0.72rem', opacity: 0.9, fontWeight: '600' }}>
                ★ 4.9/5 Average Corporate Rating
              </span>
            </div>

          </div>

          {/* RIGHT SIDE: FEATURED QUOTE CARD WITH SLIDER DOTS */}
          <div 
            style={{
              gridColumn: 'span 7',
              backgroundColor: 'var(--surface-white)',
              borderRadius: '24px',
              border: '1px solid var(--border-light)',
              padding: '3rem 3rem',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
            className="right-quote-card"
          >
            <div>
              {/* Big Teal Quote Icon */}
              <div style={{ marginBottom: '1.5rem', color: 'var(--btn-coffee-bean)' }}>
                <Quote size={48} color="var(--btn-coffee-bean)" style={{ transform: 'rotate(180deg)' }} />
              </div>

              {/* Quote Text */}
              <p style={{
                fontSize: '1.15rem',
                color: 'var(--text-dark-coffee)',
                lineHeight: 1.7,
                fontWeight: '400',
                marginBottom: '2.5rem',
                fontFamily: 'var(--font-body)'
              }}>
                "{activeItem.quote}"
              </p>
            </div>

            <div>
              {/* Dotted Divider */}
              <div style={{ width: '100%', borderTop: '1px dashed var(--border-light)', marginBottom: '1.8rem' }} />

              {/* Client Profile Footer + Slider Progress Dots */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                
                {/* Avatar + Author Details */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img 
                    src={activeItem.avatar} 
                    alt={activeItem.name} 
                    style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-light)' }} 
                  />
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-dark-coffee)', margin: 0 }}>
                      {activeItem.name}
                    </h4>
                    <span style={{ fontSize: '0.82rem', color: 'var(--accent-dusty-taupe)', fontWeight: '400' }}>
                      {activeItem.role}
                    </span>
                  </div>
                </div>

                {/* SLIDER PROGRESS DOTS / PILL (EXACT MATCH FOR REFERENCE SCREENSHOT) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {TESTIMONIAL_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIdx(idx)}
                      style={{
                        width: currentIdx === idx ? '28px' : '9px',
                        height: '9px',
                        borderRadius: '10px',
                        backgroundColor: currentIdx === idx ? 'var(--btn-coffee-bean)' : 'rgba(104, 74, 58, 0.25)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: 0
                      }}
                      title={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Helper Styles */}
      <style>{`
        .logos-marquee-track {
          animation: marqueeSeamless 24s linear infinite;
        }
        .logos-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marqueeSeamless {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .logo-capsule-card:hover {
          transform: translateY(-4px);
          border-color: var(--btn-coffee-bean) !important;
          box-shadow: var(--shadow-md) !important;
        }
        @media (max-width: 960px) {
          .testimonials-exact-grid {
            grid-template-columns: 1fr !important;
          }
          .left-photo-card, .right-quote-card {
            grid-column: span 12 !important;
          }
          .right-quote-card {
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
