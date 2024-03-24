// /components/Cart.js

import React from 'react';

const Cart = ({ cartItems, onRemove }) => {
  const removeFromCart = (productId) => {
    onRemove(productId);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
