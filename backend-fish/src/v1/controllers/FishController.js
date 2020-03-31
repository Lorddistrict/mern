const _ = require(`lodash`);
const Fish = require(`v1/models/Fish`);

module.exports = {
  index: async (req, res) => res.send(),
  store: async (req, res) => {
    res.send(await Fish.create({
      ..._.pick(req.body, `title`, `description`, `price`, `quantity`, `image`),
    }));
  },
  update: async (req, res) => {
    res.send(await Fish.create({
      ..._.pick(req.body, `title`, `description`, `price`, `quantity`, `image`),
    }));
  },
};