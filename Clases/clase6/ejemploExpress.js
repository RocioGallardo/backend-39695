const express = require('express')

function controladorSaludos (req, res){
    console.log(req)
    response.end("recibido")
}

const app = express()

app.get("/saludos", controladorSaludos)

const puerto = 8080

app.listen(puerto, () => {console.log("conectado") })