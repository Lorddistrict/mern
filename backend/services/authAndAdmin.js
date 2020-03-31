const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    res.status(401).send('Unauthorized');

    return;
  }

  try {
    const bearer = auth.split(' ');
    // Get only the player (ignore iat etc...)
    const { player } = jwt.verify(bearer[1]);
    if (player.role !== 'ADMIN') {
      res.status(403).send('Unauthorized');

      return;
    }
    next();
  } catch (e) {
    res.status(401).send('Unauthorized');
  }
};
