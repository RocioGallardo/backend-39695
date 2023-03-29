// import { Schema } from 'mongoose'
// import { ManagerCarrito } from '../managersDB/ManagerCarrito.js'

// export const cartManager = new ManagerCarrito('carts', {
//     listProducts: {
//         type: [{
//                 productId: {
//                     type: Schema.Types.ObjectId, // este Schema estaba en minusculas en la diapo, ojo, va en mayúsculas!
//                     ref: 'products'
//                 },
//                 cantidad: { type: Number, required: true, min: 1 }
//             }
//         ],
//         default: [], // este default faltaba en la diapositiva, ojo!
//     },
//     // listProducts: [{
//     //     productId: { type: String, required: true },
//     //     cantidad: { type: Number, required: true, min: 1 },
//     // }],
// })

import { Schema } from 'mongoose'
import { ManagerCarrito } from '../managersDB/ManagerCarrito.js'

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


