import { faker } from "@faker-js/faker"
import { Product } from "../models/Product.js"


class ProductoMock{
  constructor(){
    return
  }

}

function crearProductoMock(){
  return new Product(
    faker.commerce.productName, 
    faker.commerce.productDescription, 
    faker.commerce.price, 
    faker.system.commonFileName("jpg"),
    faker.string.alpha({ length: 6, casing: 'upper'}),
    faker.number.bigInt({ max: 100 }))  
}