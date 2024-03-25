// ProductDetail.js
import React from 'react';

const ProductDetail = ({ productId, onSelectProduct, products }) => {
  console.log("ProductDetail - productId:", productId);
  console.log("ProductDetail - onSelectProduct:", onSelectProduct);
  console.log("ProductDetail - products:", products);

  const handleProductDetail = () => {
    console.log("ProductDetail - handleProductDetail - productId:", productId);
    onSelectProduct(productId);
  };

  // Find the selected product based on productId
  const selectedProduct = products.find(product => product.id === productId);

  // Render product details or a message if the product is not found
  return (
    <div>
      {selectedProduct ? (
        <>
          <h1>{selectedProduct.name}</h1>
          <p>{selectedProduct.description}</p>
          {/* Add more details as needed */}
        </>
      ) : (
        <p>Product not found.</p>
      )}
      {/* Example button triggering the handleProductDetail function */}
      <button onClick={handleProductDetail}>Product Detail</button>
    </div>
  );
};

export default ProductDetail;
