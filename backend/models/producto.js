'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = Schema({
    sucursal: String,
    nombre: String,
    codigo_barras: String,
    cantidad: Number,
    precio: Number
});

module.exports = mongoose.model('Producto',ProductoSchema);