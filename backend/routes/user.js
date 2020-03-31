const express = require('express');
const { create, getAll, getOneById, update, remove } = require('../controllers/user/UserController');
const auth = require('../services/auth');
const authAndAdmin = require('../services/authAndAdmin');

let userRouter = express.Router();

// Use the verifyToken middleware for all endpoint
userRouter.use(auth);

// GET
userRouter.get('/', auth, getAll);
userRouter.get('/:id', auth, getOneById);

// POST
userRouter.post('/', authAndAdmin, create);

// PUT
userRouter.put('/:id', authAndAdmin, update);

// DELETE
userRouter.delete('/', authAndAdmin, remove);

export default userRouter;
