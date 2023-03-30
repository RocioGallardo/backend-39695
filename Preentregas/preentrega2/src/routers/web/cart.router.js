import { Router } from 'express'
import { cartsGetController } from '../../controllers/web/cartsGet.controller.js'

export const cartRouter = Router()

// Además, agregar una vista en ‘/carts/:cid (cartId) para visualizar un carrito específico,
//donde se deberán listar SOLO los productos que pertenezcan a dicho carrito. 
cartRouter.get("/:cid", cartsGetController)
cartRouter.get("/", cartsGetController)


