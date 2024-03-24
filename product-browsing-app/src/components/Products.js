import React from 'react';

const Products = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div className="product">
              <div className="image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
