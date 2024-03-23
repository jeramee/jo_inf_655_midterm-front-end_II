// /context/CartContext.js

import React, { createContext, useState } from 'react';

// Create a context object for managing the cart state
export const CartContext = createContext();

// Create a CartProvider component to provide the cart state to its children
export const CartProvider = ({ children }) => {
  // Initialize cart state using useState hook
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // Value object containing cart state and functions to update it
  const value = {
    cart,
    addToCart,
    removeFromCart,
  };

  // Provide the cart state and functions to its children using the CartContext.Provider
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
