import { productosManager } from '../managers/ProductosManager.js'

class ProductosService {
    async registrar(DatosProductoACargar) {
        const productoRegistrado = await productosManager.guardar(DatosProductoACargar)
        return productoRegistrado
    }

    async listar() {
        const productos = await productosManager.obtenerTodos()
        console.log('productos:', productos)
        return productos
    }
}

export const productosService = new ProductosService()