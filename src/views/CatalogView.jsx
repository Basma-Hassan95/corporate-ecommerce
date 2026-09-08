import React, { useState, useEffect } from 'react';
import { Filter, Star, Check, RotateCcw, Search } from 'lucide-react';
import { ALL_PRODUCTS } from '../data/products';

export default function CatalogView({ setActivePage, setSelectedProduct, initialCategory = 'All', searchQuery: externalSearchQuery = '', setSearchQuery: setExternalSearchQuery = null }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [internalSearchQuery, setInternalSearchQuery] = useState('');

  const searchQuery = setExternalSearchQuery ? externalSearchQuery : internalSearchQuery;
  const setSearchQuery = setExternalSearchQuery || setInternalSearchQuery;

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    'All',
    'Leather Products',
    'Apparel',
    'Bags',
    'Bottles',
    'Tech Gadgets',
    'Wall Clocks',
    'Custom Mugs',
    'Corporate Notebooks',
    'Pens',
    'Office Supplies',
    'Desk Organizer',
    'Calendars',
    'Corporate Gift Box',
    'PVC Rubber Merch',
    'Shields & Awards'
  ];

  const filteredProducts = ALL_PRODUCTS.filter(p => {
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    if (searchQuery.trim() && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="animate-fade-in" style={{ padding: '3rem 0', backgroundColor: 'var(--bg-parchment)' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>
            ✦ CORPORATE GIFTS &amp; BESPOKE CATALOG
          </span>
          <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
            Corporate Gifting &amp; Merchandise
          </h1>
          <p style={{ color: 'var(--text-dark-coffee)', opacity: 0.85, maxWidth: '600px', margin: '0.5rem auto 0' }}>
            Explore our complete range of customized corporate apparel, office stationery, bespoke leather goods, and premium award plaques.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: '540px', margin: '0 auto 2.5rem', position: 'relative' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by product name, notebook, mug, or gift box..."
            style={{
              width: '100%',
              padding: '0.85rem 1rem 0.85rem 2.8rem',
              backgroundColor: 'var(--surface-white)',
              border: '1.5px solid var(--accent-dusty-taupe)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />
          <Search size={18} color="var(--accent-dusty-taupe)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
        </div>

        {/* Catalog Grid + Filter Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '270px 1fr', gap: '2.5rem' }} className="shop-layout">
          
          {/* FILTER SIDEBAR */}
          <aside style={{ backgroundColor: 'var(--surface-white)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', height: 'fit-content' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', color: 'var(--text-dark-coffee)' }}>
                <Filter size={18} color="var(--btn-coffee-bean)" />
                <span>Corporate Categories</span>
              </div>
              <button 
                onClick={resetFilters} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.75rem', color: 'var(--accent-dusty-taupe)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
              >
                <RotateCcw size={12} /> Reset
              </button>
            </div>

            {/* Filter Categories */}
            <div>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dark-coffee)', marginBottom: '0.8rem' }}>
                All Categories
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', maxHeight: '420px', overflowY: 'auto' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      fontSize: '0.86rem',
                      padding: '0.4rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      backgroundColor: selectedCategory === cat ? 'var(--surface-linen)' : 'transparent',
                      color: selectedCategory === cat ? 'var(--btn-coffee-bean)' : 'var(--text-dark-coffee)',
                      fontWeight: selectedCategory === cat ? '700' : '400'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

          </aside>

          {/* PRODUCT GRID */}
          <main>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-dark-coffee)' }}>
                Showing <strong>{filteredProducts.length}</strong> items in <em>{selectedCategory}</em>
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-dusty-taupe)' }}>
                Corporate Gifting Ready
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div style={{ backgroundColor: 'var(--surface-white)', padding: '4rem 2rem', textAlign: 'center', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <h3>No items match your selected category</h3>
                <p style={{ color: 'var(--accent-dusty-taupe)', margin: '0.5rem 0 1.5rem' }}>Try choosing another category or clearing your search query.</p>
                <button onClick={resetFilters} className="btn-primary">View All Items</button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.8rem' }}>
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id}
                    className="card-luxury"
                    onClick={() => { setSelectedProduct(product); setActivePage('pdp'); }}
                    style={{ cursor: 'pointer' }}
                  >
                    <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                      <img 
                        src={product.images[0]} 
                        alt={product.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                      {product.isBestSeller && (
                        <div style={{ position: 'absolute', top: '10px', left: '10px' }} className="badge-gold">
                          BEST SELLER
                        </div>
                      )}
                    </div>
                    <div style={{ padding: '1.2rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--accent-dusty-taupe)', marginBottom: '0.3rem' }}>
                        <span>{product.category}</span>
                        <span>{product.material}</span>
                      </div>
                      <h3 style={{ fontSize: '1.05rem', color: 'var(--text-dark-coffee)', marginBottom: '0.4rem' }}>
                        {product.name}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', marginBottom: '0.8rem' }}>
                        <Star size={13} fill="var(--accent-gold)" color="var(--accent-gold)" />
                        <span style={{ fontWeight: '600' }}>{product.rating}</span>
                        <span style={{ color: 'var(--accent-dusty-taupe)' }}>({product.reviewsCount})</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.6rem', borderTop: '1px solid var(--border-light)' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#9A7824', textTransform: 'uppercase' }}>Bespoke Quote</span>
                        <span className="badge-taupe">Custom Logo</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>

        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .shop-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
