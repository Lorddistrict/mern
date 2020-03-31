const { create } = require('./create');
const { remove } = require('./delete');
const { getAllByPlayer, getOneById } = require('./read');
const { update } = require('./update');

module.exports = {
  create,
  remove,
  getOneById,
  getAllByPlayer,
  update,
};
