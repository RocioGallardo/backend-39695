import { ManagerCarrito } from '../managersDB/ManagerCarrito.js'

export const cartManager = new ManagerCarrito('carts', {
    listProducts: [{
        productId: { type: String, required: true },
        cantidad: { type: Number, required: true, min: 1 },
    }],
})

