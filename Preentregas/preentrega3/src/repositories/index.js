import { persistence } from "../dao/factory.js";
import ProductRepository from "./Product.repository.js";


export const productService = new ProductRepository(persistence)