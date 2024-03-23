// /pages/HomePage.js

import React, { useState, useEffect } from 'react';
import Product from '../components/Product'; // Assuming Product component is in the components directory

const HomePage = () => {
    // Assuming you have a state to store the product
    const [product, setProduct] = useState(null);

    // Assuming you have a function to fetch the product data
    const fetchProduct = () => {
        // Example fetch function, replace with your actual data fetching logic
        const productData = {
            id: 1,
            name: 'Cheese Grater 1',
            image: 'path/to/image',
            price: 10
        };
        setProduct(productData);
    };

    useEffect(() => {
        console.log("HomePage rendered");
        fetchProduct();
    }, []);

    return (
        <div>
            {/* Check if product is available before rendering the Product component */}
            {product && (
                <Product product={product} />
            )}
        </div>
    );
};

export default HomePage;
