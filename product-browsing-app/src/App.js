// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import Carousel from './components/Carousel';
import { CheeseGrater1, CheeseGrater2, CoffeeCup1, CoffeeCup2, Fan1, Fan2 } from './images/ImageImports';
import './App.css';

function App() {
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
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const onRemove = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div className="App">
        <Header countCartItems={cartItems.length} />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Product Browsing App!</h1>} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} onRemove={onRemove} />}
          />
        </Routes>
        <h2>Products</h2>
        <Carousel
          products={products}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      </div>
    </Router>
  );
}

export default App;
