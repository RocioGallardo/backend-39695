
import express from 'express'
import { apiRouter } from './routers/api/api.router.js'
import { PORT } from './config/servidor.js'
import mongoose from 'mongoose'
import { MONGODB_CNX_STR } from './config/mogodb.js'
import { webRouter } from './routers/web/web.router.js'
import { engine } from 'express-handlebars'
import { Server } from 'socket.io'

export const app = express()



app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')
app.use(express.static("public"));

app.use('/api', apiRouter)
app.use('/', webRouter)

await mongoose.connect(MONGODB_CNX_STR)
const servidor = app.listen(PORT, () => { console.log(`conectado a ${PORT}`) })

const io = new Server(servidor)

