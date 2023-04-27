import mongoose from 'mongoose'

const personasSchema = new mongoose.Schema({
  nombre: String,
  edad: Number
})
const personasModel = mongoose.model('personas', personasSchema)
export class PersonasDaoMongoDb {
  constructor() {
    this.personas = personasModel
  }

  obtenerTodas() {
    return this.personas.find().lean()
  }

  async guardar(persona) {
    const result = await this.personas.create(persona)
    return JSON.parse(JSON.stringify(result))
  }

  buscarPorId(id) {
    return this.personas.findOne({ id }).lean()
  }

  actualizarPorId(id, persona) {
    return this.personas.replaceOne({ id }, persona)
  }
}
