import { Button } from '@mantine/core';
import cart from '../../assets/icons/cart.png';

const ProductButton = ({ addCart }) => {
  console.log('product button render')

  return (
    <Button
      onClick={addCart}
      w={200}
      h={44}
      color=" #e7faeb"
      c="#3b944e"
      rightSection={
        <img
          src={cart}
          alt="cart"
          color="green"
          style={{ width: 20, height: 20 }}
        />
      }
      leftSection={<span />}
      mt="md"
      fz="md"
      lts={0.5}
    >
      Add to cart
    </Button>
  );
};

export default ProductButton;
