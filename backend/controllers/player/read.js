const mongoose = require('mongoose');
const { PlayerSchema } = require('../../models/Player');

const Player = mongoose.model('Player', PlayerSchema);

module.exports = {
  getOneById: async (req, res) => {
    try {
      const player = await Player.findOne({ uuid: req.params.id });

      res.send({
        message: 'Player returned',
        player
      });
    } catch(e) {
      res.status(404).send({ message: 'Player not found' });
    }
  },
  getAll: async (req, res) => res.send(await Player.find()),
};
