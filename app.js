const express = require('express')
const app = express()
const path = require('path')
const port = 3030

let publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath))

let viewsPath = path.resolve(__dirname, "./views")
app.get("/",(req,res) => res.sendFile(path.join(viewsPath,"./productDetail.html")))



app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}!`));