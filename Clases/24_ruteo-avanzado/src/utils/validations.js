const letters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const specials = 'áéíóúü'

function isLetter(c) {
    return letters.includes(c) || specials.includes(c)
}

function isNumber(c) {
    return numbers.includes(c)
}

function isLetterOrNumber(c) {
    return isLetter(c) || isNumber(c)
}

export function isAlpha(word) {
    return Array.from(word).every(isLetter)
}

export function isNumeric(word) {
    // forma corta y compleja, con regex
    // return /^[0-9]+$/.test(word)

    // forma mas larga pero entendible, con codigo :)
    return Array.from(word).every(isNumber)
}

export function isAlphaNumeric(word) {
    return Array.from(word).every(isLetterOrNumber)
}