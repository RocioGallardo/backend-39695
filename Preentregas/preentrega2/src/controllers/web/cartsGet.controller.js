import { cartService } from '../../services/cart.service.js'

const paginaDeError = 'error al cargar, intente nuevamente...'

export async function cartsGetController(req, res, next) {
    try {
        const cart = await cartService.mostrarCarritos(req.params.cid)
        console.log(cart)
        res.render('carts', { 
            cart: cart, 
            titulo: 'Carts' })
    } catch (error) {
        res.send('error:' + JSON.stringify(error))
    }
}


