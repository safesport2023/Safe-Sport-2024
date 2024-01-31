import React from 'react';
import ReactDOM from 'react-dom/client'; // Corrected import statement
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';

// import Footer from './components/Footer';

// import Header from './components/Header';
// Remove import for createRoot since you're not using it


<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Avenir:wght@100;700&display=swap"></link>

Amplify.configure(config);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Footer /> */}
  </React.StrictMode>
);

reportWebVitals();
