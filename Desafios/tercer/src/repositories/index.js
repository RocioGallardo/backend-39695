import { persistence } from "../dao/factory.js";
import ProductRepository from "./Products.repository.js";

export const productService = new ProductRepository(persistence)