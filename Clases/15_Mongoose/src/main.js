import mongoose from "mongoose"
import { MONGODB_CNX_STR } from "./config.js"
import { personasManager } from "./managers/personasManager.js"


await mongoose.connect(MONGODB_CNX_STR)

personasManager.guardar({
    nombre: "rocio",
    edad: 27,
    colFav: ["negro"]
})

console.log(await personasManager.buscarTodo())



// console.log(await personaDb.create())

// const personas = await personaDb.find()

// console.log(personas)













/*
CLIENTES DE BDD

Cada vez que entramos a una base de datos para realizar cualquier operación CRUD , nosotros nos convertimos en clientes de esa bdd

Podemos ser diferentes tipos de clientes para acceder a esa misma base:
    - Cliente CLI (lo que hicimos por terminal) Comand Line Interface
    - Cliente GUI Graphical user interface
    - Cliente web
    - Cliente app



DBaaS : Database as a service

Mongo atlas --> bdd en la nube


MONGOOSE
Mongoose es un ODM (Object Document Mapping), el cual nos permitirá definir esquema para poder gestionar colecciones y documentos entre una aplicacion nodejs y una base de datos en mongo db


*/