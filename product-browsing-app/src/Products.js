import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
    return (
        <div className="products">
            {products.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default Products;
