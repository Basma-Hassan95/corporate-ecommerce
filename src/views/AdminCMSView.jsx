import React, { useState, useEffect } from 'react';
import { 
  getCMSProducts, saveCMSProducts, 
  getCMSTestimonials, saveCMSTestimonials, 
  getCMSLogos, saveCMSLogos, 
  getCMSInquiries 
} from '../utils/cmsStorage';
import { 
  Lock, Plus, Edit2, Trash2, Check, X, 
  Image as ImageIcon, Star, MessageSquare, Building2, Package, LogOut, Upload 
} from 'lucide-react';

export default function AdminCMSView({ setActivePage }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [activeTab, setActiveTab] = useState('products');

  // CMS State
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [logos, setLogos] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  // Product Form State
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    id: '',
    name: '',
    subtitle: '',
    category: 'Leather Keychains',
    material: 'Leather & Metal',
    color: 'Classic Black',
    description: '',
    images: [''],
    isBestSeller: false,
    rating: 5.0,
    reviewsCount: 25
  });

  // Testimonial Form State
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [testimonialForm, setTestimonialForm] = useState({
    id: '',
    name: '',
    role: '',
    avatar: '',
    quote: ''
  });

  // Logo Form State
  const [editingLogo, setEditingLogo] = useState(null);
  const [logoForm, setLogoForm] = useState({
    id: '',
    name: '',
    logoUrl: ''
  });

  useEffect(() => {
    // Load data from cmsStorage
    setProducts(getCMSProducts());
    setTestimonials(getCMSTestimonials());
    setLogos(getCMSLogos());
    setInquiries(getCMSInquiries());
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput.trim().toLowerCase() === 'wakeel123') {
      setIsAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('Invalid Admin Password. Please try again.');
    }
  };

  // --- PRODUCT ACTIONS ---
  const handleSaveProduct = (e) => {
    e.preventDefault();
    let updatedProducts;
    if (editingProduct) {
      updatedProducts = products.map(p => p.id === editingProduct.id ? { ...productForm } : p);
    } else {
      const newId = 'kc-' + (products.length + 1).toString().padStart(2, '0');
      updatedProducts = [...products, { ...productForm, id: newId }];
    }
    setProducts(updatedProducts);
    saveCMSProducts(updatedProducts);
    resetProductForm();
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
      saveCMSProducts(updated);
    }
  };

  const startEditProduct = (prod) => {
    setEditingProduct(prod);
    setProductForm({ ...prod });
  };

  const resetProductForm = () => {
    setEditingProduct(null);
    setProductForm({
      id: '',
      name: '',
      subtitle: '',
      category: 'Leather Keychains',
      material: 'Leather & Metal',
      color: 'Classic Black',
      description: '',
      images: [''],
      isBestSeller: false,
      rating: 5.0,
      reviewsCount: 25
    });
  };

  // --- TESTIMONIAL ACTIONS ---
  const handleSaveTestimonial = (e) => {
    e.preventDefault();
    let updated;
    if (editingTestimonial) {
      updated = testimonials.map(t => t.id === editingTestimonial.id ? { ...testimonialForm } : t);
    } else {
      const newId = 'test-' + Date.now();
      updated = [...testimonials, { ...testimonialForm, id: newId }];
    }
    setTestimonials(updated);
    saveCMSTestimonials(updated);
    resetTestimonialForm();
  };

  const handleDeleteTestimonial = (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      const updated = testimonials.filter(t => t.id !== id);
      setTestimonials(updated);
      saveCMSTestimonials(updated);
    }
  };

  const startEditTestimonial = (item) => {
    setEditingTestimonial(item);
    setTestimonialForm({ ...item });
  };

  const resetTestimonialForm = () => {
    setEditingTestimonial(null);
    setTestimonialForm({
      id: '',
      name: '',
      role: '',
      avatar: '',
      quote: ''
    });
  };

  // --- LOGO ACTIONS ---
  const handleSaveLogo = (e) => {
    e.preventDefault();
    let updated;
    if (editingLogo) {
      updated = logos.map(l => l.id === editingLogo.id ? { ...logoForm } : l);
    } else {
      const newId = 'logo-' + Date.now();
      updated = [...logos, { ...logoForm, id: newId }];
    }
    setLogos(updated);
    saveCMSLogos(updated);
    resetLogoForm();
  };

  const handleDeleteLogo = (id) => {
    if (window.confirm('Delete this corporate logo?')) {
      const updated = logos.filter(l => l.id !== id);
      setLogos(updated);
      saveCMSLogos(updated);
    }
  };

  const resetLogoForm = () => {
    setEditingLogo(null);
    setLogoForm({ id: '', name: '', logoUrl: '' });
  };

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-parchment)', padding: '2rem' }}>
        <div style={{ backgroundColor: 'var(--surface-white)', padding: '2.5rem 2.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)', maxWidth: '440px', width: '100%', textAlign: 'center' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--surface-linen)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem', color: 'var(--btn-coffee-bean)' }}>
            <Lock size={26} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', marginBottom: '0.4rem' }}>
            Wakeel &amp; Sons CMS Admin
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--accent-dusty-taupe)', marginBottom: '1.8rem' }}>
            Enter your admin password to manage products, pictures, testimonials, and client inquiries.
          </p>

          <form onSubmit={handleLogin}>
            <input 
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter Admin Password..."
              style={{
                width: '100%',
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-parchment)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.95rem',
                marginBottom: '1rem',
                outline: 'none'
              }}
            />
            {passwordError && (
              <p style={{ color: '#D9534F', fontSize: '0.82rem', marginBottom: '1rem' }}>{passwordError}</p>
            )}
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
              Access CMS Dashboard
            </button>
          </form>
          <p style={{ fontSize: '0.75rem', color: 'var(--accent-dusty-taupe)', marginTop: '1.2rem' }}>
            Default Passkey: <code>wakeel123</code>
          </p>
        </div>
      </div>
    );
  }

  // --- DASHBOARD SCREEN ---
  return (
    <div style={{ backgroundColor: 'var(--bg-parchment)', minHeight: '90vh', padding: '2.5rem 0' }}>
      <div className="container">
        
        {/* Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)' }}>
          <div>
            <span className="badge-gold" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>✦ CONTENT MANAGEMENT SYSTEM</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', fontSize: '2.2rem', margin: 0 }}>
              Admin CMS Portal
            </h1>
          </div>
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <button 
              onClick={() => setActivePage('home')}
              className="btn-secondary"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
            >
              View Live Website
            </button>
            <button 
              onClick={() => setIsAuthenticated(false)}
              style={{ background: 'none', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', padding: '0.6rem 1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-dark-coffee)' }}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--border-light)', paddingBottom: '0.5rem' }}>
          <button 
            onClick={() => setActiveTab('products')}
            style={{
              padding: '0.7rem 1.4rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              background: activeTab === 'products' ? 'var(--btn-coffee-bean)' : 'transparent',
              color: activeTab === 'products' ? '#FFFFFF' : 'var(--text-dark-coffee)',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Package size={17} /> Products &amp; Images ({products.length})
          </button>
          
          <button 
            onClick={() => setActiveTab('testimonials')}
            style={{
              padding: '0.7rem 1.4rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              background: activeTab === 'testimonials' ? 'var(--btn-coffee-bean)' : 'transparent',
              color: activeTab === 'testimonials' ? '#FFFFFF' : 'var(--text-dark-coffee)',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <MessageSquare size={17} /> Testimonials &amp; Reviews ({testimonials.length})
          </button>

          <button 
            onClick={() => setActiveTab('logos')}
            style={{
              padding: '0.7rem 1.4rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              background: activeTab === 'logos' ? 'var(--btn-coffee-bean)' : 'transparent',
              color: activeTab === 'logos' ? '#FFFFFF' : 'var(--text-dark-coffee)',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Building2 size={17} /> Corporate Logos ({logos.length})
          </button>
        </div>

        {/* TAB 1: PRODUCTS MANAGER */}
        {activeTab === 'products' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2rem' }}>
            {/* Products List */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', marginBottom: '1rem' }}>
                All Catalog Products
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {products.map(prod => (
                  <div 
                    key={prod.id} 
                    style={{ backgroundColor: 'var(--surface-white)', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <img 
                        src={prod.images[0]} 
                        alt={prod.name} 
                        style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-sm)', objectFit: 'cover', border: '1px solid var(--border-light)' }} 
                      />
                      <div>
                        <span style={{ fontSize: '0.75rem', color: '#9A7824', fontWeight: '700', textTransform: 'uppercase' }}>{prod.category}</span>
                        <h4 style={{ color: 'var(--text-dark-coffee)', margin: '0.2rem 0' }}>{prod.name}</h4>
                        <span style={{ fontSize: '0.8rem', color: 'var(--accent-dusty-taupe)' }}>{prod.subtitle}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button 
                        onClick={() => startEditProduct(prod)}
                        style={{ padding: '0.5rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', backgroundColor: 'var(--surface-linen)', cursor: 'pointer', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-dark-coffee)' }}
                      >
                        <Edit2 size={14} /> Edit
                      </button>
                      <button 
                        onClick={() => handleDeleteProduct(prod.id)}
                        style={{ padding: '0.5rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #F5C6CB', backgroundColor: '#F8D7DA', cursor: 'pointer', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#721C24' }}
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Add/Edit Form */}
            <div style={{ backgroundColor: 'var(--surface-white)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', height: 'fit-content' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>{editingProduct ? 'Edit Product' : 'Add New Product'}</span>
                {editingProduct && (
                  <button onClick={resetProductForm} style={{ background: 'none', border: 'none', fontSize: '0.75rem', color: 'var(--accent-dusty-taupe)', cursor: 'pointer' }}>
                    Cancel Edit
                  </button>
                )}
              </h3>
              
              <form onSubmit={handleSaveProduct} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>Product Name</label>
                  <input 
                    type="text"
                    required
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    placeholder="e.g. Royal Blue Leather Keychain"
                    style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.88rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.4rem' }}>
                    Upload Product Image
                  </label>
                  
                  <div style={{
                    border: '2px dashed var(--btn-coffee-bean)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '1.2rem 1rem',
                    textAlign: 'center',
                    backgroundColor: 'var(--surface-linen)',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.2s ease'
                  }}>
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files && e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setProductForm({ ...productForm, images: [reader.result] });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0,
                        cursor: 'pointer',
                        width: '100%',
                        height: '100%',
                        zIndex: 10
                      }}
                    />
                    <Upload size={28} color="var(--btn-coffee-bean)" style={{ margin: '0 auto 0.4rem', display: 'block' }} />
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-dark-coffee)', fontWeight: '700' }}>
                      Click or Drag Image File Here to Upload
                    </p>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-dusty-taupe)', display: 'block', marginTop: '0.2rem' }}>
                      Select photo from your phone or computer (JPG, PNG, WEBP)
                    </span>
                  </div>

                  {/* Or Manual URL Input Fallback */}
                  <details style={{ marginTop: '0.5rem' }}>
                    <summary style={{ fontSize: '0.75rem', color: 'var(--accent-dusty-taupe)', cursor: 'pointer', outline: 'none' }}>
                      Or paste image URL / file path
                    </summary>
                    <input 
                      type="text"
                      value={productForm.images[0]}
                      onChange={(e) => setProductForm({ ...productForm, images: [e.target.value] })}
                      placeholder="/products/keychains/keychain-01.jpg"
                      style={{ width: '100%', padding: '0.5rem 0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.82rem', marginTop: '0.4rem' }}
                    />
                  </details>

                  {productForm.images[0] && (
                    <div style={{ marginTop: '0.8rem', position: 'relative', height: '130px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                      <img src={productForm.images[0]} alt="Uploaded Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <span style={{ position: 'absolute', bottom: '6px', right: '6px', backgroundColor: 'var(--btn-coffee-bean)', color: '#FFFFFF', fontSize: '0.7rem', padding: '0.25rem 0.6rem', borderRadius: '12px', fontWeight: '700' }}>
                        ✓ Image Uploaded
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>Category</label>
                  <select 
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.88rem' }}
                  >
                    <option value="Leather Keychains">Leather Keychains</option>
                    <option value="Corporate Gift Box">Corporate Gift Box</option>
                    <option value="Leather Products">Leather Products</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Bags">Bags / Executive Bags</option>
                    <option value="Bottles">Bottles / Thermal Flasks</option>
                    <option value="Tech Gadgets">Tech Gadgets & Power Banks</option>
                    <option value="Wall Clocks">Wall Clocks</option>
                    <option value="Custom Mugs">Custom Mugs & Coasters</option>
                    <option value="Corporate Notebooks">Corporate Notebooks & Diaries</option>
                    <option value="Pens">Pens / Executive Pens</option>
                    <option value="Office Supplies">Office Supplies</option>
                    <option value="Desk Organizer">Desk Organizer / Tabletop Items</option>
                    <option value="Calendars">Calendars</option>
                    <option value="PVC Rubber Merch">PVC Rubber Merch</option>
                    <option value="Shields & Awards">Shields & Corporate Awards</option>
                    <option value="Other">Custom / Type Custom Below...</option>
                  </select>

                  {/* If user types custom category */}
                  <input 
                    type="text"
                    placeholder="Or type custom category name..."
                    value={productForm.category === 'Other' ? '' : productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    style={{ width: '100%', padding: '0.5rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.82rem', marginTop: '0.4rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>Subtitle</label>
                  <input 
                    type="text"
                    value={productForm.subtitle}
                    onChange={(e) => setProductForm({ ...productForm, subtitle: e.target.value })}
                    placeholder="Full-Grain Leather & Chrome Clip"
                    style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.88rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>Description</label>
                  <textarea 
                    rows={3}
                    value={productForm.description}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    placeholder="Enter item description..."
                    style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.88rem' }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox"
                    id="isBestSeller"
                    checked={productForm.isBestSeller}
                    onChange={(e) => setProductForm({ ...productForm, isBestSeller: e.target.checked })}
                  />
                  <label htmlFor="isBestSeller" style={{ fontSize: '0.85rem', color: 'var(--text-dark-coffee)', cursor: 'pointer' }}>
                    Mark as Bestseller Badge
                  </label>
                </div>

                <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
                  {editingProduct ? 'Update Product' : 'Save New Product'}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* TAB 2: TESTIMONIALS MANAGER */}
        {activeTab === 'testimonials' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2rem' }}>
            {/* Testimonials List */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', marginBottom: '1rem' }}>
                Client Testimonials &amp; Reviews
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {testimonials.map(item => (
                  <div 
                    key={item.id} 
                    style={{ backgroundColor: 'var(--surface-white)', padding: '1.4rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <img 
                          src={item.avatar} 
                          alt={item.name} 
                          style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-light)' }} 
                        />
                        <div>
                          <h4 style={{ color: 'var(--text-dark-coffee)', margin: 0 }}>{item.name}</h4>
                          <span style={{ fontSize: '0.8rem', color: 'var(--accent-dusty-taupe)' }}>{item.role}</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button 
                          onClick={() => startEditTestimonial(item)}
                          style={{ padding: '0.4rem 0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', backgroundColor: 'var(--surface-linen)', cursor: 'pointer', fontSize: '0.78rem' }}
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteTestimonial(item.id)}
                          style={{ padding: '0.4rem 0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid #F5C6CB', backgroundColor: '#F8D7DA', cursor: 'pointer', fontSize: '0.78rem', color: '#721C24' }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-coffee)', fontStyle: 'italic', margin: 0, backgroundColor: 'var(--surface-linen)', padding: '0.8rem', borderRadius: 'var(--radius-sm)' }}>
                      "{item.quote}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Form */}
            <div style={{ backgroundColor: 'var(--surface-white)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', height: 'fit-content' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', marginBottom: '1.2rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>{editingTestimonial ? 'Edit Review' : 'Add Testimonial'}</span>
                {editingTestimonial && (
                  <button onClick={resetTestimonialForm} style={{ background: 'none', border: 'none', fontSize: '0.75rem', color: 'var(--accent-dusty-taupe)', cursor: 'pointer' }}>
                    Cancel Edit
                  </button>
                )}
              </h3>

              <form onSubmit={handleSaveTestimonial} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>Client Name</label>
                  <input 
                    type="text"
                    required
                    value={testimonialForm.name}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                    placeholder="e.g. Ali Bohri"
                    style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.88rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>Role / Company Designation</label>
                  <input 
                    type="text"
                    required
                    value={testimonialForm.role}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, role: e.target.value })}
                    placeholder="e.g. Director Operations, SAIF UL BURHAN"
                    style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.88rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.4rem' }}>Upload Client Photo / Avatar</label>
                  <div style={{ border: '2px dashed var(--btn-coffee-bean)', borderRadius: 'var(--radius-sm)', padding: '1rem', textAlign: 'center', backgroundColor: 'var(--surface-linen)', cursor: 'pointer', position: 'relative' }}>
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files && e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => setTestimonialForm({ ...testimonialForm, avatar: reader.result });
                          reader.readAsDataURL(file);
                        }
                      }}
                      style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
                    />
                    <Upload size={22} color="var(--btn-coffee-bean)" style={{ margin: '0 auto 0.3rem', display: 'block' }} />
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-dark-coffee)', fontWeight: '700' }}>Select Photo File</p>
                  </div>
                  <details style={{ marginTop: '0.4rem' }}>
                    <summary style={{ fontSize: '0.75rem', color: 'var(--accent-dusty-taupe)', cursor: 'pointer' }}>Or paste image URL</summary>
                    <input 
                      type="text"
                      value={testimonialForm.avatar}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, avatar: e.target.value })}
                      placeholder="https://images.unsplash.com/photo-..."
                      style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.8rem', marginTop: '0.3rem' }}
                    />
                  </details>
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>Review / Feedback Quote</label>
                  <textarea 
                    rows={4}
                    required
                    value={testimonialForm.quote}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, quote: e.target.value })}
                    placeholder="Enter client review feedback..."
                    style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.88rem' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
                  {editingTestimonial ? 'Update Review' : 'Add Client Review'}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* TAB 3: CORPORATE LOGOS MANAGER */}
        {activeTab === 'logos' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', marginBottom: '1rem' }}>
                Corporate Client Logos
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {logos.map(logo => (
                  <div key={logo.id} style={{ backgroundColor: 'var(--surface-white)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
                    <img src={logo.logoUrl} alt={logo.name} style={{ height: '40px', maxWidth: '100%', objectFit: 'contain', marginBottom: '0.5rem' }} />
                    <p style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-dark-coffee)', margin: '0 0 0.5rem' }}>{logo.name}</p>
                    <button 
                      onClick={() => handleDeleteLogo(logo.id)}
                      style={{ padding: '0.3rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid #F5C6CB', backgroundColor: '#F8D7DA', cursor: 'pointer', fontSize: '0.75rem', color: '#721C24' }}
                    >
                      Remove Logo
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--surface-white)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', height: 'fit-content' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-dark-coffee)', marginBottom: '1.2rem' }}>
                Add Corporate Logo
              </h3>
              <form onSubmit={handleSaveLogo} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.3rem' }}>Company Name</label>
                  <input 
                    type="text"
                    required
                    value={logoForm.name}
                    onChange={(e) => setLogoForm({ ...logoForm, name: e.target.value })}
                    placeholder="e.g. Meezan Bank"
                    style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.88rem' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-dark-coffee)', display: 'block', marginBottom: '0.4rem' }}>Upload Logo Image File</label>
                  <div style={{ border: '2px dashed var(--btn-coffee-bean)', borderRadius: 'var(--radius-sm)', padding: '1rem', textAlign: 'center', backgroundColor: 'var(--surface-linen)', cursor: 'pointer', position: 'relative' }}>
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files && e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => setLogoForm({ ...logoForm, logoUrl: reader.result });
                          reader.readAsDataURL(file);
                        }
                      }}
                      style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
                    />
                    <Upload size={22} color="var(--btn-coffee-bean)" style={{ margin: '0 auto 0.3rem', display: 'block' }} />
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-dark-coffee)', fontWeight: '700' }}>Select Logo File</p>
                  </div>
                  <details style={{ marginTop: '0.4rem' }}>
                    <summary style={{ fontSize: '0.75rem', color: 'var(--accent-dusty-taupe)', cursor: 'pointer' }}>Or paste image URL</summary>
                    <input 
                      type="text"
                      value={logoForm.logoUrl}
                      onChange={(e) => setLogoForm({ ...logoForm, logoUrl: e.target.value })}
                      placeholder="https://..."
                      style={{ width: '100%', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.8rem', marginTop: '0.3rem' }}
                    />
                  </details>
                </div>
                <button type="submit" className="btn-primary">Add Logo to Banner</button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
