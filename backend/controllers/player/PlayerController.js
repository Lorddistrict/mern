const { create } = require('./create');
const { remove } = require('./delete');
const { getAll, getOneById } = require('./read');
const { update } = require('./update');

module.exports = {
  create,
  delete: remove,
  getOneById,
  getAll,
  update,
};
