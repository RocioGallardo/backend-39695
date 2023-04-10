import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/auth.config.js'

export function createToken(data) {
    return jwt.sign(data, JWT_SECRET)
}

export function decodeToken(token) {
    return jwt.verify(token, JWT_SECRET)
}