import { Router } from 'express'
import { getPacientes, postPacientes } from '../../controllers/api/pacientes.controller.js'

export const pacientesRouter = Router()
pacientesRouter.post('/', postPacientes)
pacientesRouter.get('/', getPacientes)
