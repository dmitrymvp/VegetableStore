import { Card, Image, Group, Text } from '@mantine/core';
import ProductButton from './ProductButton';
import ProductQuantity from './ProductQuantity';

function ProductCard({ name, image, price, id, addCart }) {
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
        <ProductQuantity id={id} />
      </Group>

      <Group justify="space-between">
        <Text fw={700} fz="xl" mt="xs">
          {`$${price}`}
        </Text>
        <ProductButton addCart={addCart} />
      </Group>
    </Card>
  );
}
export default ProductCard;
