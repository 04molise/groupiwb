const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

// Record and View sales
router.post('/', salesController.createSale);
router.get('/', salesController.getAllSales);

module.exports = router;
