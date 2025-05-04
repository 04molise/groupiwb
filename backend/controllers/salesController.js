const Sales = require('../models/Sales');
const Product = require('../models/Product');
const IncomeStatement = require('../models/IncomeStatement'); // Import IncomeStatement model

exports.createSale = async (req, res) => {
    try {
        const { productId, quantitySold, soldBy } = req.body;

        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        if (product.quantityInStock < quantitySold) {
            return res.status(400).json({ message: 'Not enough stock' });
        }

        product.quantityInStock -= quantitySold;
        await product.save();

        const totalAmount = product.price * quantitySold;
        const sale = await Sales.create({ product: productId, quantitySold, totalAmount, soldBy });

        // --- Income Statement Logic ---
        const saleDate = new Date();
        const month = saleDate.toLocaleString('default', { month: 'long' }); // Get month name
        const year = saleDate.getFullYear();

        // Find existing income statement for the month and year
        let incomeStatement = await IncomeStatement.findOne({ month, year });

        if (incomeStatement) {
            // Update existing income statement
            incomeStatement.totalSales += totalAmount;
            incomeStatement.netIncome += totalAmount; // Simplified: Assuming no expenses for now
            await incomeStatement.save();
        } else {
            // Create a new income statement
            incomeStatement = await IncomeStatement.create({
                month,
                year,
                totalSales: totalAmount,
                totalExpenses: 0, // Assuming no expenses for now
                netIncome: totalAmount,
            });
        }
        // --- End Income Statement Logic ---

        res.status(201).json(sale);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllSales = async (req, res) => {
    try {
        const sales = await Sales.find().populate('product soldBy');
        res.status(200).json(sales);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};