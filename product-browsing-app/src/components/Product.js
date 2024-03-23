// /components/Product.js

import React from 'react';

const Product = ({ product, onAdd, onRemove }) => {
  // Check if the product object is defined before destructuring its properties
  if (!product) {
    return null; // Return null instead of <div>Loading...</div>
  }

  const { name, image, price } = product;

  return (
    <div className="product">
      <h1>Product Page</h1>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => onAdd(product)}>Add to Cart</button> {/* Add to Cart button */}
      <button onClick={() => onRemove(product)}>Remove from Cart</button> {/* Remove from Cart button */}
      {/* Add any additional product-related content here */}
    </div>
  );
};

export default Product;
