const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD for products
router.post('/', productController.createProduct);  // ✅ Ensure this POST route is present
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
