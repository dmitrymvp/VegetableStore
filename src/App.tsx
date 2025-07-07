import './App.css';
import axios from 'axios';

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header/Header';
import { useEffect, useState, createContext } from 'react';
export const QuantityContext = createContext('without provider');

export default function App() {
  const [data, setData] = useState([]);
  const [visibleCart, setVisibleCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

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

  const openCart = () => {
    setVisibleCart((prev) => !prev);
  };

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  const decriment = () => {
    setQuantity((prev) => prev - 1);
  };

  return (
    <MantineProvider>
      {
        <>
          <Header openCart={openCart} />
          <QuantityContext.Provider value={{ quantity, increment, decriment }}>
            <Catalog data={data} />
          </QuantityContext.Provider>
        </>
      }
    </MantineProvider>
  );
}
