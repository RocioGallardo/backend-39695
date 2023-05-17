import { Schema } from 'mongoose'
import { ManagerCarrito } from '../ManagerCarrito.js'

export const cartManagerMongo = new ManagerCarrito('carts', {
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


