const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    roleName: { type: String, required: true, unique: true },
    permissions: [String],
}, { timestamps: true });

module.exports = mongoose.model('Role', roleSchema);
