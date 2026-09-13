import React, { useState, useEffect, useRef } from 'react';
import { Award, ShieldCheck, Sparkles, CheckCircle2, Play, Users, Globe, TrendingUp, ArrowRight, Star, Mail, Phone, MapPin, X } from 'lucide-react';
import { BRAND_IMAGES } from '../data/products';

// Animated Number Counter (triggers when visible)
function AnimatedCounter({ targetNumber, suffix = '', isVisible = false }) {
  const [count, setCount] = useState(0);
  const animRef = useRef(false);

  useEffect(() => {
    if (!isVisible || animRef.current) return;
    animRef.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easedProgress * targetNumber);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(updateCount);
  }, [targetNumber, isVisible]);

  const displayVal = Number.isInteger(targetNumber)
    ? Math.floor(count).toLocaleString()
    : count.toFixed(1);

  return <span>{displayVal}{suffix}</span>;
}

export default function AboutView({ setActivePage = () => {} }) {
  const [activeTab, setActiveTab] = useState('mission');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "Custom Leather Corporate Gifts & Bespoke Executive Goods | Wakeel & Sons";

    // IntersectionObserver to animate elements ONLY when user scrolls down to them
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');

          // Trigger stats counter if stats section comes into view
          if (entry.target.classList.contains('about-stats-container')) {
            setStatsVisible(true);
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px', // Triggers when element enters bottom of screen
      threshold: 0.15
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = containerRef.current?.querySelectorAll('.scroll-reveal');

    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const TEAM_MEMBERS = [
    {
      name: "Muhammad Wakeel",
      role: "Founder & Master Craftsman",
      experience: "48+ Yrs Experience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Wahaj Wakeel",
      role: "Head of Corporate Production",
      experience: "22+ Yrs Experience",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Oman Wakeel",
      role: "Senior Product & Brand Director",
      experience: "15+ Yrs Experience",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const PARTNER_LOGOS = [
    "ENGRO CORP", "HABIB BANK", "SHELL GLOBAL", "SIEMENS", "UNILEVER", "STANDARD CHARTERED"
  ];

  return (
    <div ref={containerRef} className="about-page-view" style={{ backgroundColor: 'var(--bg-parchment)', paddingBottom: '5rem', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION & VIDEO BANNER */}
      <section style={{ padding: '4.5rem 0 3.5rem', backgroundColor: 'var(--bg-parchment)' }}>
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', textAlign: 'center' }}>
          
          <div className="scroll-reveal reveal-up">
            <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>
              ✦ HERITAGE CRAFTSMANSHIP &amp; CORPORATE SOLUTIONS
            </span>

            <h1 
              style={{ 
                fontSize: 'clamp(2.2rem, 4.8vw, 3.4rem)', 
                fontFamily: 'var(--font-heading)', 
                color: '#9A7824', 
                lineHeight: 1.15,
                maxWidth: '960px',
                margin: '0 auto 1.2rem',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}
            >
              Master Leather Artisans &amp; Global Corporate Gifting Specialists
            </h1>

            <p 
              style={{ 
                fontSize: '1.05rem', 
                color: 'var(--accent-dusty-taupe)', 
                maxWidth: '780px', 
                margin: '0 auto 3rem', 
                lineHeight: 1.7,
                fontWeight: '400'
              }}
            >
              We craft timeless, bespoke executive leather goods and premium corporate merchandise that elevate your brand identity. Combining decades of artisanal heritage with modern design, we deliver enduring quality for industry leaders worldwide.
            </p>
          </div>

          {/* WORKSHOP VIDEO HERO BANNER */}
          <div 
            style={{ 
              borderRadius: '24px', 
              overflow: 'hidden', 
              height: '420px', 
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
              marginBottom: '3.5rem'
            }}
            className="about-hero-video-box scroll-reveal reveal-up"
          >
            <img 
              src={BRAND_IMAGES.craftsmanship} 
              alt="Wakeel and Sons Craftsmen Workshop" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            
            {/* Dark Overlay & Play Button */}
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(22, 18, 11, 0.45)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <button
                onClick={() => setShowVideoModal(true)}
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  backgroundColor: '#9A7824',
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 30px rgba(154, 120, 36, 0.5)',
                  transition: 'transform 0.3s ease',
                  marginBottom: '1rem'
                }}
                className="play-btn-pulse"
                title="Watch Our Master Craftsmen at Work (Est. 1976)"
              >
                <Play size={28} fill="#FFFFFF" style={{ marginLeft: '4px' }} />
              </button>

              <span style={{ color: '#FFFFFF', fontFamily: 'var(--font-heading)', fontSize: '1.4rem', letterSpacing: '0.05em' }}>
                Watch Our Master Craftsmen at Work (Est. 1976)
              </span>
            </div>
          </div>

          {/* 3 VALUE PROP PILLARS BELOW HERO (SCROLL REVEAL STAGGERED) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.8rem', textAlign: 'left' }} className="about-3col-grid">
            
            <div 
              className="scroll-reveal reveal-up pillar-card-1 value-pillar-hover-card"
              style={{ 
                backgroundColor: '#FFFFFF', 
                padding: '2rem 1.8rem', 
                borderRadius: '20px', 
                border: '1px solid var(--border-light)', 
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer'
              }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(154, 120, 36, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem', transition: 'transform 0.3s ease' }} className="pillar-icon-box">
                <Award size={24} color="#9A7824" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: '#9A7824', margin: '0 0 0.6rem', fontWeight: '600' }}>
                Bespoke Leather Crafting
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-dark-coffee)', opacity: 0.82, lineHeight: 1.65, margin: 0 }}>
                Custom-designed executive leather accessories, luggage, and stationery tailored to your exact brand specifications.
              </p>
            </div>

            <div 
              className="scroll-reveal reveal-up pillar-card-2 value-pillar-hover-card"
              style={{ 
                backgroundColor: '#FFFFFF', 
                padding: '2rem 1.8rem', 
                borderRadius: '20px', 
                border: '1px solid var(--border-light)', 
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer'
              }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(154, 120, 36, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem', transition: 'transform 0.3s ease' }} className="pillar-icon-box">
                <TrendingUp size={24} color="#9A7824" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: '#9A7824', margin: '0 0 0.6rem', fontWeight: '600' }}>
                Corporate Gifting Advisory
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-dark-coffee)', opacity: 0.82, lineHeight: 1.65, margin: 0 }}>
                End-to-end strategic gifting solutions—from ideation and prototyping to bulk production and executive packaging.
              </p>
            </div>

            <div 
              className="scroll-reveal reveal-up pillar-card-3 value-pillar-hover-card"
              style={{ 
                backgroundColor: '#FFFFFF', 
                padding: '2rem 1.8rem', 
                borderRadius: '20px', 
                border: '1px solid var(--border-light)', 
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer'
              }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(154, 120, 36, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem', transition: 'transform 0.3s ease' }} className="pillar-icon-box">
                <ShieldCheck size={24} color="#9A7824" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: '#9A7824', margin: '0 0 0.6rem', fontWeight: '600' }}>
                Master Artisan Quality
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-dark-coffee)', opacity: 0.82, lineHeight: 1.65, margin: 0 }}>
                Handcrafted using ethically sourced, premium top-grain leather built to endure and impress for years.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 2. WHO WE ARE & HERITAGE STORY (SLIDES IN FROM LEFT & RIGHT ON SCROLL) */}
      <section style={{ padding: '5.5rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3.5rem', alignItems: 'center' }} className="about-2col-story">
            
            {/* Left Details (SLIDES IN FROM LEFT ON SCROLL) */}
            <div style={{ gridColumn: 'span 6' }} className="scroll-reveal reveal-left">
              <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.12em', color: '#9A7824', textTransform: 'uppercase', marginBottom: '0.6rem', display: 'block' }}>
                ✦ OUR STORY &amp; CRAFTSMANSHIP
              </span>

              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--text-dark-coffee)', lineHeight: 1.2, marginBottom: '1.2rem', fontWeight: '600' }}>
                Crafting Distinction: Decades of Leather Mastery &amp; Corporate Partnership
              </h2>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-coffee)', opacity: 0.85, lineHeight: 1.7, marginBottom: '1.8rem' }}>
                Founded on an uncompromising respect for traditional leatherworking, our workshop bridges authentic hand-craftsmanship with modern corporate scale. We partner with multinational corporations, luxury brands, and executive teams to transform functional items into memorable brand statements. Every stitch, cut, and embossed logo reflects our obsession with precision, durability, and elegance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(154, 120, 36, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={20} color="#9A7824" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#9A7824', margin: '0 0 0.2rem', fontWeight: '600' }}>
                      48+ Years of Proven Heritage
                    </h4>
                    <p style={{ fontSize: '0.84rem', color: 'var(--accent-dusty-taupe)', margin: 0, lineHeight: 1.5 }}>
                      Deep-rooted expertise in full-grain leather selection, precision tanning, and time-honored bench craftsmanship.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(154, 120, 36, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Sparkles size={20} color="#9A7824" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#9A7824', margin: '0 0 0.2rem', fontWeight: '600' }}>
                      Scalable B2B Fulfillment
                    </h4>
                    <p style={{ fontSize: '0.84rem', color: 'var(--accent-dusty-taupe)', margin: 0, lineHeight: 1.5 }}>
                      Seamless supply-chain execution capable of handling high-volume custom orders without compromising hand-finished detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Frame (SLIDES IN FROM RIGHT ON SCROLL) */}
            <div style={{ gridColumn: 'span 6', position: 'relative' }} className="scroll-reveal reveal-right">
              <div style={{ borderRadius: '24px', overflow: 'hidden', height: '440px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)', transition: 'transform 0.4s ease' }} className="story-image-hover">
                <img 
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000" 
                  alt="Wakeel & Sons Master Craftsmanship" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                />
              </div>

              {/* Floating Experience Badge */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  backgroundColor: '#9A7824',
                  color: '#FFFFFF',
                  padding: '1.5rem 2rem',
                  borderRadius: '16px',
                  boxShadow: '0 12px 30px rgba(154, 120, 36, 0.4)',
                  transition: 'transform 0.3s ease'
                }}
                className="floating-badge-hover"
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: '700', lineHeight: 1 }}>
                  48+
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.3rem' }}>
                  Years of Master Excellence
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. HIGH-IMPACT ANIMATED STATS & MISSION TABS (SCROLL REVEAL) */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--surface-linen)' }}>
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          {/* STATS COUNTER ROW */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '4.5rem', textAlign: 'center' }} className="about-stats-grid about-stats-container scroll-reveal reveal-up">
            
            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem 1.2rem', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '700', color: '#9A7824', lineHeight: 1, marginBottom: '0.4rem' }}>
                <AnimatedCounter targetNumber={500000} suffix="+" isVisible={statsVisible} />
              </div>
              <div style={{ fontSize: '0.86rem', color: 'var(--accent-dusty-taupe)', fontWeight: '600' }}>
                Bespoke Leather Goods Delivered
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem 1.2rem', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '700', color: '#9A7824', lineHeight: 1, marginBottom: '0.4rem' }}>
                <AnimatedCounter targetNumber={1200} suffix="+" isVisible={statsVisible} />
              </div>
              <div style={{ fontSize: '0.86rem', color: 'var(--accent-dusty-taupe)', fontWeight: '600' }}>
                Corporate &amp; Luxury Clients Globally
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem 1.2rem', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '700', color: '#9A7824', lineHeight: 1, marginBottom: '0.4rem' }}>
                <AnimatedCounter targetNumber={45} suffix="+" isVisible={statsVisible} />
              </div>
              <div style={{ fontSize: '0.86rem', color: 'var(--accent-dusty-taupe)', fontWeight: '600' }}>
                Countries Worldwide Logistics &amp; Distribution
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem 1.2rem', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '700', color: '#9A7824', lineHeight: 1, marginBottom: '0.4rem' }}>
                <AnimatedCounter targetNumber={48} suffix="+" isVisible={statsVisible} />
              </div>
              <div style={{ fontSize: '0.86rem', color: 'var(--accent-dusty-taupe)', fontWeight: '600' }}>
                Years Unbroken Heritage of Excellence
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem 1.2rem', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '700', color: '#9A7824', lineHeight: 1, marginBottom: '0.4rem' }}>
                <AnimatedCounter targetNumber={99.2} suffix="%" isVisible={statsVisible} />
              </div>
              <div style={{ fontSize: '0.86rem', color: 'var(--accent-dusty-taupe)', fontWeight: '600' }}>
                Client Retention &amp; Satisfaction
              </div>
            </div>

          </div>

          {/* INTERACTIVE TABBED MISSION BOX */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', border: '1px solid var(--border-light)', padding: '3rem', boxShadow: 'var(--shadow-sm)' }} className="scroll-reveal reveal-up">
            
            {/* TABS HEADER */}
            <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActiveTab('mission')}
                style={{
                  backgroundColor: activeTab === 'mission' ? '#9A7824' : 'transparent',
                  color: activeTab === 'mission' ? '#FFFFFF' : 'var(--text-dark-coffee)',
                  padding: '0.6rem 1.6rem',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Our Mission
              </button>

              <button
                onClick={() => setActiveTab('vision')}
                style={{
                  backgroundColor: activeTab === 'vision' ? '#9A7824' : 'transparent',
                  color: activeTab === 'vision' ? '#FFFFFF' : 'var(--text-dark-coffee)',
                  padding: '0.6rem 1.6rem',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Our Vision
              </button>

              <button
                onClick={() => setActiveTab('values')}
                style={{
                  backgroundColor: activeTab === 'values' ? '#9A7824' : 'transparent',
                  color: activeTab === 'values' ? '#FFFFFF' : 'var(--text-dark-coffee)',
                  padding: '0.6rem 1.6rem',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Core Values
              </button>
            </div>

            {/* TAB CONTENT */}
            <div>
              {activeTab === 'mission' && (
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#9A7824', marginBottom: '0.8rem', fontWeight: '600' }}>
                    Engineered for Executive Impact &amp; Lasting Impressions
                  </h3>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-dark-coffee)', opacity: 0.85, lineHeight: 1.7, maxWidth: '820px', margin: 0 }}>
                    To empower companies with distinguished, artisan-grade leather products that leave a lasting mark on clients, partners, and employees, setting a higher benchmark for corporate gifting.
                  </p>
                </div>
              )}

              {activeTab === 'vision' && (
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#9A7824', marginBottom: '0.8rem', fontWeight: '600' }}>
                    The World’s Premier Bespoke Corporate Workshop
                  </h3>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-dark-coffee)', opacity: 0.85, lineHeight: 1.7, maxWidth: '820px', margin: 0 }}>
                    To remain the global reference point for sustainable, handcrafted leather goods by integrating ethical sourcing, timeless aesthetics, and dependable corporate execution.
                  </p>
                </div>
              )}

              {activeTab === 'values' && (
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#9A7824', marginBottom: '0.8rem', fontWeight: '600' }}>
                    Uncompromising Standards in Material, Method, &amp; Relationship
                  </h3>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-dark-coffee)', opacity: 0.85, lineHeight: 1.7, maxWidth: '820px', margin: 0 }}>
                    We operate on five unshakeable pillars: Artisanal Integrity (100% genuine full-grain leather), Micro-Precision (obsessive attention to detail), Client Partnerships (dedicated SLA support), Sustainable Sourcing (ethically processed tanneries), and Enduring Quality (heirloom durability).
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 5. MEET THE PROFESSIONALS (TEAM SECTION ON SCROLL) */}
      <section style={{ padding: '5.5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', textAlign: 'center' }}>
          
          <div className="scroll-reveal reveal-up">
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.6rem', color: 'var(--text-dark-coffee)', marginBottom: '0.6rem', fontWeight: '600' }}>
              Meet the Craftsmen &amp; Strategic Advisors
            </h2>

            <p style={{ fontSize: '0.98rem', color: 'var(--accent-dusty-taupe)', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
              A passionate blend of master leather benchmen, industrial designers, and corporate procurement consultants.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.8rem' }} className="about-team-grid">
            {TEAM_MEMBERS.map((member, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'var(--surface-linen)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer'
                }}
                className={`scroll-reveal reveal-up team-card-${idx + 1} team-card-hover`}
              >
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.4rem 1.2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: '#9A7824', margin: 0, fontWeight: '600' }}>
                    {member.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. HIGH-CONVERSION CTA BANNER */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#9A7824', color: '#FFFFFF', textAlign: 'center' }} className="scroll-reveal reveal-up">
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.6rem', color: '#FFFFFF', marginBottom: '1rem', fontWeight: '600' }}>
            Ready to Elevate Your Brand's Corporate Identity?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Partner with our master craftsmen to design custom executive leather gifts, luxury board-member accessories, and bespoke corporate merchandise.
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActivePage('contact')}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#9A7824',
                fontSize: '0.95rem',
                fontWeight: '700',
                padding: '0.85rem 2.2rem',
                borderRadius: '30px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease'
              }}
              className="btn-primary"
            >
              <span>Request a Corporate Consultation</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => setActivePage('shop')}
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: '700',
                padding: '0.85rem 2.2rem',
                borderRadius: '30px',
                border: '2px solid #FFFFFF',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                transition: 'all 0.3s ease'
              }}
            >
              <span>Explore Catalog</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. WHAT CLIENTS ARE SAYING */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--bg-parchment)' }}>
        <div className="container" style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
          <div className="scroll-reveal reveal-up">
            <span className="badge-gold" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>
              ✦ CLIENT EXPERIENCES
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--text-dark-coffee)', marginBottom: '3rem', fontWeight: '600' }}>
              Trusted by Industry Leaders Worldwide
            </h2>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '3rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)', textAlign: 'left', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '2rem', alignItems: 'center' }} className="about-testi-card scroll-reveal reveal-up">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" 
              alt="Executive Client Review" 
              style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #9A7824' }} 
            />

            <div>
              <div style={{ display: 'flex', color: '#9A7824', marginBottom: '0.8rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-coffee)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.2rem' }}>
                "Wakeel &amp; Sons transformed our annual executive summit gifting. Their bespoke leather tech portfolios and precision logo debossing were met with universal acclaim by our board of directors. The attention to detail and packaging was second to none."
              </p>

              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#9A7824', margin: 0, fontWeight: '700' }}>
                  Marcus Vance
                </h4>
                <span style={{ fontSize: '0.84rem', color: 'var(--accent-dusty-taupe)', fontWeight: '600' }}>
                  VP of Procurement, Global Assets Group
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. GLOBAL CORPORATE PARTNERS LOGO GRID */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
        <div className="container scroll-reveal reveal-up" style={{ maxWidth: '1180px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.12em', color: 'var(--accent-dusty-taupe)', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>
            TRUSTED BY LEADING CORPORATE BRANDS GLOBALLY
          </span>

          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', opacity: 0.7 }}>
            {PARTNER_LOGOS.map((logo, idx) => (
              <span key={idx} style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: '#9A7824', fontWeight: '700', letterSpacing: '0.1em' }}>
                ✦ {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {showVideoModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '800px', backgroundColor: '#000', borderRadius: '16px', overflow: 'hidden' }}>
            <button 
              onClick={() => setShowVideoModal(false)}
              style={{ position: 'absolute', top: '15px', right: '15px', backgroundColor: 'rgba(255,255,255,0.2)', border: 'none', color: '#FFF', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={20} />
            </button>
            <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#FFF' }}>
              <Play size={48} color="#9A7824" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#9A7824', marginBottom: '0.5rem' }}>
                Wakeel &amp; Sons Craftsmanship Documentary
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#CCC', maxWidth: '500px', margin: '0 auto' }}>
                Experience 48+ years of vegetable tanning, saddle stitching, and micro-laser debossing inside our Karachi workshop.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SCROLL REVEAL CSS SYSTEM */}
      <style>{`
        /* Base hidden state */
        .scroll-reveal {
          opacity: 0;
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        /* 1. Reveal Up */
        .reveal-up {
          transform: translateY(50px) scale(0.96);
        }
        .reveal-up.is-visible {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }

        /* 2. Reveal Left */
        .reveal-left {
          transform: translateX(-80px);
        }
        .reveal-left.is-visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        /* 3. Reveal Right */
        .reveal-right {
          transform: translateX(80px);
        }
        .reveal-right.is-visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        /* Stagger Delays for Pillars */
        .pillar-card-1.is-visible { transition-delay: 0.1s; }
        .pillar-card-2.is-visible { transition-delay: 0.25s; }
        .pillar-card-3.is-visible { transition-delay: 0.4s; }

        /* Stagger Delays for Team */
        .team-card-1.is-visible { transition-delay: 0.1s; }
        .team-card-2.is-visible { transition-delay: 0.2s; }
        .team-card-3.is-visible { transition-delay: 0.3s; }
        .team-card-4.is-visible { transition-delay: 0.4s; }

        /* Hover Motions */
        .play-btn-pulse:hover {
          transform: scale(1.1);
        }
        .team-card-hover {
          transition: transform 0.4s ease, box-shadow 0.4s ease !important;
        }
        .team-card-hover:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
        }
        .value-pillar-hover-card {
          transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease !important;
        }
        .value-pillar-hover-card:hover {
          transform: translateY(-10px) scale(1.02) !important;
          border-color: #9A7824 !important;
          box-shadow: 0 20px 45px rgba(154, 120, 36, 0.2) !important;
        }
        .value-pillar-hover-card:hover .pillar-icon-box {
          transform: scale(1.15) rotate(5deg);
        }
        .story-image-hover:hover img {
          transform: scale(1.05);
        }
        .floating-badge-hover:hover {
          transform: scale(1.06) translateY(-4px);
        }

        @media (max-width: 960px) {
          .about-3col-grid, .about-stats-grid, .about-team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .about-2col-story {
            grid-template-columns: 1fr !important;
          }
          .story-left-slide, .story-right-slide {
            grid-column: span 12 !important;
          }
          .about-testi-card {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
        }
        @media (max-width: 600px) {
          .about-3col-grid, .about-stats-grid, .about-team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </div>
  );
}
