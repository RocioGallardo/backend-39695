import express from "express";
import  productsController  from "./controllers/ProductManager.js";
const app = express()

app.listen(8080, () => {
    console.log("conectado al 8080")
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/api/products", async (req, res) => {
    const response = await productsController.addProduct(req.body)
    if (response.pending) return res.json(response)
    res.json(response)
})
app.get("/api/products", async (req, res) => {
    if (req.query?.limit) {
        const products = await productsController.getProducts(req.query.limit)
        return res.json(products)
    } else {
        const products = await productsController.getProducts()
        return res.json(products)
    }
})
app.get("/api/products/:pid", async (req, res) => {
    const product = await productsController.getProductById(req.params.pid)
    if (!product) return res.json(product)
    return res.json(product)
})
app.delete("/api/products/:pid", async (req, res) => {
    const response = await productsController.deleteProduct(req.params.pid)
    if (response.pending) return res.json(response)
    res.json(response)
})