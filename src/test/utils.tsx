import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import { CartContext } from '../App/context/CartContext';
import { QuantityContext } from '../App/context/QauntityContext';
import type { Product } from '../App/App';
import { vi } from 'vitest';

const removeFromCart = vi.fn();
const cart = [] as Product[];
const addCart = vi.fn();
const quantityMock = { 1: 1 };
const increment = vi.fn();
const decrement = vi.fn();

export function renderWithProviders(ui: ReactNode) {
  return render(
    <MantineProvider>
      <CartContext.Provider value={{ cart, addCart, removeFromCart }}>
        <QuantityContext.Provider
          value={{ quantity: quantityMock, increment, decrement }}
        >
          {ui}
        </QuantityContext.Provider>
      </CartContext.Provider>
    </MantineProvider>,
  );
}
