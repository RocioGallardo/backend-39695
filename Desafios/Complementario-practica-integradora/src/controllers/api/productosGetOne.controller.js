import { productosService } from '../../services/productos.service.js'

export async function productosGetOneController(req, res, next) {
    try {
        const producto = await productosService.mostrarUnoSegunId(req.params.pid)
        res.status(200).json(producto)
        } catch (error) {
            next(error)
    }    
}

