import userModel from "../../dao/models/UserModel.js";
import { hashear } from "../../utils/criptografia.js";


export async function postUserController(req, res, next) {
    try {
        const { username, password, rol } = req.body
        const exists = await userModel.findOne({ username })
        if (exists) return res.status(422).json({ status: "error", error: "User already exists" })
        const user = {
            username,
            password: hashear(password),
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
    res.json(users)
}




// export async function userController(req, res, next) {
//     try {
//         console.log(req.body)
//         const { username, password, rol } = req.body
//         const exists = await userModel.findOne({ username })
//         if (exists) return res.status(422).json({ status: "error", error: "User already exists" })
//         const user = {
//             username,
//             password,
//             rol
//         }
//         await userModel.create(user)
//         res.json({ status: "success", message: "User registered" })
//     } catch (error) {
//         next(error)
//     }
// }

// export async function sessionsController(req, res, next) {
//     try {
//         const { username, password } = req.body
//         if (username === 'adminCoder@coder.com' && password === 'adminCod3r123') {
//             req.session['user'] = {
//                 username: username,
//                 rol: 'admin'
//             }
//             return res.json({ status: "success", payload: req.session['user'] })
//         }
//         const user = await userModel.findOne({ username, password })
//         if (!user) return res.status(401).send({ status: "error", error: "Invalid credentials" })
//         req.session['user'] = {
//             username: user.username,
//             rol: user.rol
//         }
//         res.json({ status: "success", payload: req.session['user']})
//     } catch (error) {
//         next(error)
//     }
// }

