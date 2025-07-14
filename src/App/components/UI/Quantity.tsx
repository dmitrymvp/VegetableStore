import { Group, Text, Image, Button } from '@mantine/core';
import minus from '../../../assets/icons/Rectangle 70.svg';
import plus from '../../../assets/icons/Union.png';

import { useContext } from 'react';
import { QuantityContext } from '../../context/QauntityContext';
import { CartContext } from '../../context/CartContext';

type QuantityProps = {
  id: number;
};

const Quantity = ({ id }: QuantityProps) => {
  const cartContent = useContext(CartContext);

  if (!cartContent) {
    throw new Error('without provider');
  }

  const { removeFromCart } = cartContent;

  const quantityContext = useContext(QuantityContext);

  if (!quantityContext) {
    throw new Error('without provider');
  }

  const { quantity, increment, decrement } = quantityContext;

  return (
    <Group justify="flex-end" gap="xs">
      <Button
        h={30}
        w={30}
        radius="md"
        color="#dee2e6"
        p={8}
        onClick={
          quantity[id] > 1 ? () => decrement(id) : () => removeFromCart(id)
        }
      >
        <Image src={minus} w={12} />
      </Button>
      <Text size="sm" fw={500} fz={16}>
        {quantity[id] || 1}
      </Text>
      <Button
        h={30}
        w={30}
        radius="md"
        color="#dee2e6"
        p={8}
        onClick={() => increment(id)}
      >
        <Image src={plus} w={12} />
      </Button>
    </Group>
  );
};

export default Quantity;
