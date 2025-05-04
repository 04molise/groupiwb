module.exports = {
    jwtSecret: process.env.JWT_SECRET, // Loaded from .env file
    jwtExpiration: '1h', // Token expires in 1 hour
};
