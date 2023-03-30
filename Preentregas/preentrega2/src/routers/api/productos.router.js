
import { Router } from 'express'

import { productsGetController,
        productsGetOneController,
        productsPostController } from '../../controllers/api/products.controllers.js'

export const productosRouter = Router()

productosRouter.post('/', productsPostController) // guardar producto
productosRouter.get('/:pid', productsGetOneController) // ver solo un producto según id
productosRouter.get('/', productsGetController) // ver productos


