import express from 'express'
import { randomUUID } from 'crypto'
import cookieParser from 'cookie-parser'
import SesionManager from './SesionManagerMemoria.js'

const PALABRA_SECRETA = 'milanesa'

const sesionManager = new SesionManager()

// const sesiones = {}
// const idSesionesSegunDni = {}

function cargarSesion(req, res, next) {
    // si tiene un id en las cookies, busco la sesion, sino sigo
    const idSesion = req.signedCookies?.idSesion
    if (!idSesion) return next()

    // si no encuentro una sesion asociada a ese id, sigo
    // const sesion = sesiones[idSesion]
    const sesion = sesionManager.getById(idSesion)
    if (!sesion) return next()

    // si encontré una sesion asociada la cargo y aumento la cant de visitas
    req.sesion = sesion
    req.sesion.visitas++
    next()
}

function soloLogueados(req, res, next) {
    if (!req.sesion) {
        return res.status(401).send('Error de sesion no iniciada')
    }
    next()
}

const app = express()
app.use(cookieParser(PALABRA_SECRETA))
app.use(express.json())
app.use(cargarSesion)

app.get('/registro', (req, res) => {
    const { dni, nombre } = req.query

    // creacion del usuario
    // if (idSesionesSegunDni[dni]) {
    if (sesionManager.getByDni(dni)) {
        return res.status(400).send('El dni ya se encuentra registrado')
    }
    if (!dni || !nombre) {
        return res.status(400).send('Faltan datos para el registro')
    }
    const nuevoUsuario = {
        dni,
        nombre,
        prestamos: []
    }

    // genero un id y guardo la sesion bajo ese id
    const idSesion = randomUUID()

    // creacion de la sesion para el nuevo usuario
    const nuevaSesion = { idSesion }
    // guardo al usuario en la sesion
    nuevaSesion['usuario'] = nuevoUsuario
    // guardo un contador para la cantidad de visitas
    nuevaSesion['visitas'] = 1

    // sesiones[idSesion] = nuevaSesion
    sesionManager.save(idSesion, nuevaSesion)

    // devuelvo el id de sesion en una cookie
    res.cookie('idSesion', idSesion, { signed: true, maxAge: 1000 * 60 * 60 * 24 * 7 })

    res.status(201).send('Registro OK (usuario creado)')
})

app.get('/login', (req, res) => {
    const { dni } = req.query

    // busco la sesion del usuario para iniciarla
    // const idSesion = idSesionesSegunDni[dni]
    // if (!idSesion) {
    //   return res.status(400).send('Error de login')
    // }

    const sesion = sesionManager.getByDni(dni)
    if (!sesion) {
        return res.status(400).send('Error de login')
    }

    // devuelvo el id de sesion en una cookie
    res.cookie('idSesion', sesion.idSesion, { signed: true, maxAge: 1000 * 60 * 60 * 24 * 7 })

    res.status(201).send('Login OK (sesion iniciada)')
})

app.get('/sesion', soloLogueados, (req, res) => {
    res.json(req['sesion'])
})

app.get('/nuevoPrestamo', soloLogueados, (req, res) => {
    const { idLibro } = req.query
    req['sesion'].usuario.prestamos.push(idLibro)
    res.status(201).send('Prestamo registrado')
})

app.get('/prestamos', soloLogueados, (req, res) => {
    res.json(req['sesion'].usuario.prestamos)
})

app.get('/visitas', soloLogueados, (req, res) => {
    res.json(req['sesion'].visitas)
})

app.get('/logout', (req, res) => {
    res.clearCookie('idSesion')
    res.sendStatus(200)
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})

/*
Para probarlo:
localhost:8080/registrar?dni=123&nombre=marian
localhost:8080/login?dni=123
localhost:8080/visitas
localhost:8080/visitas
localhost:8080/visitas
localhost:8080/prestamos
localhost:8080/sesion
localhost:8080/nuevoPrestamo?idLibro=456
localhost:8080/sesion



instalar express cookie-parser
*/