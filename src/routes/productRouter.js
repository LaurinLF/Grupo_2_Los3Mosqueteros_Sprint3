const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController")

router.get("/productos", productController.listadoProductos)

router.get("/productCart", productController.carrito)

router.get("/detalle/:id", productController.detalle)

router.get("/crear", productController.crear)

router.get("/editar", productController.editar)

module.exports = router