const Message = require('../../models/Message');

module.exports = {
  remove: async (req, res) => {
    try {
      await Message.remove({ uuid: req.params.messageUID });

      res.status(200).send({ response: 'Message deleted' });
    } catch (e) {
      res.status(500).send({ response: 'Cannot delete message' });
    }
  },
};
