import { Router } from 'express'
import { getUsersController, postUserController, putPasswordUsersController } from '../../controllers/api/users.controllers.js'

export const usersRouter = Router()

usersRouter.get('/', getUsersController)
usersRouter.post('/', postUserController)
usersRouter.put('/:token', putPasswordUsersController)
usersRouter.put('/premium/:uid', )
