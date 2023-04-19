import { Router } from 'express'
import { getInfoController } from '../controllers/controller.js'

export const infoRouter = Router()

infoRouter.get('/info', getInfoController)