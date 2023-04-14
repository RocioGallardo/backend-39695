
import { Router } from 'express'

import {
        productsGetController,
        productsGetOneController,
        productsPostController,
        productsPutController
} from '../../controllers/api/products.controllers.js'

export const productosRouter = Router()

productosRouter.post('/', productsPostController) // guardar producto


productosRouter.put('/:pid', productsPutController)




productosRouter.get('/:pid', productsGetOneController) // ver solo un producto según id
productosRouter.get('/', productsGetController) // ver productos
