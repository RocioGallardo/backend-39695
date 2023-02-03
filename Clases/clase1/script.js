function mostrarLista(array){
    if(array.length >= 1){
            array.forEach(item => {
            console.log(item)
        })
        console.log(`el tamaño del array es ${array.length}`)
    } else{
        console.log("lista vacía")
    }
    console.log(array.length)
}

mostrarLista([1,3,5,8,9])
mostrarLista([1,3,5])
mostrarLista([1,3,5,8])