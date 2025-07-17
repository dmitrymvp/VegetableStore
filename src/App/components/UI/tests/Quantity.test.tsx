import Quantity from '../Quantity';
import { renderWithMantine } from '../../../../test/utils';
import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { CartContext } from '../../../context/CartContext';
import { QuantityContext } from '../../../context/QauntityContext';

describe('Quantity', () => {
  const quantityMock = { 1: 1 };
  const increment = vi.fn();
  const decrement = vi.fn();
  const removeFromCart = vi.fn();
  const cart = [];
  const addCart = vi.fn();

  renderWithMantine(
    <CartContext.Provider value={{ cart, addCart, removeFromCart }}>
      <QuantityContext.Provider
        value={{ quantity: quantityMock, increment, decrement }}
      >
        <Quantity id={1} />
      </QuantityContext.Provider>
    </CartContext.Provider>,
  );

  it('должен отобразить количество и кнопки', async () => {
    screen.debug();

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
