class ProductManager{
    constructor(){
        this.products = []
    }
    addProduct(title, description, price, thumbnail, code, stock){
        if(this.products.some(el => el.code === code)){
            console.error("El código del producto ya está cargado")
        } else{
            this.products.push({
                title : title,
                description : description,
                price: price,
                thumbnail : thumbnail,
                code: code,
                stock: stock,
                id: this.products.length
            })
        }
    }
    getProducts(){
        console.log(this.products)
    }
    getProductById(id){
        if(this.products.some(el => el.id === id)){
            console.log(this.products.find(el => el.id === id))
        } else {
            console.error("Producto no encontrado")
        }
    }
}

const productManager = new ProductManager

productManager.getProducts()
productManager.addProduct("producto prueba", "Este es un producto prueba", "200", "Sin imagen", "abc123", 25)
productManager.getProducts()
productManager.addProduct("producto prueba", "Este es un producto prueba", "200", "Sin imagen", "abc123", 25)
productManager.getProductById(0)
productManager.getProductById(5)