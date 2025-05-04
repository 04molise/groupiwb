const express = require('express');
const router = express.Router();
const backupController = require('../controllers/backupController');

// Backup operations
router.post('/backup', backupController.createBackup);  // Route to create backup
router.get('/backups', backupController.getAllBackups); // Route to get backup data

module.exports = router;
