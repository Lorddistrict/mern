import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { PlayerSchema } from '../../models/player';
import { generateEncryptedGenerator } from '../../services/passwordEncryptedGenerator';
import { generateToken } from '../../services/tokenGenerator';
import { verifyToken } from '../../services/verifyJsonWebToken';

const Player = mongoose.model('Player', PlayerSchema);

export const create = (req, res) => {
  let player = new Player(req.body);

  verifyToken(req, res);

  Player.findOne({
    email: req.body.email
  })
    .then(playerFound => {
      if (!playerFound) {
        jwt.verify(req.token, process.env.JWT_SECRET_KEY, (error, authData) => {
          if (error || authData.player.role !== 'ADMIN') {
            res.status(403);

            return res.json({
              status: '403',
              message: 'You do not have access'
            });
          } else {
            try {
              console.log(player);
              player.uuid = generateToken();
              player.role = 'PLAYER';
              player.password = generateEncryptedGenerator(player.password);
              player.save();
              res.status(201);

              return res.json({
                status: '201',
                message: 'Player created',
                player: player,
                authData: authData
              });
            } catch (error) {
              res.status(400);

              return res.json({
                status: '400',
                message: 'Cannot create player',
                player: player
              });
            }
          }
        });
      } else {
        res.status(403);

        return res.json({
          status: '403',
          message: 'This mail is already used',
          player: playerFound
        });
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
