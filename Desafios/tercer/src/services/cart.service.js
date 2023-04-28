import { cartManager } from '../dao/mongo/models/CartManager.js'

class CartService {

    async crearCarrito(){
        const carritoId = await cartManager.crearCarrito()
        return carritoId
    }

    async mostrarCarritos(id){
        const resultado = await cartManager.mostrarCarritos(id)
        return resultado
    }

    async actualizarCarrito({idCarrito, idProducto, cantidad}){
        await cartManager.actualizarCarrito(idCarrito, idProducto, cantidad)
    }


    async eliminarProducto(idCarrito, idProducto){
        if(idProducto){
            await cartManager.eliminarProductoDelCarrito(idCarrito, idProducto)
        } else {
            await cartManager.vaciarCarrito(idCarrito)
        }
        const resultado = await cartManager.mostrarCarritos(idCarrito)
            return resultado
    }

}

export const cartService = new CartService()