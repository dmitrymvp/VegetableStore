import './App.css';
import axios from 'axios';

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header/Header';
import { useEffect, useState, createContext } from 'react';
export const AppContext = createContext('without provider');

export default function App() {
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
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

    fetchData();
  }, []);

  const addCart = (id: number) => {
    const product = data.find((item) => item.id === id);

    setCart((prev) => {
      const isProductInCard = prev.some((item) => item.id === id);
      if (isProductInCard) return prev;
      return [...cart, product];
    });
  };

  const increment = (id: number) => {
    setQuantity((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };
  const decrement = (id: number) => {
    setQuantity((prev) => ({ ...prev, [id]: (prev[id] || 0) - 1 }));
  };

  return (
    <MantineProvider>
      {
        <>
          <AppContext.Provider
            value={{ data, quantity, cart, increment, decrement, addCart }}
          >
            <Header />
            <Catalog data={data} addCart={addCart} />
          </AppContext.Provider>
        </>
      }
    </MantineProvider>
  );
}
