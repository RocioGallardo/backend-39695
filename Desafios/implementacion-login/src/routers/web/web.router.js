import { Router } from 'express'
import { cartRouter } from './cart.router.js'
import { productosRouter } from './productos.router.js'


export const webRouter = Router()

webRouter.use('/products', productosRouter)
webRouter.use('/carts', cartRouter)


webRouter.get('/chat', (req, res) => {
    res.render('chat', { title: 'Chat' })
})

webRouter.get('/register', (req, res, next) =>{
    res.render('register', {title: "Registrarse"})
})


webRouter.get('/login', (req, res) => {
    res.render('login', {title: "Login"} )
})

// webRouter.get('/session', (req, res) =>{
//     if(req.session.counter){
//         req.session.counter++
//         res.send(`Se ha visitado el sitio ${req.session.counter} veces`)
//     } else{
//         req.session.counter = 1;
//         res.send("bienvenido!")
//     }
// })

function auth(req, res, next){
    if(req.session?.user === "pepe" && req.session?.admin){
        return next()
    }
    return res.status(401).send("error de autorizacion")
}

webRouter.get('/privado', auth, (req, res) =>{
    res.send ("si estas viendo esto es porque ya te logueaste")
})

// webRouter.get('/login', (req, res) => {
//     const {username, password} = req.query
//     if(username !== "pepe" || password !== "pepepass"){
//         return res.send("login failed")
//     }
//     req.session.user = username
//     req.session.admin = true
//     res.send("login success")
// })


webRouter.get('/logout', (req,res)=>{
    req.session.destroy(err =>{
        if(!err) res.send('logout ok')
        else res.json({status: 'logout error', body: err})
    })
})

//logout con session

