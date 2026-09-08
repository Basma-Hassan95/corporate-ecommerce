import React from 'react';
import { Lock, MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

export default function Footer({ setActivePage = () => {}, onSelectCategory = () => {} }) {
  const handleCategoryClick = (catName) => {
    if (typeof onSelectCategory === 'function') {
      onSelectCategory(catName);
    }
    setActivePage('catalog');
  };

  return (
    <footer 
      style={{ 
        backgroundColor: '#9A7824', 
        color: '#FFFFFF', 
        paddingTop: '4.5rem', 
        paddingBottom: '2.5rem', 
        borderTop: '2px solid #80631C',
        boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.08)'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Footer Navigation Columns */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '3rem', 
            marginBottom: '3.5rem' 
          }}
          className="footer-grid"
        >
          
          {/* 1. Brand Info */}
          <div>
            <h3 style={{ 
              fontFamily: 'var(--font-heading)', 
              color: '#FFFFFF', 
              fontSize: '1.6rem', 
              letterSpacing: '0.06em', 
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              WAKEEL &amp; SONS
            </h3>
            <p style={{ 
              fontSize: '0.9rem', 
              color: 'rgba(255, 255, 255, 0.9)', 
              lineHeight: 1.7, 
              marginBottom: '1.4rem',
              fontWeight: '400'
            }}>
              Crafting timeless personalized executive leather goods &amp; corporate merchandise since 1978. Every stitch is a commitment to heritage and durability.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', fontSize: '0.82rem', color: '#F4EEDC', fontWeight: '700' }}>
              <Lock size={15} color="#F4EEDC" />
              <span>256-Bit SSL Encrypted Checkout</span>
            </div>
          </div>

          {/* 2. Products & Gifts */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-subheading)', 
              fontSize: '0.92rem', 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase', 
              color: '#F4EEDC', 
              marginBottom: '1.2rem',
              fontWeight: '700'
            }}>
              Products &amp; Gifts
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <button onClick={() => handleCategoryClick('Leather')} style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'opacity 0.2s', fontWeight: '500' }} className="footer-gold-link">
                  Leather Products
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Apparel')} style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'opacity 0.2s', fontWeight: '500' }} className="footer-gold-link">
                  Corporate Apparel
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Bags')} style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'opacity 0.2s', fontWeight: '500' }} className="footer-gold-link">
                  Executive Bags
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Tech Gadgets')} style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'opacity 0.2s', fontWeight: '500' }} className="footer-gold-link">
                  Tech Gadgets
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Bottles')} style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'opacity 0.2s', fontWeight: '500' }} className="footer-gold-link">
                  Custom Water Bottles
                </button>
              </li>
            </ul>
          </div>

          {/* 3. Office & Corporate */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-subheading)', 
              fontSize: '0.92rem', 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase', 
              color: '#F4EEDC', 
              marginBottom: '1.2rem',
              fontWeight: '700'
            }}>
              Office &amp; Corporate
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <button onClick={() => handleCategoryClick('Corporate Notebooks')} style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'opacity 0.2s', fontWeight: '500' }} className="footer-gold-link">
                  Corporate Notebooks
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Desk Organizer')} style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'opacity 0.2s', fontWeight: '500' }} className="footer-gold-link">
                  Desk Organizer &amp; Tabletop
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Shields & Awards')} style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'opacity 0.2s', fontWeight: '500' }} className="footer-gold-link">
                  Shields &amp; Corporate Awards
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Corporate Gift Box')} style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'opacity 0.2s', fontWeight: '500' }} className="footer-gold-link">
                  Corporate Gift Boxes
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('contact')} style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'opacity 0.2s', fontWeight: '500' }} className="footer-gold-link">
                  Bulk Orders &amp; Invoices
                </button>
              </li>
            </ul>
          </div>

          {/* 4. Customer Support */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-subheading)', 
              fontSize: '0.92rem', 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase', 
              color: '#F4EEDC', 
              marginBottom: '1.2rem',
              fontWeight: '700'
            }}>
              Customer Support
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.95)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={17} color="#F4EEDC" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Hakeem Center, Karachi</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Globe size={17} color="#F4EEDC" style={{ flexShrink: 0 }} />
                <span>Presence: Worldwide</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={17} color="#F4EEDC" style={{ flexShrink: 0 }} />
                <span>+92 340 2695130</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={17} color="#F4EEDC" style={{ flexShrink: 0 }} />
                <span>wakeel&amp;sons@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Clock size={17} color="#F4EEDC" style={{ flexShrink: 0 }} />
                <span>Mon - Sat: 12:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.85)' }}>
          <div>
            © All Rights Reserved Wakeel &amp; Sons Leather Goods (Pvt) Ltd 2023
          </div>

          <div style={{ display: 'flex', gap: '1.8rem' }}>
            <span style={{ cursor: 'pointer' }} className="footer-gold-link">Privacy Policy</span>
            <span style={{ cursor: 'pointer' }} className="footer-gold-link">Terms of Service</span>
            <span style={{ cursor: 'pointer' }} className="footer-gold-link">Lifetime Guarantee Terms</span>
          </div>
        </div>

      </div>

      {/* Hover Styles */}
      <style>{`
        .footer-gold-link:hover {
          color: #F4EEDC !important;
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
}
