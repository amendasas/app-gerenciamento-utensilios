const mongoose = require('mongoose');

const utensilioSchema = new mongoose.Schema({
    name: String,
    description: String,
    lastUse: String,
    qrCode: String
});

module.exports = mongoose.model('Utensilios', utensilioSchema, 'Utensílios');