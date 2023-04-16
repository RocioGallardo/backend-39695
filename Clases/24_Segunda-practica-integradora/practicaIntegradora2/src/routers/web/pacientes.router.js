import { Router } from 'express'
import { pacientesGetController } from '../../controllers/web/pacientes.controller.js'

export const pacientesRouter = Router()

pacientesRouter.get('/', pacientesGetController)
