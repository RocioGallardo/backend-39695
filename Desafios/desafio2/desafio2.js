class ProductManager {

    products
    constructor(){
        this.products = []
    }
    addProduct({title, description, price, thumbnail, code, stock}){
        if(this.products.some(el => el.code === code)){
            throw new Error("El código del producto ya está cargado")
        } else{
            const product = new Product({title,description,price,thumbnail,code,stock})
            this.products.push(product)
        }
    }

    getProducts(){
        console.log(this.products) 
    }
    getProductById(id){
        if(this.products.some(el => el.id === id)){
            console.log(this.products.find(el => el.id === id))
        } else {
            throw new Error ("Producto no encontrado")
        }
    }

}


class Product {
    //atributos
    title
    description
    price
    thumbnail
    code
    stock
    static idCounter = 0
    constructor({title,description,price,thumbnail,code,stock}){
        if (title == undefined || 
            description == undefined || 
            price == undefined || 
            thumbnail == undefined ||
            code == undefined ||
            stock == undefined 
            ){
            throw new Error("Todos los campos son obligatorios")
        }
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = ++Product.idCounter
    }
}



const productManager = new ProductManager()

// productManager.getProducts()
// productManager.addProduct({title: "producto prueba", description: "Este es un producto prueba", price: "200", thumbnail: "Sin imagen", code:"abc123", stock: 25})
// productManager.getProducts()
// productManager.addProduct({title: "producto prueba", description: "Este es un producto prueba", price: "200", thumbnail: "Sin imagen", code:"abc123", stock: 25})
// productManager.getProductById(1)
// productManager.getProductById(5)