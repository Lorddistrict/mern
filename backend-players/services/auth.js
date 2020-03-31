const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    res.status(401).send('Unauthorized');

    return;
  }

  try {
    const bearer = auth.split(' ')[1];
    jwt.verify(bearer, process.env.JWT_SECRET_KEY);
    next();
  } catch (e) {
    res.status(401).send('Unauthorized');
  }
};
