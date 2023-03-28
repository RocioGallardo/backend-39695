import { Router } from 'express'
import { productosGetController } from '../../controllers/web/productosGet.controller.js'


export const productosRouter = Router()


productosRouter.get('/', productosGetController)