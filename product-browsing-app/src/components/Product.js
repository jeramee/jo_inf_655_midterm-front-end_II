// /components/Product.js

import React from 'react';
import ProductDetail from './ProductDetail';

const Product = ({ product }) => {
    // Check if the product object is defined before destructuring its properties
    if (!product) {
      return <div>Loading...</div>; // Render a loading indicator or handle the loading state appropriately
    }
  
    const { name, image, price } = product;
  
    return (
      <div className="product">
        <h1>Product Page</h1>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
        {/* Add any additional product-related content here */}
      </div>
    );
  };
  
  export default Product;
