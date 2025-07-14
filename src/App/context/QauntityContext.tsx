import { createContext, useState, type ReactNode } from 'react';

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
