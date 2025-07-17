import { describe, test, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import Catalog from './Catalog';
import { productResponse } from '../../../mocks/response';
import { renderWithMantine } from '../../../test/utils';
import { CartContext } from '../../context/CartContext';
import { QuantityContext } from '../../context/QauntityContext';

describe('Catalog component', () => {
  const quantityMock = { 1: 1 };
  const increment = vi.fn();
  const decrement = vi.fn();
  const removeFromCart = vi.fn();
  const cart = [];
  const addCart = vi.fn();

  test('рендерит заголовок и первая и последняя карточка товара', async () => {
    renderWithMantine(
      <CartContext.Provider value={{ cart, addCart, removeFromCart }}>
        <QuantityContext.Provider
          value={{ quantity: quantityMock, increment, decrement }}
        >
          <Catalog data={productResponse} isLoading={false} />
        </QuantityContext.Provider>
      </CartContext.Provider>,
    );
    // Проверка заголовка
    expect(
      screen.getByRole('heading', { name: /catalog/i }),
    ).toBeInTheDocument();

    // Проверка, что рендерится первая карточка
    expect(await screen.findByText(/Brocolli/i)).toBeInTheDocument();
    expect(await screen.findByText(/Walnuts/i)).toBeInTheDocument();
    screen.debug();
  });
});
