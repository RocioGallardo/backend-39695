import { Router, json } from 'express'
import { productosRouter } from './productos.router.js'
import { errorHandler } from '../../errors/errors.js'
import { cartRouter } from './cart.router.js'
import { usersRouter } from './users.router.js'
import { sessionsRouter } from './sessions.router.js'
import { cartConUserPutController } from '../../controllers/api/cart.controllers.js'


export const apiRouter = Router()

apiRouter.use(json())


apiRouter.use('/products', productosRouter)
apiRouter.use('/carts', cartRouter)

apiRouter.use('/users', usersRouter)
apiRouter.use('/sessions', sessionsRouter)


apiRouter.use(errorHandler)



