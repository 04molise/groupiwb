const IncomeStatement = require('../models/IncomeStatement');

// Create a new income statement
exports.createIncomeStatement = async (req, res) => {
    try {
        const { month, year, totalSales, totalExpenses, netIncome } = req.body;

        if (!month || !year || !totalSales || !totalExpenses || !netIncome) {
            return res.status(400).json({ message: 'Month, year, totalSales, totalExpenses, and netIncome are required' });
        }

        const incomeStatement = await IncomeStatement.create({
            month,
            year,
            totalSales,
            totalExpenses,
            netIncome,
        });

        res.status(201).json(incomeStatement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all income statements
exports.getIncomeStatements = async (req, res) => {
    try {
        const incomeStatements = await IncomeStatement.find();
        res.status(200).json(incomeStatements);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get an income statement by month and year
exports.getIncomeStatementByMonthYear = async (req, res) => {
    try {
        const { month, year } = req.params;
        const incomeStatements = await IncomeStatement.find({ month: month, year: parseInt(year) });

        if (!incomeStatements || incomeStatements.length === 0) {
            return res.status(404).json({ message: 'Income statement not found' });
        }

        res.status(200).json(incomeStatements);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};