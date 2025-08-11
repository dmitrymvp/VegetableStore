import { Container, Flex, Title } from '@mantine/core';

import CatalogItem from '../../entities/CatalogItem/CatalogItem';
import SkeletonCard from '../../shared/ui/SkeletonCard';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { fetchProducts } from '../../App/store/redusers/VegetableThunk';

const Catalog = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state) => state.vegetableReducer,
  );

  const skeleton = new Array(16)
    .fill(null)
    .map((_, i) => <SkeletonCard key={i} />);

  const productsList = products.map((product) => (
    <CatalogItem
      key={product.id}
      id={product.id}
      name={product.name}
      image={product.image}
      price={product.price}
    />
  ));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
        {error && <h2>{error}</h2>}
      </Flex>
    </Container>
  );
};

export default Catalog;
