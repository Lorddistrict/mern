const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    res.status(401).send('Unauthorized');

    return;
  }

  try {
    const bearer = auth.split(' ');
    jwt.verify(bearer[1]);
    next();
  } catch (e) {
    res.status(401).send('Unauthorized');
  }
};
