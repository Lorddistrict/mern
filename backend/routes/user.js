const express = require('express');
const { getAll } = require('../controllers/user/UserController');
const auth = require('../services/auth');

let userRouter = express.Router();

// GET

userRouter.get('/', auth, getAll);

export default userRouter;
