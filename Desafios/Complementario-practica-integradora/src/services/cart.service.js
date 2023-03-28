import { cartManager } from '../dao/models/CartManager.js'

class CartService {

    async crearCarrito(){
        await cartManager.crearCarrito()
    }

    async mostrarCarritos(){
        const resultado = await cartManager.mostrarCarritos()
        return resultado
    }

    async agregarProducto({idCarrito, idProducto, cantidad}){
        await cartManager.agregarProducto(idCarrito, idProducto, cantidad)
    }

    async actualizarCantidadProducto(idCarrito,idProducto,cantidad){
        await cartManager.actualizarCantidadProducto(idCarrito, idProducto, cantidad)
    }

    async eliminarProducto(idCarrito, idProducto){
        await cartManager.eliminarProducto(idCarrito, idProducto)
    }

    async vaciarCarrito(idCarrito){
        await cartManager.vaciarCarrito(idCarrito)
    } 
}

export const cartService = new CartService()