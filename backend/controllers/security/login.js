const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
const { Player } = require('../../models/Player');

export const login = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  Player.findOne({
    email: email,
    password: crypto.SHA256(password).toString(crypto.enc.SHA256)
  })
    .then(player => {
      if (!player) {
        res.status(404);

        return res.send({
          message: 'Player cannot be found',
          player: player,
        });
      } else {
        jwt.sign({ player }, process.env.JWT_SECRET_KEY, (error, token) => {
          res.status(200).send({
            message: 'Player has been found',
            player,
            token,
          });
        });
      }
    })
    .catch(() => {
      res.status(500).send({ message: 'Something went wrong' });
    });
};
