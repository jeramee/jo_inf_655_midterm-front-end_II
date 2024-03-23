// /routes/AppRoutes.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductDetailPage from '../pages/ProductDetailPage';
import SearchPage from '../pages/SearchPage';
import CartPage from '../pages/CartPage';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/product/:id" component={ProductDetailPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
