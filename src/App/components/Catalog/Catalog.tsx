import { Container, Flex, Title } from '@mantine/core';

import CatalogItem from './CatalogItem';
import { type Product } from '../../App';
import SkeletonCard from '../UI/SkeletonCard';

type CatalogProps = {
  data: Product[];
  isLoading: boolean;
};

const Catalog = ({ data, isLoading }: CatalogProps) => {
  const skeleton = new Array(16)
    .fill(null)
    .map((_, i) => <SkeletonCard key={i} />);

  const productsList = data.map((product) => (
    <CatalogItem
      key={product.id}
      id={product.id}
      name={product.name}
      image={product.image}
      price={product.price}
    />
  ));

  return (
    <Container size={1280} mt={59} pt={60} pl={0} pr={0}>
      <Title order={1} fz={32} mb={49} ta="start">
        Catalog
      </Title>

      <Flex
        w={1280}
        mih={50}
        gap={24}
        justify="flex-start"
        align="flex-start"
        wrap="wrap"
      >
        {isLoading ? skeleton : productsList}
      </Flex>
    </Container>
  );
};

export default Catalog;
