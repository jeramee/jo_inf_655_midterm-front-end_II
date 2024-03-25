import React, { useState } from 'react';
import Search from '../components/Search';
import '../App.css'; // Importing CSS file for styling

const SearchPage = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleSearch = () => {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  const onAdd = (product) => {
    console.log('Adding product to cart:', product);
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      console.log('Product already exists in cart. Updating quantity...');
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      console.log('Product does not exist in cart. Adding new item...');
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleAddToCart = (productId) => {
    console.log('Adding product to cart with ID:', productId);
    const productToAdd = products.find(product => product.id === productId);
    console.log('Product to add:', productToAdd);
    if (productToAdd) {
      const exist = cartItems.find((x) => x.id === productId);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === productId ? { ...exist, quantity: exist.quantity + 1 } : x
          )
        );
      } else {
        // Update cartItems with functional form of setCartItems
        setCartItems(prevCartItems => [...prevCartItems, { ...productToAdd, quantity: 1 }]);
      }
  
      // Log the state of cartItems after it's been updated
      console.log('Cart items after updating:', cartItems);
    }
  };

  // Derive quantity in cart for a specific product from cartItems state
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
    </div>
  );
};

export default SearchPage;
