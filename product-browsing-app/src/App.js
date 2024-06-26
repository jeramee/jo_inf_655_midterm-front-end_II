// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import statement
import Header from './components/Header';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'; // Corrected import path// Corrected import path
import Carousel from './components/Carousel';
import { CheeseGrater1, CheeseGrater2, CoffeeCup1, CoffeeCup2, Fan1, Fan2 } from './images/ImageImports';
import '../src/App.css'; // Import the App.css file
import SearchPage from './pages/SearchPage'; // Import the SearchPage component

function App() {
  const products = [
    { id: 1, name: 'Cheese Grater 1', image: CheeseGrater1, price: 10, description: 'This is Cheese Grater 1.' },
    { id: 2, name: 'Cheese Grater 2', image: CheeseGrater2, price: 20, description: 'This is Cheese Grater 2.' },
    { id: 3, name: 'Coffee Cup 1', image: CoffeeCup1, price: 15, description: 'This is Coffee Cup 1.' },
    { id: 4, name: 'Coffee Cup 2', image: CoffeeCup2, price: 25, description: 'This is Coffee Cup 2.' },
    { id: 5, name: 'Fan 1', image: Fan1, price: 30, description: 'This is Fan 1.' },
    { id: 6, name: 'Fan 2', image: Fan2, price: 35, description: 'This is Fan 2.' }
  ];

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevCartItems => {
      return prevCartItems.map(item => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };

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
          <Route path="/signup" element={<SignUp />} /> {/* Updated Route component */}
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} onRemove={onRemove} onUpdateQuantity={updateQuantity} />}
          />
          <Route path="/search" element={<SearchPage products={products} onAdd={onAdd} />} />        
        </Routes>
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
