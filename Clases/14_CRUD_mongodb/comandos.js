/* 
show dbs : muestra las bases de datos existentes
use <db name> : en caso de no existir crea una base de datos nuevas, sino , entra a la existente
db : muestra en que base de datos estamos posicionados
show collections : muestra todas las colecciones disponibles en la base de datos posicionada
db.createCollection("nombreDeLaColeccion"): crea una coleccion en la base de datos posicionada
db.dropDatabase() : Elimina la base de datos actual
db.collection.drop() : Elimina la coleccion de la base de datos posicionada

-- CONTEO DE DATOS --
    db.collection.estimatedDocumentCount() : Cuenta el estimado más próximo al número de documentos según su metadata
    db.collection.countDocuments(opt) : Cuenta los documentos que cumplan con el criterio definido en las opciones (opt)


---OPT----
opt hace referencia en este caso a las opciones de filtros de búsqueda que podemos realizar al momento de buscar un valor, la sintaxis elemental de un opt es 
{propiedad : valor}
db.users.find({gender: "M"})
-----CRUD----

CREATE (en donde dice colection hay que poner el nombre de la coleccion)
    db.collection.insertOne(lo que querramos ingresar) : Agrega un nuevo documento a la coleccion seleccionada
    db.collection.inserMany(un array de lo que querramos ingresar) : Agrega múltiples documentos a la coleccion seleccionada (dado un arreglo de argumentos)

READ 
    db.collection.findOne(opcional) : Busca un elemento que cumpla con los criterios de la búsqueda (opcional), devuelve el primer documento que cumpla con dicho criterio.
    db.collection.find(opt) : Devuelve todos los documentos que cumplan con dicho criterio.
    db.colection.find(opt).pretty() : Añadido para hacer más presentables los resultados de un find()*/

[
    {nombre :"a" , edad: 21, coloresFavoritos: ["rojo","azul","amarillo"]},
    {nombre :"b" , edad: 21, coloresFavoritos: ["rojo","amarillo"]},
    {nombre :"c" , edad: 23, coloresFavoritos: ["rojo","verde"]},
    {nombre :"d" , edad: 30, coloresFavoritos: ["rojo","azul"]},
    {nombre :"e" , edad: 18, coloresFavoritos: ["rojo","amarillo","violeta"]},
    {nombre :"f" , edad: 19, coloresFavoritos: ["rojo"]},
    {nombre :"g" , edad: 27, coloresFavoritos: ["rojo","azul"]},
    {nombre :"h" , edad: 33, coloresFavoritos: ["rojo","blanco"]},
    {nombre :"i" , edad: 20, coloresFavoritos: ["rojo","verde"]},
    {nombre :"j" , edad: 25, coloresFavoritos: ["rojo","azul"]}
]

/*FILTROS MÁS AVANZADOS

La sintaxis gral será

db.coll.find({key:{$operator: val}})

$and : Realiza operación AND -> Sintaxis: {$and:[{},{}]}
$or : Realiza operacón OR -> Sintaxis: {or:[{},{}]}
$lt : Coincide con valores que son menores que un valor especificado
$lte : Coincide con valores que son menores o iguales a un valor especificado
$gt : Coincide con valores mayores a un valor especificado
$gte : Coincide con valores mayores o iguales a un valor especificado
$ne : Coincide con valores que no son iguales a un valor especificado
$eq : Selecciona los documentos que son iguales a un valor especificado

ejemplo : db.personas.find({edad: {$gt:21}})

$exist : Selecciona los documentos según la existencia de un campo
$in : Selecciona los documentos especificados en un array. Sintaxis : {key:}{$in:[array of values]}}
$nin : Coincide con ninguno de los valores especificados en un array.
$size : Coincide con el número de elementos especificados.
$all : Coincide con todos los valores definidos dentro de un array.
$elemMatch : Coincide con algúun valor definido dentro del query


-------------------------------------------------------- el 1 quiere decir que si existe, si le pongo 0 es que no existe
db.personas.find($and: [{edad: {$ne:21}}, {edad: ${exist: 1}}])


BÚSQUEDAS AVANZADAS

db.coll.distinct(val) devuelve un array con los distintos valores que toma un determinado campo en los documentos de la coleccion.
db.coll.find({doc.subdoc:value}) Se utiliza para filtrar subdocumentos.
db.coll.fin({name:/^Max$/i}) filtra utilizando expresiones regulares.


PROYECCIONES

    SORT : Sirve para hacer un ordenamiento de la información. El ordenamiento se define con 1 o -1 ascendente o descendente respectivamente
    la sintaxis es : db.collection.find().sort({val_A:1,val_B:-1})
    la razón por la cual podemos agregar múltiples valores de ordenamiento, es en caso de que dos documentos tengan el mismo valor A podamos ordenarlo bajo otro criterio (valorB)
    SKIP : Omite el número de elementos indicados: Podemos usarlo cuando hagamos paginaciones, cuando necesitemos ignorar un valor que sabemos que es inneceario, etc
    su sitaxis es : .skip(offset)
    LIMIT : Limita el número de documentos devueltos. De manera que podamos hacer diferentes niveles de paginación (tu página puede devoler 5 elementos por página , o 100 , tú decides)
    su sintaxis es : .limit(num)





UPDATE
    db.collection.updateOne(query,update,option)
        - query : sirve para filtrar qué elementos actualizar (usa los filtros iguañes a find)
        - update : Apartado para indicar qué actualizar de los documentos que cumplen con el filtro. Update tiene sus propios operadores como :
            - $set 
            - $unset
            - $inc incrementa valor
            - $rename cambiar nombre de propiedad
            - $mul multiplica valores
            - $min
            - $max


            db.personas.updateOne({nombre: "pepe"}, {$set: {edad: 25}}, )
        - option : Opciones a tomar en cuenta para la actualización (como upsert, que inserta el valor en caso de que el documento a actualizar ni siquiera exista)
    db.collection.updateMany()




DELETE
    db.collection.deleteOne({key: value}): elimina solo el primer elemento que cumpla con el criterio, se usa principalmente para encontrar identificadores específicos. Se recomienda no utilizar si somos conscientes de que el valor a buscar no es repetido.
    db.collection.deleteMany({key: value}): Elimina todos los documentos que cumplan con el criterio. se usa cuando sabemos que más de un key va a contar con ese valor y necesitamos una limpieza general
*/