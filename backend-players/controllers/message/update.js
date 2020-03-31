const Message = require('../../models/Message');

module.exports = {
  update: async (req, res) => {
    try {
      res.send(await Message.findOneAndUpdate({ uuid: req.params.id }, req.body, { new: true }));
    } catch (e) {
      res.status(400).send({ response: 'Message not found' });
    }
  },
};
