import { productosService } from '../../services/productos.service.js'

const paginaDeError = 'error al cargar, intente nuevamente...'

export async function productosGetController(req, res, next) {
    try {
        const productos = await productosService.listar()
        console.log(productos)
        res.render('productos.handlebars', { productos, hayProductos: productos.length > 0, titulo: 'Productos' })
    } catch (error) {
        res.send('error:' + JSON.stringify(error))
    }
}