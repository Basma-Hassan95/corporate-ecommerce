import React, { useState, useEffect, useMemo } from 'react';
import CorporateHeroSection from '../components/CorporateHeroSection';
import InteractiveCustomizationForm from '../components/InteractiveCustomizationForm';
import StatsAndValueProp from '../components/StatsAndValueProp';
import BrandingServicesSection from '../components/BrandingServicesSection';
import TestimonialsAndLogosSection from '../components/TestimonialsAndLogosSection';
import { ArrowRight, Star, BookOpen, Key, Gift, Briefcase, Sparkles, Package } from 'lucide-react';
import { getCMSProducts } from '../utils/cmsStorage';

export default function HomepageView({ setActivePage, setSelectedProduct, openCart, onSelectCategory }) {
  const [products, setProducts] = useState(getCMSProducts());

  useEffect(() => {
    const handleUpdate = () => setProducts(getCMSProducts());
    window.addEventListener('cms_data_updated', handleUpdate);
    return () => window.removeEventListener('cms_data_updated', handleUpdate);
  }, []);

  // Dynamically select multi-category featured products (notebooks, gift sets, keychains, new CMS items)
  const featuredProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    
    // Group products by category
    const categoryGroups = {};
    products.forEach(p => {
      const cat = p.category || 'Other';
      if (!categoryGroups[cat]) categoryGroups[cat] = [];
      categoryGroups[cat].push(p);
    });

    // Interleave items from different categories so homepage showcases high product variety
    const result = [];
    const categories = Object.keys(categoryGroups);

    // Prioritize non-keychain categories first (Corporate Notebooks, Gift Boxes, etc.)
    const sortedCategories = categories.sort((a, b) => {
      if (a === 'Corporate Notebooks') return -1;
      if (b === 'Corporate Notebooks') return 1;
      if (a === 'Corporate Gift Box') return -1;
      if (b === 'Corporate Gift Box') return 1;
      return 0;
    });

    let maxPerCat = 4;
    for (let i = 0; i < maxPerCat; i++) {
      for (const cat of sortedCategories) {
        if (categoryGroups[cat][i] && result.length < 12) {
          result.push(categoryGroups[cat][i]);
        }
      }
    }

    // Fill remaining if less than 8
    if (result.length < 8) {
      products.forEach(p => {
        if (!result.find(r => r.id === p.id) && result.length < 8) {
          result.push(p);
        }
      });
    }

    return result;
  }, [products]);

  // Compute Category Cards Stats & Images for Homepage Showcase
  const categoriesList = useMemo(() => {
    const counts = {};
    const images = {};
    products.forEach(p => {
      const cat = p.category || 'Other';
      counts[cat] = (counts[cat] || 0) + 1;
      if (!images[cat] && p.images && p.images[0]) {
        images[cat] = p.images[0];
      }
    });

    return [
      {
        name: 'Corporate Notebooks',
        displayName: 'Corporate Notebooks & Diaries',
        desc: 'A5 Hardbound Executive Journals with Custom Logo Debossing',
        count: counts['Corporate Notebooks'] || 2,
        image: images['Corporate Notebooks'] || '/products/notebooks/notebook-01-front.jpg',
        icon: BookOpen
      },
      {
        name: 'Leather Keychains',
        displayName: 'Bespoke Leather Keychains',
        desc: 'Full-Grain Bovine Hide & Polished Chrome Clasp Keyrings',
        count: counts['Leather Keychains'] || 11,
        image: images['Leather Keychains'] || '/products/keychains/keychain-01.jpg',
        icon: Key
      },
      {
        name: 'Corporate Gift Box',
        displayName: 'Executive VIP Gift Boxes',
        desc: 'Complete Welcome Kits & Multi-Item Luxury Gift Hampers',
        count: counts['Corporate Gift Box'] || 1,
        image: images['Corporate Gift Box'] || '/products/gift-sets/giftset-02.jpg',
        icon: Gift
      },
      {
        name: 'All',
        displayName: 'Complete Corporate Catalog',
        desc: 'Custom Apparel, Drinkware, Awards, Desk Organizers & Tech',
        count: products.length,
        image: '/products/keychains/keychain-03.jpg',
        icon: Briefcase
      }
    ];
  }, [products]);

  const handleCategoryClick = (catName) => {
    if (onSelectCategory && catName !== 'All') {
      onSelectCategory(catName);
    } else {
      setActivePage('catalog');
    }
  };

  return (
    <div className="homepage-view" style={{ backgroundColor: 'var(--bg-parchment)' }}>
      
      {/* 1. CORPORATE HIGH-CONVERSION MOTION HERO SECTION */}
      <CorporateHeroSection setActivePage={setActivePage} />

      {/* 2. DYNAMIC BENTO STATS & STAGGERED WHY CHOOSE US SHOWCASE */}
      <StatsAndValueProp setActivePage={setActivePage} />

      {/* 3. POPULAR CORPORATE CATEGORIES SHOWCASE GRID */}
      <section style={{ padding: '4.5rem 0 3rem', backgroundColor: 'var(--surface-linen)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: '0.6rem', display: 'inline-block' }}>
                ✦ CURATED CORPORATE COLLECTIONS
              </span>
              <h2 style={{ fontSize: '2.4rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
                Explore Product Categories
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
              <span>Explore Complete Catalog →</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.8rem' }}>
            {categoriesList.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div 
                  key={idx}
                  onClick={() => handleCategoryClick(cat.name)}
                  style={{
                    backgroundColor: 'var(--surface-white)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  className="category-card-hover"
                >
                  <div style={{ position: 'relative', height: '180px', overflow: 'hidden', backgroundColor: 'var(--bg-parchment)' }}>
                    <img 
                      src={cat.image} 
                      alt={cat.displayName} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                      className="cat-card-img"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(22, 18, 11, 0.65) 100%)' }} />
                    <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'rgba(22, 18, 11, 0.8)', color: '#FFFFFF', fontSize: '0.72rem', padding: '0.25rem 0.6rem', borderRadius: '12px', fontWeight: '700', backdropFilter: 'blur(4px)' }}>
                      {cat.count} {cat.count === 1 ? 'Item' : 'Items'}
                    </span>
                  </div>

                  <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9A7824', marginBottom: '0.4rem' }}>
                        <IconComp size={18} />
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Corporate Category
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', margin: '0 0 0.4rem', fontWeight: '600' }}>
                        {cat.displayName}
                      </h3>
                      <p style={{ fontSize: '0.84rem', color: 'var(--accent-dusty-taupe)', margin: 0, lineHeight: 1.4 }}>
                        {cat.desc}
                      </p>
                    </div>

                    <div style={{ marginTop: '1.2rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--btn-coffee-bean)' }}>
                        Browse Collection
                      </span>
                      <ArrowRight size={16} color="var(--btn-coffee-bean)" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURED EXECUTIVE COLLECTION & NEW ARRIVALS */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--bg-parchment)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: '0.6rem', display: 'inline-block' }}>
                ✦ DYNAMIC CATALOG SELECTION
              </span>
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
                Featured Executive Bestsellers &amp; New Additions
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
              <span>View All Products ({products.length}) →</span>
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
                  {product.isBestSeller ? (
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
                  ) : product.id.startsWith('note-') || product.id.startsWith('prod-') ? (
                    <span 
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: '#9A7824',
                        color: '#FFFFFF',
                        fontSize: '0.65rem',
                        fontWeight: '700',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '20px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem'
                      }}
                    >
                      <Sparkles size={11} /> New Arrival
                    </span>
                  ) : null}
                </div>

                <div style={{ padding: '1.2rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--btn-coffee-bean)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>
                    {product.category || product.leatherType}
                  </span>
                  
                  <h3 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', margin: '0.3rem 0 0.5rem', fontWeight: '600', lineHeight: 1.3 }}>
                    {product.name}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.8rem' }}>
                    <div style={{ display: 'flex', color: 'var(--accent-gold)' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dark-coffee)', opacity: 0.7 }}>
                      ({product.reviewsCount || 25})
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.8rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#9A7824', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Quick Quote
                    </span>
                    <span className="badge-gold" style={{ fontSize: '0.7rem' }}>Bulk Available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PROFESSIONAL BRANDING SERVICES UNDER ONE ROOF (GSAP HORIZONTAL GALLERY) */}
      <BrandingServicesSection setActivePage={setActivePage} />

      {/* 6. CORPORATE CLIENT LOGOS & GOOGLE TESTIMONIALS */}
      <TestimonialsAndLogosSection setActivePage={setActivePage} />

      {/* 7. INTERACTIVE 4-STEP PROJECT BRIEF & QUOTE FORM */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--surface-linen)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge-gold" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>
              ✦ GET STARTED
            </span>
            <h2 style={{ fontSize: '2.8rem', fontFamily: 'var(--font-heading)', color: '#9A7824' }}>
              Tell Us What You Want to Craft
            </h2>
            <p style={{ color: 'var(--accent-dusty-taupe)', fontSize: '1rem', maxWidth: '640px', margin: '0.5rem auto 0' }}>
              Share your project requirements and get a custom quote along with free digital mockups within 24 hours.
            </p>
          </div>

          <InteractiveCustomizationForm />
        </div>
      </section>

      <style>{`
        .category-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md) !important;
        }
        .category-card-hover:hover .cat-card-img {
          transform: scale(1.08);
        }
      `}</style>

    </div>
  );
}
