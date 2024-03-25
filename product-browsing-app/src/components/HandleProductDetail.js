// HandleProductDetails.js

import React, { useState } from 'react';
import ProductDetail from './ProductDetail';

const HandleProductDetails = () => {
    const onSelectProduct = (productId) => {
      console.log(`Product with ID ${productId} selected`);
      // Implement your logic here
    };
  
    console.log("HandleProductDetails - onSelectProduct:", onSelectProduct);
  
    return (
      <div>
        <ProductDetail productId={1} onSelectProduct={onSelectProduct} />
      </div>
    );
  };
  

export default HandleProductDetails;
