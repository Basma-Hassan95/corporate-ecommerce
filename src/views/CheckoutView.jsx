import React, { useState } from 'react';
import { Lock, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, CreditCard, Banknote } from 'lucide-react';

export default function CheckoutView({ cart, setActivePage, clearCart }) {
  const [step, setStep] = useState(1);
  const [isOrdered, setIsOrdered] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = subtotal >= 100 ? 0 : 9.95;
  const total = subtotal + shippingCost;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="animate-fade-in" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-parchment)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', backgroundColor: 'var(--surface-white)', padding: '3.5rem 2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
          <CheckCircle2 size={64} color="var(--accent-emerald)" style={{ marginBottom: '1.2rem' }} />
          <h1 style={{ fontSize: '2.4rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
            Order Confirmed &amp; Dispatched!
          </h1>
          <p style={{ color: 'var(--accent-dusty-taupe)', margin: '0.8rem 0 1.5rem', fontSize: '1rem', lineHeight: 1.6 }}>
            Thank you for choosing Wakeel &amp; Sons. Your personalized laser engraving request has been received by our master craftsman.
          </p>
          <div className="badge-gold" style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem', marginBottom: '2rem', display: 'inline-block' }}>
            ORDER ID: #WS-{Math.floor(100000 + Math.random() * 900000)}
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dark-coffee)', marginBottom: '2rem' }}>
            A confirmation SMS &amp; tracking code has been dispatched to your phone number. Estimated delivery: 2-4 business days.
          </p>
          <button onClick={() => setActivePage('home')} className="btn-primary">
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-parchment)' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        
        {/* Page Title */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <img 
              src="/logo.png" 
              alt="Wakeel & Sons Logo" 
              style={{ height: '68px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} 
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--accent-gold-soft)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <Lock size={15} /> 256-Bit Encrypted Checkout
          </div>
          <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', marginTop: '0.3rem' }}>
            Wakeel &amp; Sons Checkout
          </h1>
        </div>

        {/* 3 Step Accordion + Order Summary Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2.5rem' }} className="checkout-grid">
          
          {/* Left Form Steps */}
          <div>
            
            {/* STEP 1: Shipping Address */}
            <div style={{ backgroundColor: 'var(--surface-white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--btn-coffee-bean)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '0.85rem' }}>
                  1
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark-coffee)' }}>Shipping &amp; Delivery Information</h3>
              </div>

              <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>First Name</label>
                  <input type="text" placeholder="Ali" style={{ width: '100%', padding: '0.65rem 0.8rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>Last Name</label>
                  <input type="text" placeholder="Wakeel" style={{ width: '100%', padding: '0.65rem 0.8rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>Street Address</label>
                  <input type="text" placeholder="House #, Street name, Block / Area" style={{ width: '100%', padding: '0.65rem 0.8rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>City</label>
                  <input type="text" placeholder="Lahore / Karachi / Islamabad" style={{ width: '100%', padding: '0.65rem 0.8rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>Mobile Phone (for Delivery SMS)</label>
                  <input type="tel" placeholder="+92 300 1234567" style={{ width: '100%', padding: '0.65rem 0.8rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
              </form>
            </div>

            {/* STEP 2: PERSONALIZATION AUDIT (Crucial for Customized Leather) */}
            <div style={{ backgroundColor: 'var(--surface-linen)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px dashed var(--btn-coffee-bean)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--btn-coffee-bean)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '0.85rem' }}>
                  2
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark-coffee)' }}>Laser Monogram Audit</h3>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-dark-coffee)', opacity: 0.85, marginBottom: '1rem' }}>
                Please audit your requested custom initials. Once engraved in full-grain leather, changes cannot be made.
              </p>

              {cart.map((item, i) => (
                <div key={i} style={{ backgroundColor: 'var(--surface-white)', padding: '0.8rem 1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{item.name}</span>
                  <span className="badge-gold">
                    Engraving: {item.engraving?.text ? `"${item.engraving.text.toUpperCase()}"` : 'NONE'}
                  </span>
                </div>
              ))}
            </div>

            {/* STEP 3: Payment Selection */}
            <div style={{ backgroundColor: 'var(--surface-white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--btn-coffee-bean)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '0.85rem' }}>
                  3
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark-coffee)' }}>Payment Method</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  style={{
                    padding: '1rem',
                    border: paymentMethod === 'card' ? '2px solid var(--btn-coffee-bean)' : '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: paymentMethod === 'card' ? 'var(--surface-linen)' : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <CreditCard size={24} color="var(--btn-coffee-bean)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Credit / Debit Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  style={{
                    padding: '1rem',
                    border: paymentMethod === 'cod' ? '2px solid var(--btn-coffee-bean)' : '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: paymentMethod === 'cod' ? 'var(--surface-linen)' : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Banknote size={24} color="var(--btn-coffee-bean)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Cash on Delivery (COD)</span>
                </button>
              </div>

              {paymentMethod === 'card' ? (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>Card Number</label>
                    <input type="text" placeholder="4000 1234 5678 9010" style={{ width: '100%', padding: '0.65rem 0.8rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" style={{ width: '100%', padding: '0.65rem 0.8rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>CVC Security Code</label>
                    <input type="text" placeholder="123" style={{ width: '100%', padding: '0.65rem 0.8rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                  </div>
                </div>
              ) : (
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dark-coffee)', backgroundColor: 'var(--surface-linen)', padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                  Pay cash upon inspection at your doorstep. SMS verification will be sent prior to courier dispatch.
                </p>
              )}

              <button 
                onClick={handlePlaceOrder}
                className="btn-primary"
                style={{ width: '100%', padding: '1.1rem', fontSize: '1.1rem', marginTop: '1.8rem' }}
              >
                Complete Order • ${total.toFixed(2)}
              </button>
            </div>

          </div>

          {/* Right Summary Card in Soft Linen Cream (#F4EFE6) */}
          <div>
            <div style={{ backgroundColor: 'var(--surface-linen)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--accent-dusty-taupe)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--text-dark-coffee)', marginBottom: '1rem', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border-light)' }}>
                Bespoke Bag Summary
              </h3>

              {cart.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem' }}>
                  <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                  <div style={{ flex: 1, fontSize: '0.82rem' }}>
                    <h5 style={{ color: 'var(--text-dark-coffee)', fontWeight: '600' }}>{item.name}</h5>
                    <p style={{ color: 'var(--accent-dusty-taupe)' }}>Qty: {item.quantity}</p>
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#9A7824', textTransform: 'uppercase' }}>Bespoke Quote</span>
                </div>
              ))}

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Selected Items</span>
                  <span style={{ fontWeight: '700', color: '#9A7824' }}>{cart.length} Item(s)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Delivery SLA</span>
                  <span style={{ fontWeight: '600', color: 'var(--accent-emerald)' }}>FREE Scheduled Dispatch</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: '700', borderTop: '1px solid var(--border-light)', paddingTop: '0.8rem', marginTop: '0.4rem', color: 'var(--text-dark-coffee)' }}>
                  <span>Total Payable</span>
                  <span style={{ color: '#9A7824' }}>Wholesale Quote Request</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 800px) {
          .checkout-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
