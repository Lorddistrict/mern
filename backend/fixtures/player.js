const faker = require('faker');
const { Player } = require('../models/Player');
const { encrypt } = require('../services/encrypt');
const { generateToken } = require('../services/tokenGenerator');

module.exports = {
  generateFakePlayers: () => {
    faker.locale = 'fr';

    // Generate test player

    let player = new Player;

    player.uuid = generateToken();
    player.email = 'player@mail.com';
    player.password = encrypt();
    player.role = 'USER';
    player.save();

    // Generate test admin

    player = new Player;

    player.uuid = generateToken();
    player.email = 'admin@mail.com';
    player.password = encrypt();
    player.role = 'ADMIN';
    player.save();

    for (let i = 0; i < 2; i++) {
      player = new Player;

      player.uuid = generateToken();
      player.email = faker.internet.email();
      player.password = encrypt();
      player.role = 'USER';
      player.save();
    }
  },
};
