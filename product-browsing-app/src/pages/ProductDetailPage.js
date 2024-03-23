// /pages/ProductDetailPage.js

import React, { useEffect } from 'react';

const ProductDetailPage = () => {
  useEffect(() => {
    console.log("ProductDetailPage rendered");
  }, []);

  return (
    <div>
      <h2>Product Detail</h2>
      {/* Product detail page content goes here */}
    </div>
  );
};

export default ProductDetailPage;
