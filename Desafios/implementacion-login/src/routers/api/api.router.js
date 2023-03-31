import { Router, json } from 'express'
import { productosRouter } from './productos.router.js'
import { errorHandler } from '../../errors/errorApiHandler.js'
import { cartRouter } from './cart.router.js'
import { logoutController, sessionsController, userController } from '../../controllers/api/users.controllers.js'




export const apiRouter = Router()

apiRouter.use(json())

apiRouter.use('/products', productosRouter)
apiRouter.use('/carts', cartRouter)

apiRouter.post('/users', userController)
apiRouter.post('/sessions', sessionsController)
apiRouter.get('/logout', logoutController)

apiRouter.use(errorHandler)



