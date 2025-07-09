import { Group, Badge, Text, Image } from '@mantine/core';
import minus from '../../assets/icons/Rectangle 70.svg';
// import plus from '../../assets/icons/Union.svg';
import plus from '../../assets/icons/Union.png';
import { useContext } from 'react';
import { QuantityContext } from '../../App';

const ProductQuantity = ({id}) => {
  const context = useContext(QuantityContext);

  const { quantity, increment, decriment } = context;

  return (
    <Group justify="flex-end" gap="xs">
      <Badge
        h={30}
        w={30}
        radius="md"
        color="#dee2e6"
        p={8}
        onClick={() => decriment(id)}
      >
        <Image src={minus} w={12} />
      </Badge>
      <Text size="sm" fw={500} fz={16}>
        {quantity[id]}
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
