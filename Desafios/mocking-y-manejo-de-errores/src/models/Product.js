function validarString(valor){
    if (!valor) throw new Error('El campo no puede estar vacio')
    if (typeof valor !== 'string') throw new Error('·l campo debe ser una cadena de caracteres')
    return valor
}
function validarNumero(valor){
    if (typeof valor !== 'number') throw new Error('Tiene que ingresar un numero')
    return Number(valor)
}
function validarNumeroEntero(valor){
    validarNumero(valor)
    if (!Number.isInteger(Number(valor))) throw new Error('Tiene que ingresar un numero entero')
    return Number(valor)
}


export class Product {
    constructor({ title, description, price, thumbnail, code, stock }) {
        this.title = validarString(title)
        this.description = validarString(description)
        this.price = validarNumero(price)
        this.thumbnail = validarString(thumbnail)
        this.code = validarString(code)
        this.stock = validarNumeroEntero(stock)
    }
}