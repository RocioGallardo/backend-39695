import { validarDni, validarNombre, validarApellido, validarEdad } from '../utils/validaciones.js'

export class DatosFuturoPaciente {
    constructor({ dni, nombre, apellido, edad }) {
        this.dni = validarDni(dni)
        this.nombre = validarNombre(nombre)
        this.apellido = validarApellido(apellido)
        this.edad = validarEdad(Number(edad))
    }
}