const mongoose = require('mongoose');

const utensilioSchema = new mongoose.Schema({
    name: String,
    description: String,
    lastUse: String,
    qrCode: String
});

// Exporta o modelo para ser usado no servidor
module.exports = mongoose.model('Utensilios', utensilioSchema, 'Utensílios');