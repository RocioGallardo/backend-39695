import { Router } from 'express'
import { cartRouter } from './cart.router.js'
import { productosRouter } from './productos.router.js'


export const webRouter = Router()

webRouter.use('/productos', productosRouter)
webRouter.use('/cart', cartRouter)


