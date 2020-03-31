import mongoose from 'mongoose';
import PlayerSchema from '../../models/Player';

const Player = mongoose.model('Player', PlayerSchema);

export const registration = (req, res) => {};
