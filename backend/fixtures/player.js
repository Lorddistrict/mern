import faker from 'faker';
import mongoose from 'mongoose';
import { PlayerSchema } from '../models/player';
import { generateEncryptedGenerator } from '../services/passwordEncryptedGenerator';
import { generateToken } from '../services/tokenGenerator';

const Player = mongoose.model('Player', PlayerSchema);

export const generateFakePlayers = () => {
  faker.locale = 'fr';

  // Generate test player
  let dummyPlayer = new Player();

  dummyPlayer.uuid = generateToken();
  dummyPlayer.email = 'player@mail.com';
  dummyPlayer.password = generateEncryptedGenerator();
  dummyPlayer.role = 'USER';
  dummyPlayer.save();

  console.log(dummyPlayer.password);

  // Generate test admin
  let dummyAdmin = new Player();

  dummyAdmin.uuid = generateToken();
  dummyAdmin.email = 'admin@mail.com';
  dummyAdmin.password = generateEncryptedGenerator();
  dummyAdmin.role = 'ADMIN';
  dummyAdmin.save();

  for (let i = 0; i < 2; i++) {
    let player = new Player();

    player.uuid = generateToken();
    player.email = faker.internet.email();
    player.password = generateEncryptedGenerator();
    player.role = 'USER';
    player.save();
  }
};
