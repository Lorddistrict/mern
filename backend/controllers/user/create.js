const { User } = require('../../models/User');
const { generateToken } = require('../../services/tokenGenerator');

module.exports = {
  create: async (req, res) => {
    const userFound = await User.findOne({ email: req.body.email });
    if (userFound) {
      res.status(400).send({ message: 'Email already taken' });

      return;
    }

    res.status(201).send(await User.create({
      uuid: generateToken(),
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    }));
  },
};
