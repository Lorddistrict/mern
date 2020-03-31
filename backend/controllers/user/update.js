const { User } = require('../../models/User');

module.exports = {
  update: async (req, res) => {
    try {
      res.send(await User.findOneAndUpdate({ uuid: req.params.id }, req.body, { new: true }));
    } catch (e) {
      res.status(400).send({ message: 'User not found' });
    }
  },
};
