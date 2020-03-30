import mongoose from 'mongoose';
import { PlayerSchema } from '../../models/player';
import { verifyToken } from '../../services/verifyJsonWebToken';

const Player = mongoose.model('Player', PlayerSchema);

export const update = (req, res) => {
  verifyToken(req, res);

  Player.findOneAndUpdate({ uuid: req.params.id }, req.body, { new: true }, (error, updatedPlayer) => {
    if (error) {
      res.status(400);

      return res.json({
        status: '400',
        message: 'Player not found'
      });
    } else {
      res.status(200);

      return res.json({
        status: '200',
        message: 'Player updated',
        player: updatedPlayer
      });
    }
  });
};
