import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export class ManagerMongoose {
    constructor(collectionName, schema) {
        const newSchema = new mongoose.Schema(schema, { versionKey: false });
        newSchema.plugin(mongoosePaginate);
        this.collection = mongoose.model(collectionName, newSchema);
    }

    async create(record) {
        return await this.collection.create(record);
    }

    async read(filter = {}) {
        if (typeof filter === 'object' && !Array.isArray(filter)) {
            return await this.collection.findOne(filter).lean();
        } else {
            return await this.collection.find(filter).lean();
        }
    }

    async update(filter, updatedData) {
        const options = { new: true, upsert: false, multi: true };
        // EJEMPLO Actualizar un solo documento
        // const filter = { _id: 'documento_id' };
        // const updatedData = { name: 'John Doe', age: 30 };
        // const updatedDocument = await manager.update(filter, updatedData);
        if (typeof filter === 'object' && !Array.isArray(filter)) {
            return await this.collection.findOneAndUpdate(filter, updatedData, options).lean();
        } else {
            // Actualizar varios documentos
            // const filter = { status: 'active' };
            // const updatedData = { status: 'inactive' };
            // const updateResult = await manager.update(filter, updatedData);
            return await this.collection.updateMany(filter, updatedData, options);
        }
    }


    async delete(filter = {}, options = {}) {
        if (typeof filter === 'object' && !Array.isArray(filter)) {
            return await this.collection.findOneAndDelete(filter, options);
        } else {
            const result = await this.collection.deleteMany(filter, options);
            return result.deletedCount;
        }
    }

    async getIdByProperty(property, value) {
        const document = await this.collection.findOne({ [property]: value }).select('_id').lean();
        return document ? document._id : null;
    }

    async paginate(filter = {}, options = {}) {
        const { page = 1, limit = 10 } = options;
        const paginatedResults = await this.collection.paginate(filter, { page, limit });
        return paginatedResults;
    }
}
