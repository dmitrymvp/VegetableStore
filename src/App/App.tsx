import './App.css';
import axios from 'axios';

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';
import { QuantityProvider } from './context/QauntityContext';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import { CartProvider } from './context/CartContext';

export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export default function App() {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json',
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <MantineProvider>
      {
        <CartProvider data={data}>
          <QuantityProvider>
            <Header />
            <Catalog data={data} isLoading={isLoading} />
          </QuantityProvider>
        </CartProvider>
      }
    </MantineProvider>
  );
}
