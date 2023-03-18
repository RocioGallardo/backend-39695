const socket = io()

document.getElementById("btnNuevoProduct")?.addEventListener("click", e =>{
    const prod = {
        nombre: document.getElementById("inputNombre"),
        precio: document.getElementById("inputPrecio")
    }
    socket.emit("nuevoProducto", prod)
})

socket.on("actualizar", productos => {
    const divProducts = document.getElementById("products")
    divProducts.innerHTML = armarListaProductos(productos)
}) //es frontend

function armarListaProductos(productos){
    return JSON.stringify(productos, null, 2)
} //es frontend

socket.emit("refrescar")

