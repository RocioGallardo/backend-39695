import mongoose from 'mongoose'

const collection = 'users'

const schema = new mongoose.Schema({
    username: String,
    password: String,
    rol: String,
})

const userModel = mongoose.model(collection, schema)

export default userModel