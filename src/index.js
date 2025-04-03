/**
 * Entry Point of the Application
 * 
 * This file is the entry point for the React application. It imports the necessary dependencies and renders the 
 * root component (`App`) to the DOM. This is where the entire app gets injected into the HTML.
 * 
 * Dependencies:
 * - React: To handle the JSX and the component structure.
 * - ReactDOM: To render the React component into the DOM.
 * 
 * @returns {JSX.Element} The app rendered to the root DOM element.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';  // Import global styles for the app
import App from './app';    // Import the main App component

// Create a root reference where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the 'root' DOM element
root.render(
    <App />  // App component serves as the top-level component for the entire application
);
