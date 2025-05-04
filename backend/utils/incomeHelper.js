// utils/incomeHelper.js

// Function to calculate total income from a list of transactions
const calculateTotalIncome = (transactions) => {
    if (!transactions || transactions.length === 0) {
        return 0;
    }

    // Sum the amounts of all transactions
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
};

// Function to calculate monthly income for a specific year and month
const calculateMonthlyIncome = (transactions, month, year) => {
    if (!transactions || transactions.length === 0) {
        return 0;
    }

    const filteredTransactions = transactions.filter(transaction => {
        const transactionDate = new Date(transaction.date);
        return transactionDate.getMonth() + 1 === month && transactionDate.getFullYear() === year;
    });

    return calculateTotalIncome(filteredTransactions);
};

// Function to generate an income statement for a given period
const generateIncomeStatement = (transactions, startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const filteredTransactions = transactions.filter(transaction => {
        const transactionDate = new Date(transaction.date);
        return transactionDate >= start && transactionDate <= end;
    });

    const totalIncome = calculateTotalIncome(filteredTransactions);

    return {
        startDate: startDate,
        endDate: endDate,
        totalIncome: totalIncome,
        transactions: filteredTransactions
    };
};

module.exports = { calculateTotalIncome, calculateMonthlyIncome, generateIncomeStatement };
