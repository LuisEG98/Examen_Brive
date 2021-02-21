'use strict'

var express = require('express');
var ProductoController = require('../controllers/producto');

var router = express.Router();

router.get('/home', ProductoController.home);
router.post('/test', ProductoController.test);
router.post('/saveproducto', ProductoController.saveProducto);
router.get('/producto/:id?', ProductoController.getProducto);
router.get('/productos', ProductoController.getProductos);
router.put('/producto/:id', ProductoController.updateProducto);
router.delete('/producto/:id', ProductoController.deleteProducto);

module.exports = router;