const tokenGenerator = require('uuid-token-generator');

module.exports = {
  generateToken: () => {
    let token = new tokenGenerator();

    return token.generate();
  },
};
