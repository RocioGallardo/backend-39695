import { ManagerMongoose } from '../managersDB/ManagerMongoose.js'

export const messagesManager = new ManagerMongoose('messages', {
    alias: { type: String, required: true },
    message: { type: String, required: true },
})