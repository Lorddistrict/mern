const _ = require(`lodash`);
const Fish = require(`v1/models/Fish`);

module.exports = {
  index: async (req, res) => res.send(await Fish.find()),
  store: async (req, res) => {
    res.send(await Fish.create({
      ..._.pick(req.body, `title`, `description`, `price`, `quantity`, `image`),
    }));
  },
  update: async (req, res) => {
    res.send(await Fish.update(req.params.id, {
      ..._.pick(req.body, `title`, `description`, `price`, `quantity`, `image`),
    }));
  },
  show: async (req, res) => res.send(await Fish.findById(req.params.id)),
  destroy: async (req, res) => res.send(await Fish.remove({ _id: req.params.id })),
};