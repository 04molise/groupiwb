const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ['pending', 'complete'], default: 'pending' },
    autoReplied: { type: Boolean, default: false },
    response: { type: String } // Add response field
}, { timestamps: true });

module.exports = mongoose.model('Query', querySchema);