import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { Printer, Sparkles, Award, Package, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BRAND_IMAGES } from '../data/products';

const BRANDING_SERVICES = [
  {
    id: "engraving",
    number: "01",
    headerLabel: "BRANDING FEATURE 01",
    tag: "WAKEEL & SONS",
    title: "Precision Laser Engraving",
    subtitle: "Crisp, permanent detailing on hard goods.",
    icon: <Sparkles size={16} color="#9A7824" />,
    image: BRAND_IMAGES.engravingProcess,
    badge: "0.1MM FIBER LASER",
    description: "Crisp, permanent detailing on hard goods. Achieve an uncompromised high-end executive finish with our micro-vector laser technology for sharp company logo debossing.",
    bullets: ["Crisp Permanent Detailing", "0.1mm Micro-Vector Laser", "Zero Fading or Peeling", "Ideal for Leather, Brass & Wood"],
    year: "Feature: 01"
  },
  {
    id: "debossing",
    number: "02",
    headerLabel: "BRANDING FEATURE 02",
    tag: "WAKEEL & SONS",
    title: "Blind & Foil Debossing",
    subtitle: "Deep, luxurious impressions on all leather goods.",
    icon: <Award size={16} color="#9A7824" />,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1000",
    badge: "LUXURY DEBOSSING",
    description: "Deep, luxurious impressions on all leather goods. Permanent heat burnishing with rich gold, silver, or blind debossing into premium full-grain hides.",
    bullets: ["Deep Heat Burnishing", "Gold & Silver Foil Stamping", "Rich Tactile Finish", "Preserves Hide Integrity"],
    year: "Feature: 02"
  },
  {
    id: "packaging",
    number: "03",
    headerLabel: "BRANDING FEATURE 03",
    tag: "WAKEEL & SONS",
    title: "Custom Packaging",
    subtitle: "Brand-colored gift boxes with satin pull-ribbons and custom greeting cards.",
    icon: <Package size={16} color="#9A7824" />,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000",
    badge: "UNBOXING EXPERIENCE",
    description: "Brand-colored gift boxes with satin pull-ribbons and custom greeting cards. Delivering an uncompromised VIP corporate unboxing experience for your clients.",
    bullets: ["Brand-Colored Gift Boxes", "Satin Pull-Ribbon Ties", "Custom Greeting & Thank You Cards", "Rigid Velvet Cutout Inserts"],
    year: "Feature: 03"
  }
];

