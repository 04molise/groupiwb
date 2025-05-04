// middleware/mfaMiddleware.js

const crypto = require('crypto');
const User = require('../models/User');  // Import the User model

// Simulate MFA code generation (you can replace this with an actual email/SMS service)
const generateMfaCode = () => {
    return crypto.randomBytes(3).toString('hex');  // Generate a random 6-digit hex code
};

// Middleware to check if the user has passed MFA
const mfaMiddleware = async (req, res, next) => {
    const user = req.user;

    // Simulate an MFA step where we verify the code
    const mfaCode = req.header('MFA-Code');  // Assuming the MFA code is passed in the header

    if (!mfaCode) {
        return res.status(401).send({ message: 'MFA code required.' });
    }

    // Compare with stored MFA code (this can be stored temporarily or verified via email/SMS service)
    if (user.mfaCode !== mfaCode) {
        return res.status(401).send({ message: 'Invalid MFA code.' });
    }

    next();  // Proceed to the next middleware/route handler
};

module.exports = mfaMiddleware;
