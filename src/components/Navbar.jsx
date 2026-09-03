import React, { useState, useRef } from 'react';
import { ShoppingBag, Search, Menu, X, ChevronDown, ChevronRight, Gift, BookOpen, Trophy } from 'lucide-react';

const MENU_STRUCTURE = [
  { type: 'link', id: 'home', label: 'Home' },
  { type: 'link', id: 'about', label: 'About Us' },
  {
    type: 'dropdown',
    id: 'products',
    label: 'Products & Gifts',
    icon: <Gift size={15} color="var(--btn-coffee-bean)" />,
    items: [
      { label: 'Apparel', category: 'Apparel' },
      { label: 'Bags', category: 'Bags' },
      { label: 'Bottles', category: 'Bottles' },
      { 
        label: 'Leather Products', 
        category: 'Leather',
        subCategories: [
          { label: 'Wallets', page: 'shop', category: 'Leather' }
        ]
      },
      { label: 'Tech Gadgets', category: 'Tech Gadgets' },
      { label: 'Wall Clocks', category: 'Wall Clocks' },
    ]
  },
  {
    type: 'dropdown',
    id: 'office',
    label: 'Office & Stationery',
    icon: <BookOpen size={15} color="var(--btn-coffee-bean)" />,
    items: [
      { label: 'Corporate Notebooks', category: 'Corporate Notebooks' },
      { label: 'Pens', category: 'Pens' },
      { label: 'Office Supplies', category: 'Office Supplies' },
      { label: 'Desk Organizer / Tabletop Items', category: 'Desk Organizer' },
      { label: 'New Year Calendars', category: 'Calendars' },
    ]
  },
  {
    type: 'dropdown',
    id: 'boxes',
    label: 'Boxes & Awards',
    icon: <Trophy size={15} color="var(--btn-coffee-bean)" />,
    items: [
      { label: 'Corporate Gift Box', category: 'Corporate Gift Box' },
      { label: 'PVC Rubber Merch', category: 'PVC Rubber Merch' },
      { label: 'Shields / Plaques / Momento', category: 'Shields & Awards' },
    ]
  },
  { type: 'link', id: 'catalog', label: 'Catalog' },
  { type: 'link', id: 'contact', label: 'Contact' },
];

