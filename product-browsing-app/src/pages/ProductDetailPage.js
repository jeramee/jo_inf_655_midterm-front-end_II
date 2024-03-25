// /pages/ProductDetailPage

import React, { useEffect } from 'react';
import ProductDetail from '../components/ProductDetail';
import Products from '../data/Products.json'; // Correct import path

const ProductDetailPage = () => {
  useEffect(() => {
    console.log("ProductDetailPage rendered");
  }, []);

  return (
    <div>
      <h2>Product Detail</h2>
      {/* Pass the Products data to the ProductDetail component */}
      <ProductDetail productId={1} products={Products} /> {/* Change the productId to the desired product ID */}
      {/* Product detail page content goes here */}
    </div>
  );
};

export default ProductDetailPage;
