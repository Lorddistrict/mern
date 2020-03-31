const Player = require('../../models/Player');

module.exports = {
  remove: async (req, res) => {
    try {
      await Player.remove({ _id: req.params.id });

      res.status(200).send({ response: 'Player deleted' });
    } catch (e) {
      res.status(500).send({ response: 'Cannot delete player' });
    }
  },
};
