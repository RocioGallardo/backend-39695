import { Router } from "express"
import UsersManager from "../UsersManager.js"
export const usersManager = new UsersManager()
import fs from "fs/promises"

const usersWebRouter = Router()


/*

NO LO VAMOS A HACER ASÍ
usersWebRouter.get("/", (req, res) => {
    const users = usersManager.obtenerTodos()
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Holi</h1>
        <h2>${JSON.stringify(users)}</h2>
    </body>
</html>
    `)
})

NI ASÍ CON STATIC
usersWebRouter.get("/", (req, res) => {
    const users = usersManager.obtenerTodos()
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="static/css/style.css">
        <title>Document</title>
    </head>
    <body>
        <h1>Holi</h1>
    </body>
</html>
    `)
})

ASI TAMPOCO 
usersWebRouter.get("/",async (req, res) => {
    const users = usersManager.obtenerTodos()
    const html = await fs.readFile('./views/users.html', 'utf-8')
    res.send(html)
})

TAMPOCO
usersWebRouter.get("/",async (req, res) => {
    const users = usersManager.obtenerTodos()
    res.sendFile("users.html", {root : "./views"})
})

*/

usersWebRouter.get("/",async (req, res) => {
    const users = usersManager.obtenerTodos()
    res.render("users", {titulo : "hola soy un titulo",hayUsuarios: users.length > 0, usuarios:users})//le mando un objeto con la variable que quiero que se incruste en el html
})

export default usersWebRouter