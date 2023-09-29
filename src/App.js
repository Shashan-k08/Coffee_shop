// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import SortingOptions from './components/SortingOptions';
import mockData from './data';

function App() {
  const [products, setProducts] = useState(mockData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'price') {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div>
      <Header />
      <SearchBar onSearch={(term) => setSearchTerm(term)} />
      <SortingOptions onSort={(value) => setSortBy(value)} />
      <ProductList products={sortedProducts} />
    </div>
  );
}

export default App;
