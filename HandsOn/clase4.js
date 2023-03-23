// Calculadora positiva con promesas

// Cómo lo hacemos? Se crearán un conjunto de funciones gestionadas por promesas y un entorno ASÍNCRONO  donde podremos ponerlas a prueba
// Definir función suma:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
// En caso de que algún sumando sea 0, rechazar la promesa indicando “Operación innecesaria”.
// En caso de que la suma sea negativa, rechazar la promesa indicando “La calculadora sólo debe devolver valores positivos
// Definir función resta:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
// En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando “Operación inválida
// En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos”
// Definir una función multiplicación:
// Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
// Si el producto es negativo, rechazar la oferta indicando “La calculadora sólo puede devolver valores positivos
// Definir la misma función división utilizada en esta clase.
// Definir una función asíncrona “cálculos”, y realizar pruebas utilizando async/await y try/catch


// Función suma
function suma(a, b) {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
            reject("Operación innecesaria");
        } else {
            const result = a + b;
            if (result < 0) {
                reject("La calculadora sólo debe devolver valores positivos");
            } else {
                resolve(result);
            }
        }
    });
}

// Función resta
function resta(a, b) {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
            reject("Operación inválida");
        } else {
            const result = a - b;
            if (result < 0) {
                reject("La calculadora sólo puede devolver valores positivos");
            } else {
                resolve(result);
            }
        }
    });
}

// Función multiplicación
function multiplicacion(a, b) {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject("La calculadora sólo puede devolver valores positivos");
        } else {
            const result = a * b;
            resolve(result);
        }
    });
}

// Función división
function division(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("No se puede dividir por cero");
        } else {
            const result = a / b;
            resolve(result);
        }
    });
}

// Función asíncrona "cálculos"
async function calculos() {
    try {
        const resultadoSuma = await suma(2, 3);
        console.log("El resultado de la suma es:", resultadoSuma);

        const resultadoResta = await resta(10, 5);
        console.log("El resultado de la resta es:", resultadoResta);

        const resultadoMultiplicacion = await multiplicacion(4, 6);
        console.log("El resultado de la multiplicación es:", resultadoMultiplicacion);

        const resultadoDivision = await division(8, 2);
        console.log("El resultado de la división es:", resultadoDivision);

        const resultadoDivisionCero = await division(5, 0);
        console.log("El resultado de la división es:", resultadoDivisionCero);
    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

// Llamada a la función asíncrona "cálculos"
calculos();