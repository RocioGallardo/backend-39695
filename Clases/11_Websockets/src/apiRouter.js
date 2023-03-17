import { Router } from "express"
import PersonasManager from "./PersonasManager.js"

const personasManager = new PersonasManager


export const apiRouter = Router();


apiRouter.get("./personas", (req, res) => {
    res.json(personasManager.obtenerTodas())
})
