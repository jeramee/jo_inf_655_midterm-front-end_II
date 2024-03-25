import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

export default function Header(props) {
  return (
    <header className="block center">
      <div className="title-container">
        <h1>Welcome to the Product Browsing App!</h1>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          <img src="/assets/img/cafe.jpg" alt="Cafe Logo" className="logo-img" />
        </Link>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/search" className="nav-link">Search</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
        <Link to="/signin" className="nav-link">Sign In</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
      </div>
    </header>
  );
}
