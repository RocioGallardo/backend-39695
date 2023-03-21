import express from "express"
import mongoose from "mongoose"

// formato "mongodb://usuario:contraseña@host:port/db"

const stringDeConexion = "mongodb://localhost/coderhouse"
await mongoose.connect(stringDeConexion)


//mongoose usa un pequeño cliente para cada conexión

const productoSchema = new mongoose.Schema({
    name: String,
    codProd: String,
    desc : String,
    price : Number
})


// data access object - DAO
const productosDb = mongoose.model("productos", productoSchema)

await productosDb.create({
    name: "silla",
    codProd: "s31321",
    desc: "es una silla",
    price: 5000
})


mongoose.connection.close()