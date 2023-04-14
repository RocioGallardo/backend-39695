export function createSession(req, res, next) {
    // Creamos la sesión solo si el usuario ha sido autenticado
    if (req.isAuthenticated()) {
        // Almacenamos la información del usuario en la sesión
        req.session.user = req.user;
    }
    next();
}

