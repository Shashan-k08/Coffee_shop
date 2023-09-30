// src/ProductCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
border: 1px solid #ddd;
padding: 1rem;
margin: 1rem;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 4px;
`;

const ProductCard = ({ product }) => {
  return (
    <div className='row'>
      <div className="col-sm">
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={product.image} alt="Card image cap" />
          <div class="card-body">
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
