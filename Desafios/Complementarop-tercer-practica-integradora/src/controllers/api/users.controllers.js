import { userRepository } from "../../repositories/index.js"
import { userService } from "../../services/user.service.js"

export async function postUserController(req, res, next) {
    try {
        await userService.create(req.body);
        res.sendStatus(201);
    } catch (error) {
        req.logger.error(`message: ${error.message} - ${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
        next(error);
    }
}


export async function getUsersController(req, res, next) {
    try {
        const users = await userRepository.find({})
        res.status(200).json(users)
    } catch (error) {
        req.logger.error(`message: ${error.message} - ${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
        next(error)
    }
    
}

export async function putUsersController(req,res,next){
    try {
        
    } catch (error) {
        
    }
}