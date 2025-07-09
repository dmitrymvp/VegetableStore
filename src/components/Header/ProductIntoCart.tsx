import { Card, Image, Group, Text, Flex } from '@mantine/core';
import ProductQuantity from '../ProductCard/ProductQuantity';
import { AppContext } from '../../App';
import { useContext } from 'react';

function ProductIntoCard({ name, image, price, id }) {
  const context = useContext(AppContext);

  const { quantity, increment, decrement } = context;
  return (
    <Card w={395} h={80} p={0}>
      <Flex mt={15} wrap="nowrap">
        <Image src={image} h={64} w={64} mr={12} alt="Norway" fit="contain" />

        <Flex direction={'column'}>
          <Group>
            <Text size="lg" fw={600}>
              {name.split(' - ')[0]}
            </Text>
            <Text c="dimmed" size="sm" fw={600}>
              {name.split(' - ')[1]}
            </Text>
          </Group>

          <Group>
            <Flex justify={'space-between'} w={320}>
              <Text fw={700} fz="xl" mt="xs">
                {`$${price}`}
              </Text>
              <ProductQuantity id={id} />
            </Flex>
          </Group>
        </Flex>
      </Flex>
    </Card>
  );
}
export default ProductIntoCard;
