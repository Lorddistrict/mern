const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { PlayerSchema } = require('../../models/Player');

const Player = mongoose.model('Player', PlayerSchema);

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

        return res.json({
          status: '404',
          message: 'Player cannot be found',
          player: player
        });
      } else {
        jwt.sign({ player }, process.env.JWT_SECRET_KEY, token => {
          res.status(200);
          res.json({
            message: 'Player has been found',
            player,
            token,
          });
        });
      }
    })
    .catch(() => {
      res.status(500);
      res.json({
        message: 'Something went wrong',
      });
    });
};
