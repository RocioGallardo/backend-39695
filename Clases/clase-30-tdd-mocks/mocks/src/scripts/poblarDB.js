import mongoose from 'mongoose'
import { crearUsuarioMock } from '../mocks/UsuarioMock.js'

const connection = await mongoose.connect('mongodb://localhost/coderhouse')

const usuarios = []

for (let i = 0; i < 50; i++) {
  usuarios.push(crearUsuarioMock().datos())
}

// me habia olvidado el await =P
await mongoose.connection.collection('usuarios').insertMany(usuarios)

await mongoose.disconnect()