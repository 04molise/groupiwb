const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantitySold: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    soldBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    saleDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Sales', salesSchema);
