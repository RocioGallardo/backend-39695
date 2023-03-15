import { Router } from "express"
import {personasManager} from "./PersonasManager.js"

const personasManager = new personasManager


export const apiRouter = Router();


apiRouter.get("./personas", (req, res) => {
    res.json(personasManager.obtenerTodas())
})
