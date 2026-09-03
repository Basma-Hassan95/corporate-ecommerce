import React from 'react';
import { ShoppingBag, ArrowRight, Trash2, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { BRAND_IMAGES } from '../data/products';

export default function CartView({ cart, updateQuantity, removeItem, setActivePage }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 100;
  const neededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="animate-fade-in" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-parchment)' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.8rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
            Your Bespoke Shopping Bag
          </h1>
          <p style={{ color: 'var(--accent-dusty-taupe)', fontSize: '0.95rem' }}>
            Review your custom laser-engraved wallet selections before secure checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          <div style={{ backgroundColor: 'var(--surface-white)', padding: '4rem 2rem', textAlign: 'center', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <ShoppingBag size={56} color="var(--accent-dusty-taupe)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark-coffee)', marginBottom: '0.5rem' }}>Your bag is currently empty</h3>
            <p style={{ color: 'var(--accent-dusty-taupe)', marginBottom: '2rem' }}>Discover handcrafted full-grain leather wallets created for a lifetime of patina.</p>
            <button onClick={() => setActivePage('shop')} className="btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
              Explore Wallet Catalog
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2.5rem' }} className="cart-page-grid">
            
            {/* Left: Cart Items List */}
            <div>
              
              {/* Free Shipping Alert Banner */}
              <div style={{ backgroundColor: 'var(--surface-linen)', padding: '1rem 1.4rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', marginBottom: '1.8rem' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-dark-coffee)', margin: 0 }}>
                  {subtotal >= freeShippingThreshold ? '🎉 You unlocked Complimentary Express Shipping!' : `Add $${neededForFreeShipping.toFixed(2)} more to qualify for Free Shipping!`}
                </p>
              </div>

              {/* Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {cart.map((item, idx) => (
                  <div key={idx} style={{ backgroundColor: 'var(--surface-white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }} 
                    />
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.15rem', color: 'var(--text-dark-coffee)', marginBottom: '0.3rem' }}>{item.name}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--accent-dusty-taupe)', marginBottom: '0.6rem' }}>{item.color} &bull; {item.leatherType}</p>
                      
                      {/* Personalization Summary Badge */}
                      {item.engraving?.text && (
                        <div className="badge-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', marginBottom: '0.6rem' }}>
                          <Sparkles size={12} /> Engraved: "{item.engraving.text.toUpperCase()}" ({item.engraving.font} / {item.engraving.finish})
                        </div>
                      )}

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.6rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
                          <button onClick={() => updateQuantity(idx, item.quantity - 1)} style={{ padding: '0.3rem 0.7rem', background: 'none', border: 'none', cursor: 'pointer' }}>-</button>
                          <span style={{ padding: '0 0.6rem', fontWeight: '700', fontSize: '0.9rem' }}>{item.quantity}</span>
                          <button onClick={() => updateQuantity(idx, item.quantity + 1)} style={{ padding: '0.3rem 0.7rem', background: 'none', border: 'none', cursor: 'pointer' }}>+</button>
                        </div>

                        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#9A7824', textTransform: 'uppercase' }}>Bespoke Quote</span>

                        <button onClick={() => removeItem(idx)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#990000' }}>
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Leather Care Balm Cross-Sell */}
              <div style={{ backgroundColor: 'var(--surface-linen)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <img src={BRAND_IMAGES.careBalm} alt="Care Balm" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark-coffee)' }}>Natural Beeswax Leather Conditioner</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent-dusty-taupe)' }}>Nourish and protect your wallet for decades of weather-proof shine.</p>
                </div>
                <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}>
                  + Add Care Balm
                </button>
              </div>

            </div>

            {/* Right: Order Summary Sidebar */}
            <div>
              <div style={{ backgroundColor: 'var(--surface-white)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', position: 'sticky', top: '100px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--text-dark-coffee)', marginBottom: '1.2rem', paddingBottom: '0.8rem', borderBottom: '1px solid var(--border-light)' }}>
                  Specification Summary
                </h3>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', marginBottom: '0.8rem' }}>
                  <span style={{ color: 'var(--accent-dusty-taupe)' }}>Selected Items</span>
                  <span style={{ fontWeight: '600', color: '#9A7824' }}>{cart.length} Item(s)</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', marginBottom: '0.8rem' }}>
                  <span style={{ color: 'var(--accent-dusty-taupe)' }}>Laser Monogramming</span>
                  <span className="badge-gold">COMPLIMENTARY</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', marginBottom: '1.2rem' }}>
                  <span style={{ color: 'var(--accent-dusty-taupe)' }}>Digital Proofing</span>
                  <span className="badge-emerald">FREE 48-HR PROOF</span>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-dark-coffee)' }}>
                  <span>Pricing Mode</span>
                  <span style={{ color: '#9A7824' }}>Wholesale Quote</span>
                </div>

                <button 
                  onClick={() => setActivePage('checkout')} 
                  className="btn-primary" 
                  style={{ width: '100%', padding: '1rem', fontSize: '1rem', marginBottom: '1rem' }}
                >
                  Proceed to Checkout <ArrowRight size={18} />
                </button>

                <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--accent-dusty-taupe)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                  <ShieldCheck size={14} color="var(--btn-coffee-bean)" /> 30-Day Guarantee &bull; SSL Secured
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 800px) {
          .cart-page-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
