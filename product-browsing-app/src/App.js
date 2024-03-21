import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Search from './Search';
import Cart from './Cart';

const App = () => {
    // Dummy product data for demonstration
    const products = [
        { id: 1, name: 'Product 1', image: 'image1.jpg', price: 10 },
        { id: 2, name: 'Product 2', image: 'image2.jpg', price: 20 },
        { id: 3, name: 'Product 3', image: 'image3.jpg', price: 30 },
    ];

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <h1>Product Browsing App</h1>
                        <Products products={products} />
                    </Route>
                    <Route path="/product/:id" component={ProductDetail} />
                    <Route path="/search" component={Search} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
