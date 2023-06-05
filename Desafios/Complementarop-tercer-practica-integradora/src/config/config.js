import dotenv from 'dotenv';
dotenv.config();


export const persistenciaEnv = process.env.PERCISTENCE

//mailer

export const emailMailer = process.env.EMAILMAILER
export const passMailer = process.env.PASSMAILER

//logger

export const loggerEnv = process.env.LOGGER
