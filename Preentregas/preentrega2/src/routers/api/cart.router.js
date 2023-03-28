import { Router } from 'express'
import { cartPostController } from '../../controllers/api/cartPost.controller.js'
import { cartPutController } from '../../controllers/api/cartPut.controller.js'
import { cartsGetController } from '../../controllers/web/cartsGet.controller.js'

export const cartRouter = Router()
cartRouter.post('/', cartPostController)
cartRouter.put('/', cartPutController)
cartRouter.get('/', cartsGetController)