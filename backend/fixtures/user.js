const faker = require('faker');
const { User } = require('../models/User');
const { encrypt } = require('../services/encrypt');
const { generateToken } = require('../services/tokenGenerator');

module.exports = {
  generateFakePlayers: () => {
    faker.locale = 'fr';

    // Generate test user

    let user = new User;

    user.uuid = generateToken();
    user.email = 'user@mail.com';
    user.password = encrypt();
    user.role = 'USER';
    user.save();

    for (let i = 0; i < 2; i++) {
      user = new User;

      user.uuid = generateToken();
      user.email = faker.internet.email();
      user.password = encrypt();
      user.role = 'USER';
      user.save();
    }
  },
};
