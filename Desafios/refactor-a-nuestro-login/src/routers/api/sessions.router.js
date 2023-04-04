import { Router } from 'express'
import {postSessionsController,logoutSessionsController} from '../../controllers/api/sessions.controllers.js'
import { autenticacionPorGithub_CB, autenticacionPorGithub, autenticacionUserPass } from '../../middlewares/passport.js'
import { createSession } from '../../middlewares/session.js'

export const sessionsRouter = Router()

// login local

sessionsRouter.post('/', autenticacionUserPass, createSession, postSessionsController)

// login con github
sessionsRouter.get('/github', autenticacionPorGithub)
sessionsRouter.get('/githubcallback', autenticacionPorGithub_CB, createSession, (req, res, next) => { res.redirect('/products') })

// logout
sessionsRouter.get('/logout', logoutSessionsController)

// datos de sesion, para testear!