# INF 655 Front-end Development II - Midterm ReactJS Shopping App

**Author:** Jeramee Oliver  
**Date:** 3/21/24  
**Course:** INF 655 - Front-end Development II

## Project Overview

Develop a web application using ReactJS that allows users to browse, search, and purchase products.  application will include several key pages and components, focusing on applying ReactJS concepts like components, props, state, context, navigation, and forms. Additionally, style the application using CSS or  own choice to create an appealing and user-friendly interface.

## Files

- **src/Product.js:** Component to display product information.
- **src/Products.js:** Component to list available products.
- **src/Cart.js:** Component to show items in the cart.
- **src/App.js:** Main component managing the application.
- **src/AppContext.js:** Context for state management.
- **src/Checkout.js:** Component for checkout functionality.
- **src/styles.css:** CSS stylesheet for styling components.

## Contents

1. [Setup and Basic Components](#setup-and-basic-components)
2. [Advanced Components and State Management](#advanced-components-and-state-management)
3. [Navigation and Routing](#navigation-and-routing)
4. [Context for State Management](#context-for-state-management)
5. [Checkout and Form Handling](#checkout-and-form-handling)
6. [Styling and User Interface](#styling-and-user-interface)
7. [Project Documentation and Code Quality](#project-documentation-and-code-quality)

## Setup and Basic Components

- Initialize a new ReactJS application using Create React App.
- Create a Product component to display product information: name, image, price, and an "Add to Cart" button.
- Implement a Products component to list available products, utilizing the Product component for each item.

## Advanced Components and State Management

- Develop a Cart component to show items the user intends to purchase, including product name, image, price, quantity, and a "Remove from Cart" button.
- Use React state to manage the items in the cart, implementing functionality to add and remove products.

## Navigation and Routing

- Integrate react-router-dom for navigation, setting up routes for  Home, Product Detail, Search, and Cart pages.
- Ensure smooth navigation within  application without page reloads.

## Context for State Management

- Implement React Context to manage and share state across components, such as the shopping cart's content, avoiding prop drilling for deeply nested components.

## Checkout and Form Handling

- Create a Checkout component with a form for shipping information and order review, displaying cart items and the total price.
- Handle form submissions, clearing the cart upon a successful submission and redirecting the user to a "Thank You" page.

## Styling and User Interface

- Use CSS to style  components, focusing on creating a visually appealing and intuitive interface.

## Project Documentation and Code Quality

- Document  project in a README file, detailing setup instructions, features, and any additional information needed to run and use  application.
- Ensure  code is well-organized, commented, and adheres to best practices for readability and maintenance.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in  browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode. See the [running tests documentation](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and filenames include hashes.  app is ready to be deployed! See the [deployment documentation](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
