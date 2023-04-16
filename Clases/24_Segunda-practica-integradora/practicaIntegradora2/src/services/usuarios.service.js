import { usuariosManager } from '../managers/usuarios.manager.js'
import { criptografiador } from '../utils/criptografia.js'

class UsuariosService {
  constructor({ criptografiador }) {
    this.criptografiador = criptografiador
  }
  async registrar(datosFuturoUsuario) {
    datosFuturoUsuario.password = this.criptografiador.hashear(datosFuturoUsuario.password)
    const usuarioRegistrado = await usuariosManager.guardar(datosFuturoUsuario)
    return usuarioRegistrado
  }
}

export const usuariosService = new UsuariosService({ criptografiador })