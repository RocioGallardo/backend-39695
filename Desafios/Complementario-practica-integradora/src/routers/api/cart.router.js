import { Router } from 'express'
import { cartPostController } from '../../controllers/api/cartPost.controller.js'
import { cartPutController } from '../../controllers/api/cartPut.controller.js'
import { cartsGetController } from '../../controllers/api/cartsGet.controller.js'

export const cartRouter = Router()
cartRouter.post('/', cartPostController) // crear carrito
cartRouter.put('/:cid', cartPutController) // cargar productos o modificar carrito
cartRouter.get('/:cid', cartsGetController) // ver carritos