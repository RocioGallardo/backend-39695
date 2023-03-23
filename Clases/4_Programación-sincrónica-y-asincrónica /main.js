function funcion (parametro){
    return resultado
}

funcion("argumento")

//es importante hacer la diferenciacion entre argumento y parametro
// el parámetro es como una variable, y el argumento es el valor de la variable, por ej

function funcion2(parametro){ /* así funciona por dentro */
    const parametro = "argumento"
    return resultado
}

//los argumentos existen afuera de las funciones y los parametros existen adentro de las funciones

function ejecutar(){
    /*
    el tipo de dato del parámetro va a depender del argumento
    tipo de dato = "argumento" sería un string
    tipo de dato = 45 sería un number
    tipo de dato = () => {} sería una función (callback)
    */
    return resultado
}

// IIFE NO UTILIZAR, se auto invocan
// (function () {
//     console.log("saludos")
// })()

//PROMESAS



