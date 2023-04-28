import { Schema } from 'mongoose'
import { ManagerCarrito } from '../ManagerCarrito.js'

export const cartManager = new ManagerCarrito('carts', {
    listProducts: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'products',
            foreignField: '_id',
            required: true
        },
        cantidad: {
            type: Number,
            required: true,
            min: 1
        }
    }]
})


