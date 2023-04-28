import { productService } from '../../repositories/index.js';
import { productosService } from '../../services/productos.service.js'

const paginaDeError = 'error al cargar, intente nuevamente...'

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
        const productos = await productService.mostrarPaginado(criterioDeBusqueda, opcionesDePaginacion)
        
        const queryParams = Object.keys(req.query)
            .filter(key => key !== 'page') // excluimos la propiedad "page"
            .map(key => `${key}=${req.query[key]}`)
            .join('&');

        res.render('productos', {
            hayUsername : !!req.user?.email,
            user: req.user?.email,
            rol: req.user?.rol,
            query: queryParams,
            productos: productos,
            hayProductos: productos.docs.length > 0,
            titulo: 'Productos'
        })
    } catch (error) {
        next(error)
    }
}