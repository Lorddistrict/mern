import mongoose from 'mongoose';
import { PlayerSchema } from '../../models/player';

const Player = mongoose.model('Player', PlayerSchema);

export const getOneById = (req, res) => {
  Player.findById({}, (error, player) => {
    if (error) {
      res.status(404).send(error);
    }
    res.status(200).json(player);
  });
};

export const getAll = (req, res) => {
  Player.find({}, (error, player) => {
    if (error) {
      res.status(404).send(error);
    }
    res.status(200).json(player);
  });
};
