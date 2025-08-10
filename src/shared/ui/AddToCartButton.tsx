import { Button } from '@mantine/core';
import cart from '../../../assets/icons/cart.png';

type AddToCartButtonProps = {
  addCart: () => void;
};

const AddToCartButton = ({ addCart }: AddToCartButtonProps) => {
  return (
    <Button
      w={200}
      h={44}
      color="#E7FAEB"
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
      onClick={addCart}
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
