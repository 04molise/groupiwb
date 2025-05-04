const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Importing the User model

// Middleware to check if the user is authenticated
const authMiddleware = async (req, res, next) => {
    try {
        // Get token from the request header (Authorization header should contain Bearer token)
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).send({ message: 'Access denied, no token provided.' });
        }

        // Verify the token using JWT secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Find the user by the decoded user ID from the token
        const user = await User.findById(decoded.id); // Use decoded.id to find user
        
        if (!user) {
            return res.status(401).send({ message: 'User not found.' });
        }
        
        req.user = user;  // Attach user to the request object for further use
        next();  // Proceed to the next middleware/route handler
    } catch (error) {
        return res.status(401).send({ message: 'Invalid or expired token.' });
    }
};

module.exports = authMiddleware;
