const mongoose = require('mongoose');

const { Schema } = mongoose;
const moleSchema = new Schema({
  moleNumber: {
    type: Number,
    required: true,
  },
  cutTime: {
    type: String,
    required: true,
  },
  respawnTime: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Mole', moleSchema);
