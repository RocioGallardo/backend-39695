import { Router } from 'express'
import { postUsuarios } from '../../controllers/api/usuarios.controller.js'

export const usuariosRouter = Router()
usuariosRouter.post('/', postUsuarios)
// usuariosRouter.get('/', getUsuarios)
// usuariosRouter.delete('/', deleteUsuarios)
