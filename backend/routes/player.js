const express = require('express');
const { create, getAll, getOneById, update } = require('../controllers/player/playerController');
const { verifyToken } = require('../services/verifyJsonWebToken');
const authAndAdmin = require('../services/authAndAdmin');

let playerRouter = express.Router();

// Use the verifyToken middleware for all endpoint
playerRouter.use(verifyToken);

// GET
playerRouter.get('/', getAll);
playerRouter.get('/:id', getOneById);

// POST
playerRouter.post('/', authAndAdmin, create);

// PUT
playerRouter.put('/:id', update);

export default playerRouter;
