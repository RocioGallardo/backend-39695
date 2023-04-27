import { Persona } from '../models/Persona.js'

class PersonasRepository {
  constructor(personasDao) {
    this.personasDao = personasDao

  }

  obtenerTodas() {
    return this.personasDao.obtenerTodas()
  }

  guardar(persona) {
    return this.personasDao.guardar(persona)
  }

  async buscarPorId(id) {
    const dtoPersona = await this.personasDao.buscarPorId(id)
    return new Persona(dtoPersona)
  }

  actualizarPorId(id, persona) {
    return this.personasDao.actualizarPorId(id, persona)
  }

}

export const personasRepository = new PersonasRepository()