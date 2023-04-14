import dotenv from 'dotenv';
dotenv.config();

export const MONGODB_CNX_STR = `mongodb+srv://rociogallardo:${process.env.PASSWORD}@cluster.qbataxf.mongodb.net/coderhouse?retryWrites=true&w=majority`
//export const MONGODB_CNX_STR = "mongodb://localhost/coderhouse"
