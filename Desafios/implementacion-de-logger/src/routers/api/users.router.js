import { Router } from 'express'
import { getUsersController, postUserController } from '../../controllers/api/users.controllers.js'

export const usersRouter = Router()

usersRouter.post('/', postUserController)
usersRouter.get('/', getUsersController)