
import Ticket from "../models/Ticket.js";
import { cartRepository, orderRepository, productRepository, userRepository } from "../repositories/index.js";


class CheckoutService {
    async corroborarStock(productlist) {
        const resultado = await productRepository.verificarStock(productlist);
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
async actualizarCarrito(idCarrito, stock) {
        if(stock.productosConStock){
            const idProductosAEliminar = stock.productosConStock.map(product => product.id.toString());
            const actualizado = await cartRepository.eliminarProductos(idCarrito.toString(), idProductosAEliminar)
            return actualizado
        }
    }

    async generarTicket(idCarrito, productList) {
        const stock = await this.corroborarStock(productList)
        if(stock.productosConStock){
            // creo ticket
            const precioTotal = await this.calcularPrecioTotal(stock.productosConStock)
            const user = await userRepository.obtenerPorPropiedad("cart", idCarrito)
            const emailUser = user[0].email
            const ticket = new Ticket(precioTotal, emailUser)
            const order = await orderRepository.crearOrder(ticket)
            // actualizo carrito
            this.actualizarCarrito(idCarrito, stock)
            return order
        }
    }
    
    
    async finalizarCompra(idCarrito, productList) {
        const order = await this.generarTicket(idCarrito, productList)
        return order
    }
}

export const checkoutService = new CheckoutService()

