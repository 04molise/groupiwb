const mongoose = require('mongoose');

const incomeStatementSchema = new mongoose.Schema({
    month: { type: String, required: true },
    year: { type: Number, required: true },
    totalSales: { type: Number, default: 0 },
    totalExpenses: { type: Number, default: 0 },
    netIncome: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('IncomeStatement', incomeStatementSchema);
