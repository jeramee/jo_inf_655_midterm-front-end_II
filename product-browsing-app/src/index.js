// index.js

import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( // Use ReactDOM.render to render the App component
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Specify the root element to render the app
);

reportWebVitals();
