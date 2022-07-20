const products = require("../database/products")

const mainController = {
    home: (req,res) =>{
        res.render("/products/home",
        {
            products
        }
        )
    }
}

module.exports = mainController