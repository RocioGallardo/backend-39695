
import Ticket from "../models/Ticket.js";
import { cartRepository, orderRepository, productRepository, userRepository } from "../repositories/index.js";


class CheckoutService {
    async corroborarStock(productlist) {
        const resultado = await productRepository.verificarStock(productlist);
        //console.log(resultado)
        return resultado;
    }

    async calcularPrecioTotal(productosConStock) {

        let precioTotal = 0;
        for (const product of productosConStock) {
            const productoEncontrado = await productRepository.mostrarUnoSegunId(product.id);

            const precioTotalProducto = productoEncontrado.price * product.cantidadRequerida;
            precioTotal += precioTotalProducto;
        }
        return precioTotal;
    }
    async generarTicket(idCarrito, productList) {
        const stock = await this.corroborarStock(productList)
        if(stock.productosConStock){
            //calcularPrecioTotal
            const precioTotal = await this.calcularPrecioTotal(stock.productosConStock)
            // averiguar email
            const user = await userRepository.obtenerPorPropiedad("cart", idCarrito)
            const emailUser = user[0].email
            // generar ticket
            const ticket = new Ticket(precioTotal, emailUser)
            const order = await orderRepository.crearOrder(ticket)
            return order
        }
    }
    async actualizarCarrito(idCarrito, productList) {
        const stock = await this.corroborarStock(productList)

        if(stock.productosConStock){
            const idProductosAEliminar = stock.productosConStock.map(product => product.id.toString());
            // const idProductosAEliminar = stock.productosConStock.map(product => product.id)
            const actualizado = await cartRepository.eliminarProductos(idCarrito, idProductosAEliminar)
            return actualizado
        }
    }
    
    async finalizarCompra(idCarrito, productList) {
        const order = await this.generarTicket(idCarrito, productList)
        await this.actualizarCarrito(idCarrito, productList)
        return order
    }
}

export const checkoutService = new CheckoutService()