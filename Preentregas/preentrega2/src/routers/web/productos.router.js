import { Router } from 'express'
import { productsGetController } from '../../controllers/web/productosGet.controller.js'

export const productosRouter = Router()

productosRouter.get('/', productsGetController)

// listo !    Crear una vista en el router de views ‘/products’ para visualizar todos los productos 
// con su respectiva paginación. Cada producto mostrado puede resolverse de dos formas:
// Llevar a una nueva vista con el producto seleccionado con su descripción completa, 
// detalles de precio, categoría, etc. Además de un botón para agregar al carrito.
// Contar con el botón de “agregar al carrito” directamente, sin necesidad de abrir una página 
// adicional con los detalles del producto.
