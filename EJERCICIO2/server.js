const express = require ('express')
const app = express ()
const Contenedor = require ('./container.js')

const ContenedorProducts = new Contenedor ('./productos.txt')

const PORT = 8080

app.listen (PORT, ()=> console.log ( ` Server running on port  http://localhost:${PORT}`))

app.get ('/productos', async(req, res) =>{
    try {
        const products = await ContenedorProducts.getAll()
        res.send (products)
        
    } catch (error) {
        res.send (error)
        
    }
})

app.get ('/productorandom', async(req, res) =>{
    try {
        const prodrandom = await ContenedorProducts.getAll()
        const index = Math.floor (Math.random() * prodrandom.length)

        
        res.send (prodrandom [index])
        
    } catch (error) {
        res.send (error)
        
    }
})
