export class Usuario {
  #id
  #email
  #nombre
  #productos

  constructor({
    id,
    email,
    nombre,
    productos,

  }) {
    this.#id = id
    this.#email = email
    this.#nombre = nombre
    this.#productos = productos
  }

  get id() { return this.#id }
  get email() { return this.#email }
  get nombre() { return this.#nombre }
  get productos() { return this.#productos }

  datos() {
    return {
      id: this.#id,
      email: this.#email,
      nombre: this.#nombre,
      productos: this.#productos.map(p => p.datos()),
    }
  }
}
