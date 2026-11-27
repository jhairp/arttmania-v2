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
const MAX_CART_QTY = 10000;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      // Si falla por cuota de localStorage (ej. imagen base64 pesada del personalizador), guardar sin el preview pesado
      try {
        const lightweightItems = items.map(({ customDesignPreview, ...rest }) => rest);
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lightweightItems));
      } catch (innerErr) {
        console.warn('LocalStorage error writing cart:', innerErr || e);
      }
    }
  }, [items]);

  const addItem = (item: Omit<CartItem, 'id' | 'totalPrice'>) => {
    const minQty = item.product?.minQuantity || 1;
    const safeInputQty = Math.min(MAX_CART_QTY, Math.max(minQty, Math.floor(Number(item.quantity) || minQty)));
    const variantId = `${item.productId}_${item.selectedColor || ''}_${item.selectedSize || ''}_${item.selectedTechnique || ''}_${item.customText || ''}`;
    
    setItems(prev => {
      const existingIndex = prev.findIndex(i => i.id === variantId);
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = Math.min(MAX_CART_QTY, updated[existingIndex].quantity + safeInputQty);
        const { unitPrice, total } = calculateDiscountedPrice(
          item.product.price,
          newQty,
          updated[existingIndex].selectedTechnique
        );
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          unitPrice,
          totalPrice: total
        };
        return updated;
      } else {
        const { unitPrice, total } = calculateDiscountedPrice(
          item.product.price,
          safeInputQty,
          item.selectedTechnique
        );
        return [
          ...prev,
          {
            ...item,
            quantity: safeInputQty,
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
          const minQty = item.product?.minQuantity || 1;
          const newQty = Math.min(MAX_CART_QTY, Math.max(minQty, item.quantity + delta));
          const { unitPrice, total } = calculateDiscountedPrice(
            item.product.price,
            newQty,
            item.selectedTechnique
          );
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
