import passport from 'passport'
import { Strategy } from 'passport-local'
import userModel from "../dao/models/UserModel.js";
import { Strategy as GithubStrategy } from 'passport-github2'
import { githubCallbackUrl, githubClientSecret, githubClienteId } from '../config/auth.js'




passport.use('login', new Strategy(async (username, password, done) => {
    const user = await userModel.findOne({ username })
    if (!user) {
        if (username === 'adminCoder@coder.com' && password === 'adminCod3r123') {
            const adminUser = {
                username: username,
                rol: 'admin'
            }
            return done(null, adminUser)
        } else {
            return done(null, false, { message: 'Nombre de usuario o contraseña incorrectos.' })
        }
    }
    if (password !== user.password) {
        return done(null, false, { message: 'Nombre de usuario o contraseña incorrectos.' })
    }
    delete user.password
    done(null, user)
}))



passport.use('github', new GithubStrategy({
    clientID: "xx",
    clientSecret: "xx",
    callbackURL: "http://localhost:8080/api/sessions/githubcallback",
    scope: [ 'read:user' ]
}, async (accessToken, refreshToken, profile, done) => {
    console.log(profile)
    let user
        user = {
            username: profile.username,
            rol: "user"
        }
        await userModel.create(user)
    done(null, user)
}))





// esto lo tengo que agregar para que funcione passport! copiar y pegar, nada mas.
passport.serializeUser((user, next) => { next(null, user) })
passport.deserializeUser((user, next) => { next(null, user) })

// estos son para cargar en express como middlewares a nivel aplicacion
export const passportInitialize = passport.initialize()
export const passportSession = passport.session()

// estos son para cargar como middlewares antes de los controladores correspondientes
// export const authenticateLocal = 
export const autenticacionUserPass = passport.authenticate('login', { failWithError: true })
export const autenticacionPorGithub = passport.authenticate('github', { scope: [ 'read:user' ] })
export const autenticacionPorGithub_CB = passport.authenticate('github', { failWithError: true })








