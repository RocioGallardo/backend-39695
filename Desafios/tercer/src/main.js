
import express from 'express'
import { apiRouter } from './routers/api/api.router.js'
import { PORT } from './config/servidor.js'
import mongoose from 'mongoose'
import { MONGODB_CNX_STR } from './config/mogodb.js'
import { webRouter } from './routers/web/web.router.js'
import { engine } from 'express-handlebars'
import { Server } from 'socket.io'
import { configureMessagesSocket } from './sockets/messages.socket.js'
import { agregarAlCarritoSocket } from './sockets/agregrarAlCarrito.socket.js'
import session from "express-session"
import MongoStore from 'connect-mongo'
import { passportInitialize, passportSession } from './middlewares/passport.js'

export const app = express()



app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use(session({
    store: MongoStore.create({
        mongoUrl: MONGODB_CNX_STR,
        mongoOptions: {useNewUrlParser:true, useUnifiedTopology:true},
        ttl: 180
    }),
    secret: 'secretcode',
    resave: false,
    saveUninitialized: false
}))


app.use(passportInitialize, passportSession)

app.use('/api', apiRouter)
app.use('/', webRouter)

await mongoose.connect(MONGODB_CNX_STR)

const servidor = app.listen(PORT, () => { console.log(`conectado a ${PORT}`) })

const io = new Server(servidor)

io.on('connection', socket => {
    console.log('nuevo socket conectado')
    configureMessagesSocket(io, socket)
    agregarAlCarritoSocket(io, socket)
})




