const { User } = require('../../models/User');

module.exports = {
  remove: async (req, res) => {
    try {
      await User.remove({ uuid: req.params.userUID });

      res.status(200).send({ message: 'User deleted' });
    } catch (e) {
      res.status(500).send({ message: 'Cannot delete user' });
    }
  },
};
