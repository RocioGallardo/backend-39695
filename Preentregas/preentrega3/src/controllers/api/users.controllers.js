import userModel from "../../dao/mongo/models/UserModel.js";
import { cartService } from "../../services/cart.service.js";
import { hashear } from "../../utils/criptografia.js";


export async function postUserController(req, res, next) {
    try {
        const { firstName, lastName, email, age, password, rol } = req.body
        const exists = await userModel.findOne({ email })
        const idCartId = await cartService.crearCarrito()
        if (exists) return res.status(422).json({ status: "error", error: "User already exists" })
        const user = {
            firstName,
            lastName,
            email,
            age,
            password: hashear(password),
            cart: idCartId,
            rol
        }
        await userModel.create(user)
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
    const users = await userModel.find({})
    res.status(200).json(users)
}