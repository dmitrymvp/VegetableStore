import { Group, Badge, Text, Image } from '@mantine/core';
import minus from '../../assets/icons/Rectangle 70.svg';
// import plus from '../../assets/icons/Union.svg';
import plus from '../../assets/icons/Union.png';
import { useContext } from 'react';
import { AppContext } from '../../App';

const ProductQuantity = ({ id }) => {
  const context = useContext(AppContext);

  const { quantity, increment, decrement } = context;

  return (
    <Group justify="flex-end" gap="xs">
      <Badge
        h={30}
        w={30}
        radius="md"
        color="#dee2e6"
        p={8}
        onClick={() => decrement(id)}
      >
        <Image src={minus} w={12} />
      </Badge>
      <Text size="sm" fw={500} fz={16}>
        {quantity[id] ?? 1}
      </Text>
      <Badge
        h={30}
        w={30}
        radius="md"
        color="#dee2e6"
        p={8}
        onClick={() => increment(id)}
      >
        <Image src={plus} w={12} />
      </Badge>
    </Group>
  );
};

export default ProductQuantity;
