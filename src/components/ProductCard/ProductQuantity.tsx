import { Group, Badge, Text, Image } from '@mantine/core';
import minus from '../../assets/icons/Rectangle 70.svg';
// import plus from '../../assets/icons/Union.svg';
import plus from '../../assets/icons/Union.png';

type ProductQuantityProps = {
  quantity: number;
  increment: ()=> void;
  decrement: ()=> void;

}

const ProductQuantity = ({quantity, increment, decrement }: ProductQuantityProps) => {
  console.log('product quantity render')


  return (
    <Group justify="flex-end" gap="xs">
      <Badge
        h={30}
        w={30}
        radius="md"
        color="#dee2e6"
        p={8}
        onClick={decrement}
      >
        <Image src={minus} w={12} />
      </Badge>
      <Text size="sm" fw={500} fz={16}>
        {quantity}
      </Text>
      <Badge
        h={30}
        w={30}
        radius="md"
        color="#dee2e6"
        p={8}
        onClick={increment}
      >
        <Image src={plus} w={12} />
      </Badge>
    </Group>
  );
};

export default ProductQuantity;
