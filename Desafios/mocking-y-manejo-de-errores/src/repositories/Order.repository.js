

export default class OrderRepository {
    constructor(persistencia){
        this.persistencia = persistencia
    }

    async crearOrder(data){
        const order = await this.persistencia.crearOrder(data)
        return order
    }

    async mostrarOrdersSegunPropiedad(data){
        const resultado = await this.persistencia.mostrarOrdersSegunPropiedad(data)
        return resultado
    }

    async actualizarOrder({idOrder, idProducto, cantidad}){
        await this.persistencia.actualizarOrder(idOrder, idProducto, cantidad)
    }


    async eliminarOrder(idOrder){
        await this.persistencia.vaciarCarrito(idOrder)
        const resultado = await this.persistencia.mostrarOrders(idOrder)
            return resultado
    }

}
