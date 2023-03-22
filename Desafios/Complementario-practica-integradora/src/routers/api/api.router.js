import { Router, json } from 'express'
import { productosRouter } from './productos.router.js'
import { errorHandler } from '../../errors/errorApiHandler.js'
import { cartRouter } from './cart.router copy.js'

export const apiRouter = Router()

apiRouter.use(json())

apiRouter.use('/productos', productosRouter)
apiRouter.use('/cart', cartRouter)

apiRouter.use(errorHandler)