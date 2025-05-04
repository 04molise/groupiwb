const mongoose = require('mongoose');

const backupSchema = new mongoose.Schema({
    data: { type: Object, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Backup', backupSchema);