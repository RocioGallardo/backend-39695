import { faker } from '@faker-js/faker'
import { Usuario } from '../models/Usuario.js'
import { Producto } from '../models/Producto.js'

export function crearProductoMock() {
  return new Producto({
    id: faker.datatype.uuid(),
    codigo: faker.random.alphaNumeric(8),
    descripcion: faker.random.words(10)
  })
}


export function crearUsuarioMock() {
  const productos = []

  const cantProductos = faker.datatype.number({ min: 2, max: 6 })

  for (let i = 0; i < cantProductos; i++) {
    productos.push(crearProductoMock())
  }

  return new Usuario({
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    nombre: faker.name.fullName(),
    productos
  })
}