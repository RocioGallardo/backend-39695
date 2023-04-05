import { ErrorDePermisos } from '../entidades/errors/ErrorDePermisos.js';

export function soloLogueados(req, res, next) {
    // acá uso el atajo que me provee passport para ver
    // si hay una sesion inicializada por un usuario
    if (!req.isAuthenticated()) {
        return next(new ErrorDePermisos());
    }
    next();
}
