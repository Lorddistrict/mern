const { Player } = require('../../models/Player');

module.exports = {
  update: async (req, res) => {
    try {
      res.send(await Player.findOneAndUpdate({ uuid: req.params.id }, req.body, { new: true }));
    } catch (e) {
      res.status(400).send({ message: 'Player not found' });
    }
  },
};
