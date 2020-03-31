const { Schema, model } = require(`@/lib/mongoose`);

const fishSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  quantity: Number,
  image: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = model(`Fish`, fishSchema);