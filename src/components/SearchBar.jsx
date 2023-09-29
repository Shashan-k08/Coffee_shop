// src/SearchBar.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <SearchInput
      type="text"
      placeholder="Search for products..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
