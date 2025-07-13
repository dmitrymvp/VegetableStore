import { createContext, useContext, useState, type ReactNode } from 'react';
import { CartContext } from './CartContext';

type QauntityContextType = {
  quantity: Record<number, number>;
  increment: (id: number) => void;
  decrement: (id: number) => void;
};

type QuantityProviderProps = {
  children: ReactNode;
};

export const QuantityContext = createContext<QauntityContextType | null>(null);

export const QuantityProvider = ({ children }: QuantityProviderProps) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('without provider');
  }
  const { removeFromCart } = cartContext;

  const [quantity, setQuantity] = useState<Record<number, number>>({});

  const increment = (id: number) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrement = (id: number) => {
    setQuantity((prev) => {
      const newQuantity = Math.max((prev[id] || 1) - 1, 0);
      if (newQuantity === 0) {
        removeFromCart(id);
      }
      return {
        ...prev,
        [id]: newQuantity,
      };
    });
  };

  return (
    <QuantityContext.Provider value={{ quantity, increment, decrement }}>
      {children}
    </QuantityContext.Provider>
  );
};
