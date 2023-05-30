import { handleGet } from '../src/controllers/usuarios.controller.js'
import { usuariosDao } from '../src/daos/usuarios.dao.memoria.js'
import { crearUsuarioMock } from '../src/mocks/UsuarioMock.js'
import { inspect } from 'node:util'

const usuarioNuevo = crearUsuarioMock().datos()
await usuariosDao.create(usuarioNuevo)

console.log(usuarioNuevo.email)

const req = { params: {}, query: { porEmail: usuarioNuevo.email } }
const res = {
  json: (result) => {
    console.log(inspect(result, false, 10))
  }
}
const next = (error) => {
  console.log(error)
}

handleGet(req, res, next)