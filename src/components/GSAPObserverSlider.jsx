import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Observer from 'gsap/Observer';
import { ArrowRight } from 'lucide-react';
import { BRAND_IMAGES } from '../data/products';

export default function GSAPObserverSlider({ setActivePage, setSelectedProduct }) {
  const containerRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isStudioOpen, setIsStudioOpen] = useState(false);

  const sectionsData = [
    {
      id: 1,
      badge: 'BESPOKE CORPORATE COLLECTION',
      title: 'Crafted for Generations.',
      subtitle: 'Engraved with Precision.',
      description: 'Handmade from 100% full-grain vegetable-tanned leather. Personalized with laser precision, built to age with a magnificent patina.',
      image: BRAND_IMAGES.heroBanner,
      ctaText: 'Explore Corporate Catalog',
      action: () => setActivePage('catalog')
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
      description: 'Laser debossed directly into top-grain hides before final hand assembly. Choose between deep laser burnish or precision foil stamping.',
      image: BRAND_IMAGES.engravingProcess,
      ctaText: 'Open Customizer Studio',
      action: () => setIsStudioOpen(true)
    },
    {
      id: 4,
      badge: 'EXECUTIVE LEATHER GOODS',
      title: 'Built for a Lifetime.',
      subtitle: 'Patina that grows richer with age.',
      description: 'Every piece in our collection is crafted without plastic or synthetic fillers. 100% full-grain leather guaranteed for life.',
      image: BRAND_IMAGES.aboutWorkshop,
      ctaText: 'View Master Catalog',
      action: () => setActivePage('catalog')
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (Observer && typeof gsap.registerPlugin === 'function') {
      try {
        gsap.registerPlugin(Observer);
      } catch (e) {
        console.warn("GSAP Observer register plugin warning:", e);
      }
    }

    const sections = container.querySelectorAll('.gsap-section');
    const images = container.querySelectorAll('.bg-image');
    const headings = container.querySelectorAll('.section-heading');
    const outerWrappers = container.querySelectorAll('.outer');
    const innerWrappers = container.querySelectorAll('.inner');

    let currentIndex = -1;
    const wrap = gsap.utils.wrap(0, sections.length);
    let animating = false;

    function gotoSection(index, direction) {
      if (!sections || sections.length === 0) return;
      index = wrap(index);
      animating = true;
      
      let fromTop = direction === -1,
          dFactor = fromTop ? -1 : 1,
          tl = gsap.timeline({
            defaults: { duration: 1.1, ease: "power2.inOut" },
            onComplete: () => {
              animating = false;
            }
          });

      if (currentIndex >= 0 && sections[currentIndex]) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }

      if (sections[index]) {
        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
        
        tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
            yPercent: i => i ? -100 * dFactor : 100 * dFactor
          }, { 
            yPercent: 0 
          }, 0)
          .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
          .fromTo(headings[index], { 
              autoAlpha: 0, 
              yPercent: 80 * dFactor
          }, {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.8,
              ease: "power2.out"
            }, 0.2);
      }

      currentIndex = index;
      setCurrentIdx(index);
    }

    let observerInstance = null;
    try {
      gsap.set(outerWrappers, { yPercent: 100 });
      gsap.set(innerWrappers, { yPercent: -100 });

      if (Observer) {
        observerInstance = Observer.create({
          target: container,
          type: "wheel,touch,pointer",
          wheelSpeed: -1,
          onDown: () => !animating && gotoSection(currentIndex - 1, -1),
          onUp: () => !animating && gotoSection(currentIndex + 1, 1),
          tolerance: 15,
          preventDefault: false
        });
      }

      gotoSection(0, 1);
    } catch (err) {
      console.warn("GSAP setup warning:", err);
      if (sections[0]) gsap.set(sections[0], { autoAlpha: 1, zIndex: 1 });
    }

    const autoTimer = setInterval(() => {
      if (!animating) {
        gotoSection(currentIndex + 1, 1);
      }
    }, 5000);

    return () => {
      clearInterval(autoTimer);
      if (observerInstance && typeof observerInstance.kill === 'function') observerInstance.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '85vh',
        minHeight: '580px',
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
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: idx === 0 ? 1 : 0
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
                  padding: '3rem 1.5rem'
                }}
              >
                <div className="container section-heading" style={{ maxWidth: '850px' }}>
                  <span className="badge-taupe" style={{ marginBottom: '1.2rem', display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.15)', color: '#FAF6F0' }}>
                    ✦ {sec.badge}
                  </span>

                  <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.6rem',
                    lineHeight: 1.15,
                    color: '#FAF6F0',
                    marginBottom: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {sec.title} <br />
                    <span style={{ color: 'var(--btn-coffee-bean)', fontStyle: 'italic' }}>{sec.subtitle}</span>
                  </h1>

                  <p style={{
                    fontSize: '1.1rem',
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(250, 246, 240, 0.9)',
                    marginBottom: '2.2rem',
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
                      className="btn-primary"
                      style={{ backgroundColor: 'var(--btn-coffee-bean)', padding: '1rem 2.4rem', fontSize: '0.95rem' }}
                    >
                      {sec.ctaText} <ArrowRight size={18} />
                    </button>
                    <button 
                      onClick={() => setActivePage('catalog')}
                      className="btn-secondary"
                      style={{ backgroundColor: 'rgba(250, 246, 240, 0.12)', color: '#FAF6F0', borderColor: 'rgba(250, 246, 240, 0.4)', padding: '1rem 2.4rem', fontSize: '0.95rem' }}
                    >
                      Browse Corporate Catalog
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

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
            style={{ position: 'absolute', top: '24px', right: '24px', color: '#FFF', borderColor: 'var(--accent-dusty-taupe)' }}
          >
            ✕ Return to Landing
          </button>
          
          <span className="badge-taupe" style={{ marginBottom: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', color: '#FAF6F0' }}>✦ MONOGRAM STUDIO</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#FAF6F0', marginBottom: '1rem' }}>
            Full-Screen Personalization Workspace
          </h2>
          <p style={{ maxWidth: '600px', textAlign: 'center', color: 'rgba(250,246,240,0.85)', marginBottom: '2rem' }}>
            Select any bespoke product from our catalog to launch live laser monogram debossing and custom metallic foil stamping.
          </p>
          <button 
            onClick={() => { setIsStudioOpen(false); setActivePage('catalog'); }}
            className="btn-primary"
            style={{ backgroundColor: 'var(--btn-coffee-bean)', padding: '1rem 2.5rem' }}
          >
            Open Bespoke Catalog <ArrowRight size={18} />
          </button>
        </div>
      )}

    </div>
  );
}
