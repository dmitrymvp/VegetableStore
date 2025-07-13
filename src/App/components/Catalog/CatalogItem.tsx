import { Card, Image, Group, Text } from '@mantine/core';
import AddToCartButton from '../UI/AddToCartButton';
import Quantity from '../UI/Quantity';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import type { Product } from '../../App';

function ProductCard({ name, image, price, id }: Product) {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('without provider');
  }

  const { addCart } = context;

  return (
    <Card h={414} w={302} padding="md" radius="md">
      <Image src={image} height={276} alt="Norway" />

      <Group justify="space-between" mt={15}>
        <Group gap="xs">
          <Text size="lg" fw={600}>
            {name.split(' - ')[0]}
          </Text>
          <Text c="dimmed" size="sm" fw={600}>
            {name.split(' - ')[1]}
          </Text>
        </Group>
        <Quantity id={id} />
      </Group>

      <Group justify="space-between">
        <Text fw={700} fz="xl" mt="xs">
          {`$${price}`}
        </Text>
        <AddToCartButton addCart={() => addCart(id)} />
      </Group>
    </Card>
  );
}
export default ProductCard;
