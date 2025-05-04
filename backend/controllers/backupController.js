const Sales = require('../models/Sales');
const Query = require('../models/Query');
const fs = require('fs');

exports.createBackup = async (req, res) => {
    try {
        const sales = await Sales.find();
        const queries = await Query.find();

        // Save backup as JSON files
        fs.writeFileSync('backup_sales.json', JSON.stringify(sales, null, 2));
        fs.writeFileSync('backup_queries.json', JSON.stringify(queries, null, 2));

        res.status(200).json({ message: 'Backup completed successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllBackups = async (req, res) => {
    try {
        // Read backup files
        const salesBackup = fs.readFileSync('backup_sales.json');
        const queriesBackup = fs.readFileSync('backup_queries.json');

        res.status(200).json({
            salesBackup: JSON.parse(salesBackup),
            queriesBackup: JSON.parse(queriesBackup)
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
