import { DatosCartACargar } from '../../models/DatosCartACargar.js'
import { cartService } from '../../services/cart.service.js'

export async function cartPutController(req, res, next) {
    try {
        const datosCartACargar = new DatosCartACargar({idCarrito: req.params.cid, idProducto : req.body.idProducto, cantidad: req.body.cantidad})
        console.log(datosCartACargar)
        const carritoActualizado = await cartService.agregarProducto(datosCartACargar)
        res.status(200).json(carritoActualizado)
    } catch (error) {
        next(error)
    }
}
