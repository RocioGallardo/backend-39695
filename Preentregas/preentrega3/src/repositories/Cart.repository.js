import { cartManager } from '../dao/mongo/models/CartManager.js'

export default class CartRepository {
    constructor(persistencia){
        this.persistencia = persistencia
    }

    async crearCarrito(){
        const carritoId = await this.persistencia.crearCarrito()
        return carritoId
    }

    async mostrarCarritos(id){
        const resultado = await this.persistencia.mostrarCarritos(id)
        return resultado
    }

    async actualizarCarrito({idCarrito, idProducto, cantidad}){
        await this.persistencia.actualizarCarrito(idCarrito, idProducto, cantidad)
    }


    async eliminarProducto(idCarrito, idProducto){
        if(idProducto){
            await this.persistencia.eliminarProductoDelCarrito(idCarrito, idProducto)
        } else {
            await this.persistencia.vaciarCarrito(idCarrito)
        }
        const resultado = await this.persistencia.mostrarCarritos(idCarrito)
            return resultado
    }

}
