import { persistenceProducts } from "../dao/factory.js";
import CartRepository from "./Cart.repository.js";
import ProductRepository from "./Product.repository.js";


export const productService = new ProductRepository(persistenceProducts)
export const cartService = new CartRepository(persistenceCart)
export const oderService = new ProductRepository(persistenceOrder)