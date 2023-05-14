//import { productosService } from '../../services/productos.service.js'
import { DatosProductoACargar } from '../../models/DatosProductoACargar.js'
import { productRepository } from '../../repositories/index.js';

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
        // const productos = await productosService.mostrarPaginado(criterioDeBusqueda, opcionesDePaginacion)
        const productos = await productRepository.mostrarPaginado(criterioDeBusqueda, opcionesDePaginacion)
        res.status(200).json(productos)
    } catch (error) {
        next(error)
    }
}

export async function productsGetOneController(req, res, next) {
    try {
        // const producto = await productosService.mostrarUnoSegunId(req.params.pid)
        const producto = await productRepository.mostrarUnoSegunId(req.params.pid)
        res.status(200).json(producto)
        } catch (error) {
            next(error)
    }    
}


export async function productsPostController(req, res, next) {
    try {
        const datosProductoACargar = new DatosProductoACargar(req.body)
        const productoRegistrado = await productRepository.registrar(datosProductoACargar)
        res.status(201).json(productoRegistrado)
    } catch (error) {
        next(error)
    }
}


export async function productsPutController (req, res, next){
    try {
        const idProducto = req.params.pid
        const datosAActualizar = req.body
        const productoActualizado = await productRepository.actualizarPorId(idProducto, datosAActualizar)
        res.status(200).json(productoActualizado)
        } catch (error) {
            next(error)
    } 
}

export async function productsDeleteController (req, res, next){
    try {
        const idProducto = req.params.pid
        await productRepository.eliminarUnoSegunId(idProducto)
        res.status(200)
        } catch (error) {
            next(error)
    } 
}