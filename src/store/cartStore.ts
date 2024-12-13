import { create } from 'zustand';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  total: 0,
  addItem: (product) => {
    const items = get().items;
    const existingItem = items.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      set({ items: updatedItems, total: calculateTotal(updatedItems) });
    } else {
      const updatedItems = [...items, { ...product, quantity: 1 }];
      set({ items: updatedItems, total: calculateTotal(updatedItems) });
    }
  },
  removeItem: (productId) => {
    const items = get().items.filter((item) => item.id !== productId);
    set({ items, total: calculateTotal(items) });
  },
  updateQuantity: (productId, quantity) => {
    const items = get().items.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    set({ items, total: calculateTotal(items) });
  },
  clearCart: () => set({ items: [], total: 0 }),
}));

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};