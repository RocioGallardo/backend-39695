export class Persona {
  #edad

  constructor({ id, nombre, edad }) {
    this.id = id
    this.nombre = nombre
    this.edad = edad
  }

  set edad(valor) {
    if (valor < 0) throw new Error('la edad debe ser positiva')
    this.#edad = valor
  }

  get edad() {
    return this.#edad
  }
}