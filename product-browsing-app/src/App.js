// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Removed Routes import as it's not used
import Header from './components/Header';
import Product from './components/Product'; // Changed from Main to Product
import Cart from './components/Cart';
import { CheeseGrater1, CheeseGrater2, CoffeeCup1, CoffeeCup2, Fan1, Fan2 } from './images/ImageImports';

function App() {
  // Define products with image imports
  const products = [
    { id: 1, name: 'Cheese Grater 1', image: CheeseGrater1, price: 10 },
    { id: 2, name: 'Cheese Grater 2', image: CheeseGrater2, price: 20 },
    { id: 3, name: 'Coffee Cup 1', image: CoffeeCup1, price: 15 },
    { id: 4, name: 'Coffee Cup 2', image: CoffeeCup2, price: 25 },
    { id: 5, name: 'Fan 1', image: Fan1, price: 30 },
    { id: 6, name: 'Fan 2', image: Fan2, price: 35 }
  ];

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <Router>
      <div className="App">
        <Header countCartItems={cartItems.length}></Header>
        <div className="row">
          <Product products={products} onAdd={onAdd}></Product> {/* Changed from Main to Product */}
          <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>
        </div>
      </div>
    </Router>
  );
}

export default App;
