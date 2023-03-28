import { cartService } from '../../services/cart.service.js'

const paginaDeError = 'error al cargar, intente nuevamente...'

export async function cartsGetController(req, res, next) {
    try {
        const carts = await cartService.mostrarCarritos()
        res.render('carts', { 
            carts: carts, 
            hayCarts: carts.length > 0, 
            titulo: 'Carts' })
    } catch (error) {
        res.send('error:' + JSON.stringify(error))
    }
}
