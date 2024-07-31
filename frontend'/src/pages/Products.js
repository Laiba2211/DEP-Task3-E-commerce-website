import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = ({ cartItems, setCartItems }) => {
    const products = [
        { id: 1, name: 'Rose', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKhrw73lEKIGhvUrWCR0dOCeZjAu5lv1AdA&s' },
        { id: 2, name: 'Tulip', price: 80, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5ahfowQqFRcB2CwA640JoUc9aPfLHGaUgA&s" },
        { id: 3, name: 'Lily', price: 120, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OoltymDW25v-fg9JxSSNq03Xks0_7_A3Dg&s' },
        { id: 4, name: 'Sunflower', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZ-l9UJsqcugYwukqg5NNnsZPIVchZp2tEw&s'},
        { id: 5, name: 'Orchid', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEMrlMiesyko6pWagd5jskD1aJh-U5ArxUQ&s' },
        { id: 6, name: 'Daisy', price: 270, image: 'https://static.vecteezy.com/system/resources/previews/020/671/770/non_2x/daisy-flower-set-cartoon-illustration-vector.jpg' },
        { id: 7, name: 'Carnation', price: 190, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN12ARHSOHxyDlrHSw2-9NVy5QFyO0jlqxow&s' },
        { id: 8, name: 'Peony', price: 180, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbsDqlju401qpRunjPq2X4DgD4wgFpWZ01g&s' },
        { id: 9, name: 'Chrysanthemum', price: 140, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16rQ8L_RDvbrxSFoL0tRsOUBNeqvVddPY0w&s' },
        { id: 10, name: 'Gerbera', price: 170, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJCpRlZEu0vTMCBPe7_ogjakJ-94z4oIeeA&s' },
    ];
    
    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
        alert(`${product.name} added to cart`);
    };

    return (
        <Container>
            <h2 className="my-4">Welcome to Laiba's Flower Store</h2>
            <Row>
                {products.map(product => (
                    <Col md={4} key={product.id} className="mb-4">
                        <Card>
                            <Card.Img 
                                variant="top" 
                                src={product.image} 
                                style={{ height: '200px', objectFit: 'cover' }} // Adjust the height and objectFit
                            />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.price} Pkr</Card.Text>
                                <Button variant="primary" onClick={() => handleAddToCart(product)}>
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;
