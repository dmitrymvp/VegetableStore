import { Button, Flex, Image, Popover, Text } from '@mantine/core';
import logo from '../../assets/logo.svg';
import cart from '../../assets/icons/cart.png';
import cartContent from '../../assets/cart_content.png';

const Header = ({ openCart }) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      h={65}
      w={1440}
      bg="white"
      pos="fixed"
      top={0}
      style={{ zIndex: 10 }}
      pl={20}
      pr={20}
      pt={7}
      pb={7}
    >
      <Image src={logo} w={209} fit="contain" />

      <Popover position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button
            w={144}
            color="#54b46a"
            c="white"
            rightSection={
              <img
                src={cart}
                alt="cart"
                color="green"
                style={{ width: 16, height: 16 }}
              />
            }
            leftSection={<span />}
            fz="md"
            onClick={openCart}
          >
            Cart
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Image src={cartContent} />
        </Popover.Dropdown>
      </Popover>
    </Flex>
  );
};

export default Header;
