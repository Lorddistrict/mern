const { Schema } = require('mongoose');

module.exports = new Schema({
  uuid: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  created_at: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});