export default function Navbar({ 
  activePage = 'home', 
  setActivePage = () => {}, 
  cartCount = 0, 
  openCart = () => {}, 
  onSelectCategory = () => {} 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubHover, setActiveSubHover] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);

  const timeoutRef = useRef(null);

  const handleMouseEnter = (dropdownId) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubHover(null);
    }, 180);
  };

  const handleCategoryClick = (categoryName) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (typeof onSelectCategory === 'function') {
      onSelectCategory(categoryName);
    } else if (typeof setActivePage === 'function') {
      setActivePage('catalog');
    }
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'var(--bg-parchment)', borderBottom: '1px solid var(--border-light)', boxShadow: '0 2px 10px rgba(62, 37, 34, 0.03)' }}>
      
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.5rem' }}>
        
        {/* Brand Logo Section */}
        <div 
          onClick={() => setActivePage && setActivePage('home')} 
          style={{ cursor: 'pointer', textAlign: 'left', flexShrink: 1, minWidth: 0, overflow: 'hidden' }}
        >
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.2rem, 5vw, 1.7rem)', color: 'var(--text-dark-coffee)', letterSpacing: '0.04em', margin: 0, lineHeight: 1, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            WAKEEL &amp; SONS
          </h1>
          <p style={{ fontFamily: 'var(--font-subheading)', fontSize: 'clamp(0.48rem, 2.2vw, 0.6rem)', color: 'var(--btn-coffee-bean)', letterSpacing: '0.12em', margin: '0.25rem 0 0', textTransform: 'uppercase', fontWeight: '600', whiteSpace: 'nowrap' }}>
            EST. 1978 &bull; CORPORATE GIFTS &amp; LEATHER
          </p>
        </div>

        {/* Desktop Single-Line Navigation */}
        <nav style={{ display: 'none', gap: '1.2rem', alignItems: 'center', flexWrap: 'nowrap' }} className="desktop-nav">
          {(MENU_STRUCTURE || []).map((menuItem) => {
            if (!menuItem) return null;

            if (menuItem.type === 'link') {
              return (
                <button
                  key={menuItem.id}
                  onClick={() => {
                    if (typeof setActivePage === 'function') setActivePage(menuItem.id);
                    setActiveDropdown(null);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: activePage === menuItem.id ? '700' : '500',
                    color: activePage === menuItem.id ? 'var(--btn-coffee-bean)' : 'var(--text-dark-coffee)',
                    borderBottom: activePage === menuItem.id ? '2px solid var(--btn-coffee-bean)' : '2px solid transparent',
                    padding: '0.35rem 0.2rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {menuItem.label}
                </button>
              );
            }

            const isOpen = activeDropdown === menuItem.id;

            return (
              <div
                key={menuItem.id}
                onMouseEnter={() => handleMouseEnter(menuItem.id)}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative', padding: '0.35rem 0.2rem' }}
              >
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    color: isOpen ? 'var(--btn-coffee-bean)' : 'var(--text-dark-coffee)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{menuItem.label}</span>
                  <ChevronDown 
                    size={13} 
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.2s ease',
                      color: isOpen ? 'var(--btn-coffee-bean)' : 'var(--accent-dusty-taupe)'
                    }} 
                  />
                </button>

                {/* Dropdown Container */}
                {isOpen && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '0',
                      minWidth: '230px',
                      backgroundColor: 'var(--surface-white)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      boxShadow: 'var(--shadow-md)',
                      padding: '0.6rem 0',
                      zIndex: 200,
                      animation: 'fadeIn 0.2s ease-out'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      {(menuItem.items || []).map((subItem, idx) => {
                        const hasSub = subItem.subCategories && subItem.subCategories.length > 0;
                        const isSubHovered = activeSubHover === subItem.label;

                        return (
                          <div 
                            key={idx} 
                            style={{ position: 'relative' }}
                            onMouseEnter={() => hasSub && setActiveSubHover(subItem.label)}
                            onMouseLeave={() => hasSub && setActiveSubHover(null)}
                          >
                            <button
                              onClick={() => {
                                handleCategoryClick(subItem.category);
                              }}
                              style={{
                                width: '100%',
                                textAlign: 'left',
                                background: isSubHovered ? 'var(--surface-linen)' : 'none',
                                border: 'none',
                                padding: '0.55rem 1.1rem',
                                fontSize: '0.84rem',
                                fontFamily: 'var(--font-body)',
                                color: isSubHovered ? 'var(--btn-coffee-bean)' : 'var(--text-dark-coffee)',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease',
                                whiteSpace: 'nowrap',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '1rem'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--surface-linen)';
                                e.currentTarget.style.color = 'var(--btn-coffee-bean)';
                                e.currentTarget.style.paddingLeft = '1.3rem';
                              }}
                              onMouseLeave={(e) => {
                                if (!isSubHovered) {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                  e.currentTarget.style.color = 'var(--text-dark-coffee)';
                                  e.currentTarget.style.paddingLeft = '1.1rem';
                                }
                              }}
                            >
                              <span>{subItem.label}</span>
                              {hasSub && <ChevronRight size={14} color="#9A7824" />}
                            </button>

                            {/* NESTED SUBCATEGORY FLYOUT MENU */}
                            {hasSub && isSubHovered && (
                              <div
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: '100%',
                                  minWidth: '190px',
                                  backgroundColor: 'var(--surface-white)',
                                  borderRadius: 'var(--radius-md)',
                                  border: '1px solid var(--border-light)',
                                  boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                                  padding: '0.5rem 0',
                                  zIndex: 220,
                                  marginLeft: '4px',
                                  animation: 'fadeIn 0.15s ease-out'
                                }}
                              >
                                {subItem.subCategories.map((nested, nIdx) => (
                                  <button
                                    key={nIdx}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveDropdown(null);
                                      setActiveSubHover(null);
                                      setMobileMenuOpen(false);
                                      if (nested.page && typeof setActivePage === 'function') {
                                        setActivePage(nested.page);
                                      } else {
                                        handleCategoryClick(nested.category);
                                      }
                                    }}
                                    style={{
                                      width: '100%',
                                      textAlign: 'left',
                                      background: 'none',
                                      border: 'none',
                                      padding: '0.55rem 1.2rem',
                                      fontSize: '0.84rem',
                                      fontWeight: '600',
                                      fontFamily: 'var(--font-body)',
                                      color: 'var(--btn-coffee-bean)',
                                      cursor: 'pointer',
                                      transition: 'all 0.15s ease',
                                      whiteSpace: 'nowrap',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '0.4rem'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = 'var(--surface-linen)';
                                      e.currentTarget.style.paddingLeft = '1.4rem';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = 'transparent';
                                      e.currentTarget.style.paddingLeft = '1.2rem';
                                    }}
                                  >
                                    <span>✦ {nested.label}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Header Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
          <button 
            onClick={() => setActivePage && setActivePage('catalog')} 
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-dark-coffee)',
              padding: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%'
            }}
            title="Search Catalog"
          >
            <Search size={19} />
          </button>
          
          <button 
            onClick={openCart} 
            className="btn-primary"
            style={{ padding: '0.5rem 1.1rem', borderRadius: '20px', fontSize: '0.82rem', position: 'relative' }}
          >
            <ShoppingBag size={16} />
            <span>Bag</span>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                backgroundColor: 'var(--accent-gold)',
                color: 'var(--surface-dark-espresso)',
                fontSize: '0.7rem',
                fontWeight: '700',
                width: '19px',
                height: '19px',
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
        <div style={{ backgroundColor: 'var(--surface-white)', borderBottom: '1px solid var(--border-light)', padding: '1.2rem 1.5rem', maxHeight: '80vh', overflowY: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {(MENU_STRUCTURE || []).map((menuItem) => {
              if (!menuItem) return null;

              if (menuItem.type === 'link') {
                return (
                  <button
                    key={menuItem.id}
                    onClick={() => { 
                      if (typeof setActivePage === 'function') setActivePage(menuItem.id); 
                      setMobileMenuOpen(false); 
                    }}
                    style={{
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      padding: '0.65rem 0',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                      fontWeight: activePage === menuItem.id ? '700' : '500',
                      color: activePage === menuItem.id ? 'var(--btn-coffee-bean)' : 'var(--text-dark-coffee)'
                    }}
                  >
                    {menuItem.label}
                  </button>
                );
              }

              const isAccordionOpen = mobileAccordion === menuItem.id;

              return (
                <div key={menuItem.id} style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                  <button
                    onClick={() => setMobileAccordion(isAccordionOpen ? null : menuItem.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      padding: '0.65rem 0',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                      fontWeight: '600',
                      color: 'var(--text-dark-coffee)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {menuItem.icon} {menuItem.label}
                    </span>
                    <ChevronDown size={16} style={{ transform: isAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                  </button>

                  {isAccordionOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', backgroundColor: 'var(--surface-linen)', borderRadius: 'var(--radius-sm)', padding: '0.6rem 1rem' }}>
                      {(menuItem.items || []).map((subItem, idx) => (
                        <React.Fragment key={idx}>
                          <button
                            onClick={() => handleCategoryClick(subItem.category)}
                            style={{
                              textAlign: 'left',
                              background: 'none',
                              border: 'none',
                              padding: '0.4rem 0',
                              fontSize: '0.9rem',
                              fontWeight: '600',
                              color: 'var(--text-dark-coffee)'
                            }}
                          >
                            &bull; {subItem.label}
                          </button>
                          
                          {/* Nested Subcategories in Mobile Accordion */}
                          {subItem.subCategories && subItem.subCategories.map((nested, nIdx) => (
                            <button
                              key={nIdx}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                if (nested.page && typeof setActivePage === 'function') {
                                  setActivePage(nested.page);
                                } else {
                                  handleCategoryClick(nested.category);
                                }
                              }}
                              style={{
                                textAlign: 'left',
                                background: 'none',
                                border: 'none',
                                padding: '0.3rem 0 0.3rem 1.2rem',
                                fontSize: '0.85rem',
                                color: 'var(--btn-coffee-bean)',
                                fontWeight: '700'
                              }}
                            >
                              └─ ✦ {nested.label}
                            </button>
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Responsive Breakpoint Helper */}
      <style>{`
        @media (min-width: 1080px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
