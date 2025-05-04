// utils/queryHelper.js

// Function to generate a response for a given query based on predefined keywords
const generateAutoReply = (queryMessage) => {
    let response;

    // Predefined responses based on keywords in the query
    if (queryMessage.includes('price')) {
        response = 'The price of our services starts at M500.';
    } else if (queryMessage.includes('warranty')) {
        response = 'Our warranty covers up to 2 years for all services.';
    } else if (queryMessage.includes('contact')) {
        response = 'You can contact us at: contact@company.com or call us at 123-456-7890.';
    } else {
        response = 'Thank you for your query. We will get back to you shortly.';
    }

    return response;
};

module.exports = { generateAutoReply };
