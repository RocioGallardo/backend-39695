//INDEXACION

/*
Busqueda lineal
se ve uno por uno

Busqueda binaria
se va dividiendo en dos , (exponencial)




INDICE , para que sirve ?
para buscar por cierto orden
una vez que tengo algo ordenado según algo, ya puedo hacer búsqueda binaria

el problema es que al agregar un nuevo objeto, hay que reordenar todo

y si quiero buscar por dos criterios ?

ordenar todo cada vez que quiero buscar no es una opción
y tener todo duplicado con diferentes indices( según id, según nombre , etc) tampoco

entonces buscamos un punto medio

quiero guardar por mail ? 
const persona = [{
    id: 1,
    nombre: "rocio", 
    email: "hola.rogallardo@gmail.com" }]


el indice es una colección que hace referencia a un objeto, pero solo con el dato que necesito
entonces :
    si quiero busco por id en el array persona
    si quiero busco por el email en "ordenadoXEmail"

voy a tener tantos índices como propiedades por las cual quiero buscar, (no exagerar y hacer 1000 indices)
const ordenadoXEmail = [{
    id: 1,
    email: "hola.rogallardo@gmail.com"
}]



*/