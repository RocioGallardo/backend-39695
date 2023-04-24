// import { MongoClientSingleton } from './Singleton.js'
import { mongoClient } from './Singleton.js'

export class PersonasManager {
  constructor() {
    this.mongoClient = mongoClient
    // this.mongoClient = MongoClientSingleton.getInstance()
  }

  readMany() {
    return this.mongoClient.db().collection('personas').find().toArray()
  }
}