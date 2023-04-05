import { ErrorDePermisos } from '../entidades/errors/ErrorDePermisos.js';

export function soloLogueados(req, res, next) {
    if (!req.session['user']) {
        return next(new ErrorDePermisos());
    }
    next();
}
