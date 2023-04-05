import { Router } from 'express';
import { soloLogueados } from '../middlewares/soloLogueados.js';

export const userRouter = Router()

userRouter.get('/info', soloLogueados, (req, res, next) => {
    res.json(req.session['user'])
})