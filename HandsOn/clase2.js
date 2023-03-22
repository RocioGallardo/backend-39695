//HANDS ON LAB - CREACIÓN DE UNA CLASE CONTADOR
// Cómo lo hacemos? Se creará una clase que permitirá llevar cuentas individuales según cada responsable.

// Definir clase Contador
// La clase se creará con un nombre, representando al responsable del contador.
// El contador debe inicializarse en 0
// Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.

// Se espera una duración de 10 minutos.

// Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
// Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
// Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
// Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
// Realizar prueba de individualidad entre las instancias.




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
    static mostrarGlobal(){
        console.log(Contador.contadorGlobal)
    }
}

const contador1 = new Contador("Marian")
const contador2 = new Contador("Ro")

contador1.sumar()
contador2.sumar()
contador1.sumar()

Contador.mostrarGlobal()