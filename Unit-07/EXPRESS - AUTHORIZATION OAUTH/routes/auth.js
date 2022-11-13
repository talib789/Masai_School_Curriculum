import express from 'express';
import { loggedInUser, login, register, loginWithGithub } from '../handlers/auth.js';
const authRouter = express.Router();
authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.get('/loggedInUser', loggedInUser)
authRouter.get('/loginWithGithub', loginWithGithub)
export default authRouter;