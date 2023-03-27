
import { Router } from 'express'
import { productosGetController } from '../../controllers/api/productosGet.controller.js'
import { productosGetOneController } from '../../controllers/api/productosGetOne.controller.js'
import { productosPostController } from '../../controllers/api/productosPost.controller.js'

export const productosRouter = Router()
productosRouter.post('/', productosPostController)
productosRouter.get('/', productosGetController)
productosRouter.get('/:pid', productosGetOneController)
