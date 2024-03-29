import mongoose, { model, Schema } from "mongoose";
import { MongooseManager } from "./mongooseManager.js";


const personaSchema = new Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true, cast: false },
    colFav: {
        type: [{ type: String, required: true, cast: false }],
        validate: {
            validator: v => Array.isArray(v) && v.length > 0,
            message: 'array no puede estar vacio'
        },
    }
}, { versionKey: false })

const personaDb = model("personas", personaSchema)

export const personasManager = new MongooseManager(personaDb)



