import { messagesService } from '../services/messages.service.js'

export async function configureMessagesSocket(io, socket) {
    const mensajes = await messagesService.mostrarmensajes()
    io.sockets.emit('mensajes', mensajes)
    socket.on('nuevoMensaje', async msg => {
        await messagesService.registrar(msg)
        const mensajes = await messagesService.mostrarmensajes()
        io.sockets.emit('mensajes', mensajes)
    })
    socket.on('borrarMensajes', async() => {
        const mensajes = await messagesService.vaciarChat()
        io.sockets.emit('mensajes', mensajes)
    })
}