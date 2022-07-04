// express
const express = require('express');
const app = express();
const fs = require('fs');

//http
const { Server: HttpServer} = require('http')
const { Server: IOServer} = require('socket.io')
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

// API
const Api = require('./api');
let api = new Api()
const path = require('path');

// Router
const { Router} = express;
const PORT = 8080;
const router = Router();

// handlebars
const {engine} = require('express-handlebars');

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '..', './public')))
app.use('/api/productos', router)

// HBS
app.engine(

    "hbs",
  
    engine({
  
  extname:"hbs",
  
  defaultLayout:"index",
  
  layoutsDir:"views/layouts/",
  
  })
  
  );
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, '..', './views'))

//MIDDLEWARE validate ID
let validarId = (req, res, next) => {
    let id = req.params.id;
    if (id < 0 || id > api.getAll().length) {
        res.status(400).send({
            error: "El ID no corresponde a ningún producto."
        })
    } else {
        next()
    }
}

// GET Cards
router.get('/', (req, res) => {
    res.render('productos', {
        productos: api.getAll()
    })
})

// GET Form
router.get('/add', (req, res) => {
    res.render('form')
})

// GET search prod
router.get('/:id', validarId, (req, res) => {
    let {id} = req.params;
    res.json(api.getById(id));
})

// POST
router.post('/', (req, res) => {
    let producto = {...req.body};
    api.add(producto)
    io.emit('products', api.getAll());
    res.redirect('/')
})

// PUT
router.put('/:id', validarId, (req, res) => {
    let id = parseInt(req.params.id);
    let productoNuevo = {
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail,
    }
    api.update(id, productoNuevo)
    res.json(api.getById(id))
})

// DELETE
router.delete('/:id', validarId, (req, res) => {
    productos = productos.filter(p => p.id != req.params.id);
    res.sendStatus(200)
})

// socket io
const dataPath = path.join(__dirname, "..", "data/messages.json");

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('products', api.getAll())

    fs.readFile(dataPath, 'utf-8', (err, data) => {
        if (err) {
            console.log("Error al leer el archivo de mensajes.");
        } else {
            console.log(JSON.parse(data))
            socket.emit('allMessages', JSON.parse(data))
        }
    })

    socket.on('addProduct', product => {
        api.add(product)
        io.emit('products', api.getAll());
    })

    socket.on('sendMessage', message => {
        fs.readFile(dataPath, 'utf-8', (err, data) => {
            if (err) {
                console.log("Error al leer el archivo de mensajes.");
            } else {
                const messages = JSON.parse(data)
                messages.push(message)
                fs.writeFile(dataPath, JSON.stringify(messages), err => {
                    if (err) {
                        console.log("Error al leer el archivo de mensajes.");
                    } else {
                        io.emit('newMessage', message)
                    }
                })
            }
        })
    })
})

httpServer.listen(PORT, () => {
    console.log(`listening on port: ${httpServer.address().port}`)
})
httpServer.on("error", (error) =>
  console.log(`Error en servidor ${error}`)
);