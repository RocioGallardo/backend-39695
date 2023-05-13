const socket = io();


const btnAgregarAlCarrito = document.querySelectorAll('.btnAgregarAlCarrito');

// Agregar evento 'click' a cada botón
btnAgregarAlCarrito.forEach((btn) => {
    btn.addEventListener('click', async () => {
        const datosACargar = {
            idProducto: btn.getAttribute('data-product-id'),
            cantidad: 1
        }
        try {
            const response = await fetch('/api/carts', {
                method: 'PUT',
                body: JSON.stringify(datosACargar),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            if (response.ok) {
                socket.emit('agregarAlCarrito', datosACargar);
            } else {
                throw new Error(`Error al agregar el producto al carrito: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
            // Mostrar un mensaje de error al usuario
        }
    });
});

socket.on('carritoActualizado', datosCargados => {
    const {cantidad, idProducto} = datosCargados
    const pAgregado = document.getElementById(`p${idProducto}`);
    if (pAgregado) {
        pAgregado.innerHTML = `Agregado ${cantidad} al carrito.`;
    }
});



// socket.on('carritoActualizado', datosCargados => {
//     const pAgregado = document.getElementById(`p${datosCargados.idProducto}`);
//     if (pAgregado) {
//         pAgregado.innerHTML = `Agregado ${datosCargados.cantidad} al carrito con id ${datosCargados.idCarrito}`;
//     }
// });

// const socket = io()


// const btnAgregarAlCarrito = document.querySelectorAll('.btnAgregarAlCarrito');

// // Agregar evento 'click' a cada botón
// btnAgregarAlCarrito.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         const datosACargar = {
//             // idCarrito: "642229d267db91ab74cea711",
//             idProducto : btn.getAttribute('data-product-id'),
//             cantidad: 1
//         }
//             fetch('/api/carts/add', {
//             method: 'PUT',
//             body: JSON.stringify(datosACargar),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         socket.emit('agregarAlCarrito', datosACargar);
//     });
// });


// socket.on('carritoActualizado', datosCargados => {
//     const pAgregado = document.getElementById(`p${datosCargados.idProducto}`)
//     if (pAgregado) {
//         pAgregado.innerHTML = `agrego ${datosCargados.cantidad} en el carrito con id ${datosCargados.idCarrito}`
//     }
// })



