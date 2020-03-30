import { create } from './create';
import { remove } from './delete';
import { getAll, getOneById } from './read';
import { update } from './update';

module.exports = {
  create: create,
  delete: remove,
  getOneById: getOneById,
  getAll: getAll,
  update: update
};
