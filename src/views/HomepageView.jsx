import React from 'react';
import CorporateHeroSection from '../components/CorporateHeroSection';
import EngravingCustomizer from '../components/EngravingCustomizer';
import StatsAndValueProp from '../components/StatsAndValueProp';
import BrandingServicesSection from '../components/BrandingServicesSection';
import TestimonialsAndLogosSection from '../components/TestimonialsAndLogosSection';
import { ArrowRight, Star } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function HomepageView({ setActivePage, setSelectedProduct, openCart, onSelectCategory }) {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="homepage-view" style={{ backgroundColor: 'var(--bg-parchment)' }}>
      
      {/* 1. CORPORATE HIGH-CONVERSION MOTION HERO SECTION */}
      <CorporateHeroSection setActivePage={setActivePage} />

      {/* 2. DYNAMIC BENTO STATS & STAGGERED WHY CHOOSE US SHOWCASE */}
      <StatsAndValueProp setActivePage={setActivePage} />

      {/* 3. FEATURED EXECUTIVE COLLECTION */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--bg-parchment)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                ✦ CURATED SELECTION
              </span>
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
                Featured Executive Pieces
              </h2>
            </div>

            <button 
              onClick={() => setActivePage('catalog')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--btn-coffee-bean)',
                fontFamily: 'var(--font-body)',
                fontWeight: '700',
                fontSize: '0.95rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span>View All Catalog Items</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  setActivePage('pdp');
                }}
                className="product-card"
                style={{
                  backgroundColor: 'var(--surface-white)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'relative', paddingTop: '100%', overflow: 'hidden', backgroundColor: 'var(--surface-linen)' }}>
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  {product.isBestSeller && (
                    <span 
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'var(--text-dark-coffee)',
                        color: '#FFFFFF',
                        fontSize: '0.65rem',
                        fontWeight: '700',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '20px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      Bestseller
                    </span>
                  )}
                </div>

                <div style={{ padding: '1.2rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--btn-coffee-bean)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>
                    {product.leatherType || product.category}
                  </span>
                  
                  <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', margin: '0.3rem 0 0.5rem', fontWeight: '600' }}>
                    {product.name}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.8rem' }}>
                    <div style={{ display: 'flex', color: 'var(--accent-gold)' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dark-coffee)', opacity: 0.7 }}>
                      ({product.reviewsCount})
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.8rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-dark-coffee)', fontFamily: 'var(--font-heading)' }}>
                      ${product.price}
                    </span>
                    <span className="badge-gold" style={{ fontSize: '0.7rem' }}>Custom Engraved</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PROFESSIONAL BRANDING SERVICES UNDER ONE ROOF (GSAP HORIZONTAL GALLERY) */}
      <BrandingServicesSection setActivePage={setActivePage} />

      {/* 5. CORPORATE CLIENT LOGOS & GOOGLE TESTIMONIALS */}
      <TestimonialsAndLogosSection setActivePage={setActivePage} />

      {/* 6. INTERACTIVE ENGRAVING CUSTOMIZER SHOWCASE */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--surface-linen)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge-gold" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>
              ✦ LIVE MONOGRAM ENGINE
            </span>
            <h2 style={{ fontSize: '2.6rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
              Personalize Your Leather Piece
            </h2>
            <p style={{ color: 'var(--text-dark-coffee)', opacity: 0.85, maxWidth: '600px', margin: '0.5rem auto 0' }}>
              Preview how your name or initials look permanently debossed into full-grain hide.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <EngravingCustomizer />
          </div>
        </div>
      </section>

    </div>
  );
}
