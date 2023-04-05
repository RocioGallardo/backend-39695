export function manejoDeErrores(error, req, res, next) {
    switch (error.tipo) {
        case 'ERROR_DE_AUTENTICACION':
            res.status(401)
            break
        case 'ERROR_DE_PERMISOS':
            res.status(403)
            break
        default:
            res.status(500)
    }
    console.log(error)
    res.json({ errorMsg: error.message })
}
