import userModel from "../../dao/models/UserModel.js";

export async function userController(req, res, next) {
    try {
        console.log(req.body)
        const { username, password, rol } = req.body
        const exists = await userModel.findOne({ username })
        if (exists) return res.status(422).json({ status: "error", error: "User already exists" })
        const user = {
            username,
            password,
            rol
        }
        await userModel.create(user)
        res.json({ status: "success", message: "User registered" })
    } catch (error) {
        next(error)
    }
}

export async function sessionsController(req, res, next) {
    try {
        const { username, password } = req.body
        if (username === 'adminCoder@coder.com' && password === 'adminCod3r123') {
            req.session['user'] = {
                username: username,
                rol: 'admin'
            }
            return res.json({ status: "success", payload: req.session['user'] })
        }
        const user = await userModel.findOne({ username, password })
        if (!user) return res.status(401).send({ status: "error", error: "Invalid credentials" })
        req.session['user'] = {
            username: user.username,
            rol: user.rol
        }
        res.json({ status: "success", payload: req.session['user']})
    } catch (error) {
        next(error)
    }
}


export async function logoutController(req, res, next) {
    try {
        req.session.destroy(err =>{
            if(!err) res.send('logout ok')
            else res.json({status: 'logout error', body: err})
        })
    } catch (error) {
        next(error)
    }
}
