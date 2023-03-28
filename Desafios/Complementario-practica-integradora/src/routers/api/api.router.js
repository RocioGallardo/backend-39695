import { Router, json } from 'express'
import { productosRouter } from './productos.router.js'
import { errorHandler } from '../../errors/errorApiHandler.js'
import { cartRouter } from './cart.router.js'

export const apiRouter = Router()

apiRouter.use(json())

apiRouter.use('/products', productosRouter)
apiRouter.use('/carts', cartRouter)

apiRouter.use(errorHandler)