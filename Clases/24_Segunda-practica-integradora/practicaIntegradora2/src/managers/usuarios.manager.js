import { ManagerMongoose } from './ManagerMongoose.js'

export const usuariosManager = new ManagerMongoose('usuarios', {
    username: { type: String, required: true, index: true },
    password: { type: String, required: true },
})