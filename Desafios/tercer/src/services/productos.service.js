// import { persistence } from '../dao/factory.js'

// class ProductosService {
//     async registrar(DatosProductoACargar) {
//         const productoRegistrado = await persistence.guardar(DatosProductoACargar)
//         return productoRegistrado
//     }

//     async listar() {
//         const productos = await persistence.obtenerTodos()
//         return productos
//     }

//     async mostrarUnoSegunId(id){
//         const producto = await persistence.obtenerPorId(id)
//         return producto
//     }

//     async actualizarPorId(id, datosActualizados) {
//         const productoActualizado = await persistence.actualizarPorId(id, datosActualizados)
//         return productoActualizado
//     }
    
//     async eliminarUnoSegunId(id){
//         const producto = await persistence.eliminarPorId(id)
//         return producto
//     }

//     async mostrarPaginado(criterioDeBusqueda, opcionesDePaginacion){
//         const result = await persistence.paginar(criterioDeBusqueda, opcionesDePaginacion)
//         return result
//     }
// }

// export const productosService = new ProductosService()