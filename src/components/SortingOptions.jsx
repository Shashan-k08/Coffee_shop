// src/SortingOptions.js
import React from 'react';

function SortingOptions({ onSort }) {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="products-container">
      <div className="total-products"> Show all Products(9)</div>
    <div className="select-container">
      <label>Sort by:</label>
      <select onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
    </div>
  );
}

export default SortingOptions;
