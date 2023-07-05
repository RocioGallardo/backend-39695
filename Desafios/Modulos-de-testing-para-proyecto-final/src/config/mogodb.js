import dotenv from 'dotenv';
dotenv.config();

export const MONGODB_CNX_STR = process.env.MONGO_URL_ATLAS
export const MONGODB_CNX_TEST = process.env.MONGO_URL_ATLAS_TEST

