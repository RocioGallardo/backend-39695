
import { Router } from 'express'
import { productosPostController } from '../../controllers/api/productosPost.controller.js'

export const productosRouter = Router()
productosRouter.post('/', productosPostController)