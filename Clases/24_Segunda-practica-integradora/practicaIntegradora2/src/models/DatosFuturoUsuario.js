import { validarPassword, validarUsername } from '../utils/validaciones.js'

export class DatosFuturoUsuario {
    constructor({ username, password }) {
        this.username = validarUsername(username)
        this.password = validarPassword(password)
    }
}