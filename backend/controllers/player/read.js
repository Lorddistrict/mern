const { Player } = require('../../models/Player');

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
