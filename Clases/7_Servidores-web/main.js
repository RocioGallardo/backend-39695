const express = require('express')

function controladorHola(req, res){
    // params 
    // en la url ponemos : http://localhost:8080/hola/marian/profe
    res.send(`Hola ${req.params.nombre}, ${req.params.apellido}`)
}

function controladorChau(req, res){
    // parametro de refinamiento de consulta
    // en la url ponemos : http://localhost:8080/chau?nombre=carlitos
    res.send(`lamento que te vayas ${req.query.nombre}`)
}

function controladorProbando(req, res){
    res.send("probando.. 1 2 3")
}

const app = express()

//       params, lo que esté despues de los : se recibe por req.(nombre)
app.get("/hola/:nombre/:apellido", controladorHola) // cada uno tiene que tener su controlador
// parametro de refinamiento de consulta
app.get("/chau", controladorChau)
app.get("/probando", controladorProbando)



const puerto = 8080
app.listen(puerto, () => {console.log("conectado")})
