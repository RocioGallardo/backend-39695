import { Router } from 'express'

import {
  handleGet,
  handlePost,
  handlePut,
  handleDelete,
} from '../controllers/usuarios.controller.js'

export const usuariosRouter = Router()

usuariosRouter.get('/:id?', handleGet)
usuariosRouter.post('/', handlePost)
usuariosRouter.put('/:id', handlePut)
usuariosRouter.delete('/:id', handleDelete)
