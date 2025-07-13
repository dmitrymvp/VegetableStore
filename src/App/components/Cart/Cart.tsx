import {
  Button,
  Popover,
  Image,
  Group,
  Text,
  Flex,
  Divider,
  Container,
  Badge,
} from '@mantine/core';
import cartImage from '../../../assets/icons/cart.svg';
import cartContent from '../../../assets/cart_content.png';
import CartItem from './CartItem';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { QuantityContext } from '../../context/QauntityContext';

const Cart = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('without provider');
  }
  const { cart } = cartContext;

  const quantityContext = useContext(QuantityContext);
  if (!quantityContext) {
    throw new Error('without provider');
  }
  const { quantity } = quantityContext;

  const cartList = cart.map((item, index) => {
    return (
      <div key={item.id}>
        <CartItem
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price * (quantity[item.id] > 0 ? quantity[item.id] : 1)}
        ></CartItem>
        {index !== cart.length - 1 && (
          <Flex justify="flex-end">
            <Divider mt={16} w={320} />
          </Flex>
        )}
      </div>
    );
  });
  const getTotal = () => {
    return cart.reduce((acc, item) => {
      const count = quantity[item.id] ?? 1;
      return acc + item.price * count;
    }, 0);
  };

  const total = getTotal();

  return (
    <Popover position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button
          w={144}
          color="#54b46a"
          c="white"
          rightSection={
            <img
              src={cartImage}
              alt="cart"
              color="green"
              style={{ width: 16, height: 16 }}
            />
          }
          leftSection={<span />}
          fz="md"
        >
          {cart.length > 0 && (
            <Badge
              h={20}
              w={20}
              radius="lg"
              c="black"
              color="white"
              p={0}
              mr={10}
            >
              {cart.length}
            </Badge>
          )}
          Cart
        </Button>
      </Popover.Target>
      <Popover.Dropdown p={0} bdrs={15}>
        {cart.length === 0 ? (
          <Image src={cartContent}></Image>
        ) : (
          <Container p={20}>
            <Group w={395} gap={0}>
              {cartList}
            </Group>
            <Divider mt={20}></Divider>
            <Flex justify="space-between" mt={12}>
              <Text size="md" fw={600}>
                Total
              </Text>
              <Text size="md" fw={600}>
                $ {total}
              </Text>
            </Flex>
          </Container>
        )}
      </Popover.Dropdown>
    </Popover>
  );
};

export default Cart;
