'use strict'

var Producto = require('../models/producto');

var controller = {
    home: function(req,res){
        return res.status(200).send({
            mensaje:'Home'
        });
    },
    test: function(req,res){
        return res.status(200).send({
            mensaje: 'Test'
        });
    },

    saveProducto: function(req,res){
        var producto = new Producto();

        var params = req.body;

        producto.sucursal = params.sucursal;
        producto.nombre = params.nombre;
        producto.codigo_barras = params.codigo_barras;
        producto.cantidad = params.cantidad;
        producto.precio = params.precio;
        console.log(producto)
        producto.save((err, productoStored)  => {
            if(err) return res.status(500).send({mensaje: 'Error al guardar'});

            if(!productoStored) return res.status(404).send({mensaje: 'No se pudo guardar'});

            return res.status(200).send({producto: productoStored});
        });
    },

    getProducto: function(req,res){
        var productoId = req.params.id;

        if(productoId == null){
            return res.status(404).send({mensaje:'El proyecto no existe'});
        }

        Producto.findById(productoId, (err, producto) => {
            if(err) return res.status(500).send({mensaje: 'error al devolver los datos'});
            
            if(!producto) return res.status(404).send({mensaje:'El proyecto no existe'});

            return res.status(200).send({
                producto
            });
        });
    },

    getProductos: function(req,res){
        Producto.find({/*where*/}).exec((err, productos) => {
            if(err) return res.status(500).send({mensaje: ' Error al devolver los datos'});
            
            if(!productos) return  res.status(404).send({mensaje:'No hay productos que mostrar'});

            return res.status(200).send({
                productos
            });
        });
    },

    updateProducto: function(req,res){
        var productoId = req.params.id;
        var update = req.body;

        Producto.findByIdAndUpdate(productoId, update, {new:true}, (err, productoUpdated) => {
            if(err) return res.status(500).send({mensaje: 'Error al actualizar'});

            if(!productoUpdated) return res.status(404).send({mensaje:'No existe el proyecto'});

            return res.status(200).send({producto: productoUpdated});
        });
    },

    deleteProducto: function(req,res){
        var productoId=req.params.id;

        Producto.findByIdAndRemove(productoId, (err, productoRemoved) => {
            if(err) return res.status(500).send({mensaje: ' no se pudo eliminar el producto'});
            
            if(!productoRemoved) return res.status(404).send({mensaje: 'no se puede eliminar ese proyecto'});

            return res.status(200).send({
                producto: productoRemoved
            });
        });
    }
};

module.exports = controller;