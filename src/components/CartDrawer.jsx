import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function CartDrawer({ isOpen, onClose, cart, updateQuantity, removeItem, setActivePage }) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 100;
  const progressPercent = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', justifyContent: 'flex-end' }}>
      
      {/* Dark Overlay */}
      <div 
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(33, 21, 20, 0.6)', backdropFilter: 'blur(3px)' }}
      />

      {/* Cart Panel */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '460px',
        backgroundColor: 'var(--bg-parchment)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-8px 0 32px rgba(62, 37, 34, 0.25)',
        zIndex: 210,
        overflowY: 'auto'
      }}>
        
        {/* Header */}
        <div style={{ padding: '1.4rem 1.5rem', borderBottom: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'var(--surface-linen)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={20} color="var(--btn-coffee-bean)" />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--text-dark-coffee)' }}>Your Bespoke Bag ({cart.length})</h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dark-coffee)' }}>
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div style={{ padding: '1rem 1.5rem', backgroundColor: 'var(--surface-white)', borderBottom: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--text-dark-coffee)' }}>
            <span>
              {subtotal >= freeShippingThreshold ? '🎉 You unlocked Complimentary Express Shipping!' : `Add $${(freeShippingThreshold - subtotal).toFixed(2)} more for Free Delivery`}
            </span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--surface-linen)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: 'var(--btn-coffee-bean)', transition: 'width 0.3s ease' }} />
          </div>
        </div>

        {/* Cart Item List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <ShoppingBag size={48} color="var(--accent-dusty-taupe)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Your shopping bag is empty</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-dusty-taupe)', marginBottom: '1.5rem' }}>Discover handcrafted full-grain leather wallets created for a lifetime.</p>
              <button 
                onClick={() => { onClose(); setActivePage('shop'); }}
                className="btn-primary"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {cart.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', paddingBottom: '1.2rem', borderBottom: '1px solid var(--border-light)' }}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }} 
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-dark-coffee)', marginBottom: '0.2rem' }}>{item.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--accent-dusty-taupe)', marginBottom: '0.3rem' }}>{item.color} &bull; {item.leatherType}</p>
                    
                    {/* Custom Engraving Details Badge */}
                    {item.engraving?.text && (
                      <div className="badge-gold" style={{ display: 'inline-block', fontSize: '0.7rem', marginBottom: '0.5rem' }}>
                        Engraved: "{item.engraving.text.toUpperCase()}" ({item.engraving.font})
                      </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--surface-white)' }}>
                        <button onClick={() => updateQuantity(idx, item.quantity - 1)} style={{ padding: '0.2rem 0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>-</button>
                        <span style={{ padding: '0 0.5rem', fontSize: '0.85rem', fontWeight: '600' }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(idx, item.quantity + 1)} style={{ padding: '0.2rem 0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>+</button>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <span style={{ fontWeight: '700', fontSize: '0.82rem', color: '#9A7824', textTransform: 'uppercase' }}>Bespoke Quote</span>
                        <button onClick={() => removeItem(idx)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#990000' }}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {cart.length > 0 && (
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--surface-white)', borderTop: '1px solid var(--border-light)' }}>
            
            {/* Subtotal */}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', fontWeight: '700', color: 'var(--text-dark-coffee)', marginBottom: '1rem' }}>
              <span>Selected Products</span>
              <span style={{ color: '#9A7824' }}>{cart.length} Item(s) Selected</span>
            </div>

            <p style={{ fontSize: '0.75rem', color: 'var(--accent-dusty-taupe)', marginBottom: '1rem', textAlign: 'center' }}>
              Taxes and shipping calculated at checkout. Personalized items dispatches within 24-48 hours.
            </p>

            <button 
              onClick={() => {
                const cartSummary = cart.map((i, idx) => `${idx + 1}. *${i.name}* (Qty: ${i.quantity})`).join('\n');
                const waText = `*BESPOKE BAG QUOTE REQUEST - WAKEEL & SONS*\n\n` +
                  `*SELECTED MERCHANDISE:*\n${cartSummary}\n\n` +
                  `Please share wholesale price & delivery timeline for these items.`;
                window.open(`https://wa.me/923402695130?text=${encodeURIComponent(waText)}`, '_blank');
              }}
              style={{
                width: '100%',
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: '700',
                padding: '0.85rem 1rem',
                borderRadius: '30px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '0.8rem',
                boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)'
              }}
            >
              <WhatsAppIcon size={20} color="#FFFFFF" />
              <span>Request Quote via WhatsApp</span>
            </button>

            <button 
              onClick={() => { onClose(); setActivePage('checkout'); }}
              className="btn-primary" 
              style={{ width: '100%', padding: '0.85rem 1rem', fontSize: '0.95rem' }}
            >
              Proceed to Specification Form <ArrowRight size={18} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
