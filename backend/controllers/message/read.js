const mongoose =  require('mongoose');
const MessageSchema = require('../../models/message');

const Message = mongoose.model('Message', MessageSchema);

module.exports = {
  getAll: async (req, res) => res.send(await Message.find()),
};
