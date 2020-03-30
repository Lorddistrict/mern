import { create } from './create';
import { remove } from './delete';
import { login } from './login';
import { getAll, getOneById } from './read';
import { register } from './register';
import { update } from './update';

module.exports = {
  create: create,
  delete: remove,
  getOneById: getOneById,
  getAll: getAll,
  update: update,
  login: login,
  register: register
};
