// middleware/queryAIResponder.js

// Here you could implement AI or use a simple search system for auto replies
// For simplicity, we'll just return a static response (this can be replaced with a more complex solution)

const queryAIResponder = (req, res, next) => {
    const queryMessage = req.body.message;  // Get the client's message

    // This is a simple example: search if the query matches some predefined responses
    if (queryMessage.includes('price')) {
        req.autoReply = 'The price of our services starts at M500.';
    } else if (queryMessage.includes('warranty')) {
        req.autoReply = 'Our warranty covers up to 2 years for all services.';
    } else {
        req.autoReply = 'Thank you for your query. We will get back to you shortly.';
    }

    next();  // Proceed to the next middleware/route handler
};

module.exports = queryAIResponder;
