const Product = require('../models/Product');
const Sales = require('../models/Sales');
const IncomeStatement = require('../models/IncomeStatement');

exports.getDashboardData = async (req, res) => {
    try {
        const totalProducts = await Product.countDocuments();
        const totalSales = await Sales.countDocuments();
        const totalIncome = await IncomeStatement.aggregate([
            { $group: { _id: null, total: { $sum: "$netIncome" } } }
        ]);

        res.status(200).json({
            totalProducts,
            totalSales,
            totalIncome: totalIncome.length > 0 ? totalIncome[0].total : 0,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
