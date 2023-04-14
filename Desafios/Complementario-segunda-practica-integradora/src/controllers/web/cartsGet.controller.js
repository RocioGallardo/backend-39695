import { cartService } from '../../services/cart.service.js'

const paginaDeError = 'error al cargar, intente nuevamente...'


export async function cartsGetController(req, res, next) {
    try {
        const idCarrito = req.params.id || {};
        const carts = await cartService.mostrarCarritos(req.params.cid);
        const isArray = Array.isArray(carts); // Verifica si carts es un array o no
        res.render('carts', {
            isArray: isArray,
            cart: carts,
            titulo: 'Carts'
        });
    } catch (error) {
        res.send('error:' + JSON.stringify(error));
    }
}

