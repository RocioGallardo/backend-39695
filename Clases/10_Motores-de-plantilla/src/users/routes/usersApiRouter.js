import { Router } from "express"
import UsersManager from "../UsersManager.js"
export const usersManager = new UsersManager()


const usersApiRouter = Router()


//Api rest, porque es una api que devuelve datos
usersApiRouter.get("/", (req, res) => {
    const users = usersManager.obtenerTodos()
    res.json(users)
})

export default usersApiRouter