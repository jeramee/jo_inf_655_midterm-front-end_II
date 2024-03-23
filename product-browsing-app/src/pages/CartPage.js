// /pages/CartPage.js

import React, { useEffect } from 'react';

const CartPage = () => {
  useEffect(() => {
    console.log("CartPage rendered");
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      {/* Cart content goes here */}
    </div>
  );
};

export default CartPage;
