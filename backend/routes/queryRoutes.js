const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryController');

// Routes for managing queries
router.post('/', queryController.createQuery);         // Create new query
router.get('/', queryController.getQueries);           // Get all queries
router.get('/:id', queryController.getQueryById);      // Get query by ID
router.put('/:id', queryController.updateQuery);       // Update query
router.delete('/:id', queryController.deleteQuery);    // Delete query

module.exports = router;
