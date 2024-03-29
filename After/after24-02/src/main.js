import express from "express"
import { apiRouter } from "./routers/api.router.js"
import { webRouter } from "./routers/web.router.js"
import { engine } from "express-handlebars"
import { Server } from "socket.io"
import { productManager } from "./managers/products.manager.js"

export const app = express()

app.engine("handlebars", engine())
app.set("views", "./views")
app.set("view engine", "handlebars")

app.use(express.static("public"))

app.use("./", webRouter)
app.use("/api", apiRouter)


const httpServer = app.listen(8080, () => {console.log("escuchando")})

const io = new Server(httpServer)

io.on("conection", socket => {
    console.log("socket conectado")

    socket.on("nuevoProducto", prod => {
        productManager.agregar(prod)
        io.sockets.emit("actualizar", productManager.obtenerTodos())
    })

    socket.on("refrescar", () => {
        io.sockets.emit("actualizar", productManager.obtenerTodos())
    })
})