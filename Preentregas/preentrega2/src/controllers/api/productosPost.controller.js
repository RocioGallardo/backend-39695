import { DatosProductoACargar } from '../../models/DatosProductoACargar.js'
import { productosService } from '../../services/productos.service.js'

export async function productosPostController(req, res, next) {
    try {
        const datosProductoACargar = new DatosProductoACargar(req.body)
        const productoRegistrado = await productosService.registrar(datosProductoACargar)
        res.status(201).json(productoRegistrado)
    } catch (error) {
        next(error)
    }
}