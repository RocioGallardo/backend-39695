import { Router, json } from 'express'
import { productosRouter } from './productos.router.js'
import { errorHandler } from '../../errors/errorApiHandler.js'
import { cartRouter } from './cart.router.js'
import userModel from '../../dao/models/UserModel.js'


export const apiRouter = Router()

apiRouter.use(json())

apiRouter.use('/products', productosRouter)
apiRouter.use('/carts', cartRouter)

apiRouter.use(errorHandler)

// apiRouter.post('/api/users', (req, res, next)=> {
//     const datosUsuario = req.body
//     console.log(datosUsuario)
//     res.send('OK')
// })

apiRouter.post('/users', async (req, res) => {
    console.log(req.body)
    const { username, password } = req.body
    const exists = await userModel.findOne({ username })
    if (exists) return res.status(422).json({ status: "error", error: "User already exists" })
    const user = {
        username,
        password,
    }
    await userModel.create(user)
    res.json({ status: "success", message: "User registered" })
})

apiRouter.post('/sessions', async (req, res) => {
    const { username, password } = req.body
    const user = await userModel.findOne({ username, password }) 

    if (!user) return res.status(401).send({ status: "error", error: "Invalid credentials" })
    req.session['user'] = {
        username: user.username,
    }
    res.json({ status: "success", payload: req.session['user'], message: "¡Primer logueo realizado! :)" })
})
