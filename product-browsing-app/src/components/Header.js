// /components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <Link to="/">
          <h1>Welcome to the Product Browsing App!</h1>
        </Link>
      </div>
      <div>
        <Link to="/cart" aria-label="View Cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </Link>{' '}
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
  );
}
