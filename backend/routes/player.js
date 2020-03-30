import express from 'express';
import { create, getAll, getOneById, update } from '../controllers/player/playerController';

let playerRouter = express.Router();

// GET

playerRouter.get('/', getAll);
/** :id => uuid */
playerRouter.get('/:id', getOneById);

// PUT

playerRouter.put('/', create);

// POST

/** :id => uuid */
playerRouter.post('/:id', update);

export default playerRouter;
