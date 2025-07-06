import { Container, Flex, Title } from '@mantine/core';
import ProductCard from '../ProductCard/ProductCard';

const Catalog = ({ data }) => {
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
        {data.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Flex>
    </Container>
  );
};

export default Catalog;
