import { usuariosManager } from '../managers/usuarios.manager.js'
import { criptografiador } from '../utils/criptografia.js'

class AuthenticationService {
  constructor({ usersManager, criptografiador }) {
    this.usersManager = usersManager
    this.criptografiador = criptografiador
  }
  async login({ username, password }) {
    let user
    try {
      user = await this.usersManager.obtenerUnoSegunCampo({ campo: 'username', valor: username })
    } catch (error) {
      throw new Error('error de autenticacion')
    }

    if (!this.criptografiador.comparar(password, user.password)) {
      throw new Error('error de autenticacion')
    }

    const token = this.criptografiador.generarToken(user)
    return token
  }
}

export const authenticationService = new AuthenticationService({
  usersManager: usuariosManager,
  criptografiador: criptografiador
})