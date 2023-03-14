import mongoose from "mongoose"

await mongoose.connect("mongodb://localhost/coderhouse")

export class ManagerMongoose{
    constructor(nombreColeccion, schema){
        this.coleccion = mongoose.model(nombreColeccion, new mongoose.Schema(schema))
    }
    async guardar(registro){
        await this.coleccion.create(registro)
    }

}

