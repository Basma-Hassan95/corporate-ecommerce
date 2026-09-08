import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { CheckCircle2, Globe, TrendingUp, ArrowUpRight, Play, Sparkles, ShieldCheck, Scissors, Briefcase, ChevronRight } from 'lucide-react';
import { BRAND_IMAGES } from '../data/products';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animated Number Counter
function AnimatedNumber({ targetNumber, suffix = '' }) {
  const [currentValue, setCurrentValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    let startTimestamp = null;
    const duration = 2000;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const calculatedValue = Math.floor(easedProgress * targetNumber);

      setCurrentValue(calculatedValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrentValue(targetNumber);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetNumber]);

  return (
    <span>
      {currentValue.toLocaleString()}{suffix}
    </span>
  );
}

const WHY_CHOOSE_US_CARDS = [
  {
    id: 1,
    title: "100% Full-Grain Hide Certification",
    icon: <ShieldCheck size={26} color="var(--btn-coffee-bean)" />,
    description: "Through a combination of organic vegetable tanning and master hand selection, we work closely with you to develop customized corporate merchandise.",
    bullets: [
      "Organic Tree-Bark Vegetable Tanning",
      "Zero Synthetic PU or Bonded Fillers",
      "Lifetime Structural Guarantee"
    ]
  },
  {
    id: 2,
    title: "Laser Precision In-House Debossing",
    icon: <Sparkles size={26} color="var(--btn-coffee-bean)" />,
    description: "Achieve an uncompromised high-end finish with our 0.1mm micro-vector laser debossing technology for sharp, permanent company branding.",
    bullets: [
      "Permanent Heat Burnish & Foil Stamping",
      "Zero Fading or Peeling Guarantee",
      "Micro Vector Logo Detailing"
    ]
  },
  {
    id: 3,
    title: "5-Stage Waxed Saddle Stitching",
    icon: <Scissors size={26} color="var(--btn-coffee-bean)" />,
    description: "Every executive piece is hand-cut and saddle-stitched with heavy-gauge German waxed linen thread for indestructible durability.",
    bullets: [
      "Hand-Cut Precision Craftsmanship",
      "Color-Fast German Waxed Linen Thread",
      "Reinforced Stress-Point Rivets"
    ]
  },
  {
    id: 4,
    title: "Dedicated Corporate Account SLA",
    icon: <Briefcase size={26} color="var(--btn-coffee-bean)" />,
    description: "From rapid 48-hour sample proofing to velvet presentation gift boxes and nationwide scheduled delivery for corporate milestones.",
    bullets: [
      "48-Hour Sample Proof Delivery",
      "Rigid Velvet Presentation Boxes",
      "99.98% On-Time Corporate Delivery"
    ]
  }
];

