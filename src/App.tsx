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
  const [quantity, setQuantity] = useState({});
  const [cart, setCart] = useState([])

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

  const addCart = (id)=> {
const product = data.find(item=>item.id === id)
setCart([...cart, product])
console.log(cart)
  }

  useEffect(() => {
    fetchData();
    
  }, []);

  const increment = (id) => {
    setQuantity((prev) => ({...prev, [id]: (prev[id] || 1) + 1 }));
  };
  const decriment = (id) => {
    setQuantity((prev) => ({...prev, [id]: (prev[id] || 1) - 1}));
  };

  return (
    <MantineProvider>
      {
        <>
          <Header cart={cart}/>
          <QuantityContext.Provider value={{ quantity, increment, decriment }}>
            <Catalog data={data} addCart={addCart}/>
          </QuantityContext.Provider>
        </>
      }
    </MantineProvider>
  );
}
