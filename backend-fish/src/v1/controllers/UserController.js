const _ = require(`lodash`);
const bcrypt = require(`bcrypt`);
const User = require(`v1/models/User`);
const appKey = require(`@/lib/app-key`);
const saltRounds = process.env.BCRYPT_SALT_ROUNDS || 10;

module.exports = {
  index: async (req, res) => res.send(await User.find()),
  store: async (req, res) => {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      res.status(400).send(`Email already taken`);
      return;
    }
    res.send(await User.create({
      ..._.pick(req.body, `email`, `firstname`, `lastname`),
      password: await bcrypt.hash(`${req.body.password}${appKey}`, saltRounds),
    }));
  },
};
