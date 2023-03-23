class TomadorDeLista {
    //atributos
    listado
    constructor(){
        this.listado = []
    }
    //metodos
    agregarEstudiante({dni, nombre}){
        const estudiante = new Estudiante({dni, nombre})
        this.listado.push(estudiante)
    }
    listarEstudiantes(){
        return this.listado
    }
    ponerPresenteSegunDni(dni){
        const estudiante = this.listado.find(e => e.dni === dni)
        estudiante.estaPresente = true
    }
}

const tomadorDeLista = new TomadorDeLista()

class Estudiante {
    //atributos
    dni
    nombre
    estaPresente
    constructor({dni, nombre, estaPresente = false}){
        if (dni == undefined){
            throw new Error ("El dni es un campo obligatorio")
        }
        this.dni = dni
        if (nombre == undefined){
            throw new Error ("El nombre es un campo obligatorio")
        }
        this.nombre = nombre
        this.estaPresente = estaPresente
    }
    //metodos
}

tomadorDeLista.agregarEstudiante({dni: "123", nombre: "marian"})
console.log(tomadorDeLista.listarEstudiantes())
tomadorDeLista.ponerPresenteSegunDni({dni:"123"})
console.log(tomadorDeLista.listarEstudiantes())