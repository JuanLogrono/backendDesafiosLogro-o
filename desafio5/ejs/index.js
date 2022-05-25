const express = require('express');
const { Router } = express;

const app = express()
const router = Router()

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '../../public'))

const arrayProductos = [{ "title": "pera", "price": 200, "thumbnail": "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_pera-80.png", "id": 1 }, { "title": "manzana", "price": 100, "thumbnail": "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_maca-80.png", "id": 2 }, { "title": "banana", "price": 150, "thumbnail": "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_banana-80.png", "id": 3 }]


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    let hayProductos = (arrayProductos.length === 0) ? false : true;
    res.render('pages/productos', { arrayProductos, hayProductos, titulo: "Productos en existencia", headTitle: 'Productos' })
});

router.get('/formulario', (req, res) => {
    res.render('pages/formulario', { titulo: "Cargar Productos", headTitle: 'Formulario de carga' })
});

router.post('/', (req, res) => {
    let id;
    if (arrayProductos.length === 0) id = 1
    else id = arrayProductos[arrayProductos.length - 1].id + 1;
    let productoNuevo = {
        title: req.body.nombre,
        price: req.body.precio,
        thumbnail: req.body.imagen,
        id: id
    };
    arrayProductos.push(productoNuevo);
    res.redirect('productos/formulario');
});


const PORT = 8080
app.use('/api/productos', router);

const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.error(error, "error de conexión"));