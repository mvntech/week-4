const express = require('express');
const router = express.Router();
const User = require('../../models/User');

// POST /register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
    
        // check if user exists
        const userExist = await User.findOne({ email });
        if (userExist) return res.status(400).json({ message: 'User email already exists' });
    
        // register user
        const user = new User({ name, email, password });
        await user.save();

        res.status(201).json({ message: 'User register successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

module.exports = router;
