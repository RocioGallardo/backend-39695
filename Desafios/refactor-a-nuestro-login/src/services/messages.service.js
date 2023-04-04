import { messagesManager } from "../dao/models/MessagesManager.js"


class MessagesService {

    async registrar(mensaje) {
        await messagesManager.guardar(mensaje)
    }
    async mostrarmensajes() {
        const messages = await messagesManager.obtenerTodos()
        return messages
    }
    async vaciarChat(){
        await messagesManager.eliminarTodos()
        const messages = await messagesManager.obtenerTodos()
        return messages
    }
}

export const messagesService = new MessagesService()