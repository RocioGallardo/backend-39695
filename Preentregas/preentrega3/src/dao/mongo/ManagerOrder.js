import mongoose from "mongoose";

export class ManagerOrder {
    constructor(nombreColeccion, schema) {
        this.collection = mongoose.model(nombreColeccion, new mongoose.Schema(schema, { versionKey: false }));
    }

    async crearOrden(registro) {
        return await this.coleccion.create(registro);
    }

    async crearOrden2() {
        const orden = await this.collection.create({ listProducts: [] });
        return orden._id.toString();
    }

    async mostrarOrden(id) {
        try {
            if (id) {
                const orden = await this.collection
                    .findById(id)
                    .populate('listProducts.productId')
                    .lean();
                return orden;
            } else {
                const ordenes = await this.collection
                    .find({})
                    .populate('listProducts.productId')
                    .lean();
                return ordenes;
            }
        } catch (error) {
            console.log(`Error en la consulta: ${error}`);
            throw error;
        }
    }


}
