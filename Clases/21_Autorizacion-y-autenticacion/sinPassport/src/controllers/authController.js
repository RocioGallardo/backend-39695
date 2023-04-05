import { hashear, validarQueSeanIguales } from '../utils/criptografia.js';
import { ErrorDeAutenticacion } from '../entidades/errors/ErrorDeAutenticacion.js';
import { User } from '../entidades/User.js';
import { userManager } from '../managers/UserManager.js';

export async function registroController(req, res, next) {
    const { username, password, ...datosPersonales } = req.body;
    const user = new User({ username, password: hashear(password), ...datosPersonales });
    await userManager.guardar(user);
    res.status(201).json(user)
}

export async function loginController(req, res, next) {
    const { username, password } = req.body;
    const buscado = await userManager.buscarPorUsername(username);
    if (!buscado)
        return next(new ErrorDeAutenticacion());
    if (!validarQueSeanIguales(password, buscado.password))
        return next(new ErrorDeAutenticacion());
    delete buscado.password
    req.session.user = buscado
    res.sendStatus(201)
}

export async function logoutController(req, res, next) {
    req.session.destroy(err => {
        res.sendStatus(200)
    })
}
