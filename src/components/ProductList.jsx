// src/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  return (
    <div className='product-list container'>
      <div className="row">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
}

export default ProductList;
