import { Button, Flex, Image, Popover, Text } from '@mantine/core';
import logo from '../../assets/logo.svg';
import Cart from './Cart';

const Header = () => {
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

      <Cart />
    </Flex>
  );
};

export default Header;
