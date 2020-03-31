const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
  uuid: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  lastName: {
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
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = {
  User,
};
