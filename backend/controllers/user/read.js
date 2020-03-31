const { User } = require('../../models/User');

module.exports = {
  getOneById: async (req, res) => {
    try {
      const user = await User.findOne({ uuid: req.params.id });

      res.send({
        message: 'User returned',
        user
      });
    } catch(e) {
      res.status(404).send({ message: 'User not found' });
    }
  },
  getAll: async (req, res) => res.send(await User.find()),
};
