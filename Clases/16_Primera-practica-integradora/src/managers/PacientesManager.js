import {ManagerMongoose} from "./ManagerMongoose.js"

export const pacientesManager = new ManagerMongoose("pacientes", {
    dni:{type: Sring, required: true},
    nombre:{type: Sring, required: true},
    apellido:{type: Sring, required: true},
    dni:{type: Number, required: true},
})