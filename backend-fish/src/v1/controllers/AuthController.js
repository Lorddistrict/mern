const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
const User = require(`v1/models/User`);
const appKey = require(`@/lib/app-key`);

module.exports = {
  login: async (req, res) => {
    try {
      const user = await User.findOne({
        email: req.body.email,
      });
      if (!user) {
        throw new Error(`Email or password not valid!`)
      }
      await bcrypt.compare(`${req.body.password}${appKey}`, user.password);
      const token = await jwt.sign({
        id: user._id,
      }, appKey);
      res.send({
        token,
      });
    } catch (e) {
      res.status(401).send(e);
    }
  },
};
