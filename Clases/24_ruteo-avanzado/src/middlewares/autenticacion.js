import { decodeToken } from '../utils/tokens.js'

export function autenticacion(req, res, next) {
    const token = req.extractToken()
    const user = decodeToken(token)
    req.user = user
    next()
}