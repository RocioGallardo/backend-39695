import { userRepository } from "../../repositories/index.js"
import { userService } from "../../services/user.service.js"

export async function postUserController(req, res, next) {
    try {
        userService.create(req.body)
    } catch (error) {
        next(error)
    }
}


export async function getUsersController(req, res, next) {
    const users = await userRepository.find({})
    res.status(200).json(users)
}