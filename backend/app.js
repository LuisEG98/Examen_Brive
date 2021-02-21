'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

//cargar archivo de rutas
var producto_routes = require('./routes/producto');

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors
app.use(cors())

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

//rutas
app.use('/', producto_routes);

//exportar
module.exports = app;