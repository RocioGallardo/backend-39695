import express from 'express'
import { infoRouter } from '../routers/router.js'

export const app = express()

app.use('/', infoRouter)