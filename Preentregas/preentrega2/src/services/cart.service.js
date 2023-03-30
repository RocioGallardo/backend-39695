import { cartManager } from '../dao/models/CartManager.js'

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
        await cartManager.eliminarProducto(idCarrito, idProducto)
    }

    async vaciarCarrito(idCarrito){
        await cartManager.vaciarCarrito(idCarrito)
    } 
}

export const cartService = new CartService()