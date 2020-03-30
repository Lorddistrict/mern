import mongoose from 'mongoose';
import { PlayerSchema } from '../../models/player';

const Player = mongoose.model('Player', PlayerSchema);

export const update = (req, res) => {
  Player.findOneAndUpdate(
    {
      uuid: req.params.playerUID
    },
    req.body,
    { new: true },
    (error, player) => {
      if (error) {
        res.status(400);

        return res.json({
          status: '400',
          message: 'Player not found',
          player: player
        });
      } else {
        res.status(200);

        return res.json({
          status: '200',
          message: 'Player updated !',
          player: player
        });
      }
    }
  );
};
