import { cartService } from '../services/cart.service.js'

export async function agregarAlCarritoSocket(io, socket) {

    socket.on('agregarAlCarrito', async datosACargar => {
        await cartService.actualizarCarrito(datosACargar)
        io.sockets.emit('carritoActualizado', datosACargar)
    })
}