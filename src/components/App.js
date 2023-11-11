import React from 'react';
import './App.css';
import Header from './Header/Header';
import ProductCategories from './ProductCategories/ProductCategories';
import Varieties from './CoffeeVarieties/Varieties';

function App() {
  return (
    <>
      <Header />
      <ProductCategories />
      <Varieties />
    </>
  );
}

export default App;
