import { Router } from 'express'
import { getUsersController, postUserController, putUsersController } from '../../controllers/api/users.controllers.js'

export const usersRouter = Router()

usersRouter.get('/', getUsersController)
usersRouter.post('/', postUserController)
usersRouter.put('/:uid', putUsersController)
