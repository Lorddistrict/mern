const Player = require('../../models/Player');
const { generateEncryptedPassword } = require('../../services/encrypt');

module.exports = {
  create: async (req, res) => {
    const playerFound = await Player.findOne({ email: req.body.email });
    if (playerFound) {
      res.status(400).send({ response: 'Email already taken' });

      return;
    }

    res.status(201).send(await Player.create({
      email: req.params.email,
      password: generateEncryptedPassword(req.params.password),
      role: 'PLAYER',
    }));
  },
};
