import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, cartCount, openCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'shop', label: 'Leather Wallets' },
    { id: 'wooden', label: 'Wooden Gifts' },
    { id: 'catalog', label: 'Catalog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'var(--bg-parchment)', borderBottom: '1px solid var(--border-light)' }}>
      {/* Main Header Bar */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 1.5rem' }}>
        
        {/* Brand Logo */}
        <div 
          onClick={() => setActivePage('home')} 
          style={{ cursor: 'pointer', textAlign: 'left' }}
        >
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', color: 'var(--text-dark-coffee)', letterSpacing: '0.06em', margin: 0, textTransform: 'uppercase' }}>
            WAKEEL &amp; SONS
          </h1>
          <p style={{ fontFamily: 'var(--font-subheading)', fontSize: '0.65rem', color: 'var(--accent-dusty-taupe)', letterSpacing: '0.22em', margin: 0, textTransform: 'uppercase' }}>
            EST. 1978 &bull; FINE LEATHERCRAFT &amp; WOODWORK
          </p>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: activePage === link.id ? '700' : '500',
                color: activePage === link.id ? 'var(--btn-coffee-bean)' : 'var(--text-dark-coffee)',
                borderBottom: activePage === link.id ? '2px solid var(--btn-coffee-bean)' : '2px solid transparent',
                padding: '0.4rem 0',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Header Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <button 
            onClick={() => setActivePage('catalog')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dark-coffee)' }}
            title="Search Catalog"
          >
            <Search size={21} />
          </button>
          
          <button 
            onClick={openCart} 
            className="btn-primary"
            style={{ padding: '0.55rem 1.1rem', borderRadius: '20px', fontSize: '0.85rem', position: 'relative' }}
          >
            <ShoppingBag size={18} />
            <span>Bag</span>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                backgroundColor: 'var(--accent-gold)',
                color: 'var(--surface-dark-espresso)',
                fontSize: '0.72rem',
                fontWeight: '700',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: 'var(--surface-white)', borderBottom: '1px solid var(--border-light)', padding: '1rem 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { setActivePage(link.id); setMobileMenuOpen(false); }}
                style={{
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '0.6rem 0',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: activePage === link.id ? '700' : '500',
                  color: activePage === link.id ? 'var(--btn-coffee-bean)' : 'var(--text-dark-coffee)'
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Responsive Nav Style Helper */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
