const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');

// Create income statement (used when a sale is made)
router.post('/', incomeController.createIncomeStatement);

// Get all income statements
router.get('/', incomeController.getIncomeStatements);

// Get income statement by month and year
router.get('/:month/:year', incomeController.getIncomeStatementByMonthYear);

module.exports = router;
