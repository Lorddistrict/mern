const appKey = require(`@/lib/app-key`);
const jwt = require('jsonwebtoken');

module.exports = {
  authMiddleware (req, res, next) {
    const auth = req.headers.authorization;
    if (!auth) {
      return res.status(401).send(`Unauthorized`);
    }
    try {
      jwt.verify(auth, appKey);
    } catch (e) {
      return res.status(401).send(`Unauthorized`);
    }
    next();
  },
};
