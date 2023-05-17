

export default class CartRepository {
    constructor(persistencia) {
        this.persistencia = persistencia
    }

    async crearCarrito() {
        const carritoId = await this.persistencia.crearCarrito()
        return carritoId
    }

    async mostrarCarritos(id) {
        const resultado = await this.persistencia.mostrarCarritos(id)
        return resultado
    }

    async actualizarCarrito({ idCarrito, idProducto, cantidad }) {
        await this.persistencia.actualizarCarrito(idCarrito, idProducto, cantidad)
    }



    //     async eliminarProductos(idCarrito, idProductos) {
    //         console.log("cart.repository")
    //         console.log(idProductos)
    //         if(idProductos && idProductos.length > 0){
    //             for(let i = 0; i < idProductos.length; i++) {
    //                 const idProducto = idProductos[i];
    //                 await this.persistencia.eliminarProductosDelCarrito(idCarrito, idProducto);
    //             }
    //         } else {
    //             await this.persistencia.vaciarCarrito(idCarrito);
    //         }

    //         const resultado = await this.persistencia.mostrarCarritos(idCarrito);
    //         return resultado;
    //     }

    async eliminarProductos(idCarrito, idProductos) {
        if (idProductos && idProductos.length > 0) {
            for (let i = 0; i < idProductos.length; i++) {
                const idProducto = idProductos[i];
                await this.persistencia.eliminarProductosDelCarrito(idCarrito, [idProducto]);
            }
        } else {
            await this.persistencia.vaciarCarrito(idCarrito);
        }

        const resultado = await this.persistencia.mostrarCarritos(idCarrito);
        return resultado;
    }
}