export default function StatsAndValueProp({ setActivePage = () => {} }) {
  const headingRef = useRef(null);
  const solutionsHeadingRef = useRef(null);
  const cardsSectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const headlineText = "Driving into Excellence & Innovation: Your Trusted Partner for Sustainable Corporate Success.";
  const words = headlineText.split(" ");

  const solutionsText = "Tailored Business Solutions for our Corporates.";
  const solutionsWords = solutionsText.split(" ");

  // GSAP ScrollTrigger Text Fill Animation
  useEffect(() => {
    const headingEl = headingRef.current;
    if (!headingEl) return;

    let ctx = gsap.context(() => {
      const wordSpans = headingEl.querySelectorAll('.reveal-word');
      
      gsap.fromTo(
        wordSpans,
        { 
          color: 'rgba(33, 21, 20, 0.22)',
          opacity: 0.35
        },
        {
          color: '#211514',
          opacity: 1,
          stagger: 0.08,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: headingEl,
            start: 'top 85%',
            end: 'bottom 40%',
            scrub: 0.8
          }
        }
      );
    }, headingEl);

    return () => ctx.revert();
  }, []);

  // GSAP ScrollTrigger Text Fill Animation for Solutions Heading
  useEffect(() => {
    const headingEl = solutionsHeadingRef.current;
    if (!headingEl) return;

    let ctx = gsap.context(() => {
      const wordSpans = headingEl.querySelectorAll('.reveal-word-solutions');
      
      gsap.fromTo(
        wordSpans,
        { 
          color: 'rgba(33, 21, 20, 0.22)',
          opacity: 0.35
        },
        {
          color: '#211514',
          opacity: 1,
          stagger: 0.08,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: headingEl,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: 0.8
          }
        }
      );
    }, headingEl);

    return () => ctx.revert();
  }, []);

  // GSAP ScrollTrigger Side-Slide Cards Reveal Animation (Cards slide in horizontally from the right)
  useEffect(() => {
    const section = cardsSectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    if (!section || !cardsContainer) return;

    let ctx = gsap.context(() => {
      const cards = cardsContainer.querySelectorAll('.staggered-reveal-card');

      cards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: 120, // SLIDE IN FROM THE RIGHT SIDE!
            scale: 0.97
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.6
            }
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section style={{ backgroundColor: 'var(--bg-parchment)', borderBottom: '1px solid var(--border-light)' }}>
      
      {/* 1. ASYMMETRIC BENTO GRID STATS */}
      <div style={{ padding: '5.5rem 0 3.5rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.8rem' }} className="bento-asymmetric-grid">
            
            {/* TOP ROW - CARD 1 (#9A7824 DARK GOLDENROD BACKGROUND) */}
            <div 
              style={{
                gridColumn: 'span 4',
                backgroundColor: '#9A7824',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px rgba(154, 120, 36, 0.25)',
                minHeight: '260px'
              }}
              className="bento-card-hover"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CheckCircle2 size={24} color="#FFFFFF" />
                </div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '700', color: 'rgba(255, 255, 255, 0.75)' }}>
                  01.
                </span>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: '600', marginBottom: '0.4rem' }}>
                  Products Manufactured.
                </p>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.6rem', fontWeight: '700', color: '#FFFFFF', lineHeight: 1, margin: 0 }}>
                  <AnimatedNumber targetNumber={500000} suffix="+" />
                </h2>
              </div>
            </div>

            {/* TOP ROW - CENTER BANNER */}
            <div 
              style={{
                gridColumn: 'span 5',
                backgroundColor: 'transparent',
                padding: '1.5rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start'
              }}
              className="bento-banner-col"
            >
              <span 
                style={{
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  color: 'var(--btn-coffee-bean)',
                  backgroundColor: 'rgba(104, 74, 58, 0.1)',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '4px',
                  marginBottom: '1.2rem',
                  textTransform: 'uppercase'
                }}
              >
                GET TO KNOW US
              </span>

              <h2 
                ref={headingRef}
                style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '2.4rem', 
                  lineHeight: 1.25, 
                  fontWeight: '600', 
                  marginBottom: '1.6rem' 
                }}
              >
                {words.map((word, idx) => (
                  <span 
                    key={idx} 
                    className="reveal-word"
                    style={{
                      display: 'inline-block',
                      marginRight: '0.3em',
                      transition: 'color 0.1s ease',
                      color: 'rgba(33, 21, 20, 0.22)'
                    }}
                  >
                    {word}
                  </span>
                ))}
              </h2>

              <button
                onClick={() => setActivePage('about')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-dark-coffee)',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  padding: 0
                }}
                className="learn-more-btn"
              >
                <span>Learn More</span>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--text-dark-coffee)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </div>

            {/* TOP ROW - RIGHT PORTRAIT VIDEO FRAME */}
            <div 
              style={{
                gridColumn: 'span 3',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                position: 'relative',
                height: '260px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
              className="bento-card-hover"
            >
              <img 
                src={BRAND_IMAGES.aboutWorkshop} 
                alt="Master Craftsman" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(33, 21, 20, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div 
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-dark-coffee)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  className="play-btn-pulse"
                  onClick={() => setActivePage('about')}
                >
                  <Play size={22} fill="var(--text-dark-coffee)" style={{ marginLeft: '3px' }} />
                </div>
              </div>
            </div>

            {/* BOTTOM ROW - LEFT TEAL CARD */}
            <div 
              style={{
                gridColumn: 'span 4',
                backgroundColor: 'var(--btn-coffee-bean)',
                borderRadius: 'var(--radius-md)',
                padding: '2.2rem 2rem',
                color: '#FFFFFF',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '220px',
                boxShadow: 'var(--shadow-md)'
              }}
              className="bento-card-hover"
            >
              <div style={{ position: 'absolute', right: '16px', bottom: '16px', opacity: 0.25 }}>
                <Sparkles size={70} color="#FFFFFF" />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', margin: '0 -4px', zIndex: 2 }}>
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120" alt="Client 1" style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid var(--btn-coffee-bean)', objectFit: 'cover' }} />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" alt="Client 2" style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid var(--btn-coffee-bean)', objectFit: 'cover', marginLeft: '-12px' }} />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120" alt="Client 3" style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid var(--btn-coffee-bean)', objectFit: 'cover', marginLeft: '-12px' }} />
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--surface-dark-espresso)', border: '2px solid var(--btn-coffee-bean)', color: '#FFFFFF', fontSize: '1rem', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '-12px' }}>
                  +
                </div>
              </div>

              <div style={{ zIndex: 2 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: '#FAF6F0', fontWeight: '600', margin: 0 }}>
                  We have 1,000+ trusted corporate partners.
                </h3>
              </div>
            </div>

            {/* BOTTOM ROW - CENTER CARD (02.) */}
            <div 
              style={{
                gridColumn: 'span 4',
                backgroundColor: 'var(--surface-white)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                padding: '2.2rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                minHeight: '220px'
              }}
              className="bento-card-hover"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(154, 120, 36, 0.1)',
                  border: '1px solid rgba(154, 120, 36, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Globe size={24} color="#9A7824" />
                </div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--accent-dusty-taupe)', opacity: 0.6 }}>
                  02.
                </span>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-dusty-taupe)', fontWeight: '600', marginBottom: '0.4rem' }}>
                  Global Presence.
                </p>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: '700', color: '#9A7824', lineHeight: 1, margin: 0 }}>
                  Worldwide
                </h2>
              </div>
            </div>

            {/* BOTTOM ROW - RIGHT CARD (03.) */}
            <div 
              style={{
                gridColumn: 'span 4',
                backgroundColor: 'var(--surface-white)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                padding: '2.2rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                minHeight: '220px'
              }}
              className="bento-card-hover"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(154, 120, 36, 0.1)',
                  border: '1px solid rgba(154, 120, 36, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <TrendingUp size={24} color="#9A7824" />
                </div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--accent-dusty-taupe)', opacity: 0.6 }}>
                  03.
                </span>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-dusty-taupe)', fontWeight: '600', marginBottom: '0.4rem' }}>
                  Client Retention SLA.
                </p>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.4rem', fontWeight: '700', color: '#9A7824', lineHeight: 1, margin: 0 }}>
                  <AnimatedNumber targetNumber={98} suffix="%" />
                </h2>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 2. WHY CHOOSE US - STICKY STAGGERED SIDE-SLIDING CARDS (CARDS SLIDE IN FROM THE RIGHT SIDE) */}
      <div 
        ref={cardsSectionRef} 
        style={{ padding: '5.5rem 0', backgroundColor: '#F4EEDC', borderTop: '1px solid rgba(192, 165, 95, 0.2)', overflow: 'hidden' }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem' }} className="why-choose-grid">
            
            {/* LEFT STICKY COLUMN */}
            <div 
              style={{
                gridColumn: 'span 5',
                position: 'sticky',
                top: '120px',
                height: 'fit-content',
                alignSelf: 'start'
              }}
              className="sticky-left-col"
            >
              <span 
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  color: 'var(--btn-coffee-bean)',
                  backgroundColor: 'rgba(104, 74, 58, 0.1)',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '4px',
                  marginBottom: '1.2rem',
                  display: 'inline-block',
                  textTransform: 'uppercase'
                }}
              >
                OUR SOLUTIONS
              </span>

              <h2 
                ref={solutionsHeadingRef}
                style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '2.8rem', 
                  lineHeight: 1.15, 
                  fontWeight: '600', 
                  marginBottom: '1.4rem' 
                }}
              >
                {solutionsWords.map((word, idx) => (
                  <span 
                    key={idx} 
                    className="reveal-word-solutions"
                    style={{
                      display: 'inline-block',
                      marginRight: '0.3em',
                      transition: 'color 0.1s ease',
                      color: 'rgba(33, 21, 20, 0.22)'
                    }}
                  >
                    {word}
                  </span>
                ))}
              </h2>

              <p style={{ fontSize: '1rem', color: 'var(--accent-dusty-taupe)', lineHeight: 1.6, marginBottom: '2.2rem', fontWeight: '400' }}>
                Through a combination of full-grain leathercraft, precision debossing, and dedicated corporate SLAs, we deliver solutions engineered for long-term partnership.
              </p>

              <button
                onClick={() => setActivePage('catalog')}
                className="btn-primary"
                style={{
                  backgroundColor: 'var(--btn-coffee-bean)',
                  color: '#FFFFFF',
                  padding: '0.85rem 2rem',
                  borderRadius: '30px',
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <span>More Services</span>
                <ArrowUpRight size={18} />
              </button>
            </div>

            {/* RIGHT STAGGERED CARDS LIST - SLIDING IN FROM THE RIGHT SIDE */}
            <div 
              ref={cardsContainerRef}
              style={{
                gridColumn: 'span 7',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}
              className="staggered-cards-col"
            >
              {WHY_CHOOSE_US_CARDS.map((card, idx) => (
                <div
                  key={card.id}
                  className="staggered-reveal-card"
                  style={{
                    backgroundColor: 'var(--surface-white)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    padding: '2.5rem',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    willChange: 'transform, opacity'
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1.5rem', alignItems: 'flex-start' }} className="card-inner-grid">
                    
                    {/* Icon Pouch */}
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(104, 74, 58, 0.08)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {card.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: '#9A7824', fontWeight: '600', marginBottom: '0.8rem' }}>
                        {card.title}
                      </h3>

                      <p style={{ fontSize: '0.92rem', color: 'var(--text-dark-coffee)', opacity: 0.85, lineHeight: 1.65, marginBottom: '1.4rem', fontWeight: '400' }}>
                        {card.description}
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(192, 165, 95, 0.25)' }}>
                        {card.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#9A7824', fontWeight: '600' }}>
                            <ChevronRight size={14} color="#9A7824" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* Helper Styles */}
      <style>{`
        .bento-card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .bento-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md) !important;
          border-color: var(--btn-coffee-bean) !important;
        }
        .staggered-reveal-card:hover {
          border-color: var(--btn-coffee-bean) !important;
          box-shadow: var(--shadow-md) !important;
        }
        .play-btn-pulse:hover {
          transform: scale(1.1);
        }
        @media (max-width: 960px) {
          .bento-asymmetric-grid, .why-choose-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-asymmetric-grid > div, .sticky-left-col, .staggered-cards-col {
            grid-column: span 1 !important;
          }
          .sticky-left-col {
            position: relative !important;
            top: 0 !important;
            margin-bottom: 2rem !important;
          }
          .card-inner-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
