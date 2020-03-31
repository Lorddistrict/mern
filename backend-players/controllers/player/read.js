const Player = require('../../models/Player');

module.exports = {
  getOneById: async (req, res) => {
    try {
      const player = await Player.findById(req.params.id);
      if (!player) {
        res.status(404).send({ response: 'Player not found' });

        return;
      }

      res.send({
        response: 'Player returned',
        player
      });
    } catch(e) {
      res.status(400).send({ response: 'Bad request' });
    }
  },
  getAll: async (req, res) => res.send(await Player.find()),
};
