export function errorHandler(error, req, res, next) {
    res.status(500).json({ message: error.message })
}

export class ErrorDeAutenticacion extends Error {
    constructor(mensaje = 'error de autenticacion') {
        super(mensaje);
        this.tipo = 'ERROR_DE_AUTENTICACION';
    }
}