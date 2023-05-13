import { productRepository } from '../../repositories/index.js';
//import { productosService } from '../../services/productos.service.js'

export async function productsGetController(req, res, next) {

    try {
        let criterioDeBusqueda = {};
        for (let key in req.query) {
            if (key === 'title' || key === 'description' || key === 'price' || key === 'stock') {
                criterioDeBusqueda = { ...criterioDeBusqueda, [key]: req.query[key] };
            }
        }
        const opcionesDePaginacion = {
            limit: req.query.limit || 10,
            page: req.query.page || 1,
            lean: true 
        }

        if (req.query.sort === 'asc') {
            opcionesDePaginacion.sort = { price: 1 };
        } else if (req.query.sort === 'desc') {
            opcionesDePaginacion.sort = { price: -1 };
        }
        
        // const productos = await productosService.mostrarPaginado(criterioDeBusqueda, opcionesDePaginacion)
        const productos = await productRepository.mostrarPaginado(criterioDeBusqueda, opcionesDePaginacion)
        
        const queryParams = Object.keys(req.query)
            .filter(key => key !== 'page') // excluimos la propiedad "page"
            .map(key => `${key}=${req.query[key]}`)
            .join('&');
            
        res.render('productos', {
            esUser: req.user.rol == "user" ? true : false,
            user: req.user?.email,
            rol: req.user?.rol,
            query: queryParams,
            productos: productos,
            hayProductos: productos.docs.length > 0,
            titulo: 'Productos',
            loggedIn: true,
            cartId: req.user.cart
            
        })
    } catch (error) {
        next(error)
    }
}

export async function crearProductsGetController(req, res, next) {
    try {
        
        res.render('crearProductos', {
            esUser: req.user.rol == "user" ? true : false,
            user: req.user?.email,
            rol: req.user?.rol,
            titulo: 'Crear Productos',
            loggedIn: true,
        })
    } catch (error) {
        next(error)
    }
}