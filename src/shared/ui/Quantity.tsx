import { Group, Text, Image, Button } from '@mantine/core';
import minus from '../assets/icons/Rectangle 70.svg';
import plus from '../assets/icons/Union.png';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {
  decrement,
  increment,
  removeFromCart,
} from '../../App/store/redusers/VegetableSlice';

type QuantityProps = {
  id: number;
};

const Quantity = ({ id }: QuantityProps) => {
  const dispatch = useAppDispatch();

  const { quantity } = useAppSelector((state) => state.vegetableReducer);

  return (
    <Group justify="flex-end" gap="xs">
      <Button
        data-testid="decrement"
        h={30}
        w={30}
        radius="md"
        color="#dee2e6"
        p={8}
        onClick={
          quantity[id] > 1
            ? () => dispatch(decrement({ id: id }))
            : () => dispatch(removeFromCart({ id: id }))
        }
      >
        <Image src={minus} alt="minus" w={12} />
      </Button>
      <Text size="sm" fw={500} fz={16}>
        {quantity[id] || 1}
      </Text>
      <Button
        data-testid="increment"
        h={30}
        w={30}
        radius="md"
        color="#dee2e6"
        p={8}
        onClick={() => dispatch(increment({ id: id }))}
      >
        <Image src={plus} alt="plus" w={12} />
      </Button>
    </Group>
  );
};

export default Quantity;
