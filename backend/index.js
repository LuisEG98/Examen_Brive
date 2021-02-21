'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/brive')
        .then(() => {
            console.log("Conexion a la BD exitosa");

            //Creacionde servidor
            app.listen(port, () => {
                console.log("Servidor iniciado en localhost:3700");
            });
        })
        .catch(err => console.log(err));