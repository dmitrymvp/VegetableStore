import { Card, Image, Group, Text } from '@mantine/core';
import ProductButton from './ProductButton';
import {useState} from 'react'
import ProductQuantity from './ProductQuantity';

type ProductCardProps = {
  name: string;
  image: string;
  price: number;
  id?: string;
  addCart: (id, quantity) => void;
}

function ProductCard({ name, image, price, addCart, id} : ProductCardProps) {

    const [quantity, setQuantity] = useState(1);

      const increment = () => {
        setQuantity((prev) => prev + 1)
      };
      const decrement = () => {
        setQuantity((prev) => Math.max(prev - 1, 1))
        
      };
  
  console.log('productcart render')

  return (
    <Card h={414} w={302} padding="md" radius="md">
      <Image src={image} height={276} alt="Norway" />

      <Group justify="space-between" mt={15}>
        <Group gap="xs">
          <Text size="lg" fw={600}>
            {name.split(' - ')[0]}
          </Text>
          <Text c="dimmed" size="sm" fw={600}>
            {name.split(' - ')[1]}
          </Text>
        </Group>
        <ProductQuantity quantity={quantity} increment={increment} decrement={decrement}/>
      </Group>

      <Group justify="space-between">
        <Text fw={700} fz="xl" mt="xs">
          {`$${price}`}
        </Text>
        <ProductButton addCart={() => addCart(id, quantity)} />
      </Group>
    </Card>
  );
}
export default ProductCard;
