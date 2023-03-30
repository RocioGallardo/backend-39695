const socket = io()


const btnAgregarAlCarrito = document.querySelectorAll('.btnAgregarAlCarrito');

// Agregar evento 'click' a cada botón
btnAgregarAlCarrito.forEach((btn) => {
    btn.addEventListener('click', () => {
        const datosACargar = {
            idCarrito: "642229d267db91ab74cea711",
            idProducto : btn.getAttribute('data-product-id'),
            cantidad: 1
        }
        socket.emit('agregarAlCarrito', datosACargar);
    });
});


socket.on('carritoActualizado', datosCargados => {
    const pAgregado = document.getElementById(`p${datosCargados.idProducto}`)
    if (pAgregado) {
        pAgregado.innerHTML = `agrego ${datosCargados.cantidad} en el carrito con id ${datosCargados.idCarrito}`
    }
})



