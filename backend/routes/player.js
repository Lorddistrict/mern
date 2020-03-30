import express from 'express';
import { create, getAll } from '../controllers/player/playerController';

let playerRouter = express.Router();

playerRouter.get('/', function (req, res) {
  res.send({
    name: 'MongoDB'
  });
});
playerRouter.post('/', create);
playerRouter.get('/', getAll);

export default playerRouter;
