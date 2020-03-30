import express from 'express';
import { create, getAll, getOneById } from '../controllers/player/playerController';

let playerRouter = express.Router();

playerRouter.get('/', getAll);
playerRouter.get('/:id', getOneById);

playerRouter.put('/', create);

export default playerRouter;
