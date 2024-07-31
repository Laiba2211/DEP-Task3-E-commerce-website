const User = require('../models/User');

// Signup handler
const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = new User({
            name,
            email,
            password
        });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
        
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


module.exports = { login,signup };
