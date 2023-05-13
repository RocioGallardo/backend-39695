import { cartRepository } from '../../repositories/index.js'

export async function cartsGetController(req, res, next) {
    try {
        const criterioDeBusqueda = req.params.cid || {};
        const carts = await cartRepository.mostrarCarritos(criterioDeBusqueda);
        const isArray = Array.isArray(carts); // Verifica si carts es un array o no
        res.render('carts', {
            esUser: req.user.rol == "user" ? true : false,
            isArray: isArray,
            cart: carts,
            titulo: 'Carts',
            loggedIn: true,
            cartId: req.user.cart
        });
    } catch (error) {
        res.send('error:' + JSON.stringify(error));
    }
}

