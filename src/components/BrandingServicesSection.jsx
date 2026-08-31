import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { Printer, Sparkles, Award, Package, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BRAND_IMAGES } from '../data/products';

const BRANDING_SERVICES = [
  {
    id: "printing",
    number: "01",
    headerLabel: "BRANDING TECHNIQUE 01",
    tag: "WAKEEL & SONS ATELIER",
    title: "Custom Printing Solutions",
    subtitle: "Vibrant & High-Quality Direct-to-Substrate Printing",
    icon: <Printer size={16} color="#9A7824" />,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1000",
    badge: "UV & SCREEN PRINTING",
    description: "Bring your company logo and designs to life with vibrant, high-precision UV printing directly onto leather, brass, acrylic, and gift box surfaces.",
    bullets: ["UV Direct-to-Substrate", "Scratch-Resistant Ink", "Pantone Color Accuracy", "High-Volume Speed"],
    year: "Technique: 01"
  },
  {
    id: "engraving",
    number: "02",
    headerLabel: "BRANDING TECHNIQUE 02",
    tag: "WAKEEL & SONS ATELIER",
    title: "Laser Precision Engraving",
    subtitle: "0.1mm Micro-Vector Fiber Debossing",
    icon: <Sparkles size={16} color="#9A7824" />,
    image: BRAND_IMAGES.engravingProcess,
    badge: "0.1MM FIBER LASER",
    description: "Achieve an uncompromised high-end executive finish with our 0.1mm micro-vector laser engraving technology for sharp, permanent company logo debossing.",
    bullets: ["Permanent Heat Burnish", "Zero Fading or Peeling", "Micro Vector Detailing", "Works on Leather & Brass"],
    year: "Technique: 02"
  },
  {
    id: "embroidery",
    number: "03",
    headerLabel: "BRANDING TECHNIQUE 03",
    tag: "WAKEEL & SONS ATELIER",
    title: "Expert Computerized Embroidery",
    subtitle: "High-Density 3D Thread Cresting",
    icon: <Award size={16} color="#9A7824" />,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000",
    badge: "3D THREAD CREST",
    description: "Showcase your brand with the polished, premium feel of professionally stitched high-density logos on corporate apparel, bags, and leather crests.",
    bullets: ["High-Density Thread Count", "Color-Fast German Thread", "Multi-Needle Precision", "Durable Machine Washable"],
    year: "Technique: 03"
  },
  {
    id: "packaging",
    number: "04",
    headerLabel: "BRANDING TECHNIQUE 04",
    tag: "WAKEEL & SONS ATELIER",
    title: "VIP Packaging & Presentation",
    subtitle: "Rigid Magnetic Boxes & Velvet Inserts",
    icon: <Package size={16} color="#9A7824" />,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000",
    badge: "VELVET PRESENTATION",
    description: "From custom rigid magnetic boxes to velvet presentation cutouts, our packaging delivers an uncompromised VIP corporate unboxing experience.",
    bullets: ["Rigid Magnetic Boxes", "Custom Velvet Cutouts", "Foil Stamped Box Lids", "VIP Corporate Welcome Kits"],
    year: "Technique: 04"
  }
];

