import { Router } from 'express'
import { cartPostController } from '../../controllers/api/cartPost.controller.js'

export const cartRouter = Router()
cartRouter.post('/', cartPostController)