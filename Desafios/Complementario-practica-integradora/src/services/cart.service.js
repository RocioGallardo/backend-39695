import { cartManager } from '../dao/models/CartManager.js'

class CartService {
    async registrar(DatosCartACargar) {
        const cartRegistrado = await cartManager.guardar(DatosCartACargar)
        return cartRegistrado
    }

    async listar() {
        const cart = await cartManager.obtenerTodos()
        console.log('cart:', cart)
        return cart
    }
}

export const cartService = new CartService()