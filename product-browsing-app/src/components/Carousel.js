// Carousel.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from './Product';

const Carousel = ({ products, cartItems, onAdd, onRemove }) => {
  const location = useLocation();
  console.log('Location:', location.pathname); // Log location.pathname to check its value
  const showCarousel = location.pathname === '/' || location.pathname === '/signin';

  if (!showCarousel) return null;

  return (
    <div className="carousel-container">
      {products.map((product) => (
        <div key={product.id}>
          <Product
            product={product}
            onAdd={onAdd}
            onRemove={onRemove}
            countInCart={cartItems.find((item) => item.id === product.id)?.quantity || 0}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
