const finalizarComprabtn = document.getElementById("finalizarCompra")

const idCart =  finalizarComprabtn.getAttribute('data-cart-id')

finalizarComprabtn.addEventListener("click", () => {
    
    console.log(`/api/carts/${idCart}/purchase`)
    fetch(`/api/carts/${idCart}/purchase`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(() => {
        console.log(idCart)
            window.location.replace(`/api/carts/${idCart}/purchase`)
        })
})

// console.log(finalizarComprabtn)

// finalizarComprabtn.addEventListener('click', () => {
//     const idCart =  finalizarComprabtn.getAttribute('data-cart-id')
//     console.log(idCart)
//     fetch(`/api/carts/${idCart}/purchase`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(result => {
//     if (result.status === 201) {
//         window.location.replace(`/api/carts/${idCart}/purchase`)
//         }
//     })
// })



