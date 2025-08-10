import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import Header from './Header';
import { renderWithProviders } from '../../../test/utils';

describe('Header', () => {
  renderWithProviders(<Header />);
  it('Должен рендерить логотип и кнопка корзины', () => {
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
