import React from 'react';
import { Star, ShieldCheck, Sparkles, Truck, ArrowRight, Award, CheckCircle } from 'lucide-react';
import { BRAND_IMAGES, PRODUCTS } from '../data/products';
import GSAPObserverSlider from '../components/GSAPObserverSlider';

export default function HomepageView({ setActivePage, setSelectedProduct }) {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <div className="animate-fade-in">
      
      {/* SECTION 1: GSAP OBSERVER CONTINUOUS SWIPE SLIDER */}
      <GSAPObserverSlider 
        setActivePage={setActivePage} 
        setSelectedProduct={setSelectedProduct} 
      />

      {/* SECTION 2: BRAND TRUST BADGES */}
      <section style={{ backgroundColor: 'var(--surface-linen)', borderBottom: '1px solid var(--border-light)', padding: '2.8rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Award size={36} color="var(--btn-coffee-bean)" />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-dark-coffee)' }}>Pure Full-Grain Hides</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--accent-dusty-taupe)' }}>Zero synthetic fillers or PU coating</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Sparkles size={36} color="var(--btn-coffee-bean)" />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-dark-coffee)' }}>Free Monogram Engraving</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--accent-dusty-taupe)' }}>Laser debossed with your name</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ShieldCheck size={36} color="var(--btn-coffee-bean)" />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-dark-coffee)' }}>Lifetime Stitch Warranty</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--accent-dusty-taupe)' }}>Saddle hand-stitched durability</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Truck size={36} color="var(--btn-coffee-bean)" />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-dark-coffee)' }}>Fast Dispatch</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--accent-dusty-taupe)' }}>Ready in 24-48 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED COLLECTIONS GRID */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--bg-parchment)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-dusty-taupe)', fontWeight: '600' }}>
              HANDCRAFTED PERFECTION
            </span>
            <h2 style={{ fontSize: '2.6rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', marginTop: '0.4rem' }}>
              Featured Leather Works
            </h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--btn-coffee-bean)', margin: '1rem auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem' }}>
            {featured.map((product) => (
              <div 
                key={product.id}
                className="card-luxury"
                onClick={() => { setSelectedProduct(product); setActivePage('pdp'); }}
                style={{ cursor: 'pointer' }}
              >
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  />
                  {product.isBestSeller && (
                    <div style={{ position: 'absolute', top: '12px', left: '12px' }} className="badge-gold">
                      BEST SELLER
                    </div>
                  )}
                  {product.isCustomizable && (
                    <div style={{ position: 'absolute', bottom: '12px', right: '12px' }} className="badge-taupe">
                      CUSTOM ENGRAVABLE
                    </div>
                  )}
                </div>
                <div style={{ padding: '1.4rem' }}>
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-dusty-taupe)', fontWeight: '600' }}>
                    {product.category}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-dark-coffee)', margin: '0.3rem 0 0.5rem' }}>
                    {product.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', marginBottom: '0.8rem' }}>
                    <div style={{ display: 'flex', color: 'var(--accent-gold)' }}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--accent-gold)" />)}
                    </div>
                    <span style={{ fontWeight: '600', color: 'var(--text-dark-coffee)' }}>{product.rating}</span>
                    <span style={{ color: 'var(--accent-dusty-taupe)' }}>({product.reviewsCount})</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border-light)' }}>
                    <div>
                      <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-dark-coffee)' }}>${product.price}</span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--accent-dusty-taupe)', textDecoration: 'line-through', marginLeft: '0.5rem' }}>${product.originalPrice}</span>
                    </div>
                    <button className="btn-secondary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}>
                      Customize
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button onClick={() => setActivePage('shop')} className="btn-primary" style={{ padding: '1rem 2.8rem' }}>
              View All Bespoke Wallet Designs
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: ARTISAN ENGRAVING SPOTLIGHT */}
      <section style={{ backgroundColor: 'var(--surface-dark-espresso)', color: 'var(--bg-parchment)', padding: '5.5rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>
              PRECISION CRAFTSMANSHIP
            </span>
            <h2 style={{ fontSize: '2.8rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', lineHeight: 1.2, marginBottom: '1.2rem' }}>
              The Art of Laser Monogramming
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(250, 246, 240, 0.85)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              At Wakeel &amp; Sons, personalization is debossed directly into top-grain hides before final assembly. Choose between deep laser burnish or 24K gold foil stamping.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
                <CheckCircle size={18} color="var(--accent-gold)" /> Permanent laser debossing that never fades
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
                <CheckCircle size={18} color="var(--accent-gold)" /> Live preview of your exact custom text on leather before ordering
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
                <CheckCircle size={18} color="var(--accent-gold)" /> Perfect gift for groomsmen, anniversaries &amp; corporate legacy
              </li>
            </ul>
            <button onClick={() => setActivePage('shop')} className="btn-gold">
              Personalize Your Wallet Now
            </button>
          </div>
          <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '2px solid var(--accent-gold-soft)' }}>
            <img 
              src={BRAND_IMAGES.engravingProcess} 
              alt="Laser Engraving Craftsmanship" 
              style={{ width: '100%', height: '420px', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: CUSTOMER REVIEWS & TESTIMONIALS */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--surface-linen)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
              Words from Discerning Gentlemen
            </h2>
            <p style={{ color: 'var(--accent-dusty-taupe)', fontSize: '0.95rem' }}>Over 5,000+ wallets delivered worldwide with 4.9/5 star ratings.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: 'var(--surface-white)', padding: '2.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', color: 'var(--accent-gold)', marginBottom: '0.8rem' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent-gold)" />)}
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-dark-coffee)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                "The leather smell when I opened the magnetic gift box was incredible. The laser engraved initials on my Bifold look like an aristocrat's seal. Truly top-tier."
              </p>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-dark-coffee)' }}>Tariq H. &bull; Verified Buyer</h4>
            </div>

            <div style={{ backgroundColor: 'var(--surface-white)', padding: '2.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', color: 'var(--accent-gold)', marginBottom: '0.8rem' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent-gold)" />)}
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-dark-coffee)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                "Ordered 6 engraved cardholders for my groomsmen. Wakeel &amp; Sons delivered in 3 days. The stitching quality is indestructible."
              </p>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-dark-coffee)' }}>Usman Ali &bull; Verified Buyer</h4>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
