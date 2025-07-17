import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import AddToCartButton from '../AddToCartButton';
import { renderWithMantine } from '../../../../test/utils';
import userEvent from '@testing-library/user-event';

describe('AddToCartButton', () => {
  it('Должен отображаться текст кнопки', () => {
    renderWithMantine(<AddToCartButton />);
    screen.debug();

    const textButton = screen.getByText(/Add to cart/i);
    expect(textButton).toBeInTheDocument();
  });

  it('Должна отображаться иконка корзины', () => {
    renderWithMantine(<AddToCartButton />);

    const altImage = screen.getByAltText(/cart/i);
    expect(altImage).toBeInTheDocument();
  });

  it('Должна вызывать функцию addCart при клике', async () => {
    const addCart = vi.fn();
    renderWithMantine(<AddToCartButton addCart={addCart} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    await userEvent.click(button);

    expect(addCart).toHaveBeenCalledTimes(2);
  });
});
