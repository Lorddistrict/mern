import express from 'express';
import { create, getAll } from '../controllers/playerController';

let playerRouter = express.Router();

playerRouter.post('/', create);
playerRouter.get('/', getAll);

export default playerRouter;
