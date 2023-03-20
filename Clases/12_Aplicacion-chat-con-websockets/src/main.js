import express from "express"
import { apiRouter } from "./apiRouter.js"
import { Server } from "socket.io"



const app = express()
const server = app.listen(8080, () => { console.log("escuchando en 8080") })
const io = new Server(server)

app.use(express.json()) //middleware que ya trae express hecho para que yo pueda leer json
app.use(express.urlencoded({ extended: true })) // me permitia leer formularios que vienen codificados en la url

//middleware a mano 
function middleware(req, res, next,) {
    // este nex sirve para : en vez de contestarle directamente al cliente, permitir que haya un próximo paso
    console.log(`peticion recibida : ${req.path}`)
    next()
}

//app.use(middleware)
//middleware para almacenar un dato

// function alterarpeticion(req, res, next){
//     req.datos = {numero : 10}
//     next()
// }

function alterarpeticion(req, res, next) {
    req.io = { numero: 10 }
    next()
}

//middleware multer : multer es una funcion que me devuelve una instancia de un middleware




app.use(alterarpeticion)
app.use("/", apiRouter)



