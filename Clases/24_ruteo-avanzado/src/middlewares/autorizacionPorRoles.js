export function soloRoles(roles) {
    return function (req, res, next) {
        if (roles.includes(req.user.rol)) {
            next()
        } else {
            res['sendPermissionError']('solo para [' + roles.toString() + ']')
        }
    }
}