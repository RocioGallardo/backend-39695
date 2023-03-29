import { Router } from 'express'
import { cartsGetController } from '../../controllers/web/cartsGet.controller.js'

export const cartRouter = Router()
cartRouter.get("/:cid", cartsGetController)
cartRouter.get("/", cartsGetController)