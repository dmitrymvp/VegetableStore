import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import Catalog from '../../features/Catalog/Catalog';
import { renderWithProviders } from '../../test/utils';

describe('Catalog component', () => {
  it('Должен рендерить заголовок', () => {
    renderWithProviders(<Catalog />);

    expect(
      screen.getByRole('heading', { name: /catalog/i }),
    ).toBeInTheDocument();
  });
});
