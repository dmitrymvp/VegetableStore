import { Container, Flex, Title } from '@mantine/core';
import CatalogItem from './CatalogItem';
import { type Product } from '../../App';

type CatalogProps = {
  data: Product[];
};

const Catalog = ({ data }: CatalogProps) => {
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
        {data.map((product) => (
          <CatalogItem
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default Catalog;
