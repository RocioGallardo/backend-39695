import { Schema } from 'mongoose'
import { ManagerOrder } from '../ManagerOrder.js'

export const orderManagerMongo = new ManagerOrder('orders', {
    code: { type: String, required: true },
    purchase_dateTime: { type: String, required: true },
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
    }],
    amount: { type: Number, required: true },
    purchaser : { type: String, required: true }
})

