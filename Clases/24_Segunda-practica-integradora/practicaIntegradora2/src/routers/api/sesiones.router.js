import { Router } from 'express'
import { postSesiones, deleteSesiones } from '../../controllers/api/sesiones.controller.js'

export const sesionesRouter = Router()
sesionesRouter.post('/', postSesiones)
sesionesRouter.delete('/', deleteSesiones)