export default function BrandingServicesSection({ setActivePage = () => {} }) {
  // Deck state array representing front-to-back card order [0, 1, 2]
  const [deck, setDeck] = useState([0, 1, 2]);
  const [isAnimating, setIsAnimating] = useState(false);
  const deckRef = useRef(null);

  // Stack positions configuration (0 = front/top active, 1 = middle behind, 2 = back behind)
  const POS_CONFIG = [
    { top: 60, scale: 1, zIndex: 10, opacity: 1, border: '2px solid #9A7824', shadow: '0 20px 45px rgba(0, 0, 0, 0.12)' },
    { top: 30, scale: 0.96, zIndex: 9, opacity: 0.9, border: '1.5px solid rgba(154, 120, 36, 0.4)', shadow: '0 10px 25px rgba(0, 0, 0, 0.08)' },
    { top: 0, scale: 0.92, zIndex: 8, opacity: 0.8, border: '1px solid var(--border-light)', shadow: '0 6px 16px rgba(0, 0, 0, 0.05)' }
  ];

  // GSAP 60fps Butter-Smooth Flip Card Transition for clicking any card or tab
  const handleCardClick = (clickedCardIdx) => {
    if (isAnimating) return;

    const currentFront = deck[0];
    let newDeck;

    if (clickedCardIdx === currentFront) {
      // Clicking front card cycles to next card
      newDeck = [deck[1], deck[2], deck[0]];
    } else if (clickedCardIdx === deck[1]) {
      // Clicking middle card brings it to front
      newDeck = [deck[1], deck[2], deck[0]];
    } else if (clickedCardIdx === deck[2]) {
      // Clicking back card brings it to front
      newDeck = [deck[2], deck[0], deck[1]];
    } else {
      return;
    }

    setIsAnimating(true);
    const deckContainer = deckRef.current;
    if (!deckContainer) {
      setDeck(newDeck);
      setIsAnimating(false);
      return;
    }

    const getEl = (idx) => deckContainer.querySelector(`[data-card-idx="${idx}"]`);
    const allEls = Array.from(deckContainer.querySelectorAll('.stacked-single-card'));

    const oldFrontEl = getEl(currentFront);
    const newFrontEl = getEl(newDeck[0]);
    const newMiddleEl = getEl(newDeck[1]);
    const newBackEl = getEl(newDeck[2]);

    const tl = gsap.timeline({
      onComplete: () => {
        setDeck(newDeck);
        allEls.forEach((el) => {
          gsap.set(el, { clearProps: 'transform,y,scale,opacity,zIndex,top' });
        });
        setIsAnimating(false);
      }
    });

    // 1. Lift old front card up smoothly
    if (oldFrontEl) {
      tl.to(oldFrontEl, {
        y: -100,
        scale: 1.02,
        opacity: 0.6,
        duration: 0.28,
        ease: 'power2.inOut'
      }, 0);
    }

    // 2. Animate new front card to top stack position
    if (newFrontEl) {
      tl.to(newFrontEl, {
        top: POS_CONFIG[0].top,
        scale: POS_CONFIG[0].scale,
        zIndex: POS_CONFIG[0].zIndex,
        opacity: POS_CONFIG[0].opacity,
        duration: 0.4,
        ease: 'power2.out'
      }, 0.08);
    }

    // 3. Animate new middle card
    if (newMiddleEl && newMiddleEl !== oldFrontEl) {
      tl.to(newMiddleEl, {
        top: POS_CONFIG[1].top,
        scale: POS_CONFIG[1].scale,
        zIndex: POS_CONFIG[1].zIndex,
        opacity: POS_CONFIG[1].opacity,
        duration: 0.38,
        ease: 'power2.out'
      }, 0.08);
    }

    // 4. Animate new back card
    if (newBackEl && newBackEl !== oldFrontEl) {
      tl.to(newBackEl, {
        top: POS_CONFIG[2].top,
        scale: POS_CONFIG[2].scale,
        zIndex: POS_CONFIG[2].zIndex,
        opacity: POS_CONFIG[2].opacity,
        duration: 0.35,
        ease: 'power2.out'
      }, 0.08);
    }

    // 5. Old front card drops smoothly into its target stack position behind
    if (oldFrontEl) {
      const oldFrontNewPos = newDeck.indexOf(currentFront);
      const targetConfig = POS_CONFIG[oldFrontNewPos] || POS_CONFIG[2];

      tl.to(oldFrontEl, {
        y: 0,
        top: targetConfig.top,
        scale: targetConfig.scale,
        zIndex: targetConfig.zIndex,
        opacity: targetConfig.opacity,
        duration: 0.32,
        ease: 'power2.in'
      }, 0.22);
    }
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
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge-taupe" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>
            ✦ BESPOKE BRANDING
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
            Professional Branding Services Made For You
          </h2>
          <p style={{
            color: 'var(--accent-dusty-taupe)',
            fontSize: '0.98rem',
            maxWidth: '620px',
            margin: '0.5rem auto 0',
            fontWeight: '400'
          }}>
            Turn everyday executive essentials into powerful brand ambassadors.
          </p>
        </div>

        {/* TAB PILL NAVIGATION FOR CARDS */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {BRANDING_SERVICES.map((serv, sIdx) => {
            const isActive = deck[0] === sIdx;
            return (
              <button
                key={serv.id}
                onClick={() => handleCardClick(sIdx)}
                style={{
                  padding: '0.55rem 1.2rem',
                  borderRadius: '30px',
                  border: isActive ? '2px solid #9A7824' : '1px solid var(--border-light)',
                  backgroundColor: isActive ? '#9A7824' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : 'var(--text-dark-coffee)',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  boxShadow: isActive ? '0 4px 14px rgba(154, 120, 36, 0.25)' : 'none'
                }}
              >
                <span>{serv.headerLabel}</span>
              </button>
            );
          })}
        </div>

        {/* VERTICALLY STACKED FLIP CARDS DECK (FULLY VISIBLE & SMOOTH) */}
        <div 
          style={{ 
            position: 'relative', 
            width: '100%', 
            minHeight: '510px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '1.5rem'
          }}
        >
          <div 
            ref={deckRef}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '880px',
              height: '480px',
              perspective: '1200px'
            }}
            className="stacked-cards-deck-container"
          >
            {deck.map((cardIdx, stackPos) => {
              const card = BRANDING_SERVICES[cardIdx];
              const isTop = stackPos === 0;

              const posConfig = POS_CONFIG[stackPos] || POS_CONFIG[2];

              return (
                <div
                  key={card.id}
                  data-card-idx={cardIdx}
                  className={`stacked-single-card ${isTop ? 'top-deck-card' : ''}`}
                  onClick={() => handleCardClick(cardIdx)}
                  style={{
                    position: 'absolute',
                    top: `${posConfig.top}px`,
                    left: '50%',
                    transform: `translateX(-50%) scale(${posConfig.scale})`,
                    transformOrigin: 'top center',
                    width: '100%',
                    maxWidth: '860px',
                    height: '410px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    border: posConfig.border,
                    boxShadow: posConfig.shadow,
                    zIndex: posConfig.zIndex,
                    opacity: posConfig.opacity,
                    overflow: 'hidden',
                    willChange: 'transform, opacity, top',
                    backfaceVisibility: 'hidden',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  {/* CARD WINDOW TOP BAR */}
                  <div 
                    style={{ 
                      padding: '0.75rem 1.4rem', 
                      backgroundColor: isTop ? 'rgba(248, 249, 250, 0.98)' : 'rgba(240, 238, 233, 0.95)', 
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
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.78rem', fontWeight: '700', color: isTop ? '#9A7824' : 'var(--text-dark-coffee)', letterSpacing: '0.08em' }}>
                        {card.headerLabel} — {card.title}
                      </span>
                    </div>

                    {/* Window Control Dots / Click Indicator */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {!isTop && (
                        <span style={{ fontSize: '0.68rem', fontWeight: '600', color: '#9A7824', backgroundColor: 'rgba(154, 120, 36, 0.12)', padding: '0.15rem 0.55rem', borderRadius: '10px' }}>
                          Click to bring to front
                        </span>
                      )}
                      <div style={{ display: 'flex', gap: '0.35rem' }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#9A7824' }} />
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'rgba(154, 120, 36, 0.5)' }} />
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'rgba(154, 120, 36, 0.25)' }} />
                      </div>
                    </div>
                  </div>

                  {/* CARD INNER CONTENT BODY */}
                  <div 
                    style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(12, 1fr)', 
                      alignItems: 'stretch',
                      height: 'calc(100% - 44px)'
                    }}
                    className="card-content-grid"
                  >
                    
                    {/* LEFT SIDE: INSET PHOTO FRAME */}
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
            height: 600px !important;
          }
          .stacked-single-card {
            height: 540px !important;
          }
          .card-content-grid {
            grid-template-columns: 1fr !important;
          }
          .card-left-img-wrap {
            grid-column: span 12 !important;
            height: 170px !important;
            padding: 0.6rem !important;
          }
          .card-right-details-wrap {
            grid-column: span 12 !important;
            padding: 0.8rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
