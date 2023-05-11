export function autenticacion(req, res, next){
    if(!req.user){ 
        next(new Error("falló la autenticacion"))
    }else{
        next()
    }
}