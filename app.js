const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000;

let publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath))

let viewsPath = path.resolve(__dirname, "./views")
app.get("/",(req,res) => res.sendFile(path.join(viewsPath,"./home.html")))

app.get("/detalle",(req,res) => res.sendFile(path.join(viewsPath,"./productDetail.html")))

app.get('/register',(req,res) => res.sendFile(path.join(viewsPath,"./register.html")))
app.get('/login',(req,res) => res.sendFile(path.join(viewsPath,"./login.html")))
app.get('/productCart',(req,res) => res.sendFile(path.join(viewsPath,"./productCart.html")))


app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port);
})