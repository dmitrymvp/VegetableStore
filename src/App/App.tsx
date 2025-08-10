import './App.css';
import axios from 'axios';

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';
import type { Product } from '../shared/types/types';
import MainPage from '../pages/MainPage';

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
      <MainPage />
    </MantineProvider>
  );
}
