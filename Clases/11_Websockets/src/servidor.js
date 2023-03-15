import express from "express"
import { apiRouter } from "./apiRouter.js"

const app = express

app.use("/api", apiRouter)

const servidorConectado = app.listen(8080, () => {
    console.log("conectado")
})