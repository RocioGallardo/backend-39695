import { cartService } from '../../services/cart.service.js'

export async function cartPostController(req, res, next) {
    try {
        const idNewCart = await cartService.crearCarrito()
        console.log(idNewCart)
        res.status(201).json(idNewCart)
    } catch (error) {
        next(error)
    }
}

