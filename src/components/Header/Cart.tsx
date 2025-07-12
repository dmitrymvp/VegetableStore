import { Button, Divider, Popover, Flex, Image } from '@mantine/core';
import cartImage from '../../assets/icons/cart.png';
import cartContent from '../../assets/cart_content.png';
import ProductIntoCard from './ProductIntoCart';
import { useContext } from 'react';
import { AppContext } from '../../App';

const Cart = () => {
  console.log('catalog render')
  
  const context = useContext(AppContext);
  const { cart } = context;
  console.log(cart)
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
          Cart
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        {cart.length === 0 ? (
          <Image src={cartContent}></Image>
        ) : (
          cart.map((item) => {
            return (
              <>
                <ProductIntoCard
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                ></ProductIntoCard>
                <Flex justify="flex-end">
                  <Divider mt={16} w={320} />
                </Flex>
              </>
            );
          })
        )}
      </Popover.Dropdown>
    </Popover>
  );
};

export default Cart;
