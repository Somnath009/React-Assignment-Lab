import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialProducts = [
  {
    id: 'p1',
    name: 'Wireless Noise-Canceling Headphones',
    category: 'Audio',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
    rating: 4.8
  },
  {
    id: 'p2',
    name: 'Ultra-Wide Gaming Monitor 34"',
    category: 'Monitors',
    price: 449.50,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80',
    rating: 4.9
  },
  {
    id: 'p3',
    name: 'Mechanical RGB Keyboard',
    category: 'Peripherals',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80',
    rating: 4.6
  },
  {
    id: 'p4',
    name: 'Ergonomic Wireless Mouse',
    category: 'Peripherals',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80',
    rating: 4.5
  },
  {
    id: 'p5',
    name: '4K Pro Webcam with Ring Light',
    category: 'Accessories',
    price: 129.00,
    image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=400&q=80',
    rating: 4.7
  },
  {
    id: 'p6',
    name: 'Smart Fitness Watch Series 9',
    category: 'Wearables',
    price: 279.00,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
    rating: 4.8
  }
];

const VALID_COUPONS = {
  SAVE10: 10,
  DISCOUNT20: 20,
  MEGA50: 50
};

const initialState = {
  products: initialProducts,
  cart: [],
  couponCode: '',
  discountPercent: 0,
  couponError: ''
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (existingIndex > -1) {
        const updatedCart = state.cart.map((item, idx) =>
          idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { ...state, cart: updatedCart };
      }
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
    }

    case 'REMOVE_ITEM': {
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return { ...state, cart: state.cart.filter((item) => item.id !== id) };
      }
      return {
        ...state,
        cart: state.cart.map((item) => (item.id === id ? { ...item, quantity } : item))
      };
    }

    case 'APPLY_COUPON': {
      const code = action.payload.trim().toUpperCase();
      if (VALID_COUPONS[code]) {
        return {
          ...state,
          couponCode: code,
          discountPercent: VALID_COUPONS[code],
          couponError: ''
        };
      } else {
        return {
          ...state,
          couponError: 'Invalid coupon code. Try "SAVE10", "DISCOUNT20", or "MEGA50"'
        };
      }
    }

    case 'REMOVE_COUPON': {
      return {
        ...state,
        couponCode: '',
        discountPercent: 0,
        couponError: ''
      };
    }

    case 'CLEAR_CART': {
      return { ...state, cart: [], couponCode: '', discountPercent: 0, couponError: '' };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Computed Cart Totals
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (subtotal * state.discountPercent) / 100;
  const discountedSubtotal = subtotal - discountAmount;
  const gstAmount = discountedSubtotal * 0.18; // 18% GST Calculation
  const grandTotal = discountedSubtotal + gstAmount;
  const totalItemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        ...state,
        subtotal,
        discountAmount,
        gstAmount,
        grandTotal,
        totalItemCount,
        addToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
        removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
        updateQuantity: (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }),
        applyCoupon: (code) => dispatch({ type: 'APPLY_COUPON', payload: code }),
        removeCoupon: () => dispatch({ type: 'REMOVE_COUPON' }),
        clearCart: () => dispatch({ type: 'CLEAR_CART' })
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
