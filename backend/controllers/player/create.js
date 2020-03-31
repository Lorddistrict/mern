const mongoose = require('mongoose');
const { PlayerSchema } = require('../../models/Player');
const { generateEncryptedPassword } = require('../../services/passwordEncryptedGenerator');
const { generateToken } = require('../../services/tokenGenerator');

const Player = mongoose.model('Player', PlayerSchema);

module.exports = {
  create: async (req, res) => {
    const playerFound = await Player.findOne({ email: req.body.email });
    if (playerFound) {
      res.status(400).send({ message: 'Email already taken' });

      return;
    }

    res.status(201).send(await Player.create({
      uuid: generateToken(),
      email: req.params.email,
      password: generateEncryptedPassword(req.params.password),
      role: 'PLAYER',
    }));
  },
};
