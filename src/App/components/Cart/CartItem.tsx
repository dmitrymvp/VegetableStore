import { Card, Image, Group, Text, Flex } from '@mantine/core';
import Quantity from '../UI/Quantity';
import { type Product } from '../../App';

function CartItem({ name, image, price, id }: Product) {
  return (
    <>
      <Card w={395} h={80} p={0}>
        <Flex mt={10} wrap="nowrap">
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
                <Quantity id={id} />
              </Flex>
            </Group>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}
export default CartItem;
