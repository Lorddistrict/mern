import express from 'express';
import { login } from '../controllers/security/SecurityController';

let securityRouter = express.Router();

securityRouter.post('/login', login);
//securityRouter.post('/register', registration);

export default securityRouter;
