import { ManagerMongoose } from './ManagerMongoose.js'

export const cartManager = new ManagerMongoose('cart', {
    products: { type: String, required: true },
    cantidad: { type: Number, required: true }
})