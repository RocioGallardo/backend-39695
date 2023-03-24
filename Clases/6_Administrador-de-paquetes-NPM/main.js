/* modulos nativos en nodejs

fs --> modulo utilizado para manejo de archivos, sirve para manejar otro modelo de persistencia
crypto --> permite hacer operaciones de encriptacion y cifrado para informacion sensible, sirve para mejorar la seguridad de los datos
http --> permite crear un servidor básico bajo el protocolo http, Sirve para crear nuestro primer servidor de solicitud/respuesta
path --> Permite el correcto manejo de rutas, Sirve para evitar ambigüedad al trabajar con rutas


npm
    instalaciones globales -> Por otra parte, instalar una dependencia de manera global implica instalar el módulo para todos los proyectos, evitando la necesidad de instalar cada vez que hagamos un proyecto nuevo. Para instalar de manera global, sólo colocamos la flag -g EJEMPLO : npm install -g modulo_a_instalar
    instalaciones locales  -> Instalar una dependencia de manera local significa que ese módulo instalado pertenecerá y se utilizará sólo dentro de ese proyecto. Ello implica que, si quisiera utilizar la misma dependencia en otro proyecto, tendría que volver a hacer la instalación, ya que no son compartidas EJEMPLO : npm install modulo_a_instalar

versionado de dependencias

v2.0.4
2(major version) versiones mayores (primer dígito): Hace referencia a cambios grandes, tanto que ya no son compatibles con otras versiones anteriores.
0(minor version) Versiones menores (segundo dígito): Hace referencia a cambios en ciertas características y funcionalidades que no afecten a versiones anteriores, es decir, podemos actualizarlo sin afectar la estructura del proyecto.
4(patch version) Parches (último dígito): Hace referencia a bugfixes o manejo de defectos del código actual. No se está cambiando nada estructuralmente hablando, sólo estamos arreglando cosas.


Política de actualizaciones de dependencias
En nuestro package.json podemos colocar operadores que permitan tener un mejor control de las versiones:
    - ^ Sirve para instalar la versión menor más alta, esto significa que no  actualizará a alguna versión mayor, protegiendo así a nuestro código de incompatibilidades
    - ~ Sirve para instalar sólo los parches, lo cual significa que no altera las versiones menores, sólo las ligeras correcciones a bugs del código
Si no colocamos ningún operador, se instalará la versión exacta que hayamos colocado.



*/


const crypto = require("crypto")

const palabraAEncriptar = "paraencriptar"

const salt = crypto.randomBytes(128).toString("base64") // genero una tira de bytes aleatorio

// console.log(salt)

const encriptado = crypto.createHmac("sha256", salt).update(palabraAEncriptar).digest("hex")

console.log(encriptado)