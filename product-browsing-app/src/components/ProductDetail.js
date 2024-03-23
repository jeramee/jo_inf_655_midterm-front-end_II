// /components/ProductDetail.js

import React from 'react';

const ProductDetail = ({ product }) => {
    return (
        <div>
            {/* Render product details */}
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default ProductDetail;
