const { login } = require('./login');
const { registration } = require('./register');

module.exports = {
  login,
  register: registration
};
