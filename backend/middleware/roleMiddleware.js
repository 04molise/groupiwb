// middleware/roleMiddleware.js

const authMiddleware = require('./authMiddleware');

// Middleware to check if the user has the right role to access the route
const roleMiddleware = (requiredRole) => {
    return (req, res, next) => {
        authMiddleware(req, res, () => {
            // Check if the user has the required role
            if (req.user.role !== requiredRole) {
                return res.status(403).send({ message: 'Forbidden: You do not have the required role.' });
            }
            next();  // Proceed to the next middleware/route handler
        });
    };
};

module.exports = roleMiddleware;
