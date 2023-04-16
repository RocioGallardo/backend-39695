import { DatosFuturoUsuario } from '../../models/DatosFuturoUsuario.js'
import { usuariosService } from '../../services/usuarios.service.js'
import { criptografiador } from '../../utils/criptografia.js'

export async function postUsuarios(req, res, next) {
  try {
    const datosFuturoUsuario = new DatosFuturoUsuario(req.body)
    const nuevoUsuario = await usuariosService.registrar(datosFuturoUsuario)
    const token = criptografiador.generarToken(nuevoUsuario)
    res.cookie('authToken', token, { expiresIn: '1h', httpOnly: true })
    res.status(201).json(nuevoUsuario)
  } catch (error) {
    next(error)
  }
}