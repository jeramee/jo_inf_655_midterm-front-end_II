// /components/MyComponent.js

import React from 'react';
import { CheeseGrater1, CheeseGrater2, CoffeeCup1, CoffeeCup2, Fan1, Fan2 } from '../images/ImageImports';

const MyComponent = () => {
    return (
        <div>
            <img src={CheeseGrater1} alt="Cheese Grater 1" />
            <img src={CheeseGrater2} alt="Cheese Grater 2" />
            <img src={CoffeeCup1} alt="Coffee Cup 1" />
            <img src={CoffeeCup2} alt="Coffee Cup 2" />
            <img src={Fan1} alt="Fan 1" />
            <img src={Fan2} alt="Fan 2" />
        </div>
    );
};

export default MyComponent;
