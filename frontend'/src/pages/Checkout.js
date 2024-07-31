// src/pages/Checkout.js
import React from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkout = ({ cartItems }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the checkout form submission here
        alert('Order placed successful!');
        window.location = '/';

    };

    return (
        <Container>
            <h2 className="my-4">Checkout</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>

                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>${item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter your address" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Confirm Order
                        </Button>
                    </Form>
                </>
            )}
        </Container>
    );
};

export default Checkout;
