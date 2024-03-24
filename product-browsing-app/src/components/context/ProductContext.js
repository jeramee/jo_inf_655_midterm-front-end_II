// /src/components/context/ProductContext.js

import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Initialize product data state

  // You can add functions to manage product data here, similar to what you did in TaskContext

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
