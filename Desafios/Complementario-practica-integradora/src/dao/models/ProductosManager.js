import { ManagerMongoose } from '../managersDB/ManagerMongoose.js'

export const productosManager = new ManagerMongoose('productos', {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    code: { type: String, required: true },
    stock: { type: Number, required: true },
})