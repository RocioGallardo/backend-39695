import { Router, json } from 'express'
import { pacientesRouter } from './pacientes.router.js'
import { errorHandler } from '../../errors/errorApiHandler.js'
import { usuariosRouter } from './usuarios.router.js'
import { autenticacion } from '../../middlewares/autenticacion.js'
import { sesionesRouter } from './sesiones.router.js'

export const apiRouter = Router()

apiRouter.use(json())

apiRouter.use('/usuarios', usuariosRouter)
apiRouter.use('/sesiones', sesionesRouter)
apiRouter.use('/pacientes', autenticacion, pacientesRouter)

apiRouter.use(errorHandler)
