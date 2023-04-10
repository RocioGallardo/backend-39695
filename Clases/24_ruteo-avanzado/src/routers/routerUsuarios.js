import { Router } from 'express'
import { isNumeric } from '../utils/validations.js'
import { soloRoles } from '../middlewares/autorizacionPorRoles.js'
import { autenticacion } from '../middlewares/autenticacion.js'
import { createToken } from '../utils/tokens.js'

let nextId = 1
const users = []

export const routerUsuarios = Router()

routerUsuarios.param('idUsuario', (req, res, next, idUsuario) => {
    // console.log('llegó un id de usuario: ' + idUsuario)
    if (isNumeric(idUsuario)) {
        next()
    } else {
        next(new Error('formato invalido de id de usuario'))
    }
})

routerUsuarios.post('/:rol/:nombre',
    (req, res, next) => {
        const user = { id: nextId++, nombre: req.params.nombre, rol: req.params.rol }
        users.push(user)

        const token = createToken(user)
        res['addToken'](token)

        res['sendSuccess'](user)
    }
)

routerUsuarios.get('/',
    autenticacion,
    soloRoles(['user', 'admin']),
    (req, res, next) => { res['sendSuccess'](users) }
)

routerUsuarios.get('/:idUsuario',
    autenticacion,
    (req, res, next) => { res['sendSuccess'](req['user']) }
)

routerUsuarios.put('/:idUsuario',
    autenticacion,
    soloRoles(['user', 'admin']),
    (req, res, next) => { res['sendSuccess'](req['user']) }
)

routerUsuarios.delete('/:idUsuario',
    autenticacion,
    soloRoles(['admin']),
    (req, res, next) => { res['sendSuccess'](req['user']) }
)