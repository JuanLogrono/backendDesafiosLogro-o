const { engine } = require('express-handlebars');
const app = require ('./../rutas')

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
    })
);
app.set('views', './views_hbs');
app.set('view engine', 'hbs');

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.error(error, "error de conexión"));