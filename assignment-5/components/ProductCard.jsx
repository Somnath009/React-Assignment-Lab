import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="a5-product-card">
      <img src={product.image} alt={product.name} className="a5-product-img" />
      <div className="a5-product-info">
        <div>
          <div className="a5-product-cat">{product.category}</div>
          <h3 className="a5-product-title">{product.name}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#fbbf24', fontSize: '0.85rem' }}>
            <Star size={14} fill="#fbbf24" />
            <span>{product.rating} / 5.0</span>
          </div>
        </div>

        <div>
          <div className="a5-product-price">${product.price.toFixed(2)}</div>
          <button className="a5-btn-add-cart" onClick={() => addToCart(product)}>
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
