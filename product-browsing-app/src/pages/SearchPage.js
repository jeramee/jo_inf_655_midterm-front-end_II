import React, { useState } from 'react';
import Search from '../components/Search';
import { BrowserRouter as Route, Routes } from 'react-router-dom'; // Updated import statement
import Carousel from '../components/Carousel';
import '../App.css';

const SearchPage = ({ products, onAdd, onRemove }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleSearch = () => {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  const handleAddToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
      const exist = cartItems.find((x) => x.id === productId);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === productId ? { ...exist, quantity: exist.quantity + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
      }
    }
  };

  const getQuantityInCart = (productId) => {
    const productInCart = cartItems.find((item) => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  return (
    <div className="search-page">
      <h1>Search Page</h1>
      <Search search={searchTerm} setSearch={setSearchTerm} handleSearch={handleSearch} />
      <div>
        <h2>Search Results:</h2>
        <ul>
          {searchResults.map(product => (
            <li key={product.id}>
              <div>
                <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
              </div>
              <div>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <div className="product-action">
                  <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                  <div className="quantity--cart">
                    <span>Quantity in Cart: {getQuantityInCart(product.id)}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Route>
        <div className="App">
          {/* Pass searchResults to the Carousel component */}
          <Carousel
            products={searchResults}
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        </div>
      </Route>
    </div>
  );
};

export default SearchPage;
