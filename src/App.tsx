import './App.css';
import axios from 'axios';

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header/Header';
import { useEffect, useState, createContext } from 'react';

export const AppContext = createContext('without provider');
export const QuantityContext = createContext('without provider')

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};


export default function App() {
  const [data, setData] = useState([]);
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

  const addCart = (id: number, quantity: number) => {
    const product = data.find((item) => item.id === id);

    setCart((prev) => {
      const isProductInCard = prev.some((item) => item.id === id);

      if (isProductInCard) return prev;

      return [...prev, {...product, quantity}];
    });
  };



  return (
    <MantineProvider>
      {
        <>
          <AppContext.Provider
            value={{ data, cart,  addCart }}
          >

            <Header />
            <Catalog data={data} addCart={addCart} />
          </AppContext.Provider>
        </>
      }
    </MantineProvider>
  );
}
