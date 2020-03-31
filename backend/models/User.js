const { Schema } = require('mongoose');

module.exports = new Schema({
  uuid: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message'
    }
  ],
  created_at: {
    type: Date,
    default: Date.now(),
    required: true
  }
});
