import React, { useState } from 'react';
import { X, Trash2, Tag, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const {
    cart,
    subtotal,
    discountPercent,
    discountAmount,
    gstAmount,
    grandTotal,
    couponCode,
    couponError,
    removeItem,
    updateQuantity,
    applyCoupon,
    removeCoupon,
    clearCart
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (inputCoupon) {
      applyCoupon(inputCoupon);
      setInputCoupon('');
    }
  };

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      clearCart();
      setCheckoutComplete(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="a5-cart-overlay">
      <div className="a5-cart-drawer">
        <div className="a5-drawer-header">
          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShoppingBag size={20} color="#38bdf8" /> Your Cart ({cart.reduce((s, i) => s + i.quantity, 0)})
          </h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {checkoutComplete ? (
          <div style={{ padding: '3rem 2rem', textAlign: 'center', color: '#34d399' }}>
            <Check size={56} style={{ margin: '0 auto 1rem' }} />
            <h3>Order Placed Successfully!</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Thank you for your purchase. Invoice sent to your email.
            </p>
          </div>
        ) : (
          <>
            <div className="a5-cart-items-list">
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94a3b8' }}>
                  <ShoppingBag size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                  <p>Your shopping cart is empty.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div className="a5-cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} className="a5-item-thumb" />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#f8fafc' }}>{item.name}</div>
                      <div style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: '700' }}>
                        ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                        <button className="a5-qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          -
                        </button>
                        <span style={{ fontSize: '0.9rem', fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button className="a5-qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </button>

                        <button
                          onClick={() => removeItem(item.id)}
                          style={{ background: 'none', border: 'none', color: '#f43f5e', marginLeft: 'auto', cursor: 'pointer' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="a5-drawer-footer">
                {/* Coupon Input */}
                <form onSubmit={handleApplyCoupon} className="a5-coupon-box">
                  <input
                    type="text"
                    className="a5-coupon-input"
                    placeholder="Enter Coupon (e.g. SAVE10)"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                  />
                  <button
                    type="submit"
                    style={{
                      background: 'rgba(56, 189, 248, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: '#38bdf8',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: '600'
                    }}
                  >
                    Apply
                  </button>
                </form>

                {couponError && <div style={{ color: '#f43f5e', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{couponError}</div>}

                {couponCode && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(52, 211, 153, 0.1)', padding: '0.4rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem', color: '#34d399', marginBottom: '0.75rem' }}>
                    <span>Applied: <strong>{couponCode}</strong> ({discountPercent}% OFF)</span>
                    <button onClick={removeCoupon} style={{ background: 'none', border: 'none', color: '#f43f5e', cursor: 'pointer' }}>
                      Remove
                    </button>
                  </div>
                )}

                {/* Calculation breakdown */}
                <div className="a5-summary-row">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="a5-summary-row" style={{ color: '#34d399' }}>
                    <span>Discount ({discountPercent}%):</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="a5-summary-row">
                  <span>GST (18% Tax):</span>
                  <span>+${gstAmount.toFixed(2)}</span>
                </div>

                <div className="a5-summary-row" style={{ fontSize: '1.2rem', fontWeight: '800', color: '#38bdf8', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
                  <span>Grand Total:</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(90deg, #0284c7, #2563eb)',
                    color: '#fff',
                    border: 'none',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    fontWeight: '700',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    marginTop: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Proceed to Checkout <ArrowRight size={18} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
