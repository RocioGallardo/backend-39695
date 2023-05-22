import { UnauthorizedError } from "../errors/errors.js"

export function autenticacion(req, res, next){
    if(!req.user){ 
        next(new UnauthorizedError())
    }else{
        next()
    }
}