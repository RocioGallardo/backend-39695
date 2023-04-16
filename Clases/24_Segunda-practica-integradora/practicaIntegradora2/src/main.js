import express from 'express'
import mongoose from 'mongoose'

import { engine } from 'express-handlebars'
import cookieParser from 'cookie-parser'

import { PORT } from './config/servidor.js'
import { MONGODB_CNX_STR } from './config/mongodb.js'
import { COOKIE_SECRET } from './config/cookies.config.js'

import { apiRouter } from './routers/api/api.router.js'
import { webRouter } from './routers/web/web.router.js'

export const app = express()

app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

app.use(cookieParser(COOKIE_SECRET))

app.use(express.static('./public'))

app.use('/api', apiRouter)
app.use('/', webRouter)

await mongoose.connect(MONGODB_CNX_STR)
app.listen(PORT, () => { console.log(`conectado a ${PORT}`) })