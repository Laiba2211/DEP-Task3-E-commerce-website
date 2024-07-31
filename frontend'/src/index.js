import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated method
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);