import { describe, it, expect } from 'vitest';
import Cart from '../Cart';
import { renderWithProviders } from '../../../../test/utils';
import { screen } from '@testing-library/react';

describe('Cart', () => {
  it('Компонент должен рендериться', () => {
    renderWithProviders(<Cart />);
    expect(screen.getByRole('button', { name: /cart/i })).toBeInTheDocument();
  });

  it('Должна рендериться иконка корзины', () => {
    renderWithProviders(<Cart />);
    expect(screen.getByAltText(/cart/i)).toBeInTheDocument();
  });
});
