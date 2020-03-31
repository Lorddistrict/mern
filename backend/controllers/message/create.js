const Message = require('../../models/Message');
const Player = require('../../models/Player');
const jwt = require('jsonwebtoken');

module.exports = {
  create: async (req, res) => {
    const bearer = req.headers.authorization.split(' ')[1];

    const { player } = await jwt.verify(bearer, process.env.JWT_SECRET_KEY);
    if (!player) {
      res.status(401).send({ response: 'Unauthorized' });

      return;
    }

    const message = await Message.create({
      content: req.body.content,
      created_by: player,
    });

    res.status(201).send({
      response: 'Message created',
      message,
    });
  }
};
