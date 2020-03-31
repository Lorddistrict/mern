const express = require('express');
const { getAll } = require('../controllers/user/userController');
const { verifyToken } = require('../services/verifyJsonWebToken');

let playerRouter = express.Router();

// GET

playerRouter.get('/', verifyToken, getAll);

export default playerRouter;
