const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    category: { 
        type: String, 
        enum: ['RAM', 'Hard Drive', 'Motherboard Component'], 
        required: true 
    },
    price: { type: Number, required: true },
    quantityInStock: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
