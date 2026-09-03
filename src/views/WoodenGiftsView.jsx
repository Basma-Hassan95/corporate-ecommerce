import React, { useState } from 'react';
import { Filter, Star, Sparkles, Check, RotateCcw } from 'lucide-react';
import { WOODEN_PRODUCTS } from '../data/products';

export default function WoodenGiftsView({ setActivePage, setSelectedProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedWood, setSelectedWood] = useState('All');
  const [maxPrice, setMaxPrice] = useState(100);

  const categories = ['All', 'Wooden Box', 'Wooden Keychain', 'Desk Accessory'];
  const woodTypes = ['All', 'American Walnut', 'Natural Rosewood', 'Solid White Oak'];

  const filteredProducts = WOODEN_PRODUCTS.filter(p => {
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    if (selectedWood !== 'All' && p.woodType !== selectedWood) return false;
    if (p.price > maxPrice) return false;
    return true;
  });

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedWood('All');
    setMaxPrice(100);
  };

  return (
    <div className="animate-fade-in" style={{ padding: '3rem 0', backgroundColor: 'var(--bg-parchment)' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.8rem', display: 'inline-block' }}>
            ✦ WOODWORK COLLECTION
          </span>
          <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)' }}>
            Personalized Wooden Gifts
          </h1>
          <p style={{ color: 'var(--text-dark-coffee)', opacity: 0.85, maxWidth: '600px', margin: '0.5rem auto 0' }}>
            Hand-carved from solid natural Walnut, Rosewood, and Oak. Laser-engraved with your custom monogram, dates, or messages.
          </p>
        </div>

        {/* Catalog Grid + Filter Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '270px 1fr', gap: '2.5rem' }} className="shop-layout">
          
          {/* FILTER SIDEBAR */}
          <aside style={{ backgroundColor: 'var(--surface-white)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', height: 'fit-content' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', color: 'var(--text-dark-coffee)' }}>
                <Filter size={18} color="var(--btn-coffee-bean)" />
                <span>Filter Wooden Gifts</span>
              </div>
              <button 
                onClick={resetFilters} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.75rem', color: 'var(--accent-dusty-taupe)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
              >
                <RotateCcw size={12} /> Reset
              </button>
            </div>

            {/* Filter 1: Gift Category */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dark-coffee)', marginBottom: '0.8rem' }}>
                Item Category
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      fontSize: '0.88rem',
                      padding: '0.35rem 0.6rem',
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

            {/* Filter 2: Wood Species */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dark-coffee)', marginBottom: '0.8rem' }}>
                Wood Species
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {woodTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedWood(type)}
                    style={{
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      fontSize: '0.88rem',
                      padding: '0.35rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      backgroundColor: selectedWood === type ? 'var(--surface-linen)' : 'transparent',
                      color: selectedWood === type ? 'var(--btn-coffee-bean)' : 'var(--text-dark-coffee)',
                      fontWeight: selectedWood === type ? '700' : '400'
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter 3: Max Price */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-dark-coffee)', fontWeight: '600', marginBottom: '0.5rem' }}>
                <span>Max Price:</span>
                <span>${maxPrice}</span>
              </div>
              <input 
                type="range" 
                min="20" 
                max="100" 
                value={maxPrice} 
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--btn-coffee-bean)' }}
              />
            </div>

          </aside>

          {/* PRODUCT GRID */}
          <main>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-dark-coffee)' }}>
                Showing <strong>{filteredProducts.length}</strong> wooden handcrafted gifts
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-dusty-taupe)' }}>
                Sort: Featured Woodwork
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div style={{ backgroundColor: 'var(--surface-white)', padding: '4rem 2rem', textAlign: 'center', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <h3>No wooden gifts match your filter selection</h3>
                <p style={{ color: 'var(--accent-dusty-taupe)', margin: '0.5rem 0 1.5rem' }}>Try adjusting your wood species or price slider.</p>
                <button onClick={resetFilters} className="btn-primary">Clear Filters</button>
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
                        <span>{product.woodType}</span>
                        <span>{product.category}</span>
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
                        <span className="badge-taupe">Laser Carved</span>
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
