import { productosService } from '../../services/productos.service.js'

const paginaDeError = 'error al cargar, intente nuevamente...'

export async function productsGetController(req, res, next) {

    try {
        // Objeto vacío para el criterio de búsqueda inicial
        let criterioDeBusqueda = {};
        // Recorre el objeto req.query y agrega los criterios correspondientes al objeto de criterio de búsqueda
        for (let key in req.query) {
            if (key === 'title' || key === 'description' || key === 'price' || key === 'stock') {
                criterioDeBusqueda = { ...criterioDeBusqueda, [key]: req.query[key] };
            }
        }

        const opcionesDePaginacion = {
            limit: req.query.limit || 10,
            page: req.query.page || 1,
            lean: true, // para que devuelva objetos literales, no de mongoose    
        }

        if (req.query.sort === 'asc') {
            opcionesDePaginacion.sort = { price: 1 };
        } else if (req.query.sort === 'desc') {
            opcionesDePaginacion.sort = { price: -1 };
        }
        
        const productos = await productosService.mostrarPaginado(criterioDeBusqueda, opcionesDePaginacion)
        
        const queryParams = Object.keys(req.query)
            .filter(key => key !== 'page') // excluimos la propiedad "page"
            .map(key => `${key}=${req.query[key]}`)
            .join('&');

        res.render('productos', {
            query: queryParams,
            productos: productos,
            hayProductos: productos.docs.length > 0,
            titulo: 'Productos'
        })
    } catch (error) {
        next(error)
    }
}