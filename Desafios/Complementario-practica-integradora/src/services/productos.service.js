import { productosManager } from '../dao/models/ProductosManager.js'

class ProductosService {
    async registrar(DatosProductoACargar) {
        const productoRegistrado = await productosManager.guardar(DatosProductoACargar)
        return productoRegistrado
    }

    async listar() {
        const productos = await productosManager.obtenerTodos()
        return productos
    }

    async mostrarUnoSegunId(id){
        const producto = await productosManager.obtenerPorId(id)
        return producto
    }
    
    async eliminarUnoSegunId(id){
        const producto = await productosManager.eliminarPorId(id)
        return producto
    }
}

export const productosService = new ProductosService()