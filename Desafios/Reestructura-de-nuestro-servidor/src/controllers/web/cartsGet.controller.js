import { cartService } from '../../services/cart.service.js'



export async function cartsGetController(req, res, next) {
    try {
        const criterioDeBusqueda = req.params.cid || {};
        const carts = await cartService.mostrarCarritos(criterioDeBusqueda);
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

