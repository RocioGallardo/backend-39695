import { cartService } from '../../services/cart.service.js'
import { DatosCartACargar } from '../../models/DatosCartACargar.js'


export async function cartPostController(req, res, next) {
    try {
        const idNewCart = await cartService.crearCarrito()
        res.status(201).json(`El id del nuevo carrito es : ${idNewCart}`)
    } catch (error) {
        next(error)
    }
}


export async function cartPutController(req, res, next) {
    try {
        const idDelProducto = req.params.pid || req.body.idProducto
        const datosCartACargar = new DatosCartACargar({idCarrito: req.params.cid, idProducto : idDelProducto, cantidad: req.body.cantidad})
        const carritoActualizado = await cartService.actualizarCarrito(datosCartACargar)
        res.status(200).json(carritoActualizado)
    } catch (error) {
        next(error)
    }
}

export async function cartConUserPutController(req, res, next) {
    try {
        const { idProducto, cantidad} = req.body;
        const datosCartACargar = new DatosCartACargar({idCarrito: req.user.cart, idProducto : idProducto, cantidad: cantidad});
        const carritoActualizado = await cartService.actualizarCarrito(datosCartACargar);
        res.status(200).json(carritoActualizado);
    } catch (error) {
        next(error);
    }
}


export async function cartsGetOneController(req, res, next) {
    try {
        const carts = await cartService.mostrarCarritos(req.params.cid )
        res.status(200).json(carts)
    } catch (error) {
        next(error)
    }
}

export async function cartsGetController(req, res, next) {
    try {
        const carts = await cartService.mostrarCarritos()
        res.status(200).json(carts)
    } catch (error) {
        next(error)
    }
}


export async function cartsDeleteProductsController(req, res, next) {
    try {
        const idDelProducto = req.params.pid || null
        const carritoActualizado = await cartService.eliminarProducto(req.params.cid, idDelProducto)
        res.status(200).json(carritoActualizado)
    } catch (error) {
        next(error)
    }
}


