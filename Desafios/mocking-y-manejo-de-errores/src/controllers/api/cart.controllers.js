import { Cart } from '../../models/Cart.js'
import { cartRepository, orderRepository } from '../../repositories/index.js'
import { checkoutService } from '../../services/checkout.service.js'



export async function cartPostController(req, res, next) {
    try {
        const idNewCart = await cartRepository.createCart()
        res.status(201).json(`El id del nuevo carrito es : ${idNewCart}`)
    } catch (error) {
        next(error)
    }
}


export async function cartPutController(req, res, next) {
    try {
        const idDelProducto = req.params.pid || req.body.idProducto
        const cart = new Cart({idCarrito: req.params.cid, idProducto : idDelProducto, cantidad: req.body.cantidad})
        const carritoActualizado = await cartRepository.updateCart(cart)
        res.status(200).json(carritoActualizado)
    } catch (error) {
        next(error)
    }
}

export async function cartConUserPutController(req, res, next) {
    try {
        const {idProducto, cantidad} = req.body
        const cart = new Cart({idCarrito: req.user.cart, idProducto : idProducto, cantidad: cantidad})
        const carritoActualizado = await cartRepository.actualizarCarrito(cart)
        res.status(200).json(carritoActualizado)
    } catch (error) {
        next(error);
    }
}

export async function cartFinalizarCompra(req, res, next) {
    try {
        const cart = await cartRepository.showCart({_id : req.params.cid})
        const finalizar = await checkoutService.finalizarCompra(cart[0]._id, cart[0].listProducts)
        res.status(201).json(finalizar);
    } catch (error) {
        next(error);
    }
}

export async function cartMostrarOrders(req, res, next) {
    try {
        const orders = await orderRepository.mostrarOrdersSegunPropiedad({purchaser : req.user.email})
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
}



export async function cartsGetController(req, res, next) {
    try {
        const criterio = {_id: req.params.cid} || {}
        const carts = await cartRepository.showCart(criterio)
        res.status(200).json(carts)
    } catch (error) {
        next(error)
    }
}


export async function cartsDeleteProductsController(req, res, next) {
    try {
        const idDelProducto = req.params.pid || null
        const carritoActualizado = await cartRepository.removeProductsFromCart(req.params.cid, idDelProducto)
        res.status(200).json(carritoActualizado)
    } catch (error) {
        next(error)
    }
}


