const express = require('express');
const { create, getAllByPlayer, getOneById, update, remove } = require('../controllers/message/MessageController');
const auth = require('../services/auth');

let messageRouter = express.Router();

// Use the verifyToken middleware for all endpoint
messageRouter.use(auth);

// GET
messageRouter.get('/players/:id', auth, getAllByPlayer);
messageRouter.get('/:id', auth, getOneById);

// POST
messageRouter.post('/', auth, create);

// PUT
messageRouter.put('/:id', auth, update);

// DELETE
messageRouter.delete('/', auth, remove);

export default messageRouter;
