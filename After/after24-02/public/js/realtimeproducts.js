const socket = io()

socket.on("actualizar", productos => {
    const divProducts = document.getElementById("products")
    divProducts?.innerHTML = armarListaProductos(productos)
})

function armarListaProductos(productos){
    return JSON.stringify(productos, null, 2)
}

socket.emit("nuevoProducto")

