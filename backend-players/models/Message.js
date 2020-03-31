const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const MessageSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
  },
  created_at: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
