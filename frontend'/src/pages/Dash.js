import React, { useState } from 'react';
import './Dash.css'; // Make sure to create this CSS file for styling

const flowerItems = [
    { id: 1, name: 'Rose', price: 10.00, image: 'https://www.example.com/rose.jpg' },
    { id: 2, name: 'Tulip', price: 8.00, image: 'https://www.example.com/tulip.jpg' },
    { id: 3, name: 'Sunflower', price: 12.00, image: 'https://www.example.com/sunflower.jpg' },
    { id: 4, name: 'Lily', price: 15.00, image: 'https://www.example.com/lily.jpg' },
];

const Dash = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <div className="main-page">
            <h1>Welcome to Laiba's Flowerstore</h1>
            <div className="flower-list">
                {flowerItems.map(item => (
                    <div key={item.id} className="flower-item">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>${item.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <button className="checkout-button" onClick={() => alert('Redirecting to checkout...')}>Go to Checkout</button>
        </div>
    );
};

export default Dash;
