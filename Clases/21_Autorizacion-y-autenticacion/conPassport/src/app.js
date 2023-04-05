import express from 'express'
import session from 'express-session'
import { authRouter } from './routers/authRouter.js'
import { manejoDeErrores } from './middlewares/middlewareManejoDeErroresRest.js'
import { userRouter } from './routers/userRouter.js'
import { passportInitialize, passportSession } from './middlewares/passport.js'
import { userManager } from './managers/UserManager.js'

const app = express()
app.use(express.json())

app.use(session({
    secret: '5ecr3t0',
    resave: false,
    saveUninitialized: false
}))

// acá cargo passport en el servidor express como middleware
app.use(passportInitialize, passportSession)

app.use('/auth', authRouter)
app.use('/user', userRouter)

// lo agregué para que chusmeen el estado del servidor!
app.get('/users', (req, res, next) => { res.json(userManager.usuarios) })

app.use(manejoDeErrores)

app.listen(8080, () => { console.log('escuchando!') })
