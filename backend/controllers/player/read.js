import mongoose from 'mongoose';
import { PlayerSchema } from '../../models/player';
import { verifyToken } from '../../services/verifyJsonWebToken';

const Player = mongoose.model('Player', PlayerSchema);

export const getOneById = (req, res) => {
  verifyToken(req, res);

  Player.findOne({ uuid: req.params.id }, (error, player) => {
    if (error) {
      res.status(404);

      return res.json({
        status: '404',
        message: 'Not found'
      });
    }

    res.status(200);

    return res.json({
      status: '200',
      message: 'Player returned',
      player: player
    });
  });
};

export const getAll = (req, res) => {
  verifyToken(req, res);

  Player.find({}, (error, players) => {
    if (error) {
      res.status(404);

      return res.json({
        status: '404',
        message: 'Not found'
      });
    }

    res.status(200);

    return res.json({
      status: '200',
      message: 'Player(s) returned',
      players: players
    });
  });
};
