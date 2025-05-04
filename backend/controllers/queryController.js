const Query = require('../models/Query');

// Create a new query
exports.createQuery = async (req, res) => {
    try {
        const query = await Query.create(req.body);
        res.status(201).json(query);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all queries
exports.getQueries = async (req, res) => {
    try {
        const queries = await Query.find().sort({ createdAt: -1 }); // Latest first
        res.status(200).json(queries);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single query by ID
exports.getQueryById = async (req, res) => {
    try {
        const query = await Query.findById(req.params.id);
        if (!query) {
            return res.status(404).json({ message: 'Query not found' });
        }
        res.status(200).json(query);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a query
exports.updateQuery = async (req, res) => {
    try {
        const updatedQuery = await Query.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); // Added runValidators
        if (!updatedQuery) {
            return res.status(404).json({ message: 'Query not found' });
        }
        res.status(200).json(updatedQuery);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a query
exports.deleteQuery = async (req, res) => {
    try {
        const deletedQuery = await Query.findByIdAndDelete(req.params.id);
        if (!deletedQuery) {
            return res.status(404).json({ message: 'Query not found' });
        }
        res.status(200).json({ message: 'Query deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};