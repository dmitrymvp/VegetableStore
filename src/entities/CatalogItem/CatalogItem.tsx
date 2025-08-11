import type { Product } from '../../shared/types/types';
import { Card, Image, Group, Text } from '@mantine/core';
import AddToCartButton from '../../shared/ui/AddToCartButton';
import Quantity from '../../shared/ui/Quantity';
import { useAppDispatch } from '../../shared/hooks/redux';
import { addCart } from '../../App/store/redusers/VegetableSlice';

const CatalogItem = ({ name, image, price, id }: Product) => {
  const dispatch = useAppDispatch();

  return (
    <Card h={414} w={302} padding="md" radius="md" data-testid="card">
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
        <AddToCartButton
          addCart={() => {
            dispatch(addCart({ id: id }));
          }}
        />
      </Group>
    </Card>
  );
};
export default CatalogItem;
