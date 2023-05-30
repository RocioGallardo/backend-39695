import express from 'express'
import { usuariosRouter } from '../routers/usuarios.router.js'

export const app = express()

app.use(express.json())

app.use('/api/usuarios', usuariosRouter)
