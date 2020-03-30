import mongoose from 'mongoose';
import { PlayerSchema } from '../../models/player';

const Player = mongoose.model('Player', PlayerSchema);

export const remove = (req, res) => {
  Player.remove(
    {
      uuid: req.params.playerUID
    },
    (error, player) => {
      if (error) {
        res.status(400).send(error);
      }
      res.status(200).json({
        message: 'Player deleted !'
      });
    }
  );
};
