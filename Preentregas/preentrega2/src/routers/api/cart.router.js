import { Router } from 'express'
import { cartPostController, 
        cartPutController,
        cartsGetOneController, 
        cartsGetController } from '../../controllers/api/cart.controllers.js'

export const cartRouter = Router()

// POST

cartRouter.post('/', cartPostController) // crear carrito

//PUT

// listo     PUT api/carts/:cid deberá actualizar el carrito con un arreglo de productos con el formato especificado arriba.
cartRouter.put('/:cid', cartPutController) // cargar productos o modificar carrito
// listo     PUT api/carts/:cid/products/:pid deberá poder actualizar SÓLO la cantidad de ejemplares del producto por cualquier cantidad pasada desde req.body
cartRouter.put('/:cid/products/:pid', cartPutController) // cargar productos o modificar carrito



//GET

// listo      Modificar la ruta /:cid para que al traer todos los productos, los traiga completos mediante un “populate”. De esta manera almacenamos sólo el Id, pero al solicitarlo podemos desglosar los productos asociados.
cartRouter.get('/:cid', cartsGetOneController) // ver  un carrito
// listo        Esta vez, para el modelo de Carts, en su propiedad products, el id de cada producto generado dentro del array tiene que hacer referencia al modelo de Products. 
cartRouter.get('/', cartsGetController) // ver todos los carritos


// Además, agregar al router de carts los siguientes endpoints:
//     DELETE api/carts/:cid/products/:pid deberá eliminar del carrito el producto seleccionado.
//     DELETE api/carts/:cid deberá eliminar todos los productos del carrito 


