// import { MongoClientSingleton } from './Singleton.js'
import { mongoClient } from './Singleton.js'

export class ProductosManager {
  constructor() {
    this.mongoClient = mongoClient
    // this.mongoClient = MongoClientSingleton.getInstance()
  }

  readMany() {
    return this.mongoClient.db().collection('productos').find().toArray()
  }
}