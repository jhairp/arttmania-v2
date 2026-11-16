import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';
import { calculateDiscountedPrice } from '../data/promotions';

export interface CartItem {
  id: string; // unique item uuid (product.id + variants hash)
  productId: string;
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
  selectedTechnique?: string;
  customText?: string;
  customDesignPreview?: string; // base64 preview if user uploaded a file
  unitPrice: number;
  totalPrice: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id' | 'totalPrice'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'art_mania_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('LocalStorage error writing cart:', e);
    }
  }, [items]);

  const addItem = (item: Omit<CartItem, 'id' | 'totalPrice'>) => {
    const variantId = `${item.productId}_${item.selectedColor || ''}_${item.selectedSize || ''}_${item.selectedTechnique || ''}_${item.customText || ''}`;
    
    setItems(prev => {
      const existingIndex = prev.findIndex(i => i.id === variantId);
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = updated[existingIndex].quantity + item.quantity;
        const { unitPrice, total } = calculateDiscountedPrice(item.product.price, newQty);
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          unitPrice,
          totalPrice: total
        };
        return updated;
      } else {
        const { unitPrice, total } = calculateDiscountedPrice(item.product.price, item.quantity);
        return [
          ...prev,
          {
            ...item,
            id: variantId,
            unitPrice,
            totalPrice: total
          }
        ];
      }
    });

    setIsCartOpen(true);
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          const { unitPrice, total } = calculateDiscountedPrice(item.product.price, newQty);
          return {
            ...item,
            quantity: newQty,
            unitPrice,
            totalPrice: total
          };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = items.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
