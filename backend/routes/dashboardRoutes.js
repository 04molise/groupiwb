const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Dashboard overview
router.get('/overview', dashboardController.getDashboardData);  // Updated route to use getDashboardData

module.exports = router;
