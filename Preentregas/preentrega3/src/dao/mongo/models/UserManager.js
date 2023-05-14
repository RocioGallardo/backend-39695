import { ManagerUser } from '../ManagerUser.js'

export const userManagerMongo = new ManagerUser('users', {
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    password: String,
    cart: String,
    rol: String
})
