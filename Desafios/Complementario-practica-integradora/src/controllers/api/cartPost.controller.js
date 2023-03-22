import { DatosCartACargar } from '../../models/DatosCartACargar.js'
import { cartService } from '../../services/cart.service.js'

export async function cartPostController(req, res, next) {
    try {
        const datosCartACargar = new DatosCartACargar(req.body)
        const cartRegistrado = await cartService.registrar(datosCartACargar)
        res.status(201).json(cartRegistrado)
    } catch (error) {
        next(error)
    }
}