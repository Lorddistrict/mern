import { Schema } from 'mongoose';

export const PlayerSchema = new Schema({
  uuid: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now(),
    required: true
  }
});
