import passport from 'passport'
import { Strategy } from 'passport-local';
import { User } from '../entidades/User.js';
import { hashear, validarQueSeanIguales } from '../utils/criptografia.js';
import { userManager } from '../managers/UserManager.js';
import { ErrorDeAutenticacion } from '../entidades/errors/ErrorDeAutenticacion.js';

passport.use('register', new Strategy({ passReqToCallback: true }, async (req, _u, _p, done) => {
    // esto es lo que estaba en el controller de registro
    const { username, password, datosPersonales } = req.body;
    const user = new User({ username, password: hashear(password), ...datosPersonales });
    await userManager.guardar(user);
    done(null, user)
}))

passport.use('login', new Strategy({ passReqToCallback: true }, async (req, _u, _p, done) => {
    // esto es lo que estaba en el controller de login
    const { username, password } = req.body;
    const buscado = await userManager.buscarPorUsername(username);
    if (!buscado)
        return done(new ErrorDeAutenticacion());
    if (!validarQueSeanIguales(password, buscado.password))
        return done(new ErrorDeAutenticacion());
    delete buscado.password
    done(null, buscado)
}))

// esto lo tengo que agregar para que funcione passport! copiar y pegar, nada mas.
passport.serializeUser((user, next) => { next(null, user) })
passport.deserializeUser((user, next) => { next(null, user) })

export const passportInitialize = passport.initialize()
export const passportSession = passport.session()
