import { MongoClient } from 'mongodb'

// export class MongoClientSingleton {
//   static client

//   static getInstance() {
//     if (MongoClientSingleton.client === null) {
//       MongoClientSingleton.client = new MongoClient('mongodb://localhost/coderhouse')
//       // esto es asincronico! no queda listo para ser usado inmediatamente! posibles errores por race conditions
//       MongoClientSingleton.client.connect()
//     }
//     return MongoClientSingleton.client
//   }
// }

const mongoClient = new MongoClient('mongodb://localhost/coderhouse')
await mongoClient.connect() // ES6 me permite usar top-level await en módulos y evitar race conditions
export { mongoClient }