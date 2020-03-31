const Message = require('../../models/Message');

module.exports = {
  getOneById: async (req, res) => {
    try {
      const message = await Message.findById(req.params.id);
      if (!message) {
        res.status(404).send({ response: 'Message not found' });

        return;
      }

      res.send({
        response: 'Message returned',
        message
      });
    } catch(e) {
      res.status(400).send({ response: 'Bad request' });
    }
  },
  getAllByPlayer: async (req, res) => {
    res.send(await Message.find({ created_by: req.params.id }));
  },
};
