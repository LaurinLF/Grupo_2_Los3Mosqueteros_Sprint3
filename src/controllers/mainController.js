const products = require("../database/products")

const mainController = {
    home: (req,res) =>{
        res.render("productos/home",
        {
            products
        }
        )
    },

}

module.exports = mainController