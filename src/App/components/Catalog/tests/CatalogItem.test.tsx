import { describe, it, expect } from 'vitest';
import CatalogItem from '../CatalogItem';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../test/utils';
import { productResponse } from '../../../../mocks/response';

describe('CatalogItem', () => {
  const product = productResponse[0];
  it('Должно рендериться наименование товара и его вес', () => {
    renderWithProviders(<CatalogItem {...product} />);

    expect(screen.getByText(/brocolli/i)).toBeInTheDocument();
    expect(screen.getByText(/1 kg/i)).toBeInTheDocument();
  });

  it('Должна рендериться цена товара', () => {
    renderWithProviders(<CatalogItem {...product} />);

    expect(screen.getByText('$120')).toBeInTheDocument();
  });

  it('Должна рендериться картинка', () => {
    renderWithProviders(<CatalogItem {...product} />);

    expect(screen.getByAltText(/norway/i)).toBeInTheDocument();
  });

  it('Должны рендериться кнопки и количесвто', () => {
    renderWithProviders(<CatalogItem {...product} />);

    expect(
      screen.getByRole('button', { name: /Add to cart/ }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(3);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
