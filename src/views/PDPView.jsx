import React, { useState } from 'react';
import { Star, ShieldCheck, Truck, Sparkles, Check, ArrowLeft } from 'lucide-react';
import EngravingCustomizer from '../components/EngravingCustomizer';

export default function PDPView({ product, addToCart, setActivePage, openCart }) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [engraving, setEngraving] = useState({
    text: '',
    font: 'serif',
    finish: 'gold'
  });
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity, engraving);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      openCart();
    }, 400);
  };

  return (
    <div className="animate-fade-in" style={{ padding: '3rem 0', backgroundColor: 'var(--bg-parchment)' }}>
      <div className="container">
        
        {/* Back Link */}
        <button 
          onClick={() => setActivePage('shop')} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dark-coffee)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', marginBottom: '2rem', fontWeight: '500' }}
        >
          <ArrowLeft size={16} /> Back to Bespoke Catalog
        </button>

        {/* Two Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'start' }} className="pdp-layout">
          
          {/* Left Column: High-Res Photography Gallery */}
          <div>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-light)', backgroundColor: 'var(--surface-white)', height: '480px', marginBottom: '1rem', position: 'relative' }}>
              <img 
                src={activeImage} 
                alt={product.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <span className="badge-gold" style={{ position: 'absolute', top: '16px', left: '16px' }}>
                PURE FULL-GRAIN LEATHER
              </span>
            </div>

            {/* Thumbnail Navigation */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    border: activeImage === img ? '2px solid var(--btn-coffee-bean)' : '1px solid var(--border-light)',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Details & Customizer Engine */}
          <div>
            
            {/* Header info */}
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-dusty-taupe)', fontWeight: '600' }}>
              {product.category} &bull; {product.leatherType}
            </span>
            
            <h1 style={{ fontSize: '2.4rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', marginTop: '0.2rem', marginBottom: '0.6rem' }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', color: 'var(--accent-gold)' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent-gold)" />)}
              </div>
              <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{product.rating}</span>
              <span style={{ color: 'var(--accent-dusty-taupe)', fontSize: '0.85rem' }}>({product.reviewsCount} Reviews)</span>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-dark-coffee)' }}>${product.price}</span>
              <span style={{ fontSize: '1.1rem', color: 'var(--accent-dusty-taupe)', textDecoration: 'line-through' }}>${product.originalPrice}</span>
              <span className="badge-emerald">Save ${(product.originalPrice - product.price).toFixed(2)}</span>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-coffee)', lineHeight: 1.7, marginBottom: '1.8rem' }}>
              {product.description}
            </p>

            {/* Features Bullet points */}
            <div style={{ marginBottom: '1.8rem' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dark-coffee)', marginBottom: '0.8rem' }}>
                Craftsmanship Highlights
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                {product.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
                    <Check size={16} color="var(--btn-coffee-bean)" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* LIVE ENGRAVING INPUT ENGINE */}
            <EngravingCustomizer engraving={engraving} setEngraving={setEngraving} />

            {/* Quantity & ADD TO CART CTA */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--accent-dusty-taupe)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--surface-white)' }}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: '0.75rem 1rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>-</button>
                <span style={{ padding: '0 0.8rem', fontWeight: '700' }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} style={{ padding: '0.75rem 1rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>+</button>
              </div>

              {/* Primary Coffee Bean CTA Button */}
              <button 
                onClick={handleAddToCart}
                className="btn-primary"
                style={{
                  flex: 1,
                  padding: '1rem 1.8rem',
                  fontSize: '1.05rem',
                  backgroundColor: addedAnimation ? 'var(--text-dark-coffee)' : 'var(--btn-coffee-bean)'
                }}
              >
                {addedAnimation ? 'Adding to Bespoke Bag...' : `Add to Bag • $${(product.price * quantity).toFixed(2)}`}
              </button>
            </div>

            {/* Micro Trust Seals */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '1.2rem', borderTop: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--text-dark-coffee)' }}>
                <Truck size={18} color="var(--btn-coffee-bean)" />
                <span>Complimentary Express Shipping over $100</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--text-dark-coffee)' }}>
                <ShieldCheck size={18} color="var(--btn-coffee-bean)" />
                <span>Lifetime Stitch Guarantee</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .pdp-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
