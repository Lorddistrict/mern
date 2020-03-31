const faker = require('faker');
const mongoose = require('mongoose');
const { PlayerSchema } = require('../models/Player');
const { generateEncryptedGenerator } = require('../services/passwordEncryptedGenerator');
const { generateToken } = require('../services/tokenGenerator');

const Player = mongoose.model('Player', PlayerSchema);

module.exports = {
  generateFakePlayers: () => {
    faker.locale = 'fr';

    // Generate test player

    let player = new Player();

    player.uuid = generateToken();
    player.email = 'player@mail.com';
    player.password = generateEncryptedGenerator();
    player.role = 'USER';
    player.save();

    // Generate test admin

    player = new Player();

    player.uuid = generateToken();
    player.email = 'admin@mail.com';
    player.password = generateEncryptedGenerator();
    player.role = 'ADMIN';
    player.save();

    for (let i = 0; i < 2; i++) {
      player = new Player();

      player.uuid = generateToken();
      player.email = faker.internet.email();
      player.password = generateEncryptedGenerator();
      player.role = 'USER';
      player.save();
    }
  },
};
