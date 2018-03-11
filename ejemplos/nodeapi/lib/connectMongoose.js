'use strict'

const mongoose = require('mongoose');
const conn = mongoose.connection
conn.on('error', err => {
    console.log('Error!', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log(`Conectado a mongoDB en ${mongoose.connection.name}`);
});


mongoose.connect('mongodb://localhost/cursonode', {
    useMongoClient: true
});

module.exports = conn;