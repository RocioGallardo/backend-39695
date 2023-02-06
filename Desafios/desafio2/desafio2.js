const {
    promises: {
        readFile, // lee un archivo
        writeFile, // [sobre]escribe un archivo
    }
} = require("fs")


class ProductManager {
    products
    path
    constructor(path) {
        this.products = []
        this.path = path
    }

    async creoArchivo() {// creo un archivo JSON
        try {
            await writeFile(this.path, JSON.stringify(this.products))
        } catch (error) {
            console.log(error.message)
        }
    }


    // método para agregar productos

    async addProduct(title, description, price, thumbnail, code, stock) {
        
        try {
            const data = await readFile(this.path, 'utf-8')
            const products = await JSON.parse(data)
            const existingProduct = products.find(p => p.code === code)
            if (existingProduct) {
                throw new Error("El producto con ese código ya ha sido cargado")
            } else{
                const product = new Product( title, description, price, thumbnail, code, stock )
                products.push(product)
                const comoJson = JSON.stringify(products)
                await writeFile(this.path, comoJson)
            }
        } catch (error) {
            console.error(error)
        }
    }


    async getProducts() {
        try {
            const data = await readFile(this.path, 'utf-8')
            if (data != "[]"){
                const products = JSON.parse(data)
                return products
            } else{
                return data
            }
            
            
        } catch (error) {
            console.error(error)
        }
    }



    async getProductById(id) {
        try {
            const data = await readFile(this.path, 'utf-8')
            const products = JSON.parse(data)
            const product = products.find(p => p.id === id)
            if (product) {
                return product
            } else {
                throw new Error("Producto no encontrado")
            }
        } catch (error) {
            console.error(error)
        }
    }

    async updateProduct(id, propiedad, valor) {
        try {
            const data = await readFile(this.path, 'utf-8');
            const products = JSON.parse(data)
            const productIndex = products.findIndex((product) => product.id === id)
            if (productIndex === -1) {
                throw new Error("El producto con ese ID no fue encontrado")
            }
            products[productIndex][propiedad] = valor;
            await writeFile(this.path, JSON.stringify(products))
        } catch (error) {
            console.error(error)
        }
    }

    async deleteProduct(id) {
        try {
            const data = await readFile(this.path, 'utf-8')
            const products = JSON.parse(data)
            const productIndex = products.findIndex((product) => product.id === id)
            if (productIndex === -1) {
                throw new Error("El producto con ese ID no fue encontrado")
            }
            products.splice(productIndex, 1)
            await writeFile(this.path, JSON.stringify(products))
        } catch (error) {
            console.error(error)
        }
    }

}

class Product {
    title
    description
    price
    thumbnail
    code
    stock
    static idCounter = 0
    constructor( title, description, price, thumbnail, code, stock ) {
        if (
            title === undefined ||
            description === undefined ||
            price === undefined ||
            thumbnail === undefined ||
            code === undefined ||
            stock === undefined
        ) {
            throw new Error('Todos los campos son obligatorios')
        }
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.idCounter++
    }
}

const productManager = new ProductManager("products.json")


// -----------creo archivo json
// productManager.creoArchivo()

// -----------traigo todos los productos

// productManager.getProducts().then(products => {
//     console.log(products)})


// -----------agrego un producto

// productManager.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25,).then(console.log("producto cargado"))

// -----------traigo todos los productos

// productManager.getProducts().then(products => {
//     console.log(products)})


// -----------busco un producto segun id existente

// productManager.getProductById(0).then(product => {
//     console.log(product)})

// -----------busco un producto segun id inexistente
// productManager.getProductById(4).then(product => {
//     console.log(product)})


// -----------actualizo un producto
// productManager.updateProduct(0, "description", "descripcion actualizada")

// -----------verifico que se haya actualizado

// productManager.getProductById(0).then(product => {
//     console.log(product)})

//-----------elimino producto
//productManager.deleteProduct(0)

//-----------verifico que se eliminó
// productManager.getProducts().then(products => {
//     console.log(products)})
