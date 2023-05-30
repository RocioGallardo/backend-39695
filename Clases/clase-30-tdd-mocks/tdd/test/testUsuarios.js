import { handleGet } from '../src/controllers/usuarios.controller.js'
import { usuariosDao } from '../src/daos/usuarios.dao.memoria.js'
import { crearUsuarioMock } from '../src/mocks/UsuarioMock.js'
import { inspect } from 'node:util'

await usuariosDao.create(crearUsuarioMock().datos())
await usuariosDao.create(crearUsuarioMock().datos())
await usuariosDao.create(crearUsuarioMock().datos())

const req = { params: {}, query: {} }
const res = {
  json: (result) => {
    console.log(inspect(result, false, 10))
  }
}
const next = (error) => {
  console.log(error)
}

handleGet(req, res, next)