import { validarPassword, validarUsername } from '../utils/validaciones.js'

export class DatosLogin {
    constructor({ username, password }) {
        this.username = validarUsername(username)
        this.password = validarPassword(password)
    }
}