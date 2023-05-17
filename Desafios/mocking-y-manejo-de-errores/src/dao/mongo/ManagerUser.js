import mongoose from "mongoose";

export class ManagerUser {
    constructor(nombreColeccion, schema) {
        this.collection = mongoose.model(nombreColeccion, new mongoose.Schema(schema, { versionKey: false }));
    }

    async crear(data) {
        const user = await this.collection.create(data)
        return user._id.toString();
    }

    async obtenerPorPropiedad(propiedad, valor){
        const query = {};
        query[propiedad] = valor;
        const results = await this.collection.find(query);
        return results;
    }
}
