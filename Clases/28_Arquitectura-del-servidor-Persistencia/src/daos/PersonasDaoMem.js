export class PersonasDaoMem {
  constructor() {
    this.personas = []
  }
  obtenerTodas() {
    return [...this.personas]
  }

  guardar(persona) {
    this.personas.push(persona)
  }

  buscarPorId(id) {
    return this.personas.find(p => p.id === id)
  }

  actualizarPorId(id, persona) {
    const index = this.personas.findIndex(p => p.id === id)
    this.personas[index] = persona
  }
}
