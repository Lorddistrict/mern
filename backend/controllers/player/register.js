import mongoose from 'mongoose';
import { PlayerSchema } from '../../models/player';

const Player = mongoose.model('Player', PlayerSchema);

export const register = (req, res) => {};
