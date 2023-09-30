// src/Header.js
import React from 'react';
import styled from 'styled-components';
import bacground1 from '../img/Mask Group.jpg';
import icon1 from '../img/Photo.jpg';
import '../App.css'
const HeaderWrapper = styled.header`

  
  
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <img className='head-img' src={bacground1} alt="" />
      <div className='header-icon'>
        <img className="icon-img" src={icon1} alt='' />
        <div className="icon-text">
          <h4>Coffee Store </h4>
          <p> St, Toronto, USA</p>
        </div>

      </div>
      <div className='products-txt'> <p>Products</p> <p>Photos</p></div>
      <hr/>
    </HeaderWrapper>
  );
};

export default Header;
