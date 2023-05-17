import { cartRepository, userRepository } from "../../repositories/index.js";
import { hashear } from "../../utils/criptografia.js";

export async function postUserController(req, res, next) {
    try {
        
        const { firstName, lastName, email, age, password, rol } = req.body
        const exists = await userRepository.obtenerPorPropiedad("email", email)
        if (exists.length > 0) return res.status(422).json({ status: "error", error: "User already exists" })
        const idCartId = await cartRepository.crearCarrito()
        const user = {
            firstName,
            lastName,
            email,
            age,
            password: hashear(password),
            cart: idCartId,
            rol
        }
        await userRepository.crear(user)
        req.login(user, error =>{
            if(error){
                next(new Error("falló el login"))
            } else{
                res.status(201).json(req.user)
            }
        })
    } catch (error) {
        next(error)
    }
}


export async function getUsersController(req, res, next) {
    const users = await userRepository.find({})
    res.status(200).json(users)
}