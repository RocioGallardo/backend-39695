import { Router } from 'express';
import { loginController, registroController, logoutController } from '../controllers/authController.js';

export const authRouter = Router();
authRouter.post('/register', registroController);
authRouter.post('/login', loginController);
authRouter.post('/logout', logoutController);
