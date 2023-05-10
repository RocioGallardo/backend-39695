import { Router } from 'express'
import { cartRouter } from './cart.router.js'
import { productosRouter } from './productos.router.js'


export const webRouter = Router()

webRouter.use('/products', productosRouter)
webRouter.use('/carts', cartRouter)

webRouter.get('/', (req, res) =>{
    res.redirect('/login')
})

webRouter.get('/chat', (req, res) => {
    res.render('chat', { title: 'Chat' })
})

webRouter.get('/register', (req, res) =>{
    res.render('register', {title: "Registrarse"})
})


webRouter.get('/login', (req, res) => {
    res.render('login', {title: "Login"} )
})


webRouter.get("*", (req,res,next)=>{
    res.send("ruta no reconocida" + req.url)
})
