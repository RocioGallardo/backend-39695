import { Schema } from 'mongoose'
import { ManagerOrder } from '../ManagerOrder.js'

export const orderManagerMongo = new ManagerOrder('orders', {
    code: { type: Number, required: true },
    purchase_dateTime: { type: String, required: true },
    amount: { type: Number, required: true },
    purchaser : { type: String, required: true }
})

