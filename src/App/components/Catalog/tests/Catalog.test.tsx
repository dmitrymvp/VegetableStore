import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import Catalog from '../Catalog';
import { productResponse } from '../../../../mocks/response';
import { renderWithProviders } from '../../../../test/utils';

describe('Catalog component', () => {
  it('Должен рендерить заголовок и первая и последняя карточка товара', () => {
    renderWithProviders(<Catalog data={productResponse} isLoading={false} />);

    expect(
      screen.getByRole('heading', { name: /catalog/i }),
    ).toBeInTheDocument();
  });

  it('Должен рендерить все товары', () => {
    renderWithProviders(<Catalog data={productResponse} isLoading={false} />);

    expect(screen.getAllByTestId('card')).toHaveLength(30);
  });
});
