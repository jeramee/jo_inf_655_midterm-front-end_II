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
      <h1>Product Page</h1>
      <div className="image-container">
        <img src={image} alt={name} className="product-img" />
      </div>
      <div className="buffer-area"></div> {/* Add the buffer area */}
      <div className="product-info">
        <h3>{name}</h3>
        <p>${price}</p>
        <button onClick={() => onAdd(product)}>Add to Cart</button>
        <button onClick={handleRemove}>Remove from Cart</button>
        <span>Quantity in Cart: {countInCart}</span>
      </div>
    </div>
  );
};

export default Product;
