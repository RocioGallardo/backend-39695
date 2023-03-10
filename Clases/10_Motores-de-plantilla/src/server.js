import express from "express"
import usersApiRouter from "./users/routes/usersApiRouter.js"
import usersWebRouter from "./users/routes/usersWebRouter.js"
import {engine} from "express-handlebars" // motor que utiliza handlebars para procesar páginas, incrustarle los contenidos que yo quiera y devolver un string renderizado


const app = express()


// app.use el es método que usa express para cargar un middleware

app.use("/static", express.static("public")) // middleware para servidor estático
app.use(express.json()) // midleware para leer formularios


//middleware para procesar plantillas
app.engine("handlebars", engine()) // para definir cual es el motor de plantillas que voy a usar
app.set("views", "./views") // de que carpeta voy a sacar las vistas ?
app.set("view engine", "handlebars")// engine por defecto que voy a usar, que extensión uso por defecto

app.use("/users", usersWebRouter) // este devuelve web / datos procesados para la vista --- Middleware para routers
app.use("/api/users", usersApiRouter)// este devuelve datos crudos --- Middleware para routers


app.listen(8080,() => {
    console.log("conectado")
})