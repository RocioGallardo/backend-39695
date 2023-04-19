import mongoose from 'mongoose'

await mongoose.connect('mongodb://localhost/coderhouse')

const infoSchema = new mongoose.Schema({
  info: String
}, { versionKey: false })

const infoModel = mongoose.model('info', infoSchema)

class InfoRepositoryMongoDb {
  constructor(infoModel) {
    this.infoModel = infoModel
  }

  create(data) { }
  readOne(id) { }
  async readMany(criteria = {}) {
    const result = await this.infoModel.find(criteria).lean()
    // console.log(result)
    return result
  }
  updateOne(id) { }
  updateMany(criteria) { }
  deleteOne(id) { }
  deleteMany(criteria) { }
}

export const infoRepositoryMongoDb = new InfoRepositoryMongoDb(infoModel) 