export class Producto {
  #id
  #codigo
  #descripcion

  constructor({ id, codigo, descripcion }) {
    this.#id = id
    this.#codigo = codigo
    this.#descripcion = descripcion
  }

  get id() { return this.#id }
  get codigo() { return this.#codigo }
  get descripcion() { return this.#descripcion }

  datos() {
    return {
      id: this.#id,
      codigo: this.#codigo,
      descripcion: this.#descripcion,
    }
  }
}