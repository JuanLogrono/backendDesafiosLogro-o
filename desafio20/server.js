import koa from 'koa'
import koaBody from 'koa-body'
import { routerProductos } from './productos/routes/rutas_productos.js'

const app =new koa()

app.use(koaBody())

app.use(routerProductos.routes())
 





/* import express from "express";
import { routerProductos } from "./productos/routes/rutas_productos.js";


export const app = express()
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/productos', routerProductos)*/


app.listen(8080,console.log('conectado')) 