import mongoose from "mongoose";

export class ManagerOrder {
    constructor(nombreColeccion, schema) {
        this.collection = mongoose.model(nombreColeccion, new mongoose.Schema(schema, { versionKey: false }));
    }

    async crearOrder(registro) {
        return await this.collection.create(registro);
    }

    async crearOrden2() {
        const orden = await this.collection.create({ listProducts: [] });
        return orden._id.toString();
    }

    async mostrarOrdersSegunPropiedad(data) {
        try {
            const ordenesEncontradas = await this.collection.find(data).lean();
            return ordenesEncontradas;
        } catch (error) {
            console.log(`Error en la consulta: ${error}`);
            throw error;
        }
    }

}
