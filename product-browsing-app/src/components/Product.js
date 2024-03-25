// /components/Product.js

import React from 'react';
import './Product.css'; // Import the CSS file for styling

const Product = ({ product, onAdd, onRemove, countInCart }) => {
  // Check if the product object is defined before destructuring its properties
  if (!product) {
    return null; // Return null instead of <div>Loading...</div>
  }

  const { id, name, image, price } = product;

  const handleRemove = () => {
    onRemove(id); // Remove the product from the cart
  };

  return (
    <div className="product">
      <h1>Product</h1>
      <div className="image-container">
        <img src={image} alt={name} className="product-img" />
      </div>
      <div className="buffer-area"></div> {/* Add the buffer area */}
      <div className="product-info">
        <h3>{name}</h3>
        <p>${price}</p>
        <div className="add-to-cart">
          <button onClick={() => onAdd(product)}>Add to Cart</button>
        </div>
        <div className="remove-from-cart">
          <button className="remove-button" onClick={handleRemove}>Remove from Cart</button>
        </div>
        <div className="quantity--cart">
          <span>Quantity in Cart: {countInCart}</span>
        </div>  
      </div>
      <div className="space-after-product">
      </div>
    </div>
  );
};

export default Product;


