const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const PlayerSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message',
  }],
  created_at: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
