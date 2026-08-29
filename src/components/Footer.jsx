import React from 'react';
import { Lock, MapPin, Phone, Mail, Clock } from 'lucide-react';

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
        backgroundColor: '#16100f', 
        color: '#FAF6F0', 
        paddingTop: '4.5rem', 
        paddingBottom: '2.5rem', 
        borderTop: '2px solid var(--btn-coffee-bean)' 
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
        >
          
          {/* 1. Brand Info */}
          <div>
            <h3 style={{ 
              fontFamily: 'var(--font-heading)', 
              color: 'var(--accent-gold)', 
              fontSize: '1.5rem', 
              letterSpacing: '0.06em', 
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              WAKEEL &amp; SONS
            </h3>
            <p style={{ 
              fontSize: '0.9rem', 
              color: 'rgba(250, 246, 240, 0.85)', 
              lineHeight: 1.7, 
              marginBottom: '1.4rem',
              fontWeight: '300'
            }}>
              Crafting timeless personalized executive leather goods &amp; corporate merchandise since 1978. Every stitch is a commitment to heritage and durability.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', fontSize: '0.82rem', color: 'var(--accent-gold)', fontWeight: '600' }}>
              <Lock size={15} color="var(--accent-gold)" />
              <span>256-Bit SSL Encrypted Checkout</span>
            </div>
          </div>

          {/* 2. Products & Gifts (Navbar Categories) */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-subheading)', 
              fontSize: '0.9rem', 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase', 
              color: '#FFFFFF', 
              marginBottom: '1.2rem',
              fontWeight: '700'
            }}>
              Products &amp; Gifts
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <button onClick={() => handleCategoryClick('Leather')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.85)', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }} className="footer-link">
                  Leather Products
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Apparel')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.85)', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }} className="footer-link">
                  Corporate Apparel
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Bags')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.85)', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }} className="footer-link">
                  Executive Bags
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Tech Gadgets')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.85)', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }} className="footer-link">
                  Tech Gadgets
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Custom Mugs')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.85)', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }} className="footer-link">
                  Custom Mugs &amp; Bottles
                </button>
              </li>
            </ul>
          </div>

          {/* 3. Office & Corporate (Replacing OUR ATELIER) */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-subheading)', 
              fontSize: '0.9rem', 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase', 
              color: '#FFFFFF', 
              marginBottom: '1.2rem',
              fontWeight: '700'
            }}>
              Office &amp; Corporate
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <button onClick={() => handleCategoryClick('Corporate Notebooks')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.85)', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }} className="footer-link">
                  Corporate Notebooks
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Desk Organizer')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.85)', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }} className="footer-link">
                  Desk Organizer &amp; Tabletop
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Shields & Awards')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.85)', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }} className="footer-link">
                  Shields &amp; Corporate Awards
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('Corporate Gift Box')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.85)', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }} className="footer-link">
                  Corporate Gift Boxes
                </button></li>
              <li>
                <button onClick={() => setActivePage('contact')} style={{ background: 'none', border: 'none', color: 'rgba(250, 246, 240, 0.85)', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }} className="footer-link">
                  Bulk Orders &amp; Invoices
                </button>
              </li>
            </ul>
          </div>

          {/* 4. Customer Support */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-subheading)', 
              fontSize: '0.9rem', 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase', 
              color: '#FFFFFF', 
              marginBottom: '1.2rem',
              fontWeight: '700'
            }}>
              Customer Support
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem', color: 'rgba(250, 246, 240, 0.85)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={17} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Heritage Leather District, Sector 15, Karachi</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={17} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>+92 (0) 300 829 4410</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={17} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>atelier@wakeelandson.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Clock size={17} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div style={{ borderTop: '1px solid rgba(250, 246, 240, 0.12)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'rgba(250, 246, 240, 0.7)' }}>
          <div>
            © {new Date().getFullYear()} Wakeel &amp; Sons Leather Goods (Pvt) Ltd. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', gap: '1.8rem' }}>
            <span style={{ cursor: 'pointer' }} className="footer-link">Privacy Policy</span>
            <span style={{ cursor: 'pointer' }} className="footer-link">Terms of Service</span>
            <span style={{ cursor: 'pointer' }} className="footer-link">Lifetime Guarantee Terms</span>
          </div>
        </div>

      </div>

      {/* Hover Styles */}
      <style>{`
        .footer-link:hover {
          color: var(--accent-gold) !important;
        }
      `}</style>
    </footer>
  );
}
