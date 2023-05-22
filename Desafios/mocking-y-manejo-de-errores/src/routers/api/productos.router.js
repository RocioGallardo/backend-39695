
import { Router } from 'express'

import {
        mockProductsPostController,
        productsDeleteController,
        productsGetController,
        productsGetOneController,
        productsPostController,
        productsPutController
} from '../../controllers/api/products.controllers.js'
import { autenticacion } from '../../middlewares/autenticacion.js'
import { auth } from '../../middlewares/auth.js'

export const productosRouter = Router()

productosRouter.post('/mockingproducts', mockProductsPostController )
productosRouter.post('/', autenticacion, auth(["admin"]), productsPostController) // guardar producto



productosRouter.put('/:pid', autenticacion, auth(["admin"]),productsPutController)
productosRouter.delete('/:pid',autenticacion, auth(["admin"]), productsDeleteController)





productosRouter.get('/:pid', productsGetOneController) // ver solo un producto según id
productosRouter.get('/', productsGetController) // ver productos
