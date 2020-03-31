const express = require('express');
const { create, getAll, getOneById, update, remove } = require('../controllers/player/PlayerController');
const auth = require('../services/auth');
const authAndAdmin = require('../services/authAndAdmin');

let playerRouter = express.Router();

// Use the verifyToken middleware for all endpoint
playerRouter.use(auth);

// GET
playerRouter.get('/', auth, getAll);
playerRouter.get('/:id', auth, getOneById);

// POST
playerRouter.post('/', authAndAdmin, create);

// PUT
playerRouter.put('/:id', authAndAdmin, update);

// DELETE
playerRouter.delete('/', authAndAdmin, remove);

export default playerRouter;
