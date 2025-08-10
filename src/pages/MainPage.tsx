import './App.css';

import '@mantine/core/styles.css';

import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';

export default function MainPage() {
  return (
    <>
      <Header />
      <Catalog />
    </>
  );
}
