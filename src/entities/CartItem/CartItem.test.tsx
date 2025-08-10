import { describe, it, expect } from 'vitest';
import CartItem from '../CartItem';
import { productResponse } from '../../../../mocks/response';
import { renderWithProviders } from '../../../../test/utils';
import { screen } from '@testing-library/react';

describe('CartItem', () => {
  const product = productResponse[0];

  it('Должно рендериться наименование товара и его вес', () => {
    renderWithProviders(<CartItem {...product} />);

    expect(screen.getByText(/brocolli/i)).toBeInTheDocument();
    expect(screen.getByText(/1 kg/i)).toBeInTheDocument();
  });

  it('Должна рендериться цена товара', () => {
    renderWithProviders(<CartItem {...product} />);

    expect(screen.getByText('$120')).toBeInTheDocument();
  });

  it('Должна рендериться картинка', () => {
    renderWithProviders(<CartItem {...product} />);

    expect(screen.getByAltText(/norway/i)).toBeInTheDocument();
  });

  it('Должны рендериться кнопки и количесвто', () => {
    renderWithProviders(<CartItem {...product} />);

    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
