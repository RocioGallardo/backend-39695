import { cartService } from '../../services/cart.service.js'

const paginaDeError = 'error al cargar, intente nuevamente...'


export async function cartsGetController(req, res, next) {
        try {
            const carts = await cartService.mostrarCarritos()
            res.status(200).json(carts)
        } catch (error) {
            next(error)
        }
}
