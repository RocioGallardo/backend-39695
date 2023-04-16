import { Router } from 'express'
import { pacientesRouter } from './pacientes.router.js'
import { autenticacionWeb } from '../../middlewares/autenticacion.js'

export const webRouter = Router()

webRouter.get('/', (req, res, next) => {
  res.redirect('/pacientes?limit=5&page=1')
})

webRouter.use('/pacientes', autenticacionWeb, pacientesRouter)

webRouter.get('/login', (req, res, next) => {
  res.render('login', { titulo: 'Login' })
})

webRouter.get('/register', (req, res, next) => {
  res.render('register', { titulo: 'Registro' })
})
