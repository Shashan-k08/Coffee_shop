// src/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Coffee Store</h1>
    </HeaderWrapper>
  );
};

export default Header;
