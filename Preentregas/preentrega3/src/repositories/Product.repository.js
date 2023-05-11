import ProductDTO from "../dao/DTOs/product.dto.js";

export default class ProductRepository{
    constructor(persistencia){
        this.persistencia = persistencia
    }
    async listar(){
        let products = await this.persistencia.obtenerTodos()
        return products
    }

    async mostrarUnoSegunId(id){
        const product = await this.persistence.obtenerPorId(id)
        return product
    }

    async registrar(datosProductoACargar) {
        let productToInsert = new ProductDTO(datosProductoACargar)
        const registred = await this.persistence.guardar(productToInsert)
        return registred
    }

    async actualizarPorId(id, datosActualizados) {
        const productoActualizado = await this.persistence.actualizarPorId(id, datosActualizados)
        return productoActualizado
    }

    async eliminarUnoSegunId(id){
        const producto = await this.persistence.eliminarPorId(id)
        return producto
    }
    async mostrarPaginado(criterioDeBusqueda, opcionesDePaginacion){
        const result = await this.persistencia.paginar(criterioDeBusqueda, opcionesDePaginacion)
        return result
    }
}

