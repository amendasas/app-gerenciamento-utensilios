const mongoose = require('mongoose');

const utilizacaoSchema = new mongoose.Schema({
    utensilioId: mongoose.Schema.Types.ObjectId,
    responsavelUso: String,
    descriptionUso: String,
    dataUso: Date
});

module.exports = mongoose.model('Utilizacao', utilizacaoSchema, 'Utilizações');