import express from 'express'
import session from 'express-session'
import { authRouter } from './routers/authRouter.js'
import { manejoDeErrores } from './middlewares/manejoDeErroresRest.js'
import { userRouter } from './routers/userRouter.js'

const app = express()
app.use(express.json())

app.use(session({
    secret: '5ecr3t0',
    resave: false,
    saveUninitialized: false
}))

app.use('/auth', authRouter)
app.use('/user', userRouter)

app.use(manejoDeErrores)

app.listen(8080, () => { console.log('escuchando!') })
