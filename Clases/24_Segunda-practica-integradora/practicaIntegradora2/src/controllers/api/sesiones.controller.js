import { DatosLogin } from '../../models/DatosLogin.js'
import { authenticationService } from '../../services/auth.service.js'

export async function postSesiones(req, res, next) {
  try {
    const datosLogin = new DatosLogin(req.body)
    const token = await authenticationService.login(datosLogin)
    res.cookie('authToken', token, { signed: true, httpOnly: true })
    res.status(201).json({ status: 'success' })
  } catch (error) {
    next(error)
  }
}

export async function deleteSesiones(req, res, next) {
  res.clearCookie('authToken', {
    signed: true,
    httpOnly: true
  }) // es necesario incluir las mismas opciones para que se borre la cookie!
  res.sendStatus(204) // codigo 204: todo ok, no hay payload.
}