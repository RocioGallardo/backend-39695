import { Router } from 'express'
import { cartRouter } from './cart.router.js'
import { productosRouter } from './productos.router.js'


export const webRouter = Router()

webRouter.use('/products', productosRouter)
webRouter.use('/carts', cartRouter)


webRouter.get('/chat', (req, res) => {
    res.render('chat', { title: 'Chat' })
})

