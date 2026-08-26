import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { BRAND_IMAGES } from '../data/products';

gsap.registerPlugin(Observer);

export default function GSAPObserverSlider({ setActivePage, setSelectedProduct }) {
  const containerRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isStudioOpen, setIsStudioOpen] = useState(false);

  const sectionsData = [
    {
      id: 1,
      badge: 'ATELIER BESPOKE COLLECTION',
      title: 'Crafted for Generations.',
      subtitle: 'Engraved with Precision.',
      description: 'Handmade from 100% full-grain vegetable-tanned leather. Personalized with laser precision, built to age with a magnificent patina.',
      image: BRAND_IMAGES.heroBanner,
      ctaText: 'Explore Bespoke Collection',
      action: () => setActivePage('shop')
    },
    {
      id: 2,
      badge: 'HERITAGE & CRAFTSMANSHIP',
      title: '5-Stage Saddle Stitching.',
      subtitle: 'Zero Synthetic Fillers.',
      description: 'Each hide is organically vegetable tanned with tree barks, hand-cut, and saddle-stitched with waxed linen thread for indestructible durability.',
      image: BRAND_IMAGES.craftsmanship,
      ctaText: 'Discover The Legacy',
      action: () => setActivePage('about')
    },
    {
      id: 3,
      badge: 'PERSONALIZATION ENGINE',
      title: 'The Art of Monogramming.',
      subtitle: 'Your Name permanently debossed.',
      description: 'Laser debossed directly into top-grain hides before final hand assembly. Choose between deep laser burnish or 24K gold foil stamping.',
      image: BRAND_IMAGES.engravingProcess,
      ctaText: 'Open Customizer Studio',
      action: () => setIsStudioOpen(true)
    },
    {
      id: 4,
      badge: 'EXECUTIVE LEATHER GOODS',
      title: 'Built for a Lifetime.',
      subtitle: 'Patina that grows richer with age.',
      description: 'Every wallet in our atelier is crafted without plastic or synthetic fillers. 100% full-grain leather guaranteed for life.',
      image: BRAND_IMAGES.aboutWorkshop,
      ctaText: 'View All Designs',
      action: () => setActivePage('shop')
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Exact CodePen GSAP Selector Query
    const sections = container.querySelectorAll('.gsap-section');
    const images = container.querySelectorAll('.bg-image');
    const headings = container.querySelectorAll('.section-heading');
    const outerWrappers = container.querySelectorAll('.outer');
    const innerWrappers = container.querySelectorAll('.inner');

    let currentIndex = -1;
    const wrap = gsap.utils.wrap(0, sections.length);
    let animating = false;

    // Initial setup from exact CodePen script
    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index); // make sure it's valid
      animating = true;
      
      let fromTop = direction === -1,
          dFactor = fromTop ? -1 : 1,
          tl = gsap.timeline({
            defaults: { duration: 1.25, ease: "power1.inOut" },
            onComplete: () => {
              animating = false;
            }
          });

      if (currentIndex >= 0) {
        // The first time this function runs, current is -1
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      
      tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
          yPercent: i => i ? -100 * dFactor : 100 * dFactor
        }, { 
          yPercent: 0 
        }, 0)
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(headings[index], { 
            autoAlpha: 0, 
            yPercent: 120 * dFactor
        }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2.out"
          }, 0.2);

      currentIndex = index;
      setCurrentIdx(index);
    }

    // Exact CodePen Observer Instance
    const observer = Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true
    });

    // Run first slide animation immediately as in CodePen script
    gotoSection(0, 1);

    // Auto-advance timer (every 5 seconds)
    const autoTimer = setInterval(() => {
      if (!animating) {
        gotoSection(currentIndex + 1, 1);
      }
    }, 5000);

    // Click handler for indicators & buttons
    window.gsapGotoSection = (idx, dir) => gotoSection(idx, dir);

    return () => {
      clearInterval(autoTimer);
      observer.kill();
      delete window.gsapGotoSection;
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#211514'
      }}
    >
      
      {/* SECTIONS LIST */}
      {sectionsData.map((sec, idx) => (
        <section
          key={sec.id}
          className="gsap-section"
          style={{
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
            visibility: 'hidden'
          }}
        >
          <div className="outer" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <div className="inner" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
              <div 
                className="bg-image"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `linear-gradient(180deg, rgba(33, 21, 20, 0.55) 0%, rgba(33, 21, 20, 0.88) 100%), url(${sec.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 45%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '4rem 1.5rem'
                }}
              >
                <div className="container section-heading" style={{ maxWidth: '850px' }}>
                  <span className="badge-gold" style={{ marginBottom: '1.2rem', display: 'inline-block' }}>
                    ✦ {sec.badge}
                  </span>

                  <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '4rem',
                    lineHeight: 1.15,
                    color: '#FAF6F0',
                    marginBottom: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {sec.title} <br />
                    <span style={{ color: 'var(--accent-gold)' }}>{sec.subtitle}</span>
                  </h1>

                  <p style={{
                    fontSize: '1.15rem',
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(250, 246, 240, 0.9)',
                    marginBottom: '2.4rem',
                    fontWeight: '300',
                    maxWidth: '680px',
                    marginInline: 'auto',
                    lineHeight: 1.7
                  }}>
                    {sec.description}
                  </p>

                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button 
                      onClick={sec.action}
                      className="btn-gold"
                      style={{ padding: '1.1rem 2.5rem', fontSize: '1rem' }}
                    >
                      {sec.ctaText} <ArrowRight size={18} />
                    </button>
                    <button 
                      onClick={() => setActivePage('shop')}
                      className="btn-secondary"
                      style={{ backgroundColor: 'rgba(250, 246, 240, 0.12)', color: '#FAF6F0', borderColor: 'rgba(250, 246, 240, 0.4)', padding: '1.1rem 2.5rem', fontSize: '1rem' }}
                    >
                      Browse Wallet Catalog
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CLICKABLE NAVIGATION DOTS & ARROWS */}
      <div style={{
        position: 'fixed',
        right: '28px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.8rem',
        zIndex: 100
      }}>
        <button
          onClick={() => window.gsapGotoSection && window.gsapGotoSection(currentIdx - 1, -1)}
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'rgba(33, 21, 20, 0.85)',
            border: '1px solid var(--accent-gold-soft)',
            color: 'var(--accent-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          title="Previous Slide"
        >
          <ChevronUp size={20} />
        </button>

        {sectionsData.map((_, i) => (
          <button
            key={i}
            onClick={() => window.gsapGotoSection && window.gsapGotoSection(i, i > currentIdx ? 1 : -1)}
            style={{
              width: currentIdx === i ? '12px' : '8px',
              height: currentIdx === i ? '26px' : '8px',
              borderRadius: '4px',
              backgroundColor: currentIdx === i ? 'var(--accent-gold)' : 'rgba(255,255,255,0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              padding: 0
            }}
          />
        ))}

        <button
          onClick={() => window.gsapGotoSection && window.gsapGotoSection(currentIdx + 1, 1)}
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'rgba(33, 21, 20, 0.85)',
            border: '1px solid var(--accent-gold-soft)',
            color: 'var(--accent-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          title="Next Slide"
        >
          <ChevronDown size={20} />
        </button>
      </div>

      {/* CUSTOMIZER STUDIO MODAL */}
      {isStudioOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'var(--surface-dark-espresso)',
          zIndex: 500,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          color: '#FFF'
        }}>
          <button 
            onClick={() => setIsStudioOpen(false)}
            className="btn-secondary"
            style={{ position: 'absolute', top: '24px', right: '24px', color: '#FFF', borderColor: 'var(--accent-gold)' }}
          >
            ✕ Return to Landing
          </button>
          
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>✦ ATELIER MONOGRAM STUDIO</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
            Full-Screen Personalization Workspace
          </h2>
          <p style={{ maxWidth: '600px', textAlign: 'center', color: 'rgba(250,246,240,0.85)', marginBottom: '2rem' }}>
            Select any bespoke wallet from our catalog to launch live laser monogram debossing and custom 24K gold foil stamping.
          </p>
          <button 
            onClick={() => { setIsStudioOpen(false); setActivePage('shop'); }}
            className="btn-gold"
            style={{ padding: '1rem 2.5rem' }}
          >
            Open Bespoke Catalog <ArrowRight size={18} />
          </button>
        </div>
      )}

    </div>
  );
}
