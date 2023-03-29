import mongoose from 'mongoose';

export class ManagerMongoose {
    constructor(nombreColeccion, schema) {
        this.coleccion = mongoose.model(nombreColeccion, new mongoose.Schema(schema, { versionKey: false }));
    }

    async guardar(registro) {
        return await this.coleccion.create(registro);
    }

    async obtenerTodos() {
        return await this.coleccion.find({}).lean();
    }

    async obtenerPorId(id) {
        return await this.coleccion.findById(id).lean();
    }

    async actualizarPorId(id, datosActualizados) {
        return await this.coleccion.findByIdAndUpdate(id, datosActualizados, { new: true }).lean();
    }

    async eliminarPorId(id) {
        return await this.coleccion.findByIdAndDelete(id);
    }

    async eliminarTodos() {
        const result = await this.coleccion.deleteMany({});
        return result.deletedCount;
    }

    async obtenerIdPorPropiedad(propiedad, valor) {
        const documento = await this.coleccion.findOne({ [propiedad]: valor }).select('_id').lean();
        return documento ? documento._id : null;
    }
}




// find() - Este método permite buscar documentos en una colección en función de un conjunto de criterios de búsqueda. Por ejemplo:
// const documentos = await coleccion.find({ campo: valor });
// findOne() - Este método permite buscar un único documento en una colección en función de un conjunto de criterios de búsqueda. Por ejemplo:
// const documento = await coleccion.findOne({ campo: valor });
// findById() - Este método permite buscar un documento en una colección por su identificador único. Por ejemplo:
// const documento = await coleccion.findById(id);
// create() - Este método permite crear un nuevo documento en una colección. Por ejemplo:
// const nuevoDocumento = new coleccion({ campo: valor });
// await nuevoDocumento.save();
// También puedes utilizar la sintaxis abreviada Modelo.create({ campo: valor }) para crear y guardar un nuevo documento de una sola vez.
// updateOne() y updateMany() - Estos métodos permiten actualizar uno o varios documentos en una colección en función de un conjunto de criterios de búsqueda. Por ejemplo:
// await Modelo.updateOne({ campo: valor }, { $set: { campoActualizado: nuevoValor } });
// findByIdAndUpdate() - Este método permite actualizar un documento en una colección por su identificador