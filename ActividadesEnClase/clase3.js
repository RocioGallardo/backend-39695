// Utilización ES6-ES9


// Descripción de la actividad. 
// Dados los objetos indicados en la siguiente diapositiva:
// Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), 
// consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
// Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)


const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]

const tiposDeProductos = [];

objetos.forEach(objeto => {
    Object.keys(objeto).forEach(key => {
        if (!tiposDeProductos.includes(key)) {
            tiposDeProductos.push(key);
        }
    });
});

console.log(tiposDeProductos);

tiposDeProductos.forEach(producto => {
    totalPorProducto[producto] = 0;
    objetos.forEach(objeto => {
        if (objeto.hasOwnProperty(producto)) {
            totalPorProducto[producto] += objeto[producto];
        }
    });
});

console.log(totalPorProducto);