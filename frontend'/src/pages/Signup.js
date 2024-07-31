import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/signup', { name, email, password });
            alert("User created successfully");
            window.location = '/';
            console.log(response.data); // Handle success response
        } catch (error) {
            console.error(error.response.data); // Handle error response
        }
    };

    return (
        <div className="form-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-success">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
