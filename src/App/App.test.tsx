import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRedux } from '../test/utils';

describe('App', () => {
  it('Приложение должно отрендериться', async () => {
    renderWithRedux(<App />);

    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cart/i })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /catalog/i }),
    ).toBeInTheDocument();

    expect(await screen.findAllByTestId('card')).toHaveLength(30);
  });
});
