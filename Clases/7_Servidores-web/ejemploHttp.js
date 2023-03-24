const http = require("http")


//controlador
function manejador(req, res){
    console.log(req)
    console.log(res)
    res.end("recibido!")
}

const server = http.createServer(manejador)

const puerto = 8080

server.listen(puerto, () => { console.log("conectado!")})