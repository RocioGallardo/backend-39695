import { Router } from "express";
import { productManager } from "../managers/products.manager.js"

export const webRouter = Router()

webRouter.get("/products", (req, res) => {
    const productos = productManager.obtenerTodos()
    res.render("products", { hayProductos: productos.length > 0,  productos});
});


