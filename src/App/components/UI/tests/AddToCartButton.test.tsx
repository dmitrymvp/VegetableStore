import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import AddToCartButton from '../AddToCartButton';
import { renderWithProviders } from '../../../../test/utils';
import userEvent from '@testing-library/user-event';

describe('AddToCartButton', () => {
  const addCart = vi.fn();

  it('Должен отображаться текст кнопки', () => {
    renderWithProviders(<AddToCartButton addCart={addCart} />);

    const textButton = screen.getByText(/Add to cart/i);
    expect(textButton).toBeInTheDocument();
  });

  it('Должна отображаться иконка корзины', () => {
    renderWithProviders(<AddToCartButton addCart={addCart} />);

    const altImage = screen.getByAltText(/cart/i);
    expect(altImage).toBeInTheDocument();
  });

  it('Должна вызывать функцию addCart при клике', async () => {
    renderWithProviders(<AddToCartButton addCart={addCart} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    await userEvent.click(button);

    expect(addCart).toHaveBeenCalledTimes(2);
  });
});
