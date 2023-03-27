import { productosService } from '../../services/productos.service.js'

export async function productosGetController(req, res, next) {
        try {
            const productos = await productosService.listar()
            res.status(200).json(productos)
        } catch (error) {
            next(error)
        }
}

