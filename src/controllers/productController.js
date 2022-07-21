const products = require("../database/products")

const productController = {
    listadoProductos: (req,res) =>{
        res.render("productos/home",
        {
            products
        }
        )
    },
    carrito:(req,res) =>{
        res.render("productos/productCart",
        {
            products
        }
        )
    },

    detalle: (req,res) =>{
        const id = Number(req.params.id)
        const productsDB = products.find(producto => producto.id === id)
        res.render("productos/productDetail",
        {
            productsDB
        }
        )
    },

    /*Formulario de creación de producto:*/

    crear: (req,res) =>{
        res.render("productos/addProduct",
        {
            products
        }
        )
    },

    editar: (req,res) =>{
        res.render("productos/editProduct",
        {
            products
        }
        )
    },


}

module.exports = productController