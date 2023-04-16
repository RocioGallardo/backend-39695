export function validarEnteroPositivo(valor, nombreCampo) {
  if (valor === null || valor === undefined)
    throw new Error(`el campo ${nombreCampo} es obligatorio`)
  if (typeof valor !== 'number')
    throw new Error(`el campo ${nombreCampo} debe ser un numero`)
  if (!Number.isInteger(Number(valor)))
    throw new Error(`el campo ${nombreCampo} debe un numero entero`)
  if (Number(valor) <= 0)
    throw new Error(`el campo ${nombreCampo} debe ser un numero positivo mayor a cero`)
  return Number(valor)
}

export function validarPalabra(valor, nombreCampo) {
  if (valor === null || valor === undefined)
    throw new Error(`el campo ${nombreCampo} es obligatorio`)
  if (typeof valor !== 'string')
    throw new Error(`el campo ${nombreCampo} debe ser una cadena de caracteres`)
  if (valor === '')
    throw new Error(`el campo ${nombreCampo} no puede estar vacio`)
  return valor
}

//-------------------------------------------------------


export function validarEdad(valor) {
  return validarEnteroPositivo(valor, 'edad')
}

export function validarDni(valor) {
  validarPalabra(valor, 'dni')
  if (isNaN(Number(valor)))
    throw new Error('el campo dni solo debe contener unicamente caracteres numericos')
  if (!Number.isInteger(Number(valor)))
    throw new Error('el campo dni debe ser un numero entero')
  return valor
}

export function validarNombre(valor) {
  return validarPalabra(valor, 'nombre')
}

export function validarApellido(valor) {
  return validarPalabra(valor, 'apellido')
}

export function validarUsername(valor) {
  return validarPalabra(valor, 'username')
}

export function validarPassword(valor) {
  return validarPalabra(valor, 'password')
}