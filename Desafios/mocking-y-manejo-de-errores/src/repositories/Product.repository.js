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
        const product = await this.persistencia.obtenerPorId(id)
        return product
    }

    async registrar(product) {
        let productToInsert = new ProductDTO(product)
        const registred = await this.persistencia.guardar(productToInsert)
        return registred
    }

    async actualizarPorId(id, datosActualizados) {
        const productoActualizado = await this.persistencia.actualizarPorId(id, datosActualizados)
        return productoActualizado
    }

    async eliminarUnoSegunId(id){
        const producto = await this.persistencia.eliminarPorId(id)
        return producto
    }
    async mostrarPaginado(criterioDeBusqueda, opcionesDePaginacion){
        const result = await this.persistencia.paginar(criterioDeBusqueda, opcionesDePaginacion)
        return result
    }
    // async verificarStock(productosRequeridos) {
    //     let productosSinStock = [];
    
    //     for (let i = 0; i < productosRequeridos.length; i++) {
    //         const productoRequerido = productosRequeridos[i];
    //         const producto = await this.persistencia.obtenerPorId(productoRequerido.id);
    
    //         if (!producto || producto.stock < productoRequerido.cantidad) {
    //             productosSinStock.push(productoRequerido);
    //         } else {
    //             producto.stock -= productoRequerido.cantidad;
    //             await this.persistencia.actualizarPorId(producto._id, { stock: producto.stock });
    //         }
    //     }
    
    //     return productosSinStock;
    // }

    async verificarStock(productosRequeridos) {
        let productosConStock = [];
        let productosSinStock = [];
        for (let i = 0; i < productosRequeridos.length; i++) {
            const productoRequerido = productosRequeridos[i];
            if (productoRequerido.productId.stock < productoRequerido.cantidad) {
                    productosSinStock.push({
                        id: productoRequerido.productId._id,
                        cantidadRequerida: productoRequerido.cantidad,
                    })
                } else {

                    const stockActualizado = productoRequerido.productId.stock -= productoRequerido.cantidad
                    await this.persistencia.actualizarPorId(productoRequerido.productId._id, { stock: stockActualizado});
                    productosConStock.push({
                    id: productoRequerido.productId._id,
                    cantidadRequerida: productoRequerido.cantidad
                });
            }
        }
        return {
            productosConStock,
            productosSinStock
        };
    }
}

