import { EmptyFieldError, InvalidIntegerError, InvalidNumberError, InvalidStringError } from "../errors/errors.js"

function validarString(valor){
    if (!valor) throw new EmptyFieldError()
    if (typeof valor !== 'string') throw new InvalidStringError()
    return valor
}
function validarNumero(valor){
    if (typeof valor !== 'number') throw new InvalidNumberError()
    return Number(valor)
}
function validarNumeroEntero(valor){
    validarNumero(valor)
    if (!Number.isInteger(Number(valor))) throw new InvalidIntegerError()
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

