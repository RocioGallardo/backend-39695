export function errorHandler(error, req, res, next) {
    res.status(decideStatusFromErrorType(error))
    res.json({
        status: 'error',
        descripcion: error.message,
    })
}

function decideStatusFromErrorType(error) {
    if (error.message.startsWith('el campo')) {
        return 400
    } else if (error.message.startsWith('error de autenticacion')) {
        return 401
    } else if (error.message.startsWith('jwt expired')) {
        return 401
    } else if (error.message.startsWith('no encontrado')) {
        return 404
    } else {
        return 500
    }
}