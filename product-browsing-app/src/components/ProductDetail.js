import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';

const ProductDetail = ({ productId }) => {
  const { products } = useContext(ProductContext);

  // Find the selected product based on productId
  const selectedProduct = products.find(product => product.id === productId);

  // Render product details or a message if the product is not found
  return (
    <div>
      {selectedProduct ? (
        <>
          <h1>{selectedProduct.title}</h1>
          <p>{selectedProduct.description}</p>
          {/* Add more details as needed */}
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetail;
