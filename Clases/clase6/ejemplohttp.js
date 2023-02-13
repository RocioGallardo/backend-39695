const http = require('http')

function manejador (request, response){
    console.log(request)
    response.end("recibido")
}

const server = http.createServer(manejador)

const puerto = 8080

server.listen(puerto, () => {console.log("conectado") })