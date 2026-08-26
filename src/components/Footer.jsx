import React from 'react';
import { ShieldCheck, Truck, Sparkles, RefreshCw, Lock } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer style={{ backgroundColor: 'var(--surface-dark-espresso)', color: 'var(--bg-parchment)', paddingTop: '4rem', paddingBottom: '2rem', borderTop: '2px solid var(--btn-coffee-bean)' }}>
      <div className="container">
        
        {/* Brand Value Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(250, 246, 240, 0.12)' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <ShieldCheck size={28} color="var(--accent-gold)" />
            <div>
              <h4 style={{ color: 'var(--bg-parchment)', fontSize: '1rem', marginBottom: '0.3rem' }}>100% Full-Grain Leather</h4>
              <p style={{ fontSize: '0.82rem', color: 'rgba(250, 246, 240, 0.7)' }}>Pure vegetable-tanned hides that age with magnificent patina.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <Sparkles size={28} color="var(--accent-gold)" />
            <div>
              <h4 style={{ color: 'var(--bg-parchment)', fontSize: '1rem', marginBottom: '0.3rem' }}>Custom Engraving Included</h4>
              <p style={{ fontSize: '0.82rem', color: 'rgba(250, 246, 240, 0.7)' }}>Personalized laser monogram or full name at no extra cost.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <Truck size={28} color="var(--accent-gold)" />
            <div>
              <h4 style={{ color: 'var(--bg-parchment)', fontSize: '1rem', marginBottom: '0.3rem' }}>Express Worldwide Delivery</h4>
              <p style={{ fontSize: '0.82rem', color: 'rgba(250, 246, 240, 0.7)' }}>Dispatched within 24-48 hours in luxury gift boxes.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <RefreshCw size={28} color="var(--accent-gold)" />
            <div>
              <h4 style={{ color: 'var(--bg-parchment)', fontSize: '1rem', marginBottom: '0.3rem' }}>Lifetime Guarantee</h4>
              <p style={{ fontSize: '0.82rem', color: 'rgba(250, 246, 240, 0.7)' }}>Lifetime stitching warranty on every handcrafted wallet.</p>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', margin: '3rem 0' }}>
          
          {/* Brand Info */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', fontSize: '1.4rem', letterSpacing: '0.04em', marginBottom: '0.8rem' }}>
              WAKEEL &amp; SONS
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'rgba(250, 246, 240, 0.75)', lineHeight: 1.7, marginBottom: '1.2rem' }}>
              Crafting timeless personalized leather goods since 1978. Every stitch is a commitment to heritage, elegance, and durability.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', fontSize: '0.8rem', color: 'var(--accent-gold-soft)' }}>
              <Lock size={14} /> 256-Bit SSL Encrypted Checkout
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-subheading)', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bg-parchment)', marginBottom: '1rem' }}>
              Bespoke Catalog
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li><button onClick={() => setActivePage('shop')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.75)', cursor: 'pointer' }}>Bifold Wallets</button></li>
              <li><button onClick={() => setActivePage('shop')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.75)', cursor: 'pointer' }}>Slim Cardholders</button></li>
              <li><button onClick={() => setActivePage('shop')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.75)', cursor: 'pointer' }}>Executive Trifolds</button></li>
              <li><button onClick={() => setActivePage('shop')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.75)', cursor: 'pointer' }}>Passport Travel Wallets</button></li>
              <li><button onClick={() => setActivePage('shop')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.75)', cursor: 'pointer' }}>Solid Brass Money Clips</button></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-subheading)', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bg-parchment)', marginBottom: '1rem' }}>
              Client Care &amp; Policies
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li><button onClick={() => setActivePage('about')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.75)', cursor: 'pointer' }}>Our Atelier Legacy</button></li>
              <li><button onClick={() => setActivePage('contact')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.75)', cursor: 'pointer' }}>Contact &amp; Concierge</button></li>
              <li><button onClick={() => setActivePage('refund')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.75)', cursor: 'pointer' }}>Refund &amp; Return Policy</button></li>
              <li><button onClick={() => setActivePage('shipping')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.75)', cursor: 'pointer' }}>Shipping &amp; Delivery Days</button></li>
              <li><button onClick={() => setActivePage('contact')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.75)', cursor: 'pointer' }}>WhatsApp Live Support</button></li>
            </ul>
          </div>

          {/* Private Atelier Newsletter */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-subheading)', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bg-parchment)', marginBottom: '1rem' }}>
              The Gentlemen's Guild
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'rgba(250, 246, 240, 0.7)', marginBottom: '1rem' }}>
              Subscribe to receive exclusive vault drops, bespoke leather care guides, and VIP previews.
            </p>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <input 
                type="email" 
                placeholder="Enter your email address"
                style={{
                  backgroundColor: 'rgba(250, 246, 240, 0.08)',
                  border: '1px solid rgba(250, 246, 240, 0.2)',
                  color: 'var(--bg-parchment)',
                  padding: '0.6rem 0.8rem',
                  fontSize: '0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  outline: 'none',
                  flex: 1
                }}
              />
              <button className="btn-gold" style={{ padding: '0.6rem 1rem', fontSize: '0.8rem' }}>
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(250, 246, 240, 0.1)', paddingTop: '1.8rem', textAlign: 'center', fontSize: '0.78rem', color: 'rgba(250, 246, 240, 0.5)' }}>
          &copy; {new Date().getFullYear()} Wakeel &amp; Sons Fine Leathercraft. All Rights Reserved. Customized leather goods are precision laser-engraved.
        </div>
      </div>
    </footer>
  );
}
