'use strict';

const mongoose = require('mongoose');
console.log('iniciando agente');
// primero creamos el esquema
const agenteSchema = mongoose.Schema({
    name: {type: String, index: true},
    age: Number
});

// creamos el modelo
const Agente = mongoose.model('Agente', agenteSchema);

// lo exportamos
module.exports = Agente;