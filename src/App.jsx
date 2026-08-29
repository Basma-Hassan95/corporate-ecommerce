import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HomepageView from './views/HomepageView';
import ShopView from './views/ShopView';
import CatalogView from './views/CatalogView';
import PDPView from './views/PDPView';
import CartView from './views/CartView';
import CheckoutView from './views/CheckoutView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import RefundPolicyView from './views/RefundPolicyView';
import ShippingPolicyView from './views/ShippingPolicyView';
import { ALL_PRODUCTS, PRODUCTS } from './data/products';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [cart, setCart] = useState([
    {
      ...PRODUCTS[0],
      quantity: 1,
      image: PRODUCTS[0].images[0],
      engraving: { text: 'A. WAKEEL', font: 'serif', finish: 'laser' }
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSelectCategory = (categoryName) => {
    setSelectedCategoryFilter(categoryName);
    setActivePage('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product, quantity, engraving) => {
    const existingIndex = cart.findIndex(item => item.id === product.id && item.engraving?.text === engraving.text);
    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += quantity;
      setCart(updated);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity,
          image: product.images[0],
          engraving: { ...engraving }
        }
      ]);
    }
  };

  const updateQuantity = (index, newQty) => {
    if (newQty <= 0) {
      removeItem(index);
    } else {
      const updated = [...cart];
      updated[index].quantity = newQty;
      setCart(updated);
    }
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  const totalCartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Refactored Navigation Bar Component with Dropdown Hierarchy */}
      <Navbar 
        activePage={activePage} 
        setActivePage={(page) => {
          setActivePage(page);
          if (page !== 'catalog') setSelectedCategoryFilter('All');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartItemsCount}
        openCart={() => setIsCartOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Page Content Views */}
      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <HomepageView 
            setActivePage={(p) => { setActivePage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            setSelectedProduct={setSelectedProduct}
          />
        )}

        {activePage === 'about' && (
          <AboutView 
            setActivePage={(p) => { setActivePage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        )}

        {activePage === 'shop' && (
          <ShopView 
            setActivePage={(p) => { setActivePage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            setSelectedProduct={setSelectedProduct}
          />
        )}

        {activePage === 'catalog' && (
          <CatalogView 
            setActivePage={(p) => { setActivePage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            setSelectedProduct={setSelectedProduct}
            initialCategory={selectedCategoryFilter}
          />
        )}

        {activePage === 'contact' && <ContactView />}

        {activePage === 'pdp' && (
          <PDPView 
            product={selectedProduct}
            addToCart={addToCart}
            setActivePage={(p) => { setActivePage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            openCart={() => setIsCartOpen(true)}
          />
        )}

        {activePage === 'cart' && (
          <CartView 
            cart={cart}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            setActivePage={(p) => { setActivePage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        )}

        {activePage === 'checkout' && (
          <CheckoutView 
            cart={cart}
            setActivePage={(p) => { setActivePage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            clearCart={clearCart}
          />
        )}

        {activePage === 'refund' && <RefundPolicyView />}

        {activePage === 'shipping' && <ShippingPolicyView />}
      </main>

      {/* Global Sliding Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        setActivePage={(p) => { setActivePage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      />

      {/* Global Luxury Footer */}
      <Footer 
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
      />

    </div>
  );
}
