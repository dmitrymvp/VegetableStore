import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('Приложение должно отрендериться', async () => {
    render(<App />);

    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cart/i })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /catalog/i }),
    ).toBeInTheDocument();

    expect(await screen.findAllByTestId('card')).toHaveLength(30);
  });

  it('Товар должен добавляться в корзину', async () => {
    render(<App />);

    const buttons = await screen.findAllByRole('button', {
      name: /Add to cart/i,
    });

    await userEvent.click(buttons[0]);
    await userEvent.click(buttons[1]);
    await userEvent.click(buttons[2]);

    const cartButton = await screen.findByText('Cart');

    await userEvent.click(cartButton);

    const cart = await screen.findByRole('dialog');

    expect(within(cart).getByText('Brocolli')).toBeInTheDocument();
    expect(within(cart).getByText('Cauliflower')).toBeInTheDocument();
    expect(within(cart).getByText('Cucumber')).toBeInTheDocument();
  });

  it('Должна изменяться стоимость товара и общая цена взависимости от количества', async () => {
    render(<App />);

    const buttons = await screen.findAllByRole('button', {
      name: /Add to cart/i,
    });

    await userEvent.click(buttons[0]);
    await userEvent.click(buttons[1]);

    const cartButton = await screen.findByText('Cart');
    await userEvent.click(cartButton);

    const cart = await screen.findByRole('dialog');

    const buttonsIntoCart = await within(cart).findAllByTestId('increment');
    await userEvent.click(buttonsIntoCart[0]);
    await userEvent.click(buttonsIntoCart[1]);

    expect(await within(cart).findByText('$240')).toBeInTheDocument();
    expect(await within(cart).findByText('$120')).toBeInTheDocument();
    expect(await within(cart).findByText('Total')).toBeInTheDocument();
    expect(await within(cart).findByText('$ 360')).toBeInTheDocument();
  });

  it('Товар должен удаляться из корзины если количество 0', async () => {
    render(<App />);

    const buttons = await screen.findAllByRole('button', {
      name: /Add to cart/i,
    });

    await userEvent.click(buttons[0]);
    await userEvent.click(buttons[1]);
    await userEvent.click(buttons[2]);

    const cartButton = await screen.findByText('Cart');
    await userEvent.click(cartButton);

    const cart = await screen.findByRole('dialog');

    const buttonsIntoCart = await within(cart).findAllByTestId('decrement');
    await userEvent.click(buttonsIntoCart[0]);
    await userEvent.click(buttonsIntoCart[1]);

    expect(within(cart).queryByText('Brocolli')).not.toBeInTheDocument();
    expect(within(cart).queryByText('Cauliflower')).not.toBeInTheDocument();
    expect(await within(cart).findByText('Cucumber')).toBeInTheDocument();
    expect(await within(cart).findByText('$ 48')).toBeInTheDocument();
  });

  it('Должно отображаться количество выбранных продуктов на кнопке корзины', async () => {
    render(<App />);

    const buttons = await screen.findAllByRole('button', {
      name: /Add to cart/i,
    });

    await userEvent.click(buttons[0]);
    await userEvent.click(buttons[1]);

    const cart = await screen.findByText('Cart');

    expect(within(cart).getByText('2')).toBeInTheDocument();
  });
});
