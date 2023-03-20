export function getController(req, res, next){
    req.logger.info("llego una peticion al get/")
    res.send("get ok")
}   

export function postController(req, res, next){
    console.log(req.body)
    console.log(req.file)
    res.send("post ok")
}