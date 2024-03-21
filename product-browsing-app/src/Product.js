import React from 'react';

const Product = ({ name, image, price }) => {
    return (
        <div className="product">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;
