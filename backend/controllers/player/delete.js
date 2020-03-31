const { Player } = require('../../models/Player');

module.exports = {
  remove: async (req, res) => {
    try {
      await Player.remove({ uuid: req.params.playerUID });

      res.status(200).send({ message: 'Player deleted' });
    } catch (e) {
      res.status(500).send({ message: 'Cannot delete player' });
    }
  },
};
