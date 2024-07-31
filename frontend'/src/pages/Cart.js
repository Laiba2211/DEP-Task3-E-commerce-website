import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems }) => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout'); // Navigate to the checkout page
    };

    return (
        <Container>
            <h2 className="my-4">Your Cart</h2>
            <ListGroup>
                {cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                        {item.name} - ${item.price}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Button variant="primary" className="mt-4" onClick={handleCheckout}>
                Checkout
            </Button>
        </Container>
    );
};

export default Cart;
