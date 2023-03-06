/*

Cambios importantes de ES6
- Let y Const
el scope para un let, o para un const es en bloque, sin embargo const además prohibe la reasignacion de valores OJO ! no quiere decir que es inmutable, si el valor es un array o un objeto , se pueden cambiar los valores internos de sus elementos

NO REASIGNABLE  ≠ INMUTABLE 


- Funciones en JS
Son bloques de instrucciones que trabajan sobre un scope interno , pueden encontrarse en su sintaxis básica o en su notación flecha =>

-Scopes

- Template strings
Permiten incrustar info dentro de ella, evitando la concatenacion,
Reconoce saltos de línea
No presenta límite de caracteres, permitiendo hacer estructuras más complejas, como plantillas


HANDS ON LAB - FUNCIONES

*/

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



/*

CLASES
son una representacion de una entidad, nos sirve para modelar múltiples cosas como: un auto, una persona, o bien cosas más abtractas.
Funcionan como moldes, podemos crear mútiples objetos con la misma forma y funcionalidad, a esto se le llama INSTANCIA

*/
class Persona {
    constructor(nombre){
        this.nombre = nombre
    }
    static especie = "humano"

    saludar(){
        console.log(`Hola! soy ${this.nombre}, mucho gusto`)
    }
    getEspecie(){
        console.log(`Aunque no lo creas soy un ${Persona.especie}`)
    }
}

const persona1 = new Persona("Marian")
const persona2 = new Persona("Rocio")
persona1.saludar()
persona2.saludar()
persona1.getEspecie()
persona2.getEspecie()


//HANDS ON LAB - CREACIÓN DE UNA CLASE CONTADOR



class Contador{
    constructor(nombre){
        this.nombreResponsable = nombre
        this.contador = 0
    }
    static contadorGlobal = 0
    sumar(){
        this.contador++
        console.log("sumado !")
        Contador.contadorGlobal++
    }
    mostrarGlobal(){
        console.log(Contador.contadorGlobal)
    }
}

const contador1 = new Contador("Marian")
const contador2 = new Contador("Ro")

contador1.sumar()
contador2.sumar()
contador1.sumar()
contador2.mostrarGlobal()
