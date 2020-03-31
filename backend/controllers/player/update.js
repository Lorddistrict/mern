const mongoose = require('mongoose');
const { PlayerSchema } = require('../../models/player');

const Player = mongoose.model('Player', PlayerSchema);

module.exports = {
  update: async (req, res) => {
    try {
      res.send(await Player.findOneAndUpdate({ uuid: req.params.id }, req.body, { new: true }));
    } catch (e) {
      res.status(400).send({
        status: '400',
        message: 'Player not found'
      });
    }
  },
};
