import './App.css';
import axios from 'axios';

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json',
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MantineProvider>
      {
        <>
          <Header />
          <Catalog data={data} />
        </>
      }
    </MantineProvider>
  );
}
