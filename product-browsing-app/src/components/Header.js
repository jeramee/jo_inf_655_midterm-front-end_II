// /components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

export default function Header(props) {
  return (
    <header className="block center">
      <div className="logo-container">
        <Link to="/" className="logo">
          <h1>Welcome to the Product Browsing App!</h1>
        </Link>
      </div>
      <div className="nav-links">
        <div className="nav-left">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/cart" className="nav-link" aria-label="View Cart">
            Cart{' '}
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ''
            )}
          </Link>
          <Link to="/signin" className="nav-link">Sign In</Link>
        </div>
      </div>
    </header>
  );
}
