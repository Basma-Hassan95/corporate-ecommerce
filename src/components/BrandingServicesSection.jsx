import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Printer, Sparkles, Award, Package, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BRAND_IMAGES } from '../data/products';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const BRANDING_SERVICES_GRID = [
  {
    id: "printing",
    title: "Custom Printing",
    subtitle: "Vibrant & High-Quality Printing",
    icon: <Printer size={24} color="var(--btn-coffee-bean)" />,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1000",
    badge: "UV & SCREEN PRINTING",
    description: "Bring your logo and designs to life with vibrant, high-quality direct-to-substrate printing on any surface.",
    bullets: ["UV Direct-to-Substrate", "Scratch-Resistant Ink", "Pantone Color Accuracy", "High-Volume Speed"]
  },
  {
    id: "engraving",
    title: "Laser Engraving",
    subtitle: "Micro-Precision Fiber Debossing",
    icon: <Sparkles size={24} color="var(--btn-coffee-bean)" />,
    image: BRAND_IMAGES.engravingProcess,
    badge: "0.1MM FIBER LASER",
    description: "Achieve a high-end finish with our advanced laser engraving technology for a sharp, clean executive look.",
    bullets: ["Permanent Heat Burnish", "Zero Fading or Peeling", "Micro Vector Detailing", "Works on Leather & Brass"]
  },
  {
    id: "embroidery",
    title: "Expert Embroidery",
    subtitle: "High-Density Computerized Stitching",
    icon: <Award size={24} color="var(--btn-coffee-bean)" />,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000",
    badge: "3D THREAD CREST",
    description: "Showcase your brand with the polished, premium feel of professionally stitched high-density logos and designs.",
    bullets: ["High-Density Thread Count", "Color-Fast German Thread", "Multi-Needle Precision", "Durable Machine Washable"]
  },
  {
    id: "packaging",
    title: "Packaging Solutions",
    subtitle: "Rigid Boxes & Velvet Inserts",
    icon: <Package size={24} color="var(--btn-coffee-bean)" />,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000",
    badge: "VELVET PRESENTATION",
    description: "From branded boxes to custom sleeves, our presentation packaging delivers an uncompromised luxury experience.",
    bullets: ["Rigid Magnetic Boxes", "Custom Velvet Cutouts", "Foil Stamped Box Lids", "VIP Corporate Welcome Kits"]
  }
];

export default function BrandingServicesSection({ setActivePage = () => {} }) {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const strip = stripRef.current;

    if (!section || !wrapper || !strip) return;

    let ctx = gsap.context(() => {
      const getScrollAmount = () => {
        let stripWidth = strip.scrollWidth;
        return -(stripWidth - wrapper.clientWidth);
      };

      const tween = gsap.to(strip, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          scrub: 1,
          start: "center center",
          end: () => `+=${strip.scrollWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });

      return () => {
        tween.kill();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      style={{ 
        backgroundColor: 'var(--surface-linen)', 
        color: 'var(--text-dark-coffee)', 
        padding: '5.5rem 0', 
        position: 'relative', 
        borderTop: '1px solid var(--border-light)', 
        borderBottom: '1px solid var(--border-light)',
        overflow: 'hidden'
      }}
    >
      {/* SECTION HEADER */}
      <div className="container" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="badge-taupe" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>
          ✦ ATELIER HORIZONTAL GALLERY
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
          color: 'var(--text-dark-coffee)',
          lineHeight: 1.15,
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.04em'
        }}>
          Professional Branding Services Under One Roof
        </h2>
        <p style={{
          color: 'var(--accent-dusty-taupe)',
          fontSize: '1.05rem',
          maxWidth: '680px',
          margin: '0.6rem auto 0',
          fontWeight: '400'
        }}>
          Scroll down to experience our horizontal branding gallery. Precision in-house techniques engineered for corporate excellence.
        </p>
      </div>

      {/* GSAP HORIZONTAL SCROLL GALLERY WRAPPER */}
      <div 
        ref={wrapperRef}
        className="horiz-gallery-wrapper"
        style={{
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          padding: '1rem 0'
        }}
      >
        <div 
          ref={stripRef}
          className="horiz-gallery-strip"
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '2rem',
            paddingLeft: '5vw',
            paddingRight: '5vw',
            willChange: 'transform',
            width: 'max-content'
          }}
        >
          {BRANDING_SERVICES_GRID.map((card, index) => (
            <div
              key={card.id}
              className="project-wrap"
              style={{
                width: '380px',
                flexShrink: 0,
                backgroundColor: 'var(--surface-white)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                {/* Image Frame */}
                <div style={{ position: 'relative', height: '230px', overflow: 'hidden', backgroundColor: 'var(--surface-linen)' }}>
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    className="card-img-zoom"
                  />
                  <span 
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      backgroundColor: 'var(--surface-dark-espresso)',
                      color: '#FFFFFF',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '4px',
                      fontSize: '0.68rem',
                      fontWeight: '700',
                      letterSpacing: '0.06em'
                    }}
                  >
                    {card.badge}
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '14px',
                      left: '14px',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      color: 'var(--text-dark-coffee)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Card Content Body */}
                <div style={{ padding: '1.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--surface-linen)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {card.icon}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-dark-coffee)', margin: 0, fontWeight: '600' }}>
                      {card.title}
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-coffee)', opacity: 0.85, lineHeight: 1.6, fontWeight: '400', marginBottom: '1.4rem' }}>
                    {card.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                    {card.bullets.map((b, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: 'var(--text-dark-coffee)' }}>
                        <CheckCircle2 size={15} color="var(--btn-coffee-bean)" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footer Accent Bar */}
              <div style={{ padding: '0.9rem 1.8rem', backgroundColor: 'var(--surface-linen)', borderTop: '1px solid var(--border-light)', fontSize: '0.78rem', color: 'var(--btn-coffee-bean)', fontWeight: '600', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>✦ Certified Quality</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--accent-dusty-taupe)' }}>Wakeel &amp; Sons</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA BUTTON */}
      <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
        <button
          onClick={() => setActivePage('contact')}
          className="btn-primary"
          style={{
            backgroundColor: 'var(--btn-coffee-bean)',
            color: '#FFFFFF',
            fontSize: '1rem',
            padding: '0.95rem 2.2rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            borderRadius: '30px',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <span>Discuss Your Branding Needs</span>
          <ArrowUpRight size={20} />
        </button>
      </div>

      {/* Hover FX Helper */}
      <style>{`
        .project-wrap:hover {
          transform: translateY(-6px);
          border-color: var(--btn-coffee-bean) !important;
          box-shadow: var(--shadow-md) !important;
        }
        .project-wrap:hover .card-img-zoom {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
}
