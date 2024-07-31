import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Products cartItems={cartItems} setCartItems={setCartItems} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} />} />
                <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
            </Routes>
        </Router>
    );
};

export default App;
