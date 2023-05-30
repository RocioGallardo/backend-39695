import { handleGet } from '../src/controllers/usuarios.controller.js'
import { usuariosDao } from '../src/daos/usuarios.dao.memoria.js'
import { crearUsuarioMock } from '../src/mocks/UsuarioMock.js'
import { inspect } from 'node:util'

let usuarioNuevo = crearUsuarioMock().datos()
usuarioNuevo.productos = [1, 2, 3, 4, 5]
await usuariosDao.create(usuarioNuevo)

usuarioNuevo = crearUsuarioMock().datos()
usuarioNuevo.productos = [1, 2, 3, 4, 5]
await usuariosDao.create(usuarioNuevo)

usuarioNuevo = crearUsuarioMock().datos()
usuarioNuevo.productos = [1, 2]
await usuariosDao.create(usuarioNuevo)

const req = { params: {}, query: { minProds: 4 } }
const res = {
  json: (result) => {
    console.log(inspect(result, false, 10))
  }
}
const next = (error) => {
  console.log(error)
}

handleGet(req, res, next)