import { ManagerMongoose } from '../managersDB/ManagerMongoose.js'
import mongoosePaginate from 'mongoose-paginate-v2';

export const productosManager = new ManagerMongoose('products', {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    code: { type: String, required: true },
    stock: { type: Number, required: true },
})
