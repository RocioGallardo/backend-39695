import express from "express"
import cookieParser from "cookie-parser"

const app = express()

app.use(cookieParser())

//middleware propio
app.use((req,res,next) =>{
    console.dir(req.cookies) //cada perticion que llegue al servidor, voy a mostrar el contenido de req.cookies (quiero ver si la peticion tiene cookies)
    // console.dir(req.signedCookies)
    next()
})

app.get('/setcookie',(req,res) =>{
    //res.cookie(nombre-de-la-cookie, valor-de-la-cookie,{maxAge:tiempo-de-vida-en-milisegundos})
    res.cookie("coderCookie", "esta cookie es muy poderosa", {maxAge:10000}).send("cookie") // esto es lo que agrego para mandar una cookie
})


// COOKIES
/* Son archivos del lado del navegador,
yo puedo acceder a esa info 
formato pares , clave valor (diccionario)
se accede desde el backend(servidor) pero se guarda en la compu del cliente
no son almacenamiento para que use el cliente, sino que lo va a usar el servidor

// CLIENTE                      SERVIDOR
local-storage                  cookies
cliente guarda cosas       guarda cosas en el cliente
y recupera sus cosas       y a través del cliente recibe lo que guarda
    --------------envía peticion ---->
    <-------------responde------------


para usar las cookies vamos a usar un middleware

session storage- local storage, se accede desde el frontend (desde el cliente)
*/

//nosotros vamos a usar:

import session from "express-session"

//const app = express()

app.use(session({ // esta funcion recibe 3 cosas
    secret: "holaquetal", //un secret para el cookie parser, siempre usa cookies firmadas
    resave: false, // este no lo vamos a usar, 
    saveUninitialized: true // quiero guardar la sesion automaticamente para todos los usuarios que visitan mi sitio ?
}))