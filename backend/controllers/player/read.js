import mongoose from 'mongoose';
import { PlayerSchema } from '../../models/player';

const Player = mongoose.model('Player', PlayerSchema);

export const getOneById = (req, res) => {
  console.log(42);
  Player.findById({}, (error, player) => {
    if (error) {
      res.status(404).send(error);
    }
    res.status(200).json(player);
  });
};

export const getAll = (req, res) => {
  Player.find({}, (error, players) => {
    if (error) {
      res.status(404);

      return res.json({
        status: '400',
        message: 'KO'
      });
    }

    res.status(200);

    return res.json({
      status: '200',
      message: 'OK',
      players: players
    });
  });
};
