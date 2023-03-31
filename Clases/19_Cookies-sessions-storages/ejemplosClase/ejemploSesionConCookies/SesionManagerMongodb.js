import mongoose from 'mongoose'
await mongoose.connect('mongodb://localhost/coderhouse')

const sesionSchema = new mongoose.Schema({
    /* ... */
})

const sesionModel = mongoose.model('sesiones', sesionSchema)

class SesionManagerMongodb {
    constructor() {
        this.model = sesionModel
    }

    getByDni(dni) {
        return // uso el modelo!
    }

    getById(id) {
        return // uso el modelo!
    }

    save(id, sesionData) {
        return // uso el modelo!
    }
}

export default SesionManagerMongodb