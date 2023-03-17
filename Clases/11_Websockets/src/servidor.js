import express from "express"
import { apiRouter } from "./apiRouter.js"

import {Server, Socket} from "socket.io"

const app = express()

app.use(express.static("./views"))

app.use("/api", apiRouter)

const servidorConectado = app.listen(8080, () => {
    console.log("conectado")
})

// handshake
const io = new Server(servidorConectado)

io.on("connection", socket => { // este evento es el socket del extremo del servidor
    console.log("nuevo cliente conectado")
    socket.on("respuesta", data => console.log(data))
    // para escribir mensajes
    // socket.emit("mensaje", "hola como estas")
    // para todos los sockets
    io.sockets.emit("mensaje", "hola como estan a todos")
})
