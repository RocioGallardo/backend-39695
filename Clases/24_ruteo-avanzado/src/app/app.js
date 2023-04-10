import express from 'express'
import { routerUsuarios } from '../routers/routerUsuarios.js'
import { metodosComunes } from '../middlewares/metodosComunes.js'

const app = express()

app.use(metodosComunes)

app.use('/usuarios', routerUsuarios)

app.get('*', (req, res, next) => {
    res['sendClientError']('ruta no reconocida: ' + req.url)
})

app.listen(8080, () => { console.log('escuchando en 8080') })