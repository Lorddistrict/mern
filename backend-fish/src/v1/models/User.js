const { Schema, model } = require(`@/lib/mongoose`);

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = model(`User`, userSchema);