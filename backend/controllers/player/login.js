import crypto from 'crypto-js';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { PlayerSchema } from '../../models/player';

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
        jwt.sign(
          {
            player: player
          },
          process.env.JWT_SECRET_KEY,
          (error, token) => {
            res.status(200);

            return res.json({
              status: '200',
              message: 'Player has been found',
              player: player,
              token: token
            });
          }
        );
      }
    })
    .catch(error => {
      res.status(500);

      return res.json({
        status: '500',
        message: 'Something went wrong'
      });
    });
};
