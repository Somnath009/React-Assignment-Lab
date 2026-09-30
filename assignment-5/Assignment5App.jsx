import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import ProductList from './components/ProductList';
import CartDrawer from './components/CartDrawer';
import { ShoppingCart, Tag, Percent } from 'lucide-react';
import './styles.css';

function MainCartApp() {
  const { totalItemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="a5-container">
      <nav className="a5-nav">
        <div className="a5-brand">TechFlow Electronics</div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontSize: '0.85rem' }}>
            <Tag size={14} /> Coupons: <strong>SAVE10</strong> | <strong>DISCOUNT20</strong> | <strong>MEGA50</strong>
          </div>

          <button className="a5-cart-btn" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart size={18} /> Cart
            {totalItemCount > 0 && <span className="a5-cart-badge">{totalItemCount}</span>}
          </button>
        </div>
      </nav>

      <main className="a5-main">
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#f8fafc', marginBottom: '0.5rem' }}>
            Online Shopping Cart
          </h1>
          <p style={{ color: '#94a3b8' }}>
            State managed using React Context API & useReducer hook with GST tax calculations and coupon discounts.
          </p>
        </div>

        <ProductList />
      </main>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default function Assignment5App() {
  return (
    <CartProvider>
      <MainCartApp />
    </CartProvider>
  );
}
