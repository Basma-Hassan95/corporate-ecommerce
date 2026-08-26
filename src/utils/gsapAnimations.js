import gsap from 'gsap';

// GSAP Hero Timeline Reveal
export const initHeroGSAP = (containerRef) => {
  if (!containerRef || !containerRef.current) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

    tl.fromTo('.gsap-badge', 
      { opacity: 0, y: -20, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.8 }
    )
    .fromTo('.gsap-title', 
      { opacity: 0, y: 40, skewY: 2 }, 
      { opacity: 1, y: 0, skewY: 0, duration: 1.1 }, 
      '-=0.5'
    )
    .fromTo('.gsap-desc', 
      { opacity: 0, y: 25 }, 
      { opacity: 1, y: 0, duration: 0.9 }, 
      '-=0.7'
    )
    .fromTo('.gsap-btn', 
      { opacity: 0, y: 20, scale: 0.95 }, 
      { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.8 }, 
      '-=0.6'
    );
  }, containerRef);

  return () => ctx.revert();
};

// GSAP Stagger Reveal for Product Cards
export const initCardsGSAP = (cardsContainerRef) => {
  if (!cardsContainerRef || !cardsContainerRef.current) return;

  const ctx = gsap.context(() => {
    gsap.fromTo('.card-luxury', 
      { opacity: 0, y: 50, scale: 0.96 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        stagger: 0.12, 
        duration: 0.9, 
        ease: 'power3.out',
        clearProps: 'all'
      }
    );
  }, cardsContainerRef);

  return () => ctx.revert();
};

// GSAP Magnetic Hover Effect for Buttons
export const initMagneticGSAP = (buttonRef) => {
  if (!buttonRef || !buttonRef.current) return;
  const btn = buttonRef.current;

  const handleMouseMove = (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1.2, 0.4)'
    });
  };

  btn.addEventListener('mousemove', handleMouseMove);
  btn.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    btn.removeEventListener('mousemove', handleMouseMove);
    btn.removeEventListener('mouseleave', handleMouseLeave);
  };
};
