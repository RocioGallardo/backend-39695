import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

export class ManagerMongoose {
    constructor(nombreColeccion, schema) {
        const _schema = new mongoose.Schema(schema, { versionKey: false })
        _schema.plugin(mongoosePaginate)
        this.coleccion = mongoose.model(nombreColeccion, _schema)
    }
    async guardar(registro) {
        const registroCreado = await this.coleccion.create(registro)
        return JSON.parse(JSON.stringify(registroCreado))
    }

    async obtenerTodos(criterio = {}, opciones = {}) {

        const pagination = opciones.pagination || false
        const limit = opciones.limit || 10
        const page = opciones.page || 1

        // @ts-ignore
        return await this.coleccion.paginate(criterio, { pagination, limit, page, lean: true })

    }

    async obtenerUnoSegunCampo({ campo, valor }) {
        const criterio = {}
        criterio[campo] = valor
        const buscado = await this.coleccion.findOne(criterio).lean()
        if (!buscado) {
            throw new Error('no encontrado')
        } else {
            return buscado
        }
    }
}
