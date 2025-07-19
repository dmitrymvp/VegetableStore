import Quantity from '../Quantity';
import { renderWithProviders } from '../../../../test/utils';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

describe('Quantity', () => {
  renderWithProviders(<Quantity id={1} />);

  it('должен отобразить количество и кнопки', async () => {
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
