/* asincronismo 

Manejo de archivos :
fs en nodejs
    - fs síncrono
    - fs con callbacks
    - fs con promesas
*/


// Math.sqrt(25)


//const fs = require("fs")

const {readFileSync, // lee un archivo
        writeFileSync, // [sobre]escribe un archivo
        appendFileSync, // agrega contenido a un archivo
        rmSync // (remove) borra un archivo
    } = require("fs")

//console.log(readFileSync)

//READING

try {
    const contenidoTimers = readFileSync("./timers.js", "utf-8")
    console.log(contenidoTimers)
} catch (error) {
    console.log(error.message)
}


//WRITING

try {
    writeFileSync("./nuevo.txt", "hola")
} catch (error) {
    console.log(error.message)
}


// APPEND - agregar al final

try {
    appendFileSync("./nuevo.txt", ` 
    este texto está adosado`)
} catch (error) {
    console.log(error.message)
}


// REMOVE - remueve un archivo o directorio

try {
    rmSync("./nuevo.txt")
} catch (error) {
    console.log(error.message)
}

// rename, copy, readdirSync(leer contenido de un directorio)


// PROMESAS

const {
    promises: {
        readFile, // lee un archivo
        writeFile, // [sobre]escribe un archivo
        appendFile, // agrega contenido a un archivo
        rm // (remove) borra un archivo
    }
} = require("fs")


async function main(){
    try {
        const contenidoTimers = await readFile("./timers.js", "utf-8")
        console.log(contenidoTimers)
    } catch (error) {
        console.log(error.message)
    }
}
