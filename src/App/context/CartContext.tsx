import { createContext, useState, type ReactNode } from 'react';
import { type Product } from '../App';

type CartContextType = {
  cart: Product[];
  addCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

type CartProviderProps = {
  children: ReactNode;
  data: Product[];
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children, data }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addCart = (id: number) => {
    const product = data.find((item) => item.id === id);

    if (!product) return;

    setCart((prev) => {
      const isProductInCard = prev.some((item) => item.id === id);

      if (isProductInCard) return prev;

      return [...prev, { ...product }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
