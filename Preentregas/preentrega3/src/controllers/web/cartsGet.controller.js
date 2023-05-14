import { cartRepository } from '../../repositories/index.js'

export async function cartsGetController(req, res, next) {
    try {
        const criterioDeBusqueda = req.params.cid || {};
        const carts = await cartRepository.mostrarCarritos(criterioDeBusqueda);
        res.render('carts', {
            esUser: req.user.rol == "user" ? true : false,
            sonVarios: carts.length > 1 ? true : false ,
            carts: carts,
            titulo: 'Carts',
            loggedIn: true,
            cartId: req.user.cart
        });
    } catch (error) {
        res.send('error:' + JSON.stringify(error));
    }
}

