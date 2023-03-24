// Práctica de módulos nativos: 
// fs + crypto

// ¿Cómo lo hacemos? Se creará una clase “UserManager” que permitirá guardar usuarios en un archivo. 
// El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. 
// Utilizar los módulos nativos  fs y crypto, El manager debe contar con los siguientes métodos:
// El método “Crear usuario” debe recibir un objeto con los campos:
// Nombre
// Apellido
// Nombre de usuario
// Contraseña
// El método debe guardar un usuario en un archivo “Usuarios.json”, recordando que la contraseña debe estar hasheada por seguridad
// El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la contraseña,  
// debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, 
// Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”, 
// en caso contrario indicar error si el usuario no existe, o si la contraseña no coincide.






// const palabraAEncriptar = "paraencriptar"

// const salt = crypto.randomBytes(128).toString("base64") // genero una tira de bytes aleatorio

// // console.log(salt)

// const encriptado = crypto.createHmac("sha256", salt).update(palabraAEncriptar).digest("hex")

// console.log(encriptado)

const crypto = require("crypto")

class User {
    constructor(nombre, apellido, nombreDeUsuario, contraseña, salt){
        this.nombre = nombre,
        this.apellido = apellido,
        this.nombreDeUsuario = nombreDeUsuario,
        this.contraseña = crypto.createHmac("sha256", salt).update(contraseña).digest("hex")
    }
}

class UserManager {
    constructor(){
        this.users = []
        this.path = "Usuarios.json"
        this.salt = "rTgohUnepIfzEXS2Wgl8XZsrQOU5TgNyfNHgPcq5ZPUdA6T7SvbLCWMmd4J6bocngRw0LlfKIeHZlzYM8mfWbDZrKCEZmUziHFPk9/D4OUvpXXO6F1tl/b+DbmmfRkX7rjj0+T8akfX7RFsPXk0IhoHbS06hO8LmR+x5tUAuI+Q="
    }

    crearUsuario(nombre, apellido, nombreDeUsuario, contraseña){
        this.users.push(new User(nombre, apellido, nombreDeUsuario, contraseña, this.salt))
    }

    validarUsuario(nombreDeUsuario, contraseña){
        const user = this.users.find((elemento) => elemento.nombreDeUsuario === nombreDeUsuario)
        
        if (user){
            const encriptada = crypto.createHmac("sha256", this.salt).update(contraseña).digest("hex")
            if(user.contraseña == encriptada){
                console.log("sesión iniciada")
            } else{
                console.log("contraseña invalida")
            }
        } else{
            console.log("usuario no encontrado")
        }
    }
}

const nuevoManager = new UserManager()

nuevoManager.crearUsuario("rocio", "gallardo", "rocho", "password")
nuevoManager.crearUsuario("maximiliano", "lopez", "maxito", "123456")
nuevoManager.validarUsuario("rocio", "pass")
nuevoManager.validarUsuario("rocho", "pass")
nuevoManager.validarUsuario("rocho", "password")





