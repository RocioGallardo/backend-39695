import { DatosCartACargar } from '../../models/DatosCartACargar.js'
import { cartService } from '../../services/cart.service.js'

export async function cartPutController(req, res, next) {
    try {
        const datosCartACargar = new DatosCartACargar(req.body)
        const carritoActualizado = await cartService.agregarProducto(datosCartACargar)
        res.status(200).json(carritoActualizado)
    } catch (error) {
        next(error)
    }
}
