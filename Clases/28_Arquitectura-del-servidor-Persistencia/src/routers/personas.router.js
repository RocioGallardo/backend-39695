import { Router } from 'express'
import * as _ from '../controllers/personas.controller.js'

export const personasRouter = Router()

personasRouter.get('/:id?', _.handleGet)
personasRouter.post('/', _.handlePost)
personasRouter.put('/:id', _.handlePut)
personasRouter.delete('/:id', _.handleDelete)
