import mongoose from 'mongoose'
import { MONGODB_CNX_TEST } from '../../../../src/config/mogodb.js'
import { cartManagerMongo } from '../../../../src/dao/mongo/schemas/CartManager.js'
import assert from "assert"

await mongoose.connect(MONGODB_CNX_TEST)



// describe('Cart', () => {
//   describe('#create', () => {
//     it('should create a new cart', async () => {
      const creada = await cartManagerMongo.create(); // Realiza la operación de creación
      assert.strictEqual(creada.isNew, false); // Verifica que el documento no sea nuevo (se haya guardado en la base de datos)
      // Puedes agregar más aserciones para verificar los valores del carrito creado según tu implementación
//     });
//   });
// });



console.log("test ok")

await mongoose.disconnect()
