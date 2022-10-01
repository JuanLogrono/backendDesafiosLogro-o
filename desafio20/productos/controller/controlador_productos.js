import { ProductoServicios } from "../service/servicios_productos.js";
const productos = new ProductoServicios()

export class ProductosControlador {
    constructor() {
    }

    async verProductos(ctx) {
        const id = ctx.request.params.id
        try {
            const products = await productos.verProductos(id);
            ctx.body=products

        } catch (error) {
            console.log(error)
        }
    }

    async guardarProductos(ctx) {
        const body = ctx.request.body
        try {
            const newProduct = await productos.guardarProductos(body)
            ctx.body=newProduct
        } catch (error) {
            console.log(error)
        }
    }

    async eliminarProductos(ctx) {
        try{
        const id = ctx.request.params.id
            const eliminado = await productos.eliminarProducto(id)
            ctx.body=eliminado
        } catch (error) {
            console.log(error)
        }
    }

    async modificarProducto(ctx){
        const body=ctx.request.body
        const id = ctx.request.params.id
        try {
          const productoModificado= await productos.modificarProducto(id,body)
          ctx.body=productoModificado
        } catch (error) {
            console.log(error)
        }
    }
}