export default function BrandingServicesSection({ setActivePage = () => {} }) {
  // Deck state array representing front-to-back card order [0, 1, 2, 3]
  const [deck, setDeck] = useState([0, 1, 2, 3]);
  const [isAnimating, setIsAnimating] = useState(false);
  const deckRef = useRef(null);

  // GSAP 60fps Butter-Smooth Flip Card Transition
  const handleNextCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const deckContainer = deckRef.current;
    if (!deckContainer) {
      setIsAnimating(false);
      return;
    }

    const cardElements = deckContainer.querySelectorAll('.stacked-single-card');
    const topCardEl = cardElements[0];

    if (!topCardEl) {
      setIsAnimating(false);
      return;
    }

    // GSAP Timeline with hardware acceleration
    const tl = gsap.timeline({
      onComplete: () => {
        setDeck((prevDeck) => {
          const newDeck = [...prevDeck];
          const first = newDeck.shift();
          newDeck.push(first);
          return newDeck;
        });

        gsap.set(cardElements, { clearProps: 'transform,opacity,zIndex' });
        setIsAnimating(false);
      }
    });

    // 1. Top active card slides down and fades out smoothly
    tl.to(topCardEl, {
      duration: 0.38,
      y: 45,
      opacity: 0,
      scale: 0.94,
      ease: 'power3.inOut'
    });

    // 2. Sub-cards behind shift forward seamlessly
    cardElements.forEach((card, idx) => {
      if (idx > 0) {
        tl.to(card, {
          duration: 0.32,
          y: -18,
          scale: '+=0.025',
          opacity: '+=0.12',
          ease: 'power3.out'
        }, '<0.04');
      }
    });
  };

  return (
    <section 
      style={{ 
        backgroundColor: 'var(--surface-linen)', 
        color: 'var(--text-dark-coffee)', 
        padding: '5rem 0 6rem', 
        position: 'relative', 
        borderTop: '1px solid var(--border-light)', 
        borderBottom: '1px solid var(--border-light)',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '1060px', margin: '0 auto' }}>
        
        {/* TOP HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge-taupe" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>
            ✦ ATELIER TECHNIQUE GALLERY
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4.2vw, 2.8rem)',
            color: '#9A7824',
            lineHeight: 1.15,
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            Professional Branding Services Under One Roof
          </h2>
          <p style={{
            color: 'var(--accent-dusty-taupe)',
            fontSize: '0.98rem',
            maxWidth: '620px',
            margin: '0.5rem auto 0',
            fontWeight: '400'
          }}>
            Click any card to shuffle through our in-house branding techniques engineered for corporate excellence.
          </p>
        </div>

        {/* VERTICALLY STACKED FLIP CARDS DECK (FULLY VISIBLE & SMOOTH) */}
        <div 
          style={{ 
            position: 'relative', 
            width: '100%', 
            minHeight: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '1.5rem'
          }}
        >
          <div 
            ref={deckRef}
            onClick={handleNextCard}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '880px',
              height: '470px',
              cursor: 'pointer',
              perspective: '1200px'
            }}
            className="stacked-cards-deck-container"
            title="Click to Flip Card Deck!"
          >
            {deck.map((cardIdx, stackPos) => {
              const card = BRANDING_SERVICES[cardIdx];
              const isTop = stackPos === 0;

              // Vertical Stacked Offsets (Cards stack upwards behind the main card)
              const topOffset = (3 - stackPos) * 20;
              const scaleVal = 1 - (3 - stackPos) * 0.025;
              const zIndexVal = 10 - stackPos;
              const opacityVal = stackPos === 0 ? 1 : 0.85 - stackPos * 0.12;

              return (
                <div
                  key={card.id}
                  className={`stacked-single-card ${isTop ? 'top-deck-card' : ''}`}
                  style={{
                    position: 'absolute',
                    top: `${topOffset}px`,
                    left: '50%',
                    transform: `translateX(-50%) scale(${scaleVal})`,
                    transformOrigin: 'top center',
                    width: '100%',
                    maxWidth: '860px',
                    height: '410px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    border: isTop ? '2px solid #9A7824' : '1px solid var(--border-light)',
                    boxShadow: isTop ? '0 18px 45px rgba(0, 0, 0, 0.12)' : '0 6px 20px rgba(0, 0, 0, 0.04)',
                    zIndex: zIndexVal,
                    opacity: opacityVal,
                    transition: isTop ? 'none' : 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    overflow: 'hidden',
                    willChange: 'transform, opacity',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  {/* CARD WINDOW TOP BAR */}
                  <div 
                    style={{ 
                      padding: '0.75rem 1.4rem', 
                      backgroundColor: 'rgba(248, 249, 250, 0.95)', 
                      borderBottom: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      height: '44px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(154, 120, 36, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {card.icon}
                      </div>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-dark-coffee)', letterSpacing: '0.08em' }}>
                        {card.headerLabel}
                      </span>
                    </div>

                    {/* Window Control Dots */}
                    <div style={{ display: 'flex', gap: '0.35rem' }}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#9A7824' }} />
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'rgba(154, 120, 36, 0.5)' }} />
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'rgba(154, 120, 36, 0.25)' }} />
                    </div>
                  </div>

                  {/* CARD INNER CONTENT BODY (HEIGHT: 366PX) */}
                  <div 
                    style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(12, 1fr)', 
                      alignItems: 'stretch',
                      height: 'calc(100% - 44px)'
                    }}
                    className="card-content-grid"
                  >
                    
                    {/* LEFT SIDE: INSET PHOTO FRAME (ROUNDED 14PX CORNERS) */}
                    <div 
                      style={{ 
                        gridColumn: 'span 5',
                        padding: '0.9rem',
                        height: '100%'
                      }}
                      className="card-left-img-wrap"
                    >
                      <div 
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                          borderRadius: '14px',
                          overflow: 'hidden',
                          backgroundColor: 'var(--surface-linen)'
                        }}
                      >
                        <img 
                          src={card.image} 
                          alt={card.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                        
                        {/* Top Left Badge */}
                        <span 
                          style={{
                            position: 'absolute',
                            top: '12px',
                            left: '12px',
                            backgroundColor: 'var(--surface-dark-espresso)',
                            color: '#FFFFFF',
                            padding: '0.28rem 0.65rem',
                            borderRadius: '5px',
                            fontSize: '0.66rem',
                            fontWeight: '700',
                            letterSpacing: '0.05em'
                          }}
                        >
                          {card.badge}
                        </span>
                      </div>
                    </div>

                    {/* RIGHT SIDE: DETAILS & CHECKMARKS GRID */}
                    <div 
                      style={{ 
                        gridColumn: 'span 7',
                        padding: '1.5rem 1.8rem 1.2rem 1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%'
                      }}
                      className="card-right-details-wrap"
                    >
                      <div>
                        {/* Subtitle / Tag */}
                        <span 
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: '700',
                            letterSpacing: '0.08em',
                            color: '#9A7824',
                            marginBottom: '0.35rem',
                            display: 'block',
                            textTransform: 'uppercase'
                          }}
                        >
                          {card.tag}
                        </span>

                        {/* Title */}
                        <h3 
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            color: 'var(--text-dark-coffee)',
                            lineHeight: 1.2,
                            marginBottom: '0.5rem'
                          }}
                        >
                          {card.title}
                        </h3>

                        {/* Subhead */}
                        <p style={{ fontSize: '0.84rem', color: '#9A7824', fontWeight: '600', marginBottom: '0.8rem' }}>
                          {card.subtitle}
                        </p>

                        {/* Description */}
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-dark-coffee)', opacity: 0.85, lineHeight: 1.5, marginBottom: '1rem' }}>
                          {card.description}
                        </p>

                        {/* 2-Column Checkmarks Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.45rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
                          {card.bullets.map((bullet, bIdx) => (
                            <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-dark-coffee)', fontWeight: '500' }}>
                              <CheckCircle2 size={14} color="#9A7824" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Footer Row */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.85rem', borderTop: '1px dashed var(--border-light)' }}>
                        <span style={{ fontSize: '0.78rem', color: 'var(--accent-dusty-taupe)', fontWeight: '600' }}>
                          {card.year}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePage('catalog');
                          }}
                          className="btn-primary"
                          style={{
                            backgroundColor: '#9A7824',
                            color: '#FFFFFF',
                            fontSize: '0.82rem',
                            fontWeight: '600',
                            padding: '0.55rem 1.2rem',
                            borderRadius: '30px',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            boxShadow: '0 4px 14px rgba(154, 120, 36, 0.25)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <span>Explore Technique</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Helper Styles */}
      <style>{`
        .stacked-single-card {
          box-sizing: border-box !important;
        }
        @media (max-width: 960px) {
          .stacked-cards-deck-container {
            height: 580px !important;
          }
          .stacked-single-card {
            height: 540px !important;
          }
          .card-content-grid {
            grid-template-columns: 1fr !important;
          }
          .card-left-img-wrap {
            grid-column: span 12 !important;
            height: 180px !important;
            padding: 0.6rem !important;
          }
          .card-right-details-wrap {
            grid-column: span 12 !important;
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
