import { criptografiador } from '../utils/criptografia.js'

export function autenticacion(req, res, next) {
  const token = req.signedCookies.authToken
  if (!token)
    return next(new Error('error de autenticacion'))

  try {
    const user = criptografiador.decodificarToken(token)
    req.user = user
    next()
  } catch (error) {
    next(error)
  }
}

export function autenticacionWeb(req, res, next) {
  const token = req.signedCookies.authToken
  if (!token)
    return res.redirect('/login')

  try {
    const user = criptografiador.decodificarToken(token)
    req.user = user
    next()
  } catch (error) {
    return res.redirect('/login')
  